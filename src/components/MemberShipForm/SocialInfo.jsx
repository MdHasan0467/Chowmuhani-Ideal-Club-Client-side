const SocialInfo = () => {

return(

<div>

<h2 className="text-xl font-bold mb-4">
সামাজিক তথ্য
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
name="facebookName"
type="text"
placeholder="ফেসবুক আইডি নাম"
className="input input-bordered w-full"
/>

<input
name="facebookLink"
type="text"
placeholder="ফেসবুক প্রোফাইল লিংক"
className="input input-bordered w-full"
/>

<select
name="profession"
className="select select-bordered w-full"
required
>

<option value="">পেশা নির্বাচন করুন</option>
<option>ছাত্র ছাত্রী</option>
<option>চাকরী</option>
<option>ব্যবসা</option>
<option>বেকার</option>

</select>

<div className="flex gap-6 items-center">

<label className="flex gap-2 items-center">
<input type="radio" name="religion" value="ইসলাম"/>
ইসলাম
</label>

<label className="flex gap-2 items-center">
<input type="radio" name="religion" value="সনাতন"/>
সনাতন
</label>

<label className="flex gap-2 items-center">
<input type="radio" name="religion" value="অন্যান্য"/>
অন্যান্য
</label>

</div>

</div>

</div>

)

}

export default SocialInfo