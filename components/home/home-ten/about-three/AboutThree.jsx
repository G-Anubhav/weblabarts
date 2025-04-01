import Thumb from "@/public/images/v10/thumb4v10.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Know anything asked about us</h2>
							</div>
							{/* <p>
								Website files on a server and providing the necessary technologies and support to keep
								the site running.
							</p> */}
							<FadeInUp className="extra-mt sofax-faq-thumbv10">
								<Image src={Thumb} alt="thumb" />
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-accordion-wrap1 sofax-accordion-wrap3 ml-70">
							<div className="sofax-accordion-section-wrapper">
								<FadeInStaggerTwo
									className="accordion sofax-accordion-section-v10"
									id="sofax-accordion"
								>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												What makes WebLabArts unique?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											We blend <b>innovation and creativity</b>, crafting digital solutions that are both functional and visually compelling for brands.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header" id="headingOne">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												Can you customize solutions for my business?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											Absolutely! We tailor <b>Web, Design, and Digital Strategies</b> to match your brand vision and unique business needs.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												How does we ensure quality in its services?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												We combine expert <b>craftsmanship, precision, and innovation</b> to deliver <b>high-quality digital solutions</b> tailored to your business needs.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
											>
												How do I start a project with WebLabArts?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseFour"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Contact us via <b>form, email, or social media</b>, and we’ll guide you through a seamless process from concept to completion.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutThree;
