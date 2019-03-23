import Head from "next/head";
import Navbar from "../components/Navbar";

/**
 * !props.children:
 * This is a reference to the child elements
 * that are wrapped around the parent component.
 *
 */
const Layout = props => (
	<div>
		<Head>
			<title>BitzPrice</title>
			<link
				rel="stylesheet"
				href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
			/>
		</Head>
		<Navbar />
		<div className="container">{props.children}</div>
	</div>
);

export default Layout;
