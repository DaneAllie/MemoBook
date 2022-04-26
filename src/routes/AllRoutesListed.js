import Home from "../page/Home";
import Memo from "../page/Memo";
import Game from "../page/Game";

export const AllRouteList = [
	{ name: "Home", path: "/", comp: <Home /> },
	{ name: "Memo", path: "/Memo,", comp: <Memo /> },
	{ name: "Game", path: "/Game,", comp: <Game /> }
];

/*export const AllRouteObj = [
	Home :{ name: "Home", path: "/", comp: <Home /> },
	Contact: { name: "Contact", path: "/contact,", comp: <Contact /> },
	Projects: { name: "Projects", path: "/projects,", comp: <Projects /> },
	Skills: { name: "Skills", path: "/skills,", comp: <Skills /> }
];
}*/
