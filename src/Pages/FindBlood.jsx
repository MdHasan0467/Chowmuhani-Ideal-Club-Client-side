// FindBlood.jsx (Star badges below image)
import { useState, useMemo } from "react";
import bdLocations from "../data/bdLocations";
import FindBloodDonarInfoModal from "../Modals/FindBlood/FindBloodDonarInfoModal";

const donorsData = [
  { id: 1, name: "Rahim Ahmed", division: "Dhaka (ঢাকা)", district: "Dhaka (ঢাকা)", upazila: "Savar (সাভার)", blood: "A+", mobile: "01700000001", image: "https://i.pravatar.cc/150?img=1", email: "rahim1@example.com", totalDonate: 5 },
  { id: 2, name: "Karim Hasan", division: "Chattogram (চট্টগ্রাম)", district: "Cox's Bazar (কক্সবাজার)", upazila: "Cox's Bazar Sadar (কক্সবাজার সদর)", blood: "B+", mobile: "01700000002", image: "https://i.pravatar.cc/150?img=2", email: "karim2@example.com", totalDonate: 3 },
  { id: 3, name: "Sabbir Hossain", division: "Khulna (খুলনা)", district: "Jessore (যশোর)", upazila: "Jessore Sadar (যশোর সদর)", blood: "O+", mobile: "01700000003", image: "https://i.pravatar.cc/150?img=3", email: "sabbir3@example.com", totalDonate: 7 },
  { id: 4, name: "Mahi Mia", division: "Rajshahi (রাজশাহী)", district: "Bogra (বগুড়া)", upazila: "Bogra Sadar (বগুড়া সদর)", blood: "AB+", mobile: "01700000004", image: "https://i.pravatar.cc/150?img=4", email: "mahi4@example.com", totalDonate: 1 },
  { id: 5, name: "Arif Khan", division: "Rangpur (রংপুর)", district: "Rangpur (রংপুর)", upazila: "Rangpur Sadar (রংপুর সদর)", blood: "B-", mobile: "01700000005", image: "https://i.pravatar.cc/150?img=5", email: "arif5@example.com", totalDonate: 6 },
  { id: 6, name: "Tanjin Sultana", division: "Sylhet (সিলেট)", district: "Sylhet (সিলেট)", upazila: "Sylhet Sadar (সিলেট সদর)", blood: "A-", mobile: "01700000006", image: "https://i.pravatar.cc/150?img=6", email: "tanjin6@example.com", totalDonate: 2 },
  { id: 7, name: "Rafiq Uddin", division: "Barisal (বরিশাল)", district: "Barisal (বরিশাল)", upazila: "Barisal Sadar (বরিশাল সদর)", blood: "O-", mobile: "01700000007", image: "https://i.pravatar.cc/150?img=7", email: "rafiq7@example.com", totalDonate: 4 },
  { id: 8, name: "Sadia Akter", division: "Mymensingh (ময়মনসিংহ)", district: "Mymensingh (ময়মনসিংহ)", upazila: "Mymensingh Sadar (ময়মনসিংহ সদর)", blood: "AB-", mobile: "01700000008", image: "https://i.pravatar.cc/150?img=8", email: "sadia8@example.com", totalDonate: 3 },
  { id: 9, name: "Shahin Islam", division: "Dhaka (ঢাকা)", district: "Faridpur (ফরিদপুর)", upazila: "Faridpur Sadar (ফরিদপুর সদর)", blood: "A+", mobile: "01700000009", image: "https://i.pravatar.cc/150?img=9", email: "shahin9@example.com", totalDonate: 2 },
  { id: 10, name: "Nayem Ali", division: "Dhaka (ঢাকা)", district: "Gazipur (গাজীপুর)", upazila: "Gazipur Sadar (গাজীপুর সদর)", blood: "B+", mobile: "01700000010", image: "https://i.pravatar.cc/150?img=10", email: "nayem10@example.com", totalDonate: 5 },
  { id: 11, name: "Rumana Begum", division: "Chattogram (চট্টগ্রাম)", district: "Chattogram (চট্টগ্রাম)", upazila: "Chattogram Sadar (চট্টগ্রাম সদর)", blood: "O+", mobile: "01700000011", image: "https://i.pravatar.cc/150?img=11", email: "rumana11@example.com", totalDonate: 1 },
  { id: 12, name: "Tanvir Hossain", division: "Khulna (খুলনা)", district: "Khulna (খুলনা)", upazila: "Khulna Sadar (খুলনা সদর)", blood: "A-", mobile: "01700000012", image: "https://i.pravatar.cc/150?img=12", email: "tanvir12@example.com", totalDonate: 6 },
  { id: 13, name: "Sufia Khatun", division: "Rajshahi (রাজশাহী)", district: "Rajshahi (রাজশাহী)", upazila: "Rajshahi Sadar (রাজশাহী সদর)", blood: "AB+", mobile: "01700000013", image: "https://i.pravatar.cc/150?img=13", email: "sufia13@example.com", totalDonate: 4 },
  { id: 14, name: "Monir Hossain", division: "Rangpur (রংপুর)", district: "Dinajpur (দিনাজপুর)", upazila: "Dinajpur Sadar (দিনাজপুর সদর)", blood: "O-", mobile: "01700000014", image: "https://i.pravatar.cc/150?img=14", email: "monir14@example.com", totalDonate: 5 },
  { id: 15, name: "Farzana Akter", division: "Sylhet (সিলেট)", district: "Sylhet (সিলেট)", upazila: "Sylhet Sadar (সিলেট সদর)", blood: "B-", mobile: "01700000015", image: "https://i.pravatar.cc/150?img=15", email: "farzana15@example.com", totalDonate: 2 },
  { id: 16, name: "Jahid Alam", division: "Barisal (বরিশাল)", district: "Patuakhali (পটুয়াখালী)", upazila: "Patuakhali Sadar (পটুয়াখালী সদর)", blood: "A+", mobile: "01700000016", image: "https://i.pravatar.cc/150?img=16", email: "jahid16@example.com", totalDonate: 3 },
  { id: 17, name: "Nabila Yasmin", division: "Mymensingh (ময়মনসিংহ)", district: "Netrokona (নেত্রকোনা)", upazila: "Netrokona Sadar (নেত্রকোনা সদর)", blood: "AB-", mobile: "01700000017", image: "https://i.pravatar.cc/150?img=17", email: "nabila17@example.com", totalDonate: 5 },
  { id: 18, name: "Shakil Ahmed", division: "Dhaka (ঢাকা)", district: "Narsingdi (নরসিংদী)", upazila: "Narsingdi Sadar (নরসিংদী সদর)", blood: "O+", mobile: "01700000018", image: "https://i.pravatar.cc/150?img=18", email: "shakil18@example.com", totalDonate: 6 },
  { id: 19, name: "Parvez Hossain", division: "Chattogram (চট্টগ্রাম)", district: "Feni (ফেনী)", upazila: "Feni Sadar (ফেনী সদর)", blood: "B+", mobile: "01700000019", image: "https://i.pravatar.cc/150?img=19", email: "parvez19@example.com", totalDonate: 4 },
  { id: 20, name: "Rina Akter", division: "Khulna (খুলনা)", district: "Satkhira (সাতক্ষীরা)", upazila: "Satkhira Sadar (সাতক্ষীরা সদর)", blood: "AB+", mobile: "01700000020", image: "https://i.pravatar.cc/150?img=20", email: "rina20@example.com", totalDonate: 7 },

  // Noakhali donors (3 জন)
  { id: 21, name: "Salma Akter", division: "Chattogram (চট্টগ্রাম)", district: "Noakhali (নোয়াখালী)", upazila: "Noakhali Sadar (নোয়াখালী সদর)", blood: "A+", mobile: "01700000021", image: "https://i.pravatar.cc/150?img=21", email: "salma21@example.com", totalDonate: 3 },
  { id: 22, name: "Habib Ullah", division: "Chattogram (চট্টগ্রাম)", district: "Noakhali (নোয়াখালী)", upazila: "Companiganj (কোম্পানীগঞ্জ)", blood: "B-", mobile: "01700000022", image: "https://i.pravatar.cc/150?img=22", email: "habib22@example.com", totalDonate: 6 },
  { id: 23, name: "Nusrat Jahan", division: "Chattogram (চট্টগ্রাম)", district: "Noakhali (নোয়াখালী)", upazila: "Begumganj (বেগমগঞ্জ)", blood: "O+", mobile: "01700000023", image: "https://i.pravatar.cc/150?img=23", email: "nusrat23@example.com", totalDonate: 2 },
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const INITIAL_LOAD = 6;

const FindBlood = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");
  const [search, setSearch] = useState("");
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  const divisions = bdLocations?.map((item) => Object?.keys(item))?.flat();
  const districts = division ? Object?.keys(bdLocations?.find((item) => item[division])[division]) : [];
  const upazilas = division && district ? bdLocations?.find((item) => item[division])[division][district] : [];

  const filteredDonors = useMemo(() => {
    return donorsData.filter((donor) => {
      return (
        (division ? donor?.division === division : true) &&
        (district ? donor?.district === district : true) &&
        (upazila ? donor?.upazila === upazila : true) &&
        (blood ? donor?.blood === blood : true) &&
        (search ? donor?.name.toLowerCase()?.includes(search?.toLowerCase()) || donor?.mobile?.includes(search) : true)
      );
    });
  }, [division, district, upazila, blood, search]);

  const donorsToShow = filteredDonors?.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount((prev) => prev + INITIAL_LOAD);
  
  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setVisibleCount(INITIAL_LOAD);
  };

  const renderStars = (totalDonate) => {
    const starCount = Math?.min(totalDonate, 5);
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars?.push(<span key={i} className="text-yellow-400 text-lg">⭐</span>);
    }
    if (totalDonate > 5) {
      stars?.push(<span key="extra" className="text-green-500 text-lg ml-1">🏆</span>);
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* LEFT FILTER */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">রক্তদাতাকে খুঁজুন</h2>

          <select className="select select-bordered w-full" value={division} onChange={(e) => handleFilterChange(setDivision)(e?.target?.value) & setDistrict("") & setUpazila("")}>
            <option value="">নির্বাচন করুন Division</option>
            {divisions?.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>

          <select className="select select-bordered w-full" value={district} onChange={(e) => handleFilterChange(setDistrict)(e?.target?.value) & setUpazila("")} disabled={!division}>
            <option value="">নির্বাচন করুন District</option>
            {districts?.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>

          <select className="select select-bordered w-full" value={upazila} onChange={(e) => handleFilterChange(setUpazila)(e?.target?.value)} disabled={!district}>
            <option value="">নির্বাচন করুন Upazila</option>
            {upazilas?.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>

          <select className="select select-bordered w-full" value={blood} onChange={(e) => handleFilterChange(setBlood)(e?.target?.value)}>
            <option value="">নির্বাচন করুন Blood Group</option>
            {bloodGroups?.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* RIGHT SEARCH + RESULTS */}
        <div className="md:col-span-3 flex flex-col">

          {/* SEARCH BOX */}
          <div className="flex md:justify-end justify-center mb-4">
            <input type="text" placeholder="Donor Name বা Mobile দিয়ে খুঁজুন"
              value={search}
              onChange={(e) => { setSearch(e?.target?.value); setVisibleCount(INITIAL_LOAD); }}
              className="input input-bordered w-72"
            />
          </div>

          {filteredDonors?.length === 0 && (
            <p className="text-gray-500 text-center py-10 bg-white rounded-xl shadow">কোনো রক্তদাতা পাওয়া যায়নি!</p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donorsToShow?.map((donor) => (
              <div key={donor?.id} className="bg-white shadow rounded-xl p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
                
                <img src={donor?.image} alt={donor?.name} className="w-24 h-24 rounded-full object-cover mb-2"/>
                
                {/* Stars below image */}
                <div className="flex items-center mb-2">
                  {renderStars(donor?.totalDonate)}
                </div>

                <h3 className="text-lg font-bold text-center">{donor?.name}</h3>
                <p className="text-gray-500 text-center text-sm">{donor?.division} | {donor?.district} | {donor?.upazila}</p>
                <p className="text-red-500 font-semibold mt-1">{donor?.blood}</p>
                <p className="text-gray-600 text-sm mt-1">📞 {donor?.mobile}</p>

                <div className="flex gap-3 mt-3">
                  <a href={`tel:${donor?.mobile}`} className="btn btn-success btn-sm">Call</a>
                  <button onClick={() => setSelectedDonor(donor)} className="btn btn-primary btn-sm">Info</button>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredDonors?.length && (
            <div className="flex justify-center mt-6">
              <button onClick={handleLoadMore} className="btn btn-outline btn-sm">Load More</button>
            </div>
          )}

        </div>

      </div>

      {selectedDonor && (
        <FindBloodDonarInfoModal donor={selectedDonor} closeModal={() => setSelectedDonor(null)} />
      )}
    </section>
  );
};

export default FindBlood;