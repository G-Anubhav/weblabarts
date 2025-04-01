import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/about/banner.jpg";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
export const metadata = {
	title: "Sofax || Responsive Next.js Template Career Page",
	description: "Sofax || Responsive Next.js Template",
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title="Career" bgImage={Banner} />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
