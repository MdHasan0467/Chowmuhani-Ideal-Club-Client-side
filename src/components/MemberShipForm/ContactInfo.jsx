const ContactInfo = () => {

return(

<div>

<h2 className="text-xl font-bold mb-4">
যোগাযোগ
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
required
name="phone"
type="tel"
placeholder="মোবাইল নাম্বার"
className="input input-bordered w-full"
/>

<input
name="email"
type="email"
placeholder="ইমেইল"
className="input input-bordered w-full"
/>

</div>

</div>

)

}

export default ContactInfo