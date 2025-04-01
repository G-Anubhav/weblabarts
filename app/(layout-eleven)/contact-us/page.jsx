import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/contact/banner2.jpg";
import Contact from "@/components/contact-us-page";
import AutoSlider from "@/components/common/auto-slider";
import MyMap from "@/components/contact-us-page/MyMap";
import MyGoogleMap from "@/components/contact-us-page/GoogleMap";
import MyGoogleMapEmbed from "@/components/contact-us-page/GoogleMapEmbed";

export const metadata = {
	title: "Best Web Designing Agency in Delhi Contact Us",
	description: "Best Web Designing Agency in Delhi",
};
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" bgImage={Banner} />
			<Contact />
			{/* <MyGoogleMapEmbed /> */}
			{/* <MyMap /> */}
			{/* <MyGoogleMap /> */}
			<AutoSlider />
		</>
	);
}

export default ContactUs;
