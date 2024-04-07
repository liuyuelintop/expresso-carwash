// Contact.jsx
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Hero from '../components/Hero';
import MapSection from '../components/MapSection';
import Policy from '../components/Policy';
import { CONTACT, HERO } from '../constants';

export default function Contact() {
    const position = CONTACT.position;

    return (
        <div className="text-white p-8 flex flex-col justify-center items-center min-h-screen">
            <div className="max-w-2xl w-full">
                <Hero hero={HERO[1]} />
                <h2 className="text-3xl font-bold text-center mb-6">CONTACT US</h2>
                <ContactForm />
                <Policy />
                <ContactInfo />
                <MapSection position={position} />
            </div>
        </div>
    );
}
