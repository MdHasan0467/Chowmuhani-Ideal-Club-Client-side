import { useState, useMemo } from "react";
import useDebounce from "../Hooks/useDebounce";
import SearchBar from "../components/FindBlood/SearchBar";
import FilterBar from "../components/FindBlood/FilterBar";
import DonorCard from "../components/FindBlood/DonorCard";
import DonorTable from "../components/FindBlood/DonorTable";
import bdLocations from "../data/bdLocations";

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

const FindBlood = () => {
  const [search, setSearch] = useState("");
  const [blood, setBlood] = useState([]);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [view, setView] = useState("card");

  const debouncedSearch = useDebounce(search, 400);

  // 🔹 divisions, districts, upazilas
    const divisions = bdLocations?.map((item) => Object?.keys(item))?.flat();

  const districts = division
    ? Object.keys(bdLocations.find((item) => item[division])[division])
    : [];

  const upazilas = division && district
    ? bdLocations.find((item) => item[division])[division][district] || []
    : [];

  // 🔍 search only
  const searchResult = useMemo(() => {
    if (!debouncedSearch) return donorsData;

    return donorsData.filter((d) => {
      const text = debouncedSearch.toLowerCase();
      return (
        d.name.toLowerCase().includes(text) ||
        d.mobile.includes(debouncedSearch)
      );
    });
  }, [debouncedSearch]);

// 🎯 filter only
const filterResult = useMemo(() => {
  return donorsData?.filter((d) => {
    if (blood?.length && !blood?.includes(d?.blood)) return false;
    if (division && d.division !== division) return false;  // division ফিল্টার
    if (district && d.district !== district) return false;  // district ফিল্টার
    if (upazila && d.upazila !== upazila) return false;    // upazila ফিল্টার
    return true;
  });
}, [blood, division, district, upazila]);

// 🧠 final combine search + filter
const finalResult = useMemo(() => {
  return donorsData.filter((d) => {
    if (blood?.length && !blood.includes(d.blood)) return false;
    if (division && d.division !== division) return false;
    if (district && d.district !== district) return false;
    if (upazila && d.upazila !== upazila) return false;

    if (debouncedSearch) {
      const text = debouncedSearch.toLowerCase();
      if (!d.name.toLowerCase().includes(text) && !d.mobile.includes(debouncedSearch)) {
        return false;
      }
    }
    return true;
  });
}, [blood, division, district, upazila, debouncedSearch]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* 🔍 Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        resultCount={searchResult.length}
        view={view}
        setView={setView}
        resetPagination={() => {}}
      />

      {/* 🎯 Filter */}
      <FilterBar
        division={division}
        setDivision={setDivision}
        district={district}
        setDistrict={setDistrict}
        upazila={upazila}
        setUpazila={setUpazila}
        blood={blood}
        setBlood={setBlood}
        divisions={divisions}
        districts={districts}
        upazilas={upazilas}
        resultCount={filterResult.length}
        resetPagination={() => {}}
        search={search}
      />

      {/* 🧾 View */}
      {view === "card" ? (
        <div className="grid md:grid-cols-3 gap-4">
          {finalResult?.map((d) => (
            <DonorCard key={d.id} donor={d} />
          ))}
        </div>
      ) : (
        <DonorTable donors={finalResult} />
      )}
    </div>
  );
};

export default FindBlood;