"use client";
import Image5 from "@/public/images/v5/image5.png";
import Shape1 from "@/public/images/v5/shape2.png";
import Shape2 from "@/public/images/v5/shape5.png";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: 1,
		rating: 5,
		review: "Incredible experience with this digital agency! They took the time to understand our business, and it reflected in the outstanding website they created. Truly a partner in our success!",
		author: {
			name: "Dorald Harfeso",
			title: "Co-Founder",
			image: Image5,
		},
	},
	{
		id: 2,
		rating: 5,
		review: "Amazing experience with this digital agency! They invested time to grasp our business and delivered an exceptional website. Truly a collaborator in our success!",
		author: {
			name: "Harfeso Dorald",
			title: "Co-Founder",
			image: Image5,
		},
	},
];
const swiperSettings = {
	slidesPerView: 1,
	loop: true,
	navigation: true,
	modules: [Navigation],
};
function Testimonials() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-xl-7">
						<div className="sofax-default-content sofax-default-contentv5 tac2">
							<div className="tg-heading-subheading animation-style3">
								<h2>See what our clients have said about us</h2>
							</div>
							<p>
								We offer a range of services to help clients establish & enhance their digital presence,
								reach their target audience and achieve their online marketing goals.
							</p>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="sofax-testimonial-2column-sliderv5">
							{
								<Swiper {...swiperSettings}>
									{testimonialsData.map((testimonial) => (
										<SwiperSlide key={testimonial.id}>
											<TestimonialCard testimonial={testimonial} />
										</SwiperSlide>
									))}
								</Swiper>
							}
						</div>
					</div>
					<div className="sofax-testimonial-shape1v5">
						<Image src={Shape1} alt="Shape" />
					</div>
					<div className="sofax-testimonial-shape2v5">
						<Image src={Shape2} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
