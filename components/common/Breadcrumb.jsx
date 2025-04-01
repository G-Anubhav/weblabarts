import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";
function BreadCrumb({ bgImage, title }) {
	return (
		<div className="sofax-breadcrumb"
		style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.88)), url(${bgImage.src})`,
		}}>
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Image src={Arrow} alt="arrow" />
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
