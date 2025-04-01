import Footer from "@/components/home/home-eight/footer";
import Cursor from "@/components/common/cursor/cursor";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function LayoutEight({ children }) {
	return (
		<>
			<Header />
			<Cursor />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;
