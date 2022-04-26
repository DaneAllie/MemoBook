import NavBar from "./NavBar";

function Header() {
	return (
		<div className='App'>
			<header>
				<div className='Header'>
					<h1>MemoBook</h1>
					<p className='hidesmall'>React CRUD Assignment</p>
					<NavBar />
				</div>
			</header>
		</div>
	);
}

export default Header;
