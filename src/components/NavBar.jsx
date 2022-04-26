import { AllRouteList } from "../routes/AllRoutesListed";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className='NavBar'>
			{AllRouteList.map((value) => (
				<Link className='navb' key={value.name} to={value.path}>
					{value.name}
				</Link>
			))}
		</div>
	);
}
export default NavBar;
