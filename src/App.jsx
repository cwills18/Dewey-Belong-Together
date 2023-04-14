import "./App.scss";
import "./index.scss";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
					<HashRouter>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/results" element={<ResultsPage />} />
							{/* <Route path="/:ISBN" element={<BookPage />} /> */}
						</Routes>
					</HashRouter>
				</div>
			</SearchTermProvider>
		</FindBooksProvider>
	);
}

export default App;
