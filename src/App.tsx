// import './App.css';
// import State from './component/State';
// // import Button from './component/Button';
// // import Hello from './component/Hello';
// // import Welcome from './component/Welcome';
// // import styles from './App.module.css';

import DayList from "./pages/DayList";
import Header from "./pages/Header";
import Day from "./pages/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //Switch => Routes 바뀜
import EmptyPage from "./pages/EmptyPage";
import CreateWord from "./pages/CreateWord";
import CreateDay from "./pages/CreateDay";

const App = () => {

  return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<DayList />} />
					<Route path="/day/:day" element={<Day />} />
					<Route path="/create_word" element={<CreateWord />} />
					<Route path="/create_day" element={<CreateDay />} />
					<Route path="*" element={<EmptyPage />} />
				</Routes>
			</div>
		</BrowserRouter>
    
  );
}

export default App;
