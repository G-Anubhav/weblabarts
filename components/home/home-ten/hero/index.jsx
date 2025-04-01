import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";

const heroData = [
	{
		id: 1,
		title: "Advanced Web Development for Exceptional Growth",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
	{
		id: 2,
		title: "Advanced SEO & Digital Marketing for Business Success",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
	{
		id: 3,
		title: "Expert Management for Enhanced Google Campaigns",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
	{
		id: 4,
		title: "Seamless App Development for Exceptional User Experiences",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
	{
		id: 5,
		title: "Creative Logo & Graphic Design for Visual Impact",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
	{
		id: 6,
		title: "Smart E-Commerce Solutions for Seamless Growth",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat labore dignissimos maxime veritatis cum, placeat dolore nobis sunt aspernatur modi, autem perspiciatis, rerum error consequatur tenetur aperiam aut quasi.",
	},
];

function Hero({serviceId, imageSrc}) {
	const hero = heroData.find((item) => item.id === serviceId);
	return (
		<div className=" section sofax-section-padding2 position-ralatiove" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						{hero && <HeroContent hero={hero} />}
					</div>
					<div className="col-lg-5">
						<FadeInUp className="hero-thumbv10">
							<Image src={imageSrc} alt="Thumb" />
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
