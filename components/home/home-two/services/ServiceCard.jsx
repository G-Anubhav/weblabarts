import Image from "next/image";
import Link from "next/link";

function ServiceCard({ service: { icon, title, description } }) {
	return (
		<div>
			<div className="sofax-features-iconv7">
				<Image src={icon} alt="icon" />
			</div>
			<div className="sofax-features-contentv7">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ServiceCard;
