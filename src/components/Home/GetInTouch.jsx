const GetInTouch = () => {
  return (
    <section className="py-16 bg-gray-700">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="space-y-4">

            <p>📧 info@socialwork.org</p>

            <p>📞 +1 555-123-7890</p>

            <p>📍 123 Charity St, City, Country</p>

          </div>

          {/* Contact Form */}

          <form className="bg-white p-6 rounded-xl shadow space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="w-full bg-[#ec6737] text-white py-3 rounded-lg">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default GetInTouch;