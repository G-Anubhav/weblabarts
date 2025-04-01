import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/about/banner.jpg";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";

export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Service Details" bgImage={Banner} />
			<SingleServiceDetails />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default SingleService;
