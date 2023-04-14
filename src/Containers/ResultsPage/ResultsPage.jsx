import React, { useContext, useEffect } from "react";
import { FindBooksContext } from "../../Contexts/FindBooksProvider";
import { SearchTermContext } from "../../Contexts/SearchTermProvider";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import BookGrid from "../../Components/BookGrid/BookGrid";
import styles from "./ResultsPage.module.scss";

const ResultsPage = () => {
	const { books, bookReturnError, isLoading } = useContext(FindBooksContext);
	const { search } = useContext(SearchTermContext);

	useEffect(() => {}, [books, search]);

	return (
		<div className={styles.ResultsPage}>
			<Header />
			<SearchBar />
			{isLoading && <p className={styles.Text}>Page Loading...</p>}
			{bookReturnError && <p className={styles.Text}>{bookReturnError}</p>}
			{books && <BookGrid />}
		</div>
	);
};

export default ResultsPage;
