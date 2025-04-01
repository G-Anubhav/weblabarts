import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./socialIcons";
import image1 from "@/public/images/about/image1.png";
import image2 from "@/public/images/about/image2.png";
import image3 from "@/public/images/about/image3.png";
import image4 from "@/public/images/about/image4.png";
import image5 from "@/public/images/about/image5.png";
import image6 from "@/public/images/about/image6.png";
import image7 from "@/public/images/about/image7.png";
import image8 from "@/public/images/about/image8.png";
import FadeInStagger from "../animation/FadeInStagger";
import SingleTeamMember from "./SingleTeamMember";

const teamMembers = [
	[
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Founder & CEO",
			image: image1,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "sofax-team-member-aboutus",
		},
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Marketing expert",
			image: image5,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
	],

	[
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Chief financial officer",
			image: image2,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Chief executive officer",
			image: image6,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Chief Strategy Officer",
			image: image3,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "sofax-team-member-aboutus",
		},
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Creative director",
			image: image7,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Director of HR",
			image: image4,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
		{
			id: crypto.randomUUID(),
			name: "Member One",
			title: "Market researcher",
			image: image8,
			socials: [
				{ link: "https://twitter.com/", icon: FacebookIcon },
				{ link: "https://linkedin.com/", icon: InstagramIcon },
				{ link: "https://github.com/", icon: LinkedInIcon },
			],
			className: "",
		},
	],
];

function TeamMembers() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<h2>Meet the team work behind our succees</h2>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text our-teaminner">
								<p>
									Our team consists of a group of talents. We solve customer problems with sincerity.
									All of our team members are very intelligent and skilled.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamMembers.map((items, index) => (
						<FadeInStagger key={index} className="col-lg-3 col-md-6" index={index}>
							{items.map((item) => (
								<SingleTeamMember key={item.id} member={item} />
							))}
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default TeamMembers;
