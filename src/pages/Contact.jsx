// Contact.jsx
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import MapSection from '../components/MapSection';
import { CONTACT } from '../constants';

export default function Contact() {
    const position = CONTACT.position;

    return (
        <div className="text-white p-8 flex flex-col justify-center items-center min-h-screen">
            <div className="max-w-2xl w-full">
                <h2 className="text-4xl font-bold text-center mb-10">CONTACT US</h2>
                <ContactForm />
                <div className="mb-8 text-center text-sm text-neutral-400">
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-300 mx-1">
                        Privacy Policy
                    </a>
                    and
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-300 mx-1">
                        Terms of Service
                    </a>
                    apply.
                </div>

                <ContactInfo />
                <MapSection position={position} />
            </div>
        </div>
    );
}
