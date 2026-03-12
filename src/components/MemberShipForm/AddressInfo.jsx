const AddressInfo = () => {

return(

<div>

<h2 className="text-xl font-bold mb-4">
বর্তমান ঠিকানা
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
name="village"
type="text"
placeholder="গ্রাম"
className="input input-bordered w-full"
/>

<input
name="postOffice"
type="text"
placeholder="পোস্ট অফিস"
className="input input-bordered w-full"
/>

<input
name="thana"
type="text"
placeholder="থানা"
className="input input-bordered w-full"
/>

<input
name="district"
type="text"
placeholder="জেলা"
className="input input-bordered w-full"
/>

</div>

</div>

)

}

export default AddressInfo