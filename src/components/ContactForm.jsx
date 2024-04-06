// ContactForm.jsx
const ContactForm = () => (
    <div className="mb-10 mx-2">
        <form className="flex flex-col gap-6">
            <h3 className='text-center text-2xl text-neutral-300'>Let's Talk about Your IT Needs!</h3>
            <input className="p-2 rounded-md bg-neutral-700 text-neutral-400" type="text" placeholder="Name" />
            <input className="p-2 rounded-md bg-neutral-700 text-neutral-400" type="email" placeholder="Email*" />
            <input className="p-2 rounded-md bg-neutral-700 text-neutral-400" type="text" placeholder="Company URL" />
            <textarea className="p-2 rounded-md bg-neutral-700 text-neutral-400" placeholder="Tell us how we can help."></textarea>
            <input className="p-2 rounded-md bg-neutral-700 text-neutral-400" type="text" placeholder="Contact Phone Number*" />
            <button className="rounded p-3 bg-cyan-600 font-semibold">GET HELP</button>
        </form>
    </div>
);

export default ContactForm;
