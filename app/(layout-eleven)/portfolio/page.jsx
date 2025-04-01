import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/portfolio/banner.jpg";
import AutoSlider from "@/components/common/auto-slider";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Best Web Designing Agency in Delhi Portfolio",
	description: "Best Web Designing Agency in Delhi",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" bgImage={Banner} />
			<PortfolioList />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default PortfolioPage;
