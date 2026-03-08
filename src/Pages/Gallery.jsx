import { useState } from "react";
import LargeNavbar from "../Shared/Navs/Desktop/LargeNavbar";
import TopLargeNavbar from "../Shared/Navs/Desktop/TopLargeNavbar";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // 100 images using Unsplash random URLs
const images = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
  "https://images.unsplash.com/photo-1534080564583-bb9354dcef18",
  "https://images.unsplash.com/photo-1517817748491-7ef1df31ae41",
  "https://images.unsplash.com/photo-1483721310020-03333e577078",
  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1496950866446-325aee480710",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
  "https://images.unsplash.com/photo-1475688621402-4257e6d4ab6b",
  "https://images.unsplash.com/photo-1478144592103-25e218a04891",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1516361728383-79f5f41df30f",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
  "https://images.unsplash.com/photo-1493612276216-ee3925520721",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0",
  "https://images.unsplash.com/photo-1520697222868-aa51e94ddcdd",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3",
  "https://images.unsplash.com/photo-1443926818681-a6a75f9b5a1f",
  "https://images.unsplash.com/photo-1519817650390-64a93db51178",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  "https://images.unsplash.com/photo-1470115636492-6d2b56bb0e67",
  "https://images.unsplash.com/photo-1498079022511-d15614cb1c02",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
  "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
  "https://images.unsplash.com/photo-1495616817990-8e7c4a7d7a46",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1517263904808-5dcf7bbebd24",
  "https://images.unsplash.com/photo-1445820136947-9374bd1c798e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1513785077084-84c89f1b4f27",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519791883284-198f571c1a61",
  "https://images.unsplash.com/photo-1518868725625-0d894fdc0a45",
  "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1496950866446-325aee480710",
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
];

  // Show only first 10 initially
  const displayedImages = showAll ? images : images.slice(0, 10);

  // Download function
  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `image-${Date.now()}.jpg`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
    }
  };




    return (
        <div>
            <TopLargeNavbar />
            <LargeNavbar />
            

             <div className="max-w-7xl mx-auto px-3 md:px-4 py-8 md:py-10">

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">
        Gallery
      </h1>

      {/* Masonry Gallery */}
      <div className="columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {displayedImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg md:rounded-xl cursor-pointer break-inside-avoid"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt="gallery"
              loading="lazy"
              className="w-full rounded-lg md:rounded-xl transition duration-500 group-hover:scale-110 active:scale-95"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-[10px] md:text-lg font-semibold">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && images.length > 10 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#ec6737] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            See More...
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl">
            <img
              src={selectedImage}
              alt="preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 cursor-pointer right-3 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
            >
              ×
            </button>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleDownload(selectedImage)}
                className="bg-[#ec6737] cursor-pointer text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
              >
                Download Image
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
    
    
        </div>
    )
}
export default Gallery;``