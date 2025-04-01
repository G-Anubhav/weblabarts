import Image from "next/image";
import Link from "next/link";

function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon }, frequency }) {
	return (
		<div className={`sofax-pricing-wrap ${highlighted ? "recommended" : ""}`}>
			{highlighted && <div className="recommended-tag">Recommended</div>}
			<div className="sofax-pricing-header">
				<Image src={img} alt="icon" />
				<h3>{plan}</h3>
			</div>
			<div className="sofax-pricing-price">
				<h2>
					₹
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
					k
				</h2>

				<p className="dynamic-value"> {frequency.label}</p>
			</div>
			<div className="sofax-pricing-body">
				{/* <h5>Key features:</h5> */}
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<Image src={featureIcon} alt="feature Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-pricing-footer">
				<Link className={`sofax-default-btn  d-block pill ${!highlighted && "outline-btn"}`} href="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
