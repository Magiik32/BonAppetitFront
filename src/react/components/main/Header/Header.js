import { Button } from "semantic-ui-react";
import logo from "../../../../images/logo.png";
import { toast } from "react-toastify";

const Header = () => {
	return (
		<header>
			{/* Logo */}
			<div id="area-header-logo">
				<img id="logo-bonapp-header" src={logo} alt="logo_bonAppetit" />
			</div>

			{/* Menu */}
			<nav id="area-header-nav">
				<ul id="top-nav">
					<li>Accueil</li>
					<li>Mes recettes</li>
					<li>Mes brigades</li>
					<li>Administration</li>
				</ul>
			</nav>

			{/* Account managment */}
			<div id="area-header-account">
				<Button.Group size="large">
					<Button
						color="teal"
						onClick={() => toast.success("TODO s'enregistrer")}
					>
						S'inscrire
					</Button>
					<Button.Or text={"ou"} />
					<Button
						color="grey"
						onClick={() => toast.error("TODO se connecter")}
					>
						Se connecter
					</Button>
				</Button.Group>
			</div>

			{/* Slider */}
			<div id="area-header-slider">Slider ici</div>
		</header>
	);
};

export default Header;
