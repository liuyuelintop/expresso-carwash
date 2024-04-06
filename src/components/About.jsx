import { ABOUT_US } from "../constants";
export default function About() {
    return (
        <div className="bg-black text-neutral-400 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="uppercase text-4xl font-bold text-center mb-10">About us</h2>

                <div className="flex flex-col flex-warp sm:justify-center">
                    {ABOUT_US.map((obj, index) => (
                        <div className="mb-8 flex flex-wrap sm:justify-center items-center" key={index}>
                            <div className="w-full lg:w-1/2">
                                <img
                                    className="rounded-lg mb-6"
                                    width={400}
                                    height={400}
                                    src={obj.url}
                                    alt={obj.title}
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-xl text-center mb-4">
                                    {obj.title}
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-xl mb-3">{obj.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    );
}
