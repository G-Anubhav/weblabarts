import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Icon4 from "@/public/images/contact/icon6.png";
import Image from "next/image";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Chat with us</h4>
					<p>We're waiting to help you every Monday-Saturday from 10 AM to 8 PM IST easily.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Give us a call</h4>
					<p>Give us a ring at (+91-768-990-3145). Every Monday-Saturday from 10 AM to 8 PM.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email us</h4>
					<p>Drop us an email at <a href="mailto:itsanubhavgoyal@gmail.com">itsanubhavgoyal@gmail.com</a> and you'll receive a reply within 24 hours.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon4} alt="Location Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Corporate Office</h4>
					<p>Noida, Uttar Pradesh.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
