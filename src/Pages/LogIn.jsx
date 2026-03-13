import { div } from "framer-motion/client";
import { Link } from "react-router";

const LogIn = () => {
  return (
<div>

      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
            <Link to={'/'}
    className="btn bg-blue-500"
    >Home</Link>
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
                <div className="tooltip">
                   <div className="tooltip-content">
                     <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Coming Soon!</div>
                   </div>
                   <button className="btn border hover:bg-orange-100 cursor-pointer">Google</button>
                </div>

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