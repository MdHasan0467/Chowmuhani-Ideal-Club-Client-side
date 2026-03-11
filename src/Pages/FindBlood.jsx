// FindBlood.jsx
import React, { useState } from "react";
import bdLocations from "../data/bdLocations"; // তুমি যেই bdLocations JSON দিয়েছেন সেটা import করো
import FindBloodDonarInfoModal from "../Modals/FindBlood/FindBloodDonarInfoModal";

// Sample donors data
const donorsData = [
  { id: 1, name: "Rahim Ahmed", division: "Dhaka (ঢাকা)", district: "Dhaka (ঢাকা)", upazila: "Savar (সাভার)", blood: "A+", mobile: "01700000001", image: "https://i.pravatar.cc/150?img=1", email: "rahim1@example.com", lastDonate: "02/01/2026", totalDonate: 5 },
  { id: 2, name: "Karim Hasan", division: "Chattogram (চট্টগ্রাম)", district: "Cox's Bazar (কক্সবাজার)", upazila: "Cox's Bazar Sadar (কক্সবাজার সদর)", blood: "B+", mobile: "01700000002", image: "https://i.pravatar.cc/150?img=2", email: "karim2@example.com", lastDonate: "05/01/2026", totalDonate: 3 },
  { id: 3, name: "Sabbir Hossain", division: "Khulna (খুলনা)", district: "Jessore (যশোর)", upazila: "Jessore Sadar (যশোর সদর)", blood: "O+", mobile: "01700000003", image: "https://i.pravatar.cc/150?img=3", email: "sabbir3@example.com", lastDonate: "12/12/2025", totalDonate: 4 },
  { id: 4, name: "Mahi Mia", division: "Rajshahi (রাজশাহী)", district: "Bogra (বগুড়া)", upazila: "Bogra Sadar (বগুড়া সদর)", blood: "AB+", mobile: "01700000004", image: "https://i.pravatar.cc/150?img=4", email: "mahi4@example.com", lastDonate: "20/11/2025", totalDonate: 2 },
  { id: 5, name: "Arif Khan", division: "Rangpur (রংপুর)", district: "Rangpur (রংপুর)", upazila: "Rangpur Sadar (রংপুর সদর)", blood: "B-", mobile: "01700000005", image: "https://i.pravatar.cc/150?img=5", email: "arif5@example.com", lastDonate: "15/12/2025", totalDonate: 6 },
  { id: 6, name: "Tanjin Sultana", division: "Sylhet (সিলেট)", district: "Sylhet (সিলেট)", upazila: "Sylhet Sadar (সিলেট সদর)", blood: "A-", mobile: "01700000006", image: "https://i.pravatar.cc/150?img=6", email: "tanjin6@example.com", lastDonate: "01/01/2026", totalDonate: 4 },
  { id: 7, name: "Rafiq Uddin", division: "Barisal (বরিশাল)", district: "Barisal (বরিশাল)", upazila: "Barisal Sadar (বরিশাল সদর)", blood: "O-", mobile: "01700000007", image: "https://i.pravatar.cc/150?img=7", email: "rafiq7@example.com", lastDonate: "25/12/2025", totalDonate: 3 },
  { id: 8, name: "Sadia Akter", division: "Mymensingh (ময়মনসিংহ)", district: "Mymensingh (ময়মনসিংহ)", upazila: "Mymensingh Sadar (ময়মনসিংহ সদর)", blood: "AB-", mobile: "01700000008", image: "https://i.pravatar.cc/150?img=8", email: "sadia8@example.com", lastDonate: "10/12/2025", totalDonate: 5 },
  { id: 9, name: "Shahin Islam", division: "Dhaka (ঢাকা)", district: "Faridpur (ফরিদপুর)", upazila: "Faridpur Sadar (ফরিদপুর সদর)", blood: "A+", mobile: "01700000009", image: "https://i.pravatar.cc/150?img=9", email: "shahin9@example.com", lastDonate: "05/01/2026", totalDonate: 1 },
  { id: 10, name: "Nayem Ali", division: "Dhaka (ঢাকা)", district: "Gazipur (গাজীপুর)", upazila: "Gazipur Sadar (গাজীপুর সদর)", blood: "B+", mobile: "01700000010", image: "https://i.pravatar.cc/150?img=10", email: "nayem10@example.com", lastDonate: "02/01/2026", totalDonate: 2 },
  { id: 11, name: "Rumana Parvin", division: "Dhaka (ঢাকা)", district: "Manikganj (মানিকগঞ্জ)", upazila: "Manikganj Sadar (মানিকগঞ্জ সদর)", blood: "O+", mobile: "01700000011", image: "https://i.pravatar.cc/150?img=11", email: "rumana11@example.com", lastDonate: "03/01/2026", totalDonate: 3 },
  { id: 12, name: "Imran Hossain", division: "Dhaka (ঢাকা)", district: "Tangail (টাঙ্গাইল)", upazila: "Tangail Sadar (টাঙ্গাইল সদর)", blood: "A-", mobile: "01700000012", image: "https://i.pravatar.cc/150?img=12", email: "imran12@example.com", lastDonate: "12/12/2025", totalDonate: 2 },
  { id: 13, name: "Farzana Begum", division: "Dhaka (ঢাকা)", district: "Munshiganj (মুন্সীগঞ্জ)", upazila: "Munshiganj Sadar (মুন্সীগঞ্জ সদর)", blood: "B-", mobile: "01700000013", image: "https://i.pravatar.cc/150?img=13", email: "farzana13@example.com", lastDonate: "22/12/2025", totalDonate: 1 },
  { id: 14, name: "Jahid Mia", division: "Dhaka (ঢাকা)", district: "Narayanganj (নারায়ণগঞ্জ)", upazila: "Sonargaon (সোনারগাঁও)", blood: "AB+", mobile: "01700000014", image: "https://i.pravatar.cc/150?img=14", email: "jahid14@example.com", lastDonate: "01/01/2026", totalDonate: 4 },
  { id: 15, name: "Sakib Rahman", division: "Dhaka (ঢাকা)", district: "Narsingdi (নরসিংদি)", upazila: "Raipura (রায়পুরা)", blood: "AB-", mobile: "01700000015", image: "https://i.pravatar.cc/150?img=15", email: "sakib15@example.com", lastDonate: "02/01/2026", totalDonate: 3 },
  { id: 16, name: "Rifat Khatun", division: "Dhaka (ঢাকা)", district: "Shariatpur (শরীয়তপুর)", upazila: "Naria (নারিয়া)", blood: "O+", mobile: "01700000016", image: "https://i.pravatar.cc/150?img=16", email: "rifat16@example.com", lastDonate: "15/12/2025", totalDonate: 5 },
  { id: 17, name: "Tanvir Ahmed", division: "Dhaka (ঢাকা)", district: "Kishoreganj (কিশোরগঞ্জ)", upazila: "Katiadi (কাটিয়াদি)", blood: "A+", mobile: "01700000017", image: "https://i.pravatar.cc/150?img=17", email: "tanvir17@example.com", lastDonate: "28/12/2025", totalDonate: 3 },
  { id: 18, name: "Salma Akter", division: "Dhaka (ঢাকা)", district: "Gopalganj (গোপালগঞ্জ)", upazila: "Kotalipara (কোটালিপাড়া)", blood: "B+", mobile: "01700000018", image: "https://i.pravatar.cc/150?img=18", email: "salma18@example.com", lastDonate: "02/01/2026", totalDonate: 4 },
  { id: 19, name: "Rashed Chowdhury", division: "Chattogram (চট্টগ্রাম)", district: "Cumilla (কুমিল্লা)", upazila: "Cumilla Sadar (কুমিল্লা সদর)", blood: "O-", mobile: "01700000019", image: "https://i.pravatar.cc/150?img=19", email: "rashed19@example.com", lastDonate: "05/01/2026", totalDonate: 6 },
  { id: 20, name: "Mitu Khatun", division: "Chattogram (চট্টগ্রাম)", district: "Feni (ফেনী)", upazila: "Feni Sadar (ফেনী সদর)", blood: "AB+", mobile: "01700000020", image: "https://i.pravatar.cc/150?img=20", email: "mitu20@example.com", lastDonate: "02/01/2026", totalDonate: 1 },
  // ---- Add similarly till id:100
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const FindBlood = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");
  const [selectedDonor, setSelectedDonor] = useState(null);

  // bdLocations থেকে divisions
  const divisions = bdLocations.map((item) => Object.keys(item)).flat();
  
  // selected division থেকে districts
  const districts = division
    ? Object.keys(
        bdLocations.find((item) => item[division])[division]
      )
    : [];

  // selected division + district থেকে upazilas
  const upazilas =
    division && district
      ? bdLocations.find((item) => item[division])[division][district]
      : [];

  // filtered donors
  const filteredDonors = donorsData.filter((donor) => {
    return (
      (division ? donor.division === division : true) &&
      (district ? donor.district === district : true) &&
      (upazila ? donor.upazila === upazila : true) &&
      (blood ? donor.blood === blood : true)
    );
  });

  console.log('blood',blood)
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* LEFT SIDE SEARCH */}
        <div className="bg-white p-6 rounded-xl shadow h-fit space-y-4">
          <h2 className="text-xl font-bold mb-4">
            রক্তদাতাকে খুঁজুন
          </h2>

          {/* Division */}
          <select
            className="select select-bordered w-full"
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              setDistrict("");
              setUpazila("");
            }}
          >
            <option value="">নির্বাচন করুন Division</option>
            {divisions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* District */}
          <select
            className="select select-bordered w-full"
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setUpazila("");
            }}
            disabled={!division}
          >
            <option value="">নির্বাচন করুন District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            className="select select-bordered w-full"
            value={upazila}
            onChange={(e) => setUpazila(e.target.value)}
            disabled={!district}
          >
            <option value="">নির্বাচন করুন Upazila</option>
            {upazilas.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>

          {/* Blood Group */}
          <select
            className="select select-bordered w-full"
            value={blood}
            onChange={(e) => setBlood(e.target.value)}
          >
            <option value="">নির্বাচন করুন Blood Group</option>
            {bloodGroups.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* RIGHT SIDE RESULTS */}
        <div className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
                <span className="font-semibold text-red-500"> {blood} </span>
                <span>এই গ্রুপের কোনো রক্ত দাতা পাওয়া যায়নি</span>
            </p>
          )}

          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white shadow rounded-xl p-5 relative"
            >
              <img
                src={donor.image}
                alt={donor.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-center mt-3 font-bold">{donor.name}</h3>
              <p className="text-center text-gray-500">{donor.division}</p>
              <p className="text-center text-gray-500">{donor.district}</p>
              <p className="text-center text-gray-500">{donor.upazila}</p>
              <p className="text-center text-red-500 font-semibold">{donor.blood}</p>
              <p className="text-center text-sm">📞 {donor.mobile}</p>

              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={`tel:${donor.mobile}`}
                  className="btn btn-sm btn-success"
                >
                  Call
                </a>
                <button
                  onClick={() => setSelectedDonor(donor)}
                  className="btn btn-sm btn-primary"
                >
                  Info
                </button>
              </div>
            </div>
          ))}
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
  );
};

export default FindBlood;