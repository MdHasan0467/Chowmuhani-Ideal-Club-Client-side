import { div } from "framer-motion/client";
import { Link } from "react-router";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init";
import { Helmet } from "react-helmet-async";



const LogIn = () => {
const provider = new GoogleAuthProvider();




const handleGoogleHandler = () => {
  // alert('handleGoogleHandler')

  signInWithPopup(auth, provider)
  .then ((result) => {
    console.log(result)
  })
  .error(err => {
    alert(err.message)
  })
}


return (
<div>
      {/* Page title */}
      <Helmet>
        <title>CIC / Login</title>
      </Helmet>
      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p className="flex"> Dont have any account?
          <Link to={'/signup'} className="text-primary mx-2 hover:underline">Signup</Link>
          here
        </p>

        <div className=" flex mx-auto">
           <div>
            <p className="ml-10 my-5">------- Or continue with -------</p>

            <div className="flex space-x-2">
                <button onClick={handleGoogleHandler}
                className="btn border hover:bg-orange-100 cursor-pointer">Google</button>

                <div className="tooltip">
                   <div className="tooltip-content">
                     <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Coming Soon!</div>
                   </div>
                   <button className="btn border hover:bg-orange-100 cursor-pointer">Instagram</button>
                </div>
                
                
            </div>
            </div> 
        </div>
      </div>
    </div>
  </div>
    </div>
</div>
  );
};

export default LogIn;