import "./App.scss";
import "./index.scss";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import FindBooksProvider from "./Contexts/FindBooksProvider";
import SearchTermProvider from "./Contexts/SearchTermProvider";
import HomePage from "./Containers/HomePage/HomePage";
import ResultsPage from "./Containers/ResultsPage/ResultsPage";
import BookPage from "./Containers/BookPage/BookPage";

function App() {
	return (
		<FindBooksProvider>
			<SearchTermProvider>
				<div className="App">
					<HomePage />	
// 					<BrowserRouter>
							
// 							<Routes>
// 								<Route exact path="/results" element={<ResultsPage />} />
// 								<Route exact path="/:ISBN" element={<BookPage />} />
// // 								//<Route path="/" element={} />
// 							</Routes>
		
// 					</BrowserRouter>
				</div>
			</SearchTermProvider>
		</FindBooksProvider>
	);
}

export default App;
