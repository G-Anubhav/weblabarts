import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import Banner from "@/public/images/about/banner.jpg";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Team Page",
	description: "Sofax || Responsive Next.js Template",
};
function SingleTeamPage() {
	return (
		<>
			<BreadCrumb title="Team Details" bgImage={Banner} />
			<SingleTeamDetails />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default SingleTeamPage;
