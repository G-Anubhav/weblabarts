import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/about/banner.jpg";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Portfolio Page",
	description: "Sofax || Responsive Next.js Template",
};
function SinglePortfolioPage() {
	return (
		<>
			<BreadCrumb title="Portfolio Deatails" bgImage={Banner} />
			<PortfolioDetails />
			<RelatedProject />
			<AutoSlider />
		</>
	);
}

export default SinglePortfolioPage;
