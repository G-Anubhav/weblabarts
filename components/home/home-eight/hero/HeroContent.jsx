import Shape from "@/public/images/v5/shape1.png";
import Image from "next/image";
import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroContent() {
	return (
		<div className="sofax-hero-content hero-v8">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				We make your Digital Dreams <span> come true </span>
			</h1>
			<div className="sofax-footer-shapev8">
				<Image src={Shape} alt="shape" />
			</div>
			<p>
				We are a specialized agency for businesses looking to increase their online presence and brand
				awareness who execute comprehensive social media strategies tailored to meet our client's unique
				goals and objectives.
			</p>
			<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text="Explore More" href="/service">
						<span className="button-wraper">Explore More</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill dark-btn" data-text="Contact Us" href="/contact-us">
						<span className="button-wraper">Contact Us</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
