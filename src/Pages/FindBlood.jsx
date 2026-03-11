import { useState } from "react";
import FindBloodDonarInfoModal from "../Modals/FindBlood/FindBloodDonarInfoModal";

// const donorsData = [
//   {
//     id: 1,
//     name: "Rahim Ahmed",
//     district: "Dhaka",
//     blood: "A+",
//     mobile: "01700000000",
//     email: "rahim@example.com",
//     lastDonate: "2 months ago",
//     totalDonate: 5,
//     image: "https://i.pravatar.cc/150?img=12",
//   },
//   {
//     id: 2,
//     name: "Karim Hasan",
//     district: "Chittagong",
//     blood: "B+",
//     mobile: "01800000000",
//     email: "karim@example.com",
//     lastDonate: "1 month ago",
//     totalDonate: 3,
//     image: "https://i.pravatar.cc/150?img=5",
//   },
// ];

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barisal",
  "Bhola",
  "Bogra",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon"
];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// Generate 50 donors
const donorsData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Donor ${i + 1}`,
  district: districts[i % districts.length],
  blood: bloodGroups[i % bloodGroups.length],
  mobile: `01700000${(100 + i).toString().slice(-3)}`,
  email: `donor${i + 1}@mail.com`,
  lastDonate: `${(i % 6) + 1} months ago`,
  totalDonate: (i % 10) + 1,
  image: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const FindBlood = () => {
  const [district, setDistrict] = useState("");
  const [blood, setBlood] = useState("");
  const [selectedDonor, setSelectedDonor] = useState(null);

  const filteredDonors = donorsData.filter((donor) => {
    return (
      (district ? donor.district === district : true) &&
      (blood ? donor.blood === blood : true)
    );
  });

  return (
    <section className="py-16 bg-gray-50">

      {/* PAGE TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          তুচ্ছ নয় রক্ত দান বাঁচাতে পারে একটি প্রাণ
        </h1>

        <p className="text-gray-600 leading-relaxed">
          আজ নিজের প্রয়োজনে যেমন অন্যকে খুজতেছেন। ঠিক তেমনি অন্যের প্রয়োজনেও আপনাকে যেনো
          খুজলে পাওয়া যায়। মনে রাখবেন, রক্ত আমরা তৈরি করি না। একে অন্যের সাহায্যেই এগিয়ে
          আসে বলেই আমরা রক্তের যোগার করতে পারি।
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4">

        {/* SEARCH SECTION */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h2 className="text-xl font-bold mb-6">Find Blood Donor</h2>

          <select
            value={district}
            className="select select-bordered w-full mb-4"
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districts.map((d, i) => (
              <option key={i}>{d}</option>
            ))}
          </select>

          <select
            value={blood}
            className="select select-bordered w-full"
            onChange={(e) => setBlood(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((b, i) => (
              <option key={i}>{b}</option>
            ))}
          </select>
        </div>

        {/* DONOR RESULT */}
        <div className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredDonors.length === 0 ? (
            <p className="text-center col-span-full">No donor found</p>
          ) : (
            filteredDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white shadow rounded-xl p-5 relative hover:shadow-lg transition"
              >
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-20 h-20 rounded-full mx-auto"
                />

                <h3 className="text-center mt-3 font-bold">
                  {donor.name}
                </h3>

                <p className="text-center text-gray-500">
                  📍 {donor.district}
                </p>

                <p className="text-center text-red-500 font-semibold text-lg">
                  🩸 {donor.blood}
                </p>

                <p className="text-center text-sm">
                  📞 {donor.mobile}
                </p>

                <button
                  onClick={() => setSelectedDonor(donor)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center"
                >
                  i
                </button>
              </div>
            ))
          )}

        </div>
      </div>

      {/* MODAL */}
      {selectedDonor && (
        <FindBloodDonarInfoModal
          donor={selectedDonor}
          closeModal={() => setSelectedDonor(null)}
        />
      )}
    </section>
    )
}
export default FindBlood;