import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FindBooksContext } from "../../Contexts/FindBooksProvider";
import { SearchTermContext } from "../../Contexts/SearchTermProvider";
import { getBooksFromSearch } from "../../Services/GoogleBooks";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
	const { search, setSearch } = useContext(SearchTermContext);
	const { setBooks, bookReturnError, setBookReturnError, setIsLoading } = useContext(FindBooksContext);

	const navigate = useNavigate();

	const handleChange = ({ target }) => {
		setSearch(() => target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchForBook();
	};

	const handleEnterKey = (e) => {
		if (e.keyCode === 13) {
			searchForBook();
		}
	};

	const searchForBook = async () => {
		setBooks([]);
		navigate("/results");
		if (search) {
			setIsLoading(true);
			const wrapper = async () => {
				try {
					if (bookReturnError) {
						setBookReturnError("");
					}
					const data = await getBooksFromSearch(search);
					setBooks(data);
					setIsLoading(false);
				} catch (e) {
					setBookReturnError(e.message);
					setIsLoading(false);
				}
			};
			wrapper();
		}
	};

	return (
		<div className={styles.SearchBar}>
			<input
				className={styles.SearchBar_Input}
				type="text"
				placeholder="Start typing to search for a book..."
				onChange={handleChange}
				onKeyDown={handleEnterKey}
			/>
			<button className={styles.SearchBar_Btn} type="Submit" onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
