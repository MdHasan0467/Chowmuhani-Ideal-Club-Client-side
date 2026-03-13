
const UserAdviceForNextPlan = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-10">
            <h1 className="text-lg md:text-2xl font-semibold">আপনিও চাইলে আপনার কোনো পরিকল্পনা আমদের সাথে শেয়ার করতে পারেন। 
                যা সামাজিক কাজের একটা অংশ হবে। হয়তো আপনি একা সেটা করতে পারছেন না। 
                একটা টীম হলে আপনারও সেটা করার ইচ্ছে আছে। 
            </h1>


                  <form className="md:w-1/2 md:mx-auto md:mt-20 mt-7 bg-blue-50 md:p-10 p-5">
                     <h2 className="text-2xl bold">আপনার ব্যক্তিগত তথ্যঃ</h2>
             <div className="form-control">
               <label className="label">
                 <span className="label-text mr-2">নামঃ</span>
               </label>
               <input
                 type="text"
                 className="input input-ghost underline focus:outline-0 focus:bg-transparent"
                 placeholder="আপনার পুরো নাম লিখুন"
               />
             </div>

             <div className="my-5">
                <label className="label">
                 <span className="label-text mr-2">মোবাইলঃ</span>
               </label>
              <input
                type="tel"
                className="input validator input-ghost underline focus:outline-0 focus:bg-transparent"
                required
                placeholder="01*********"
                pattern="[0-9]*"
                minLength="11"
                maxLength="11"
                title="Must be 11 digits"
              />
             </div>



        <br /><br />



        <h2 className="text-2xl bold">আপনার বর্তমান ঠিকানা</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text mr-2">🏕️গ্রামঃ</span>
          </label>
          <input
            type="text"
            className="input input-ghost underline focus:outline-0 focus:bg-transparent"
            placeholder="গ্রামের নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text mr-2">📬পোষ্ট অফিসঃ</span>
          </label>
          <input
            type="text"
            className="input input-ghost underline focus:outline-0 focus:bg-transparent"
            placeholder="পোষ্ট অফিসের নাম লিখুন"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text mr-2">👮‍♂️থানাঃ</span>
          </label>
          <input
            type="text"
            className="input input-ghost underline focus:outline-0 focus:bg-transparent"
            placeholder="থানার নাম লিখুন"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text mr-2">জেলাঃ</span>
          </label>
          <input
            type="text"
            className="input input-ghost underline focus:outline-0 focus:bg-transparent"
            placeholder="জেলার নাম লিখুন"
          />
        </div>

        <br /><br />


        <h1 className="text-2xl bold">আপনার পরিকল্পনার বিষয়</h1>

    
        <div className="form-control">
          <label className="label">
            <span className="label-text mr-2">শিরোনামঃ</span>
          </label>
          <input
            type="text"
            className="input input-ghost underline focus:outline-0 focus:bg-transparent"
            placeholder="শিরোনাম নাম লিখুন ( খাল পরিষ্কার কর্মসূচী )"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text mr-2">বিস্তারিতঃ</span>
          </label>
          <textarea
            type="text"
            className="textarea bg-transparent focus:outline-0 focus:bg-transparent"
            placeholder="বিস্তারিত লিখুন (১-১০০ শব্দে)"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text mr-2">যে বিষয়ে জানাতে চান তার নমুনা ছবি</span>
          </label>
          <input type="file" 
          className="file-input file-input-neutral" 
          />
        </div>

        <br /><br />


        <input
          className="btn mx-2 bg-linear-to-r w-full hover:scale-90 transition-all duration-300 ease-in-out 
          from-indigo-500 via-blue-500 to-white border-0 text-white md:mt-9"
          value="জমা দিন"
          type="submit"
        />
    </form>
            
        </div>
    )
};
export default UserAdviceForNextPlan