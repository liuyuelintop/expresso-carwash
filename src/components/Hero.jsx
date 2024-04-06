import Partners from "./Partners";

export default function Hero() {
    return (
        <div className="flex flex-col p-4">
            <img src="https://kantata.marketing/wp-content/uploads/2021/08/consulting-firm-project-management.jpg"
                className="mt-8 p-3 max-h-[600px] w-full object-cover" />
            <h1 className="text-2xl sm:text-4xl mt-2 sm:mt-4 font-semibold text-neutral-300 text-center">EXPERIENCED, PERSONALIZED IT CONSULTING AND SUPPORT</h1>
            <p className="mt-2 text-xl sm:text-2xl  text-neutral-400 text-center">Let us build the infrastructure for your success!
            </p>
            <Partners />
        </div>
    )
}
