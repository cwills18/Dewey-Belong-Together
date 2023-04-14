import React, { useState, createContext, useContext } from "react";
import { FindBooksContext } from "./FindBooksProvider";

export const SearchTermContext = createContext();

const SearchTermProvider = ({ children }) => {
	const [search, setSearch] = useState("");

	const { setBooks, setBookModal } = useContext(FindBooksContext);

	const resetSearch = () => {
		setSearch("");
		setBooks([]);
		setBookModal({});
	};

	const toPass = { search, setSearch, resetSearch };

	return <SearchTermContext.Provider value={toPass}>{children}</SearchTermContext.Provider>;
};

export default SearchTermProvider;
