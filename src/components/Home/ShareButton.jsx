import { useState, useEffect } from "react";

const ShareButton = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const shareData = {
  title: "DurgaPur Ideal Club",
  text: `🔴 দুর্গাপুর আইডিয়াল ক্লাব

🩸 রক্তদান করুন, ❤️ জীবন বাঁচান

📍 আপনার এলাকার রক্তদাতা খুঁজুন

📢 জরুরি রক্তের অনুরোধ করুন

🔗 ${window.location.href}`,
  url: window.location.href,
};

  const handleMainClick = async () => {
    // 👉 Mobile Native Share
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log(err);
      }
    } else {
      // 👉 Desktop → toggle menu
      setOpen(!open);
    }
  };

  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check this project!");

  return (
    <div
      className={`fixed bottom-60 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* 🔥 Social Menu */}
      {open && (
        <>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${text}%20${url}`}
            target="_blank"
            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
          >
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.43 0 .02 5.41.02 12.05c0 2.13.56 4.22 1.63 6.06L0 24l6.08-1.6a11.9 11.9 0 005.98 1.52h.01c6.63 0 12.04-5.41 12.04-12.05 0-3.22-1.25-6.25-3.59-8.39zM12.07 21.9a9.84 9.84 0 01-5.02-1.37l-.36-.21-3.61.95.96-3.52-.24-.37a9.8 9.8 0 01-1.5-5.25c0-5.45 4.43-9.88 9.87-9.88 2.63 0 5.1 1.02 6.97 2.9a9.83 9.83 0 012.9 6.98c0 5.45-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.23-.56-.47-.48-.66-.49h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.07 2.92 1.22 3.12c.15.2 2.1 3.2 5.1 4.48.71.3 1.27.48 1.7.61.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
          >
            F
          </a>

          {/* Copy */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied!");
            }}
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
          >
            ⧉
          </button>
        </>
      )}

      {/* 🚀 Main Button */}
      <button
        onClick={handleMainClick}
        className="relative w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* Share Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 relative"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M8 12a4 4 0 118 0 4 4 0 01-8 0zm4-8v4m0 8v4m8-8h-4M4 12H0"
          />
        </svg>
      </button>
    </div>
  );
};

export default ShareButton;