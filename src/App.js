import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import Footer from "./react/components/main/Footer/Footer";
import Header from "./react/components/main/Header/Header";

const App = () => {
	return (
		<>
			<Header />
			<aside>Filters</aside>
			<main></main>
			<Footer />
			<ToastContainer
				position="bottom-right"
				autoClose={6000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</>
	);
};

export default App;
