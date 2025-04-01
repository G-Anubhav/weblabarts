import Footer from "@/components/home/home-eight/footer";
import Cursor from "@/components/common/cursor/cursor";
import Header from "@/components/common/header";
function LayoutEleven({ children }) {
	return (
		<>
			<Cursor />
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;
