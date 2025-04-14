"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import AWS from "aws-sdk";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

// AWS configuration
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const s3 = new AWS.S3();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const BUCKET_NAME = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
const FOLDER_NAME = "fileUploads/";
const TABLE_NAME = "quickFileInfo"; // DynamoDB table name

function Upload() {
  const { user } = useUser();
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [progress, setProgress] = useState();
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to manage the message of the alert
  const [fileId, setFileId] = useState(null); // Store fileId to use later in redirect
  const router = useRouter();

  const uploadFile = (file) => {
    const fileId = uuidv4();
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${FOLDER_NAME}${file.name}`,
      Body: file,
      ContentType: file.type,
    };

    const upload = s3.upload(params);

    upload.on("httpUploadProgress", (evt) => {
      const progress = (evt.loaded / evt.total) * 100;
      console.log("Upload is " + progress.toFixed(2) + "% done");
      setProgress(progress);
    });

    upload.send((err, data) => {
      if (err) {
        console.error("Upload failed:", err);
      } else {
        console.log("Upload successful. File URL:", data.Location);
        setUploadedUrl(data.Location);
        setFileId(fileId); // Save the fileId for redirect later

        // Store metadata in DynamoDB
        const metadata = {
          fileId,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          fileUrl: data.Location,
          email: user?.primaryEmailAddress?.emailAddress || "unknown",
          uploadedAt: new Date().toISOString(),
          password: null,
          shorturl: process.env.NEXT_PUBLIC_BASE_URL + fileId,
          fileStored: "AWS",
        };

        const dbParams = {
          TableName: TABLE_NAME,
          Item: metadata,
        };

        dynamoDb.put(dbParams, (err, result) => {
          if (err) {
            console.error("❌ Failed to store file metadata in DynamoDB:", err);
          } else {
            console.log("✅ File metadata stored in DynamoDB");
          }
        });

        // Show custom alert pop-up
        setAlertMessage(`✅ File uploaded! 📎 URL: ${data.Location}`);
        setShowAlert(true);
      }
    });
  };

  const dismissAlert = () => {
    setShowAlert(false); // Hide the alert
    // Redirect to the file-preview page after alert is dismissed
    if (fileId) {
      router.push(`/file-preview/${fileId}`);
    }
  };

  return (
    <div className="h-screen px-4 py-10 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-start text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in">
        🚀 Start Uploading File and Share it !!
      </h2>

      <div className="w-full">
        <UploadForm
          progress={progress}
          uploadBtnClick={(file) => uploadFile(file)}
        />
      </div>

      {/* Display the custom alert at the top of the screen */}
      {showAlert && (
        <div
          role="alert"
          className="fixed top-4 w-[30%] z-50 mx-4 mt-4 rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800"
        >
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="flex-1">
              <strong className="font-medium text-gray-900 dark:text-white">File Upload Successfully!!</strong>
            </div>

            <button
              className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              type="button"
              aria-label="Dismiss alert"
              onClick={dismissAlert} // Dismiss the alert on click
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
