// import image1 from "@/public/images/service/image1.png";
// import image2 from "@/public/images/service/image2.png";
// import image3 from "@/public/images/service/image3.png";
// import image4 from "@/public/images/service/image4.png";
// import image5 from "@/public/images/service/image5.png";
// import image6 from "@/public/images/service/image6.png";
// import FadeInStagger from "../../animation/FadeInStagger";
// import ServiceCard from "./ServiceCard";

// const servicesData = [
// 	{
// 		id: crypto.randomUUID(),
// 		title: "User Interface/Experience",
// 		description:
// 			"UI & UX are crucial aspects of design digital products & services. UI refers to the visual elements that users.",
// 		icon: image1,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Search Engine Optimization",
// 		description:
// 			"The goal of SEO to increase organic (non-paid) traffic website by ranking higher in search engine results.",
// 		icon: image2,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Performance Management",
// 		description: "Process designed to continuously is a monitor measure & enhance the performance of individuals.",
// 		icon: image3,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Leadership Development",
// 		description:
// 			"The process of the enhancing ablities skill and quqlities of the individuals to become effective to leaders.",
// 		icon: image4,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Training & Development",
// 		description:
// 			"Involves assessing the skills equired for various roles the organization and identifying gaps between current.",
// 		icon: image5,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Resource Allocation",
// 		description:
// 			"Assessing requirements of projects to initiatives or operational activities or determine the types & quantities.",
// 		icon: image6,
// 	},
// ];

// function Services() {
// 	return (
// 		<section className="sofax-section-padding">
// 			<div className="container">
// 				<div className="row">
// 					<div className="sofax-section-title center">
// 						<h2>We provide all effective services</h2>
// 					</div>
// 					{servicesData.map((service, index) => (
// 						<FadeInStagger key={service.id} index={index} className="col-lg-6">
// 							<ServiceCard service={service} />
// 						</FadeInStagger>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Services;



"use client";
import Image from 'next/image';
import Illustration1 from '@/public/images/v8/illustration1v8.png';
import Illustration2 from '@/public/images/v8/illustration2v8.png';
import Illustration3 from '@/public/images/v8/illustration3v8.png';
import Illustration4 from '@/public/images/v8/illustration4v8.png';
import Illustration5 from '@/public/images/v8/illustration5v8.png';
import Illustration6 from '@/public/images/v8/illustration6v8.png';

function Services() {
	return (
		<section className="sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Our Digital Marketing Services</h2>
					</div>
				</div>
				
				<div className="container">
					<div className="sofax-portfolio-column row">
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration1} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>Web Design and Development</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Product design encompasses both UI/UX design but it also involves a broader
										understanding of the entire product.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration2} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>Search Engine Optimization (SEO)</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Search engine optimization can help you get found by the right customers when they search for the products or services you offer.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration3} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>Content Marketing</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Product design encompasses both UI/UX design but it also involves a broader
										understanding of the entire product.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration4} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>App Development</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Product design encompasses both UI/UX design but it also involves a broader
										understanding of the entire product.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration5} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>Graphic Designing</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Product design encompasses both UI/UX design but it also involves a broader
										understanding of the entire product.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="collection-grid-item mix col-lg-4 col-md-6 business consultancy">
							<div className="sofax-career-content-wrapper">
								<div className="sofax-career-content-autohre-wrap">
									<Image src={Illustration6} alt="Illustration" width={200} height={150} />
									<div className="sofax-career-content-data">
										<h4>E Commerce Development</h4>
									</div>
								</div>
								<div className="sofax-career-content-text">
									<p>
										Product design encompasses both UI/UX design but it also involves a broader
										understanding of the entire product.
									</p>
								</div>
								<div className="sofax-career-content-icon-text-wrapper2">
									<div className="sofax-career-content-icon-text-wrap">
										<div className="sofax-career-content-icon">
											<a href="single-career.html">
												<svg
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
														fill="white"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
