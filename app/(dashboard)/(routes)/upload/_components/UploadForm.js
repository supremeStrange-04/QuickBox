"use client";
import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

function UploadForm({ uploadBtnClick, progress }) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 10000000) {
      console.log("file is greater than 10MB");
      setErrorMsg("Max File Upload Size is 10MB");
      return;
    }
    setFile(file);
    setErrorMsg(null);
  };

  return (
    <div className="text-center m-8 md:m-14">
      <div className="flex items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-purple-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => {
              onFileSelect(event.target.files[0]);
            }}
          />
        </label>
      </div>
      {errorMsg ? <AlertMessage msg={errorMsg} /> : null}
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          onClick={() => uploadBtnClick(file)}
          disabled={!file}
          className={`px-6 mt-8 py-2 rounded-lg font-semibold transition-all duration-300 animate-fade-in-up
    ${
      file
        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-500/50 transform hover:scale-105"
        : "bg-gray-500 text-gray-300 cursor-not-allowed"
    }`}
        >
          🚀 Upload
        </button>
      )}
    </div>
  );
}

export default UploadForm;
