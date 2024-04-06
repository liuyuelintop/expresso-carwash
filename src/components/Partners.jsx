import { PARTNERS } from "../constants"
export default function Partners() {
    return (
        <div className="mt-8">
            <h2 className="text-center text-2xl sm:text-3xl text-cyan-800 mb-6">Our Partners</h2>
            <div className="flex justify-center items-center flex-wrap mt-8 gap-10">
                {PARTNERS.map((partner, index) => (
                    <img
                        key={index}
                        className="rounded"
                        style={{ maxWidth: '150px', maxHeight: '100px' }}
                        src={partner.url}
                        alt={partner.name}
                    />
                ))
                }
            </div>
        </div>
    )
}
