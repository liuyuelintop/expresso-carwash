import { FaFacebook } from "react-icons/fa6";
export default function Social() {
    return (
        <div className="text-center py-6">
            <h2 className="text-cyan-700 font-semibold text-4xl mb-4">SOCIAL</h2>
            {/* Assume you have FontAwesome or similar for icons */}
            <div className="flex justify-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="mt-6 text-white text-4xl" />
                </a>
            </div>
        </div >
    );
}
