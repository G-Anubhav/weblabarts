import AboutOne from "@/components/home/home-eight/about-one";
import AboutTwo from "@/components/home/home-eight/about-two/AboutTwo";
import Counter from "@/components/home/home-eight/counter";
import Features from "@/components/home/home-eight/features";
import Hero from "@/components/home/home-eight/hero";
import PricePlan from "@/components/home/home-eight/price-plan";
import AutoSlider from "@/components/common/auto-slider";
import Projects from "@/components/home/home-eight/projects";
import Faq from "@/components/home/home-ten/about-three/AboutThree";
import Services from "@/components/home/home-eight/services";
import Testimonials from "@/components/home/home-five/testimonials";

function HomeEight() {
	return (
		<>
			<Hero />
			<Features />
			<AboutOne />
			<Counter />
			<Services />
			{/* <AboutTwo /> */}
			<PricePlan />
			<Projects />
			<Faq />
			<Testimonials />
			<AutoSlider />
		</>
	);
}

export default HomeEight;
