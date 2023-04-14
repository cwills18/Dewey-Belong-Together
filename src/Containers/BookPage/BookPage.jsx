import React, { useContext, useEffect } from "react";
import { FindBooksContext } from "../../Contexts/FindBooksProvider";
import BookCardDetailed from "../../Components/BookCardDetailed/BookCardDetailed";
import Header from "../../Components/Header/Header";
import { NavLink, useParams } from "react-router-dom";
import styles from "./BookPage.module.scss";

const BookPage = () => {
	const { bookModal, setBookModal, books } = useContext(FindBooksContext);
	const { ISBN } = useParams();

	useEffect(() => {
		const activeBookPage = books.find((book) => {
			return book.industryIdentifiers[0].identifier === ISBN;
		});
		setBookModal(activeBookPage);
	}, [ISBN, books]);

	return (
		<div className={styles.BookPage}>
			<Header />
			<NavLink to="/results">
				<button className={styles.BackBtn}>&#11025; Back To Search</button>
			</NavLink>
			<BookCardDetailed book={bookModal} />
		</div>
	);
};

export default BookPage;
