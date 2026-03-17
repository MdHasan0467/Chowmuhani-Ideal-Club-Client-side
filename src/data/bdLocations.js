const bdLocations = [
{
  "Dhaka (ঢাকা)": {
    "Dhaka (ঢাকা)": ["Dhamrai (ধামরাই)","Dohar (দোহার)","Keraniganj (কেরানীগঞ্জ)","Nawabganj (নবাবগঞ্জ)","Savar (সাভার)"],
    "Faridpur (ফরিদপুর)": ["Alfadanga (আলফাডাঙ্গা)","Bhanga (ভাঙ্গা)","Boalmari (বোয়ালমারী)","Charbhadrasan (চরভদ্রাসন)","Faridpur Sadar (ফরিদপুর সদর)","Madhukhali (মধুখালি)","Nagarkanda (নগরকাণ্ডা)","Sadarpur (সদরপুর)","Saltha (সালথা)"],
    "Gazipur (গাজীপুর)": ["Gazipur Sadar (গাজীপুর সদর)","Kaliakair (কালিয়াকৈর)","Kapasia (কাপাসিয়া)","Kaliganj (কালীগঞ্জ)","Sreepur (শ্রীপুর)"],
    "Gopalganj (গোপালগঞ্জ)": ["Gopalganj Sadar (গোপালগঞ্জ সদর)","Kashiani (কাশিয়ানি)","Kotalipara (কোটালিপাড়া)","Muksudpur (মুকসুদপুর)","Tungipara (টুঙ্গিপাড়া)"],
    "Kishoreganj (কিশোরগঞ্জ)": ["Austagram (অস্টগ্রাম)","Bajitpur (বাজিতপুর)","Bhairab (ভাইরব)","Hossainpur (হোসেনপুর)","Itna (ইটনা)","Karimganj (করিমগঞ্জ)","Katiadi (কাটিয়াদি)","Kishoreganj Sadar (কিশোরগঞ্জ সদর)","Kuliarchar (কুলিয়াছড়)","Mithamoin (মিঠামইন)","Nikli (নিকলী)","Pakundia (পাকুন্দিয়া)","Tarail (তারাইল)"],
    "Madaripur (মাদারিপুর)": ["Kalkini (কালকিনি)","Madaripur Sadar (মাদারিপুর সদর)","Rajoir (রজৈর)","Shibchar (শিবচর)"],
    "Manikganj (মানিকগঞ্জ)": ["Daulatpur (দৌলতপুর)","Ghior (ঘিওর)","Harirampur (হরিরামপুর)","Manikganj Sadar (মানিকগঞ্জ সদর)","Saturia (সাতুরিয়া)","Shivalaya (শিবালয়)","Singair (সিংগাইর)"],
    "Munshiganj (মুন্সীগঞ্জ)": ["Gazaria (গাজারিয়া)","Lohajang (লোহাজং)","Munshiganj Sadar (মুন্সীগঞ্জ সদর)","Sirajdikhan (সিরাজদিখান)","Sreenagar (শ্রীনগর)","Tongibari (টঙ্গীবাড়া)"],
    "Narayanganj (নারায়ণগঞ্জ)": ["Araihazar (আড়াইহাজার)","Bandar (বন্দর)","Narayanganj Sadar (নারায়ণগঞ্জ সদর)","Rupganj (রূপগঞ্জ)","Sonargaon (সোনারগাঁও)"],
    "Narsingdi (নরসিংদি)": ["Belabo (বেলাবো)","Monohardi (মনোহরদী)","Narsingdi Sadar (নরসিংদি সদর)","Palash (পলাশ)","Raipura (রায়পুরা)","Shibpur (শিবপুর)"],
    "Rajbari (রাজবাড়ী)": ["Baliakandi (বালিয়াকান্দি)","Goalanda (গোয়ালন্দা)","Pangsha (পাংশা)","Rajbari Sadar (রাজবাড়ী সদর)","Kalukhali (কালুখালি)"],
    "Shariatpur (শরীয়তপুর)": ["Bhedarganj (ভেদরগঞ্জ)","Damudya (ডামুডিয়া)","Gosairhat (গোসাইরহাট)","Naria (নারিয়া)","Shariatpur Sadar (শরীয়তপুর সদর)","Zajira (জাজিরা)"],
    "Tangail (টাঙ্গাইল)": ["Basail (বাসাইল)","Bhuapur (ভুয়াপুর)","Delduar (দেলদুয়ার)","Dhanbari (ধানবাড়ী)","Ghatail (ঘাটাইল)","Gopalpur (গোপালপুর)","Kalihati (কালিহাতি)","Madhupur (মধুপুর)","Mirzapur (মির্জাপুর)","Nagarpur (নগরপুর)","Sakhipur (সখিপুর)","Tangail Sadar (টাঙ্গাইল সদর)"]
  },
  "Chattogram (চট্টগ্রাম)": {
    "Noakhali (নোয়াখালী)": ["Noakhali Sadar (নোয়াখালী সদর)", "Begumganj (বেগমগঞ্জ)", "Chatkhil (চাটখিল)", "Companiganj (কোম্পানীগঞ্জ)", "Hatiya (হাতিয়া)", "Senbagh (সেনবাগ)", "Subarnachar (সুবর্ণচর)"],
    "Bandarban (বান্দরবান)": ["Ali Kadam (আলী কাদম)", "Bandarban Sadar (বান্দরবান সদর)", "Lama (লামা)", "Naikhongchhari (নাইক্ষঙচরী)", "Rowangchhari (রোয়াংছড়ি)", "Ruma (রুমা)", "Thanchi (থানচি)"],
    "Brahmanbaria (ব্রাহ্মণবাড়িয়া)": ["Akhaura (আখাউড়া)", "Ashuganj (আশুগঞ্জ)", "Bancharampur (বাঞ্চরামপুর)", "Bijoynagar (বিজয়নগর)", "Brahmanbaria Sadar (ব্রাহ্মণবাড়িয়া সদর)", "Kasba (কসবা)", "Nabinagar (নবীনগর)", "Nasirnagar (নাসিরনগর)", "Sarail (সারাইলে)"],
    "Chandpur (চাঁদপুর)": ["Chandpur Sadar (চাঁদপুর সদর)", "Faridganj (ফরিদগঞ্জ)", "Haimchar (হাইমচর)", "Haziganj (হাজীগঞ্জ)", "Kachua (কচুআ)", "Matlab Dakshin (মাতলব দক্ষিণ)", "Matlab Uttar (মাতলব উত্তর)", "Shahrasti (শাহরাস্তি)"],
    "Chattogram (চট্টগ্রাম)": ["Anwara (আনোয়ারা)", "Banshkhali (বান্সখালী)", "Boalkhali (বোয়ালখালী)", "Chandanaish (চান্দনাইশ)", "Fatikchhari (ফটিকছড়ি)", "Hathazari (হাটহাজারি)", "Lohagara (লোহাগাড়া)", "Mirsharai (মিরসরাই)", "Patiya (পটিয়া)", "Rangunia (রাঙ্গুনিয়া)", "Raozan (রাউজান)", "Sandwip (সন্দ্বীপ)", "Satkania (সাতকানিয়া)", "Sitakunda (সীতাকুন্ড)"],
    "Cox's Bazar (কক্সবাজার)": ["Chakaria (চকরিয়া)", "Cox's Bazar Sadar (কক্সবাজার সদর)", "Kutubdia (কুতুবদিয়া)", "Maheshkhali (মহেশখালী)", "Pekua (পেকুয়া)", "Ramu (রামু)", "Teknaf (টেকনাফ)", "Ukhia (উখিয়া)"],
    "Cumilla (কুমিল্লা)": ["Barura (বারুরা)", "Brahmanpara (ব্রাহ্মণপাড়া)", "Burichang (বুড়িচং)", "Chandina (চান্দিনা)", "Chauddagram (চৌদ্দগ্রাম)", "Daudkandi (দাউদকান্দি)", "Debidwar (দেবীদ্বার)", "Homna (হোমনা)", "Laksam (লাকসাম)", "Meghna (মেঘনা)", "Muradnagar (মুরাদনগর)", "Nangalkot (নাঙ্গলকোট)", "Cumilla Sadar (কুমিল্লা সদর)", "Titas (তিতাস)", "Monoharganj (মনোহরগঞ্জ)"],
    "Feni (ফেনী)": ["Chhagalnaiya (ছাগলনাইয়া)", "Daganbhuiyan (দাগনভূইয়া)", "Feni Sadar (ফেনী সদর)", "Parshuram (পরশুরাম)", "Sonagazi (সোনাগাজী)", "Fulgazi (ফুলগাজী)"],
    "Lakshmipur (লক্ষ্মীপুর)": ["Lakshmipur Sadar (লক্ষ্মীপুর সদর)", "Raipur (রায়পুর)", "Ramganj (রামগঞ্জ)", "Ramgati (রামগতি)", "Kamalnagar (কামালনগর)"],
    "Rangamati (রাঙামাটি)": ["Rangamati Sadar (রাঙামাটি সদর)", "Kaptai (কাপ্তাই)", "Barkal (বরকল)", "Juraichhari (জুরাছড়ি)", "Rajasthali (রাজস্থলী)", "Baghaichhari (বাঘাইছড়ি)", "Belaichhari (বেলাইছড়ি)", "Kawkhali (কাওখালি)", "Langadu (লংগদু)", "Naniarchar (নানিয়ারচর)"],
    "Khagrachhari (খাগড়াছড়ি)": ["Khagrachhari Sadar (খাগড়াছড়ি সদর)", "Dighinala (দিঘীনালা)", "Lakshmichhari (লক্ষ্মীছড়ি)", "Mahalchhari (মাহালছড়ি)", "Manikchhari (মানিকছড়ি)", "Matiranga (মাটিরাঙ্গা)", "Panchhari (পাঞ্চরী)", "Ramgarh (রামগড়)", "Guimara (গুইমারা)"]
  },
    "Khulna (খুলনা)": {
    "Bagerhat (বাগেরহাট)": ["Bagerhat Sadar (বাগেরহাট সদর)","Chitalmari (চিতলমাড়ি)","Fakirhat (ফকিরহাট)","Kachua (কাঁচুয়া)","Mollahat (মোল্লাহাট)","Mongla (মঙ্গল)","Morrelganj (মরেলগঞ্জ)","Rampal (রামপাল)","Sarankhola (সরানখোলা)"],
    "Chuadanga (চুয়াডাঙ্গা)": ["Alamdanga (আলমডাঙ্গা)","Chuadanga Sadar (চুয়াডাঙ্গা সদর)","Damurhuda (দামুরহুদা)","Jibannagar (জীবননগর)"],
    "Jessore (যশোর)": ["Abhaynagar (অভয়নগর)","Bagherpara (বাঘেরপাড়া)","Chaugachha (চৌগাছা)","Jessore Sadar (যশোর সদর)","Jhikargacha (ঝিকরগাছা)","Keshabpur (কেশবপুর)","Manirampur (মনিরামপুর)","Sharsha (শার্শা)"],
    "Jhenaidah (ঝিনাইদাহ)": ["Harinakunda (হারিণাকুন্ডা)","Jhenaidah Sadar (ঝিনাইদাহ সদর)","Kaliganj (কালীগঞ্জ)","Kotchandpur (কচুন্দপুর)","Maheshpur (মহেশপুর)","Shailkupa (শৈলকূপা)"],
    "Khulna (খুলনা)": ["Batiaghata (বাতিয়াঘাটা)","Dacope (ডাকোপ)","Dighalia (দিঘলিয়া)","Dumuria (ডুমুরিয়া)","Koyra (কয়রা)","Paikgacha (পাইকগাছা)","Phultala (ফুলতলা)","Rupsa (রুপসা)","Terokhada (তেরক hodা)"],
    "Kushtia (কুষ্টিয়া)": ["Bheramara (ভেড়ামারা)","Daulatpur (দৌলতপুর)","Khoksa (খোকসা)","Kumarkhali (কুমারখালি)","Kushtia Sadar (কুষ্টিয়া সদর)","Mirpur (মিরপুর)"],
    "Magura (মাগুরা)": ["Magura Sadar (মাগুরা সদর)","Mohammadpur (মোহাম্মদপুর)","Shalikha (শালিখা)","Sreepur (শ্রীপুর)"],
    "Narail (নারায়ণগঞ্জ)": ["Kalia (কালিয়া)","Lohagara (লোহাগাড়া)","Narail Sadar (নারাইল সদর)"],
    "Satkhira (সাতক্ষীরা)": ["Assasuni (আসাসুনি)","Debhata (দেভাটা)","Kalaroa (কলারোয়া)","Kaliganj (কালীগঞ্জ)","Satkhira Sadar (সাতক্ষীরা সদর)","Shyamnagar (শ্যামনগর)","Tala (তালা)"]
  },
  "Rajshahi (রাজশাহী)": {
    "Bogra (বগুড়া)": ["Adamdighi (আদমদিঘী)","Bogra Sadar (বগুড়া সদর)","Dhunat (ধুনাট)","Dupchanchia (দুপচাঁচিয়া)","Gabtali (গাবতলী)","Kahaloo (কাহালু)","Shajahanpur (শাহজাহানপুর)","Sariakandi (সারিয়াকান্দি)","Shibganj (শিবগঞ্জ)","Sherpur (শেরপুর)"],
    "Joypurhat (জয়পুরহাট)": ["Akkelpur (আক্কেলপুর)","Joypurhat Sadar (জয়পুরহাট সদর)","Kalai (কলাই)","Khetlal (খেতলাল)","Panchbibi (পাঁচবিবি)"],
    "Naogaon (নওগাঁ)": ["Badalgachi (বাদলগাছি)","Dhamoirhat (ধামইরഹাট)","Mahadebpur (মহাদেবপুর)","Naogaon Sadar (নওগাঁ সদর)","Niamatpur (নিয়ামতপুর)","Patnitala (পাটনিতলা)","Porsha (পোরশা)","Raninagar (রাণীনগর)","Sapahar (সাপাহার)"],
    "Natore (নাটোর)": ["Bagatipara (বাগাতিপাড়া)","Baraigram (বারাইগ্রাম)","Gurudaspur (গুরুদাসপুর)","Natore Sadar (নাটোর সদর)","Singra (সিংড়া)"],
    "Pabna (পাবনা)": ["Atgharia (আটঘরীয়া)","Bera (বেড়া)","Chatmohar (চাটমোহর)","Faridpur (ফরিদপুর)","Ishwardi (ঈশ্বরদী)","Pabna Sadar (পাবনা সদর)","Santhia (সাঁথিয়া)","Sujanagar (সুজানগর)"],
    "Rajshahi (রাজশাহী)": ["Bagha (বাঘা)","Bagmara (বাগমারা)","Charghat (চরঘাট)","Durgapur (দুর্গাপুর)","Godagari (গোদাগাড়ী)","Mohanpur (মোহনপুর)","Paba (পবা)","Puthia (পুঠিয়া)","Tanore (টানোরে)"]
  },
  "Rangpur (রংপুর)": {
    "Dinajpur (দিনাজপুর)": ["Birampur (বীরমপুর)","Birganj (বীরগঞ্জ)","Bochaganj (বছাগঞ্জ)","Chirirbandar (চিরিরবন্দর)","Gaffargaon (গফরগাঁও)"], 
    "Gaibandha (গাইবান্ধা)": ["Palashbari (পলাশবাড়ী)","Sadullapur (সাদুল্লাপুর)","Sadar (সদর)"], 
    "Kurigram (কুড়িগ্রাম)": ["Bhurungamari (ভুরুঙ্গামারি)","Phulbari (ফুলবাড়ী)","Nageshwari (নাগেশ্বরী)","Ulipur (উলিপুর)","Rajarhat (রাজারহাট)"], 
    "Lalmonirhat (লালমনিরহাট)": ["Aditmari (আদিতমারী)","Hatibandha (হাতীবান্ধা)","Kaliganj (কালীগঞ্জ)","Lalmonirhat Sadar (লালমনিরহাট সদর)"], 
    "Nilphamari (নীলফামারী)": ["Dimla (দীমলা)","Domar (ডোমার)","Jaldhaka (জলঢাকা)","Kishoreganj (কিশোরগঞ্জ)","Nilphamari Sadar (নীলফামারী সদর)"], 
    "Panchagarh (পঞ্চগড়)": ["Boda (বোদা)","Debiganj (দেবীগঞ্জ)","Panchagarh Sadar (পঞ্চগড় সদর)","Tahirpur (তাহিরপুর)"], 
    "Rangpur (রংপুর)": ["Badarganj (বদরগঞ্জ)","Gangachara (গাংছড়া)","Kaunia (কাউনিয়া)","Mithapukur (মিঠাপুকুর)","Rangpur Sadar (রংপুর সদর)"], 
    "Thakurgaon (ঠাকুরগাঁও)": ["Baliadangi (বালিয়াডাঙ্গী)","Haripur (হরিপুর)","Ranishankar (রনিশঙ্কর)","Thakurgaon Sadar (ঠাকুরগাঁও সদর)","Pirganj (পীরগঞ্জ)"]
  },
    "Sylhet (সিলেট)": {
    "Habiganj (হবিগঞ্জ)": ["Ajmiriganj (আজমিরিগঞ্জ)","Baniachong (বানিয়াচং)","Bahubal (বাহুবল)","Chunarughat (চুনারুঘাট)","Habiganj Sadar (হবিগঞ্জ সদর)","Lakhai (লাখাই)","Madhabpur (মাধবপুর)"],
    "Moulvibazar (মৌলভীবাজার)": ["Barlekha (বড়লেখা)","Kamalganj (কামালগঞ্জ)","Kulaura (কুলাউড়া)","Moulvibazar Sadar (মৌলভীবাজার সদর)","Rajnagar (রাজনগর)","Sreemangal (শ্রীমঙ্গল)"],
    "Sunamganj (সুনামগঞ্জ)": ["Bishwamvarpur (বিশ্বম্ভরপুর)","Chhatak (ছাতক)","Dakshin Sunamganj (দক্ষিণ সুনামগঞ্জ)","Derai (দিরাই)","Dharmapasha (ধরমপাশা)","Jagannathpur (জগন্নাথপুর)","Sulla (সুল্লা)","Sunamganj Sadar (সুনামগঞ্জ সদর)","Tahirpur (তাহিরপুর)"],
    "Sylhet (সিলেট)": ["Balaganj (বালাগঞ্জ)","Beanibazar (বাঘাইছড়ি)","Bishwanath (বিষ্ণু관াঠ)","Companiganj (কোম্পানীগঞ্জ)","Dakshi..."]
  },
  "Barisal (বরিশাল)": {
    "Barisal (বরিশাল)": ["Agailjhara (আগাইলঝারা)","Babuganj (বাবুগঞ্জ)","Bakerganj (বাকেরগঞ্জ)","Banaripara (বানারিপাড়া)","Gournadi (গৌরনদী)","Hizla (হিজলা)","Mehendiganj (মেহেন্দিগঞ্জ)","Muladi (মূলাদি)","Barisal Sadar (বরিশাল সদর)"],
    "Bhola (ভোলা)": ["Bhola Sadar (ভোলা সদর)","Borhanuddin (বরহানউদ্দিন)","Char Fasson (চারফাসন)","Daulatkhan (দৌলতখান)","Lalmohan (লালমোহন)"],
    "Jhalokathi (ঝালকাঠি)": ["Jhalokathi Sadar (ঝালকাঠি সদর)","Kathalia (কাঠালিয়া)","Nalchity (নলছিটি)"],
    "Patuakhali (পটুয়াখালী)": ["Bauphal (বাউফল)","Dashmina (দাশমিনা)","Galachipa (গলাচিপা)","Kalapara (কালাপারা)","Patuakhali Sadar (পটুয়াখালী সদর)","Rangabali (রাঙ্গাবালি)"],
    "Pirojpur (পিরোজপুর)": ["Bhandaria (ভাণ্ডারিয়া)","Kawkhali (কাঁউখালী)","Nesarabad (নেসারাবাদ)","Pirojpur Sadar (পিরোজপুর সদর)","Zianagar (জিয়ানগর)"]
  },
  "Mymensingh (ময়মনসিংহ)": {
    "Jamalpur (জামালপুর)": ["Baksiganj (বাকসিগঞ্জ)","Dewanganj (দেওয়ানগঞ্জ)","Islampur (ইসলামপুর)","Jamalpur Sadar (জামালপুর সদর)","Madarganj (মদরগঞ্জ)"],
    "Mymensingh (ময়মনসিংহ)": ["Bhaluka (ভালুকা)","Dhobaura (ধোবাউড়া)","Fulbaria (ফুলবাড়ীয়া)","Gaffargaon (গফরগাঁও)","Haluaghat (হালুয়াঘাট)","Ishwarganj (ঈশ্বরগঞ্জ)","Phulpur (ফুলপুর)","Trishal (ত্রিশাল)"]
  }
}]

export default bdLocations;