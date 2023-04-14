import React, { createContext, useState } from "react";

export const FindBooksContext = createContext();

const FindBooksProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [bookModal, setBookModal] = useState({});
	const [bookReturnError, setBookReturnError] = useState("");

	const toPass = { books, setBooks, bookModal, setBookModal, bookReturnError, setBookReturnError, isLoading, setIsLoading };

	return <FindBooksContext.Provider value={toPass}>{children}</FindBooksContext.Provider>;
};

export default FindBooksProvider;
