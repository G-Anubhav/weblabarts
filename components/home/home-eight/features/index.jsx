import icon1 from "@/public/images/v8/icon3v8.png";
import icon2 from "@/public/images/v8/icon4v8.png";
import icon3 from "@/public/images/v8/icon5v8.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "IT Management",
		description: "Monitoring and analysis of digital performance metrics to assess the effectiveness of online campaigns.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Branding and Design Services",
		description: "Develop brand identity, design logo, and create visual elements for a strong brand presence.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Data Security and Compliance",
		description: "Implementation of security measures and compliance with industry standards to protect digital assets.",
	},
];
 function services(){

 }


function Features() {
	return (
		<section className="sofax-features-section-v8">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
