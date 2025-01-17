import React, { useState } from 'react';
import { uploadFile } from '../../services/api'

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onUploadFile = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await uploadFile()
            setUploadResult(response.data.fileUrl);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('File upload failed.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={onUploadFile}>Upload File</button>
            {uploadResult && (
                <div>
                    <p>File uploaded successfully!</p>
                    <a href={uploadResult} target="_blank" rel="noopener noreferrer">View File</a>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
