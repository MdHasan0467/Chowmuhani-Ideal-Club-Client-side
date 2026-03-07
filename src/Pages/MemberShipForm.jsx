import { Link } from "react-router";
// import Shortaboli from "../assets/Shortaboli.jpg"

const MemberShipForm = () => {
  

  return (
    <div className="bg-orange-50 p-10">
      {/* <img src={Shortaboli} alt="Shortaboli" className="w-full" /> */}

      {/* শর্তসমূহ */}
      <div className="m-1 md:m-5">
        <h1 className="text-2xl font-bold underline my-5">শর্তাবলিঃ</h1>
        <p>১। আমি নিজ ইচ্ছায় বিনা স্বার্থে "চৌমুহনী আইডিয়াল ক্লাব" এর সদস্য হিসেবে কাজ করতে আগ্রহী।</p>
        <p>২। আমি আমার উপর অর্পিত সকল দ্বায়িত্ব, কর্তব্য, নিয়মাবলী ও সকল শর্তাবলি মানতে বাধ্য থাকিব।</p>
        <p>৩। আমি সংগঠনের সকল কাজের সাথে নিজেকে নিয়োজিত রাখিব এবং অন্যকে উৎসাহিত করিব।</p>
        <p>৪। উপদেষ্টা পরিষদের সকল সদস্যগণ সংগঠনের প্রতি সৌহার্দপূর্ণ মনোভাব পোষণ করিবেন।</p>
        <p>৫। পরিচালনা পরিষদের সকল সদস্যগণ নিজ নিজ দ্বায়িত্ব পালনে সচেষ্ট থাকিবেন।</p>
        <p>৬। প্রত্যেক সদস্য অবশ্যই সৎ থাকবে এবং মানব সেবায় নিয়োজিত সকল কর্মকান্ডে নিজ দ্বায়িত্বে এগিয়ে আসবেন।</p>
        <p>৭। কাহারো একক কোনো সিদ্ধান্তে সংগঠনের কোনো কর্মকান্ড সম্পাদন করা যাবে না। সংগঠন কর্তৃক প্রকাশিত 
              দ্বায়িত্বশীল সবার মতামত থাকতে হবে এবং বেশির ভাগ সদস্যগণের মতামতের ভিত্তিতে কাজ সম্পাদন করা হবে।</p>
        <p>৮। উপযুক্ত কারণ ছাড়া সংগঠনের নির্ধারিত সকল সভায় প্রত্যেক সদস্যকে উপস্থিত থাকতে হবে।</p>
        <p>৯ (ক)। যেহেতু "চৌমুহনী আইডিয়াল ক্লাব" একটি অরাজনৈতিক, অমুনাফাভোগী এবং সেচ্ছাসেবক মূলক সংগঠন। 
            তাই এখানে দেশের যে কোনো ব্যক্তি (সকল রাজনৈতিক দলের ব্যক্তি সদস্য হিসেবে থাকতে পারবেন, অথবা রাজনীতি করেন না এমন ব্যক্তিও থাকতে পারবেন)
            অতএব এখানে কেউ কাউকে রাজনৈতিক ভাবে হেয় বা অপদস্থ করা যাবে না এবং এটি একটি শাস্তিযোগ্য অপরাধ হিসেবে গণ্য হবে।
        </p>
        <p>৯ (খ)। ক্লাবটি অমুনাফাভোগী এবং সেচ্ছাসেবক মূলক হওয়ায় এখানে কেউ কোনো আর্থিক সুবিধা পাবেন না। সকল শ্রম (মানসিক/শারিরীক) 
              সেচ্ছায় এবং বিনামূল্যে দিতে হবে।</p>
        <p>৯ (গ)। কোনো সদস্যের রাজনৈতিক কোনো খারাপ কাজে লিপ্ত থাকা বা আবেগ বশত হয়ে লোভ লালসায় বা চরিত্রহীনতা জনিত কোনো কাজের দায়ভার 
           "চৌমুহনী আইডিয়াল ক্লাব" বা তার কোনো কর্তৃপক্ষ নিবে না।
        </p>
        <p>১০। "চৌমুহনী আইডিয়াল ক্লাব"এর আয়ের উৎস হবে যথাক্রমে- সকল সদস্য, উপদেষ্টা বা সহযোগী সদস্যদের থেকে প্রাপ্ত অর্থ (দান) থেকে।
                যা মাসিক, বাৎসরিক বা এককালীনও হতে পারে।
        </p>
        <p>১১। কোনো সদস্যের বিরুদ্ধে "চৌমুহনী আইডিয়াল ক্লাব" এর গঠনতন্ত্র পরিপন্থি কোনো কাজ প্রমাণিত হলে ওই সদস্যের সদস্য পদ বাতিল বলে গণ্য হবে।</p>
        <p>১২। সংগঠন কর্তৃক ধার্য্যকৃত মাসিক টাকা প্রতি মাসের ৫ তারিখের মধ্যে নিজ দ্বায়িত্বে পরিশোধ করিতে হবে।</p>

      </div>

      {/* Online Form */}
      <form className="md:w-1/2 md:mx-auto md:mt-20 mt-7 bg-amber-100 md:p-10 p-5">
      <h1 className="text-orange-500 font-serif text-xl md:text-2xl font-bold text-center">অনলাইন সদস্য ফরম</h1>

      <p className="md:m-5 m-1">এই মর্মে প্রত্যয়ন করিতেছি যে, আমি...</p>

        <h2 className="text-2xl bold">ব্যক্তিগত তথ্যঃ</h2>
        <div className="space-y-4">
            <div className="group-card md:flex">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">নামঃ</span>
               </label>
               <input
                 type="text"
                 className="input input-bordered md:w-80"
                 placeholder="আপনার পুরো নাম লিখুন"
               />
             </div>

             <div className="form-control mx-2">
               <label className="label">
                 <span className="label-text">পিতার নামঃ</span>
               </label>
               <input
                 type="text"
                 className="input input-bordered  md:w-80"
                 placeholder="আপনার পিতার নাম লিখুন"
               />
             </div>
           </div>

           <div className="group-card md:flex">
             <div className="form-control">
               <label className="label">
                   <span className="label-text">মাতার নামঃ</span>
               </label>
               <input
                   type="text"
                   className="input input-bordered md:w-80"
                   placeholder="আপনার মাতার নাম লিখুন"
               />
             </div>
                                 <div className="form-control">
          <label className="label">
            <span className="label-text">জন্ম তারিখঃ </span>
          </label>
          <input
            type="date"
            className="input block input-bordered md:w-80"
            placeholder="আপনার জন্ম তারিখটি লিখুন (ইংরেজীতে)"
          />
        </div>
           </div>
        </div>

        <br /><br />


        <h2 className="text-2xl bold">সামাজিক তথ্যঃ</h2>
         <div className="space-y-4">
           <div className="group-card md:flex">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ফেসবুক আইডি-র নামঃ</span>
              </label>
              <input
                type="text"
                className="input input-bordered md:w-80"
                placeholder="মেসেঞ্জার গ্রুপ রিকুয়েস্ট একসেপ্ট করার সুবিধার্থে -"
              />
            </div>
            <div className="form-control mx-2">
              <label className="label">
                <span className="label-text">ফেসবুক আই ডি-র প্রোফাইল লিংকঃ</span>
              </label>
              <input
                type="text"
                className="input input-bordered  md:w-80"
                placeholder="সঠিক আইডি নিশ্চিত করার জন্য"
              />
            </div>
        </div>     
            <div className="group-card md:flex">
            <div className="form-control md:w-96">
          <label className="label">
            <span className="label-text">আপনার পেশা কি?</span>
          </label>
          <select defaultValue="Pick a color" className="select">
  <option disabled={true}>পেশা নির্বাচন করুন</option>
  <option>ছাত্র ছাত্রী</option>
  <option>চাকরী</option>
  <option>ব্যবসা</option>
  <option>বেকার</option>
</select>
        </div>
          <div className="form-control mx-2">
            <label className="label">
              <span className="label-text">ধর্মঃ আপনার ধর্ম নির্বাচন করুন</span>
            </label>
                    <form className="filter flex">
<div className="flex">
      <input className="btn btn-square" type="reset" value="×"/>
  <input className="btn" type="radio" name="frameworks" aria-label="ইসলাম"/>
  <input className="btn" type="radio" name="frameworks" aria-label="সনাতন"/>
  <input className="btn" type="radio" name="frameworks" aria-label="অন্যান্য"/>
</div>
</form>
          </div>
      </div>
         </div>

        <br /><br />

        <h2 className="text-2xl bold">যোগাযোগ (মোবাইল নাম্বার দিন)</h2>
        <div className="group-card md:flex">
            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none">
      <path
        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <input
    type="tel"
    className="tabular-nums"
    required
    placeholder="Phone"
    pattern="[0-9]*"
    minLength="11"
    maxLength="11"
    title="Must be 11 digits"
  />
</label>
<p className="validator-hint">Must be 11 digits</p>

        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none">
      <path
        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <input
    type="tel"
    className="tabular-nums"
    required
    placeholder="Phone"
    pattern="[0-9]*"
    minLength="11"
    maxLength="11"
    title="Must be 11 digits"
  />
</label>
<p className="validator-hint">Must be 11 digits</p>
        </div>

        <br /><br />


        <h2 className="text-2xl bold">বর্তমান ঠিকানা</h2>
        <div className="group-card md:flex space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">🏕️ আপনার গ্রামের নাম কি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered md:w-80"
            placeholder="গ্রামের নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">📬 আপনার গ্রামের পোষ্ট অফিস কোনটি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered  md:w-80"
            placeholder="পোষ্ট অফিসের নাম লিখুন"
          />
        </div>
        </div>
        <div className="group-card md:flex space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">👮‍♂️ আপনার থানার নাম কি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered md:w-80"
            placeholder="থানার নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">📬 আপনার জেলা কোনটি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered  md:w-80"
            placeholder="জেলার নাম লিখুন"
          />
        </div>
      </div>

        <br /><br />


        <h2 className="text-2xl bold">স্থায়ী ঠিকানা</h2>
        <div className="group-card md:flex space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">🏕️ আপনার গ্রামের নাম কি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered md:w-80"
            placeholder="গ্রামের নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">📬 আপনার গ্রামের পোষ্ট অফিস কোনটি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered  md:w-80"
            placeholder="পোষ্ট অফিসের নাম লিখুন"
          />
        </div>
        </div>
        <div className="group-card md:flex space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">👮‍♂️ আপনার থানার নাম কি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered md:w-80"
            placeholder="থানার নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">📬 আপনার জেলা কোনটি?</span>
          </label>
          <input
            type="text"
            className="input input-bordered  md:w-80"
            placeholder="জেলার নাম লিখুন"
          />
        </div>
      </div>

        <br /><br />


        <h2 className="text-2xl bold">সামাজিক কাজ</h2>
        <div className="group-card md:flex space-y-4">
        <div className="form-control md:w-96">
          <label className="label">
            <span className="label-text">🩸আপনার রক্তের গ্রুপ কি? </span>
          </label>
          <select defaultValue="Pick a color" className="select">
              <option disabled={true}>রক্তের গ্রুপ নির্বাচন করুন</option>
              <option>A (+ ve)</option>
              <option>A (- ve)</option>
              <option>B (+ ve)</option>
              <option>B (- ve)</option>              
              <option>AB (+ ve)</option>         
              <option>AB (- ve)</option>
              <option>AB (- ve)</option>
              <option>O (+ ve)</option>
              <option>O (- ve)</option>
              <option>জানা নেই</option>
          </select>
        </div>
      </div>
        <div className="group-card md:flex mt-5">
          <div className="form-control">
          <label className="label">
            <span className="label-text">🩸সর্বশেষ কবে রক্ত দান করেছেন?</span>
          </label>
          <input
            type="date"
            className="input block input-bordered md:w-80"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">🩸সর্বমোট কতবার রক্ত দান করেছেন?</span>
          </label>
          <input
            type="number"
            className="input input-bordered  md:w-80"
            placeholder="মোট কতবার রক্ত দান করেছেন?"
          />
        </div>
      </div>

      <p className="m-5"> এই সংগঠনের উপরিউক্ত সকল শর্তাবলি জেনে-বুঝে, মেনে, নিজ ইচ্ছায় সকল কার্যক্রমে স্বতঃস্ফুর্ত ভাবে অংশ গ্রহণ করার এবং সকলের সাথে সৌহার্দপূর্ণ সম্পর্ক বজায় রাখার অঙ্গীকার পোষণ করিতেছি। </p>
      <p className="font-semibold m-5">সৃষ্টিকর্তা আমাকে সেই শক্তি এবং সুযোগ করে দিক। (আমিন)</p>

        <input
          className="btn mx-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white md:w-80 md:mt-9"
          value="জমা দিন"
          type="submit"
        />
    </form>

    
    </div>
  );
};

export default MemberShipForm;