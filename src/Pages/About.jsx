import LogoBanner from '../assets/logoBanner.jpg'
import Footer from '../Shared/Footer/Footer';
import LargeNavbar from '../Shared/Navs/Desktop/LargeNavbar';
import TopLargeNavbar from '../Shared/Navs/Desktop/TopLargeNavbar';

const About = () => {

    return (
        <div>
            <TopLargeNavbar />
            <LargeNavbar />

            {/* Tittle */}
            <div className="font-serif">
                <h1 className="font-bold text-xl md:text-5xl mt-5 text-center">চৌমুহনী আইডিয়াল ক্লাব</h1>
            <h1 className="font-bold text-xl md:text-5xl mt-5 text-center">CHOWMUHANI IDEAL CLUB (CIC) </h1>

                        <h3 className="text-2xl m-5 text-center">
                <span className="font-bold">
                    এটি একটি অরাজনৈতিক এবং সামাজিক সংগঠন।
                </span>
                <span> আমাদের প্রতিটি কাজ  হোক একমাত্র আল্লাহ কে রাজি খুশি করার জন্য।</span>
            </h3>
            </div>

            {/* Banner Image */}
            {/* <img src={LogoBanner} alt="Logo banner" className='border flex mx-auto w-full m-20' /> */}

            <p className="text-xl md:text-2xl m-5">
                একটি আদর্শ জাতি গঠনে তরুন এবং যুব সমাজকে এগিয়ে আসতে হবে।
            </p>

            {/* লক্ষ্য ও উদ্দ্যেশ্য */}
            <h3 className='m-5'>
                <span className="text-xl md:text-2xl">🔰🔰🔰</span>
                <span className="font-bold text-xl md:text-2xl underline">
                    আমাদের লক্ষ্য এবং উদ্দেশ্যঃ-
                </span>
            </h3>
            <p className='m-5'>
                যুব সমাজকে ধ্বংসাত্মক মাদক দ্রব্য এবং বর্তমানে চলমান সকল অপসংস্কৃতি থেকে দূরে রেখে খেলাধুলা এবং সামাজিক কাজের মাধ্যমে
                সুস্থ সংস্কৃতিতে ফিরিয়ে আনা এবং যুব সমাজকে দেশের জন্য যুব শক্তিতে রুপান্তর করাই আমাদের মূল লক্ষ্য ও উদ্দেশ্য।
            </p>

            {/* কাজের ধরনঃ- */}

           <div className="m-5">
             <p>
                <span className="text-xl md:text-2xl">🔥🔥</span>
                <span className="font-bold text-xl md:text-2xl underline">কাজের ধরনঃ-</span>
            </p>
            <h3>
                <p className='underline'>১! সামাজিক উন্নয়ন:</p>
                <p>এলাকার সামাজিক এবং সাংস্কৃতিক উন্নয়ন ঘটানো।</p>
            </h3>

            <h3>
                <p className='underline'>২! শিক্ষা সহায়তা:</p>
                <p>শিক্ষার মান উন্নয়নে বিভিন্ন কার্যক্রম আয়োজন করা এবং শিক্ষার্থীদের জন্য সহায়তা প্রদান করা।</p>
            </h3>
            <h3>
                <p className='underline'>৩! স্বাস্থ্য সচেতনতা:</p>
                <p>স্বাস্থ্য ও স্বাস্থ্য সম্পর্কিত সচেতনতা বৃদ্ধি করা এবং স্বাস্থ্যসেবা প্রদান করা।</p>
            </h3>
            <h3>
                <p className='underline'>৪! পরিবেশ সংরক্ষণ:</p>
                <p>পরিবেশের সুরক্ষা এবং সচেতনতা বৃদ্ধির জন্য প্রকল্প ও কর্মসূচি আয়োজন করা।</p>
            </h3>
            <h3>
                <p className='underline'>৫! সদস্য উন্নয়ন:</p>
                <p>ক্লাব সদস্যদের ব্যক্তিগত ও পেশাগত দক্ষতা বৃদ্ধি করা।</p>
            </h3>
            <h3>
                <p className='underline'>৬! সামাজিক সেবা:</p>
                <p>সমাজের দরিদ্র ও অপ্রতিবন্ধিত জনগণের জন্য সহায়তা প্রদান করা।</p>
            </h3>
            <h3>
                <p className='underline'>৭! সাংস্কৃতিক অনুষ্ঠান:</p>
                <p>স্থানীয় সাংস্কৃতিক ও শিল্পমূলক অনুষ্ঠান আয়োজন করা এবং সাংস্কৃতিক ঐতিহ্য সংরক্ষণ করা।</p>
            </h3>

           </div>


           {/* আমাদের শাখা সমূহঃ */}
           <div className='m-5'>
            <h1>
                <span className="text-xl md:text-2xl">❄️❄️</span>
                <span className="font-bold text-xl md:text-2xl underline">
                    আমাদের শাখা সমূহঃ
                    </span>
            </h1>
            <p>★ সি আই সি মানবতার হাসি ফাউন্ডেশন </p>
            <p>★ সি আই সি চ্যাম্পিয়নস ফেডারেশন </p>
            <p>★ সি আই সি ব্লাড ফাউন্ডেশন </p>
            <p>★ সমাজ কল্যান বিভাগ</p>
            <p>★ প্রচার ও আই টি বিভাগ</p>
            <p>★ প্রকাশনা বিভাগ</p>
            <p>★ সেচ্ছাসেবী বিভাগ</p>
            <p>★ যুব উন্নয়ন বিভাগ (প্রশিক্ষণ বিভাগ)</p>
            <p>★ শিক্ষা বিভাগ</p>
            <p>★ ট্যুর এন্ড ট্রাভেল বিভাগ (শিক্ষা সফর বিভাগ)</p>
            <p>★ ইত্যাদি....</p>
           </div>


           <h1 className='m-5 text-xl font-semibold'>যে কেউ চাইলে একজন সেচ্ছাসেবী হিসেবে আমাদের সংগঠনের সদস্য হিসেবে যোগ দান করতে পারবেন। 
            তবে তাকে অবশ্যই আমাদের অনলাইন সদস্য ফরমটি পূরণ করতে হবে।
            </h1>













            <Footer />



        </div>
    )
}

export default About;