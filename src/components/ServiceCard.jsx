export default function ServiceCard({ title, description, imageUrl, imageAlt }) {
    return (
        <div className="flex flex-col mb-10">
            <div className>
                <img className="rounded-lg mb-6 lg:mb-0 w-full h-auto" src={imageUrl} alt={imageAlt} />
            </div>
            <div className="mt-2 lg:mt-6 flex flex-col justify-center px-4">
                <h2 className="text-neutral-400 text-center text-2xl mb-4">{title}</h2>
                <p className="text-neutral-500 text-center">{description}</p>
            </div>
        </div>
    );
}
