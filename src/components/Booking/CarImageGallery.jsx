import { useEffect, useState } from "react";
const url = import.meta.env.VITE_API_BASE_URL
export default function CarImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Set the first image as the selected image by default
    const timer = setTimeout(() => {
      // Change the selected image every 3 seconds
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className="space-y-6">
      <div className="w-full aspect-[16/12] border bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
        <img
          src={url+images[selectedImage]}
          className="object-contain w-full h-full"
          alt="Car preview"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-[16/12] w-full max-w-20 border rounded-lg overflow-hidden transition-all ${
              selectedImage === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <img src={url+img} className="object-cover w-full h-full" alt="Thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
}