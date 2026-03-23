import { useNavigate } from "react-router-dom";

const BloodGroupSelector = () => {
  const navigate = useNavigate();

  const user = {
    name: "MD Hasan",
    email: "hasan@gmail.com",
    phoneNumber: "01869870467",
    photoUrl: "https://scontent.fcgp40-1.fna.fbcdn.net/v/t39.30808-6/614968956_122106753009196597_6554906286847428435_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGgF6sCDxl2loggVqev6Hg2RbSrjHSNamNFtKuMdI1qY_fFCoqNYn4ML8cMSj2LYPHmRb-r8OyRBOBVzRl7CgW1&_nc_ohc=RD3bMAnfur4Q7kNvwGfliBJ&_nc_oc=AdoytnH29JKTJtDZkZzMUkQN3KdEUGFpSFsWm-3q73iaraZF3hM54Mqp69Smm0jB5KA&_nc_zt=23&_nc_ht=scontent.fcgp40-1.fna&_nc_gid=BR989RD853b7w6LGL_dKqA&_nc_ss=7a32e&oh=00_AfzCASpEOqe-LsjT7rW0amAEGaIUMrB77WI7o4e2cvBvyA&oe=69C6AF23",
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="overflow-hidden relative rounded-xl shadow-lg md:w-80 p-5 md:mt-5">
      <h1 className="text-red-500 text-center text-shadow-2xs">
        আপনার রক্তের গ্রুপ কি?
      </h1>
      <div className="grid grid-cols-4">
        {bloodGroups.map((group, index) => (
          <div
            key={index}
            onClick={() =>
              navigate("/become/a/blood/donor", {
                state: {
                  bloodGroup: group,
                  user: user, // user data পাঠানো হচ্ছে
                },
              })
            }
            className=" hover:scale-x-45 duration-300 ease-in-out transition w-16 h-12 flex items-center justify-center m-4 hover:bg-red-100 overflow-hidden relative rounded-xl shadow-lg text-center cursor-pointer border border-gray-200"
          >
            🩸 {group}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodGroupSelector;