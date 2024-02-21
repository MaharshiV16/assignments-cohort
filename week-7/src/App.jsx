import { useRef, useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import BackgroundChanger from "./components/BackgroundChanger/BackgroundChanger";

function App() {
	const appRef = useRef();

	return (
		<div ref={appRef} className='App'>
			{/* <Profile /> */}
			<BackgroundChanger reference={appRef} />
		</div>
	);
}

export default App;
