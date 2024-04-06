import About from "../components/About";
import Hero from "../components/Hero";
import Social from "../components/Social";

export default function Home() {
    return (
        <div className="flex flex-col gap-6 p-18 px-3 max-w-6xl mx-auto ">
            <Hero />
            <About />
            <Social />
        </div>
    )
}