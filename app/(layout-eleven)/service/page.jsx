import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/service/banner1.jpg"
import Faq from "@/components/home/home-five/faq";
import Services from "@/components/home/home-eight/services";
import Testimonials from "@/components/home/home-two/testimonials";
import Steps from "@/components/home/home-three/services";
export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Services" bgImage={Banner} />
			<Services />
			<AutoSlider />
			<Steps />
			<Testimonials />
			{/* <Faq /> */}
		</>
	);
}

export default ServicePage;
