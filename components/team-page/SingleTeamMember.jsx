import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../animation/FadeInUp";

function SingleTeamMember({ member: { image, title, name, className, socials } }) {
	return (
		<div className={`sofax-team-member-wrap ${className}`}>
			<FadeInUp className="sofax-team-member-img">
				<Image src={image} alt="team member" />
				<div className="sofax-team-member-hover-content">
					<Link href="/single-team">
						<h4>
							{name}
						</h4>
					</Link>
					<div className="sofax-social-icons">
						{socials.map((social, index) => (
							<Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
								{social.icon}
							</Link>
						))}
					</div>
				</div>
			</FadeInUp>
			<div className="sofax-team-member-content">
				<h4>{name}</h4>
				<p>{title}</p>
			</div>
		</div>
	);
}

export default SingleTeamMember;