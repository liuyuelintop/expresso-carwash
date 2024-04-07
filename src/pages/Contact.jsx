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
                <h2 className="text-4xl font-bold text-center mb-10">CONTACT US</h2>
                <Hero hero={HERO[1]} />
                <Policy />
                <ContactInfo />
                <MapSection position={position} />
            </div>
        </div>
    );
}
