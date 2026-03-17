import { colgroup } from "framer-motion/client";
import { Link } from "react-router";


const SignUp = () => {

  const handlRegisterHandler = (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const number = e.target.number.value;
    const image = e.target.img.value;

    console.log(name, email, password, number, image)
  }
  

  return (
    <div className="">
        <form onSubmit={handlRegisterHandler} className="w-1/2 mx-auto mt-20 bg-amber-100 p-10">

        <h2>Sign Up Now</h2>


      <div className="group-card md:flex">

        <div className="form-control">

          <label className="label">
            <span className="label-text">Full Name :</span>
          </label>

          <input 
            name="name"
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
            name="email"
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
            name="number"
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
              name="password"
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
          <input type="file" name="img" className="file-input input-bordered md:w-80" />
        </div>

        <button type="submit" 
        className="btn mx-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white md:w-80 md:mt-9">
        Register Now
        </button>

      </div>
    </form>

    
    </div>
  );
};

export default SignUp;