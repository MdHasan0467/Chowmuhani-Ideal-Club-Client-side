const BloodInfo = () => {

return(

<div>

<h2 className="text-xl font-bold mb-4">
রক্তদান তথ্য
</h2>

<div className="grid md:grid-cols-2 gap-4">

<select
name="blood"
className="select select-bordered w-full"
>

<option value="">রক্তের গ্রুপ</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>

</select>

<input
name="lastDonate"
type="date"
className="input input-bordered w-full"
/>

<input
name="totalDonate"
type="number"
placeholder="মোট রক্তদান"
className="input input-bordered w-full"
/>

</div>

</div>

)

}

export default BloodInfo