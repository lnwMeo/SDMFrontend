import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone"; // ใช้ useDropzone แทน Dropzone

const ImgDropzone = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // ตรวจสอบว่าจำนวนไฟล์ที่มีอยู่บวกกับไฟล์ใหม่ไม่เกินลิมิต
      if (images.length + acceptedFiles.length > 5) {
        alert("คุณสามารถอัพโหลดได้สูงสุด 5 รูปเท่านั้น");
        return;
      }

      // เพิ่มภาพใหม่ที่อัพโหลด
      const uploadedImages = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages([...images, ...uploadedImages]);
    },
    [images]
  );

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <>
      {images.length < 5 && (
        <div
          {...getRootProps()}
          className="dropzone border-dashed border-2 border-gray-300 p-5 rounded-lg flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <p className="text-white ">ลากไฟล์มาที่นี่ หรือคลิกเพื่ออัพโหลด</p>
        </div>
      )}

      <div className="flex justify-center dark:bg-slate-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2  ">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center p-1  col overflow-hidden relative"
            >
              <img
                src={image.preview}
                alt="preview"
                className="size-32 rounded-md object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block bg-red-500 text-white p-1 rounded-full">
                <button onClick={() => handleRemoveImage(index)} className="">
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length === 5 && (
        <p className="text-red-500">คุณอัพโหลดรูปภาพครบ 5 รูปแล้ว</p>
      )}
    </>
  );
};

export default ImgDropzone;
