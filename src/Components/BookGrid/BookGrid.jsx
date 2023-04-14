import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FindBooksContext } from "../../Contexts/FindBooksProvider";
import BookCard from "../BookCard/BookCard";
import styles from "./BookGrid.module.scss";

const BookGrid = () => {
	const { books } = useContext(FindBooksContext);

	useEffect(() => {}, [books]);

	return (
		<div className={styles.BookGrid}>
			{books &&
				books.map((book) => {
					const ISBN = book.industryIdentifiers ? book.industryIdentifiers[0].identifier : undefined;
					const description = book["description"] ?? "";
					const overflowing = description && book["description"].length > 400 ? true : false;
					if (ISBN) {
						return (
							<NavLink to={`/${ISBN}`} className={styles.ClickContainer} key={`/${ISBN}`}>
								<BookCard book={book} key={ISBN} overflowing={overflowing} />
							</NavLink>
						);
					}
				})}
		</div>
	);
};

export default BookGrid;
