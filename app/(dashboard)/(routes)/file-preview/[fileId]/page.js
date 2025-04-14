"use client";
import React, { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "next/navigation";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

function FilePreview() {
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { fileId } = useParams();

  useEffect(() => {
    const fetchFileData = async () => {
      if (fileId) {
        const params = {
          TableName: "quickFileInfo",
          Key: {
            fileId,
            fileStored: "AWS",
          },
        };

        try {
          dynamodb.get(params, function (err, data) {
            if (err) {
              setError("Error fetching file data.");
              console.error("Error", err);
            } else {
              if (data.Item) {
                setFileData(data.Item);
              } else {
                setError("File not found.");
              }
            }
            setLoading(false);
          });
        } catch (err) {
          setError("Error fetching file data.");
          setLoading(false);
          console.error("Error fetching file data:", err);
        }
      } else {
        setError("fileId is missing.");
        setLoading(false);
      }
    };

    fetchFileData();
  }, [fileId]);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 flex justify-center items-center text-white">
      {loading ? (
        <p className="text-lg animate-pulse text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-lg">{error}</p>
      ) : (
        fileData && (
          <div className="bg-gray-800 p-6 md:p-10 rounded-xl shadow-2xl max-w-2xl w-full animate-fade-in space-y-6">
            <h3 className="text-2xl font-bold text-white">📄 File Details</h3>

            <div className="space-y-2 text-gray-300 text-base">
              <p>
                <strong>📁 File Name:</strong> {fileData.fileName}
              </p>
              <p>
                <strong>🧾 File Type:</strong> {fileData.fileType}
              </p>
              <p>
                <strong>📦 File Size:</strong> {fileData.fileSize} bytes
              </p>
              <p>
                <strong>👤 Uploaded by:</strong> {fileData.email}
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-200 mb-3">
                🔗 QR Code
              </h4>
              <div className="inline-block m-4 p-4 rounded-lg transition-transform transform hover:scale-105 hover:rotate-1 neon-glow">
                <QRCodeSVG
                  value={fileData.fileUrl}
                  size={180}
                  bgColor="#1f2937" // Tailwind's gray-800
                  fgColor="#ffffff"
                  level="Q"
                />
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-400">
                🔗 Short URL
              </h4>
              <p className="text-purple-400 underline break-all">
                <a href={fileData.fileUrl}>{fileData.fileUrl}</a>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default FilePreview;
