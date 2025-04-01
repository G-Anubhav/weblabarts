import Icon from "@/public/images/service/icon5.png";
import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
function SingleServiceDetails() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				{/* <div className="sofax-default-content inner-service1">
					<h2 className="center">Website Design & Development</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
						Repudiandae, molestiae rerum accusamus laudantium numquam eum dignissimos 
						praesentium reprehenderit, deserunt ullam quaerat quod rem sed voluptates, 
						at blanditiis nisi nobis ab. Eligendi ut corporis, voluptatem nobis sed atque 
						ex nesciunt culpa eius mollitia facilis quisquam incidunt molestias fugit. Rerum, 
						culpa id.
					</p>
					<FadeInUp className="sofax-service-content-thumb extra-mt">
						<Image src={ServiceDetails} alt="ServiceDetails" />
					</FadeInUp>
				</div> */}
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>How our agency provides Web Design services</h2>
					<div className="sofax-service-inner-details-shape">
						<Image src={Shape2} alt="Shape2" />
					</div>
				</div>

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 dark-bg">
								<h3 className="light-color">Web Design strategies</h3>
								<p>
									The broader context of a project aligning to design decisions with business goals &
									creating roadmap for achieving optimal user experiences.
								</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Measurement & analytics
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												User-centered approach
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Persona development
											</li>
										</ul>
									</div>
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Wireframing & prototyping
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Stakeholder alignment
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Iterative improvement
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="mt-30 mb-40 row">
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<h2>Our Approach</h2>
							<p>
								The approach of a digital agency typically encompasses its methodologies, philosophies,
								and strategies for delivering value to clients. Here's a general outline of what "Our
								Approach" might entail for a digital agency:
							</p>
							<div className="mt-60">
								<div className="sofax-inner-service-content-data">
									<h4>1. Understanding Client Needs</h4>
									<p>
										We start by actively listening and thoroughly understanding our clients' industries, challenges, and target audiences to ensure our solutions are aligned.
									</p>
								</div>
								<div className="sofax-inner-service-content-data">
									<h4>2. Collaborative Planning</h4>
									<p>
										Through teamwork and open collaboration, we co-create tailored strategies that meet client objectives while respecting timelines and budgets.
									</p>
								</div>
								<div className="sofax-inner-service-content-data">
									<h4>3. Strategic Analysis</h4>
									<p>
										We perform deep research, including competitor analysis, market trends, and audience segmentation, to build data-informed strategies that drive results.	
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-content-thumb">
							<Image src={Thumb2} alt="THumbs" />
						</FadeInRight>
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default SingleServiceDetails;
