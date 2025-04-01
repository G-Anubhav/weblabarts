import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<section className="section sofax-section-padding2 bg-light" id="faq">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Frequently asked</h2>
					</div>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
