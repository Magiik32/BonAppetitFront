import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import Footer from "./react/components/main/Footer/Footer";
import Header from "./react/components/main/Header/Header";
import RecipePreview from "./react/components/main/Recipe/RecipePreview/RecipePreview";

const App = () => {
	return (
		<>
			<Header />
			<aside>Filters</aside>
			<main>
				<RecipePreview />
			</main>
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
