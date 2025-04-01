import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/v1/banner.jpg"
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import Testimonials from "@/components/home/home-five/testimonials";
import PricePlan from "@/components/home/home-one/price-plan";
import Projects from "@/components/home/home-eight/projects";
export const metadata = {
	title: "Best Web Designing Agency in Delhi Pricing Page",
	description: "Best Web Designing Agency in Delhi",
};
function Pricing() {
	return (
		<>
			<BreadCrumb title="Packages" bgImage={Banner} />
			<PricePlan />
			{/* <AutoSlider /> */}
			<Projects />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
