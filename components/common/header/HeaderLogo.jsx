"use client";
import Logo from "@/public/images/logo/weblabarts.png";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image src={Logo} alt="Logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
