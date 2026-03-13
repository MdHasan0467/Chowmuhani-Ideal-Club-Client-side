import { FaHandHoldingHeart } from "react-icons/fa";
import { SiAkamai, SiFampay } from "react-icons/si";

const DonationSupport = () => {
  return (
    <div id="donateTaka">
        <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Support Our Work
          </h2>
          <p className="text-gray-500 mt-2">
            Your small contribution can help us save lives and support the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Bkash */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <SiFampay className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Bkash</h3>
            <p className="text-gray-500 mt-2">Send Donation</p>
            <p className="text-lg font-bold mt-2">01XXXXXXXXX</p>
          </div>

          {/* Nagad */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <SiAkamai className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Nagad</h3>
            <p className="text-gray-500 mt-2">Send Donation</p>
            <p className="text-lg font-bold mt-2">01XXXXXXXXX</p>
          </div>

          {/* Support */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <FaHandHoldingHeart className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Support Us</h3>
            <p className="text-gray-500 mt-2">
              Your donation helps us run social programs and community support.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default DonationSupport;