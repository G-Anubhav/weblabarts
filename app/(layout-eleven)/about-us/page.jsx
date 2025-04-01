import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/about/banner.jpg";
import BreadCrumb from "@/components/common/Breadcrumb";
import AboutOne from "@/components/home/home-five/about-one";
import Faq from "@/components/home/home-five/faq";
import Hero from "@/components/home/home-four/about-one";
import Hero2 from "@/components/home/home-four/about-two";
import Steps from "@/components/home/home-three/services";
import Features from "@/components/home/home-two/features";
import TeamMembers from "@/components/team-page/TeamMembers";
import Testimonials from "@/components/home/home-five/testimonials";

// Teams images
export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" bgImage={Banner} />
			{/* <Hero /> */}
			<Hero2 />
			<Steps />
			<Features />
			<AboutOne />
			<TeamMembers />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default AboutUs;
