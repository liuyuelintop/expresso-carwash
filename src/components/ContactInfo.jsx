// ContactInfo.jsx
import { CONTACT } from '../constants';
import OpenHours from './OpenHours';

const ContactInfo = () => (
    <div className="flex flex-col items-center text-neutral-400 mb-10 gap-4">
        <div className="flex flex-col items-center">
            <h3 className="mb-4 text-2xl  text-neutral-300">Get started today!</h3>
            <p className="mb-2 text-center">{CONTACT.intro}</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-1 text-center">
                <h3 className="mb-4 text-2xl  text-neutral-300">{CONTACT.companyName}</h3>
                <p>{CONTACT.address}</p>
            </div>
            <div className='flex flex-col gap-1 text-center'>
                <p>Sales and Accounts</p>
                <p>Ph:
                    <a
                        href={`tel:{CONTACT.salesPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='mx-1 text-cyan-600 hover:underline'>{CONTACT.salesPhone}</a>
                </p>
            </div>
            <div className='flex flex-col gap-1 text-center'>
                <p>IT Support</p>
                <p>Ph:
                    <a href={`tel:{CONTACT.supportPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='mx-1 text-cyan-600 hover:underline'>{CONTACT.supportPhone}</a>
                </p>
            </div>
        </div>
        <OpenHours />
    </div>
);

export default ContactInfo;
