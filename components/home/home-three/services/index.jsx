import Icon5 from "@/public/images/v3/icon5.png";
import Icon6 from "@/public/images/v3/icon6.png";
import Icon7 from "@/public/images/v3/icon7.png";
import Icon8 from "@/public/images/v3/icon8.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Step 1: Discover & Strategize",
		description:
			"Understand client needs and define goals with a tailored strategy for success.",
		icon: Icon5,
	},
	{
		id: crypto.randomUUID(),
		title: "Step 2: Design & Prototype",
		description:
			"Craft visually engaging designs and interactive prototypes for seamless user experiences.",
		icon: Icon6,
	},
	{
		id: crypto.randomUUID(),
		title: "Step 3: Develop & Optimize",
		description:
			"Build robust, responsive solutions while optimizing performance and functionality.",
		icon: Icon8,
	},
	{
		id: crypto.randomUUID(),
		title: "Step 4: Launch & Support",
		description:
			"Deliver final product with ongoing support to ensure smooth operations.",
		icon: Icon7,
	},
];
function Services() {
	return (
		<section className="sofax-section-padding bg-light" id="service">
			<div className="container">
				{/* <div className="mt-5 sofax-section-title center">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> The source of truth for your business </TextSplitFadeIn>
								</h2>
							</div>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex align-items-center justify-content-end">
							<FadeInUp className="sofax-title-btn">
								<Link
									className="sofax-default-btn pill"
									data-text=" View all services "
									href="/service"
								>
									<span className="button-wraper"> View all services </span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div> */}
				<div className="mt-5 sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn> Our Process to Deliver Excellence </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="row">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
