const PersonalInfo = () => {

return(

<div>

<h2 className="text-xl font-bold mb-4">
ব্যক্তিগত তথ্য
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
required
name="name"
type="text"
placeholder="আপনার নাম"
className="input input-bordered w-full"
/>

<input
required
name="father"
type="text"
placeholder="পিতার নাম"
className="input input-bordered w-full"
/>

<input
required
name="mother"
type="text"
placeholder="মাতার নাম"
className="input input-bordered w-full"
/>

<input
required
name="birth"
type="date"
className="input input-bordered w-full"
/>

</div>

</div>

)

}

export default PersonalInfo