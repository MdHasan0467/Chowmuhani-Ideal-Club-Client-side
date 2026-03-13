import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PersonalInfo from "../components/MemberShipForm/PersonalInfo";
import SocialInfo from "../components/MemberShipForm/SocialInfo";
import ContactInfo from "../components/MemberShipForm/ContactInfo";
import AddressInfo from "../components/MemberShipForm/AddressInfo";
import BloodInfo from "../components/MemberShipForm/BloodInfo";
import ProfileUpload from "../components/MemberShipForm/ProfileUpload";

const MemberShipForm = () => {

const [success,setSuccess] = useState(false)

const handleMemberShipForm = async (e) => {

e.preventDefault()

const form = e.target

const formData = new FormData(form)

const data = Object.fromEntries(formData.entries())

console.log(data)

try{

const res = await fetch("http://localhost:5000/membership",{
method:"POST",
headers:{
"content-type":"application/json"
},
body:JSON.stringify(data)
})

const result = await res.json()

if(result.insertedId){
setSuccess(true)
form.reset()
}

}catch(err){
console.log(err)
}

}

return (

<div className="bg-blue-50 py-10 px-4" id="addMember">

<Helmet>
<title>CIC / Membership Form</title>
</Helmet>

<form
onSubmit={handleMemberShipForm}
className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-10"
>

<h1 className="text-xl md:text-3xl font-bold text-center text-blue-500">
অনলাইন সদস্য ফরম
</h1>

{success && (
<div className="alert alert-success">
আপনার ফরম সফলভাবে জমা হয়েছে
</div>
)}


<PersonalInfo/>

<SocialInfo/>

<ContactInfo/>

<AddressInfo/>

<BloodInfo/>

<ProfileUpload/>


<button className="btn w-full bg-blue-500 text-white 
hover:scale-90 transition-all duration-300 ease-in-out text-lg">
জমা দিন
</button>

</form>

</div>

)

}

export default MemberShipForm