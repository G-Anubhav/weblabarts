import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/web-develoment/banner1.jpg";
import Thumb from "@/public/images/v10/thumb1v10.png";
import Hero from "@/components/home/home-ten/hero";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/web-dev";
import Projects from "@/components/home/home-eight/projects";
import Features from "@/components/home/home-two/services";
import Testimonials from "@/components/home/home-eight/testimonials";
import Prices from "@/components/home/home-eight/price-plan";

export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Web Design & Development" bgImage={Banner} />
			<Hero serviceId={1} imageSrc={Thumb} />
			<Features />
			<AutoSlider />
			<SingleServiceDetails />
			<Prices />
			<Projects />
			<Testimonials />
			<Faq />
		</>
	);
}

export default SingleService;
