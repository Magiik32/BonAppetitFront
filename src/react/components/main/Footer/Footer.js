import { Button } from "semantic-ui-react";
import logo from "../../../../images/logo.png";

const Footer = () => {
	return (
		<footer>
			<p>
				<img alt="logo_bonAppetit" src={logo} id="logo-bonapp-footer" />
				&copy; Copyright {new Date().getFullYear()} - Tous droits
				réservés
			</p>
			<div>
				<Button circular color="facebook" icon="facebook" />
				<Button circular color="instagram" icon="instagram" />
				<Button circular color="twitter" icon="twitter" />
				<Button circular color="linkedin" icon="linkedin" />
				<Button circular color="youtube" icon="youtube" />
			</div>
		</footer>
	);
};

export default Footer;
