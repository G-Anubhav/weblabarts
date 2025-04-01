import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/about/banner.jpg";
import Faq from "@/components/faq-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template FAQ Page",
	description: "Sofax || Responsive Next.js Template",
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title="Faq" bgImage={Banner} />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default FaqPage;
