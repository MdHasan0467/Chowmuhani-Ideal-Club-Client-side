import { Link } from "react-router";


const SignUp = () => {
  

  return (
    <div className="">
        <form className="w-1/2 mx-auto mt-20 bg-amber-100 p-10">

        <h2>Sign Up Now</h2>


      <div className="group-card md:flex">

        <div className="form-control">

          <label className="label">
            <span className="label-text">Full Name :</span>
          </label>

          <input
            type="text"
            className="input input-bordered md:w-80"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>

          <input
            type="email"
            className="input input-bordered  md:w-80"
            placeholder="Enter your valid email address"
          />
        </div>
      </div>

      <div className="group-card md:flex">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            className="input input-bordered md:w-80"
            placeholder="Enter your valid number"
          />
        </div>

        <div>
          <div className="form-control mx-2">
            <label className="label">
              <span className="label-text">Password :</span>
            </label>
            <div className="flex">
              <input
                className="input input-bordered md:w-80"
                placeholder="Enter a secure password"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="flex">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo :</span>
          </label>
          <input
            type="file"
            // {...register("img", {
            //   required: "Photo is Required",
            // })}
            className="input input-bordered md:w-80"
          />
          {/* {errors.img && <p className="text-red-500">{errors.img.message}</p>} */}
        </div>

        <input
          className="btn mx-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white md:w-80 md:mt-9"
          value="Register"
          type="submit"
        />
      </div>
      <Link to={'/'} className="btn bg-orange-500">Home</Link>
    </form>

    
    </div>
  );
};

export default SignUp;