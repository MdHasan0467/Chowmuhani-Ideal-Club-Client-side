import { Link } from "react-router";


const MemberShipForm = () => {
  

  return (
    <div className="">
      <form className="w-1/2 mx-auto mt-20 bg-amber-100 p-10">
      <h1 className="text-orange-500 font-serif text-xl md:text-2xl font-bold text-center">অনলাইন সদস্য ফরম</h1>

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
                <span className="label-text">আপনার ফেসবুক আইডি-র নাম কি?</span>
              </label>
              <input
                type="text"
                className="input input-bordered md:w-80"
                placeholder="মেসেঞ্জার গ্রুপ রিকুয়েস্ট একসেপ্ট করার সুবিধার্থে -"
              />
            </div>
            <div className="form-control mx-2">
              <label className="label">
                <span className="label-text">আপনার ফেসবুক আই ডি - র প্রোফাইল লিংক দিনঃ</span>
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
            <span className="label-text">📅🩸আপনি সর্বশেষ কবে রক্ত দান করেছেন?</span>
          </label>
          <input
            type="date"
            className="input block input-bordered md:w-80"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">🩸আপনি সর্বমোট কতবার রক্ত দান করেছেন?</span>
          </label>
          <input
            type="number"
            className="input input-bordered  md:w-80"
            placeholder="মোট কতবার রক্ত দান করেছেন?"
          />
        </div>
      </div>


        <input
          className="btn mx-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white md:w-80 md:mt-9"
          value="জমা দিন"
          type="submit"
        />
    </form>

    
    </div>
  );
};

export default MemberShipForm;