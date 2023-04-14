import React, { useContext } from "react";
import { FindBooksContext } from "../../Contexts/FindBooksProvider";
import styles from "./BookCardDetailed.module.scss";

const BookCard_Detailed = () => {
	/* 	const { bookModal } = useContext(FindBooksContext);
	const { title, subtitle, authors, publishedDate, imageLinks, description, categories, averageRating, ratingsCount, pageCount } = bookModal; */

	return (
		<div className={styles.BookCard}>
			{/* 			{imageLinks && (
				<div className={styles.ImgHolder}>
					<img src={imageLinks.thumbnail} alt={title} className={styles.ImgHolder_Img} />
				</div>
			)}
			<h4 className={styles.Title}>{title && subtitle ? `${title}: ` : title ? `${title}` : "Unknown Title"}</h4>
			<h4 className={styles.Subtitle}>{subtitle ?? ""}</h4>
			<br />
			<h5 className={styles.DetailedCardSubHead}>Author/s</h5>
			<h6 className={styles.DetailedCardSubContent}>{authors ? `: ${authors.join(", ")}` : ": Unknown"}</h6>
			<br />
			<br />
			<h5 className={styles.DetailedCardSubHead}>Published</h5>
			<h6 className={styles.DetailedCardSubContent}>{publishedDate ? `:  ${publishedDate}` : ": Unknown"}</h6>
			<br />
			<br />
			<h5 className={styles.DetailedCardSubHead}>Genre</h5>
			<h6 className={styles.DetailedCardSubContent}>{categories ? `:  ${categories.join(", ")}` : ": Unknown"}</h6>
			<br />
			<br />
			{averageRating && <h5 className={styles.DetailedCardSubHead}>Average Rating</h5>}
			{averageRating && (
				<h6 className={styles.DetailedCardSubContent}>
					: {averageRating}/5 {ratingsCount ? `based on ${ratingsCount} reviews` : ""}
				</h6>
			)}
			{averageRating && <br />}
			{averageRating && <br />}
			{pageCount > 0 && <h5 className={styles.DetailedCardSubHead}>Page Count</h5>}
			{pageCount > 0 && <h6 className={styles.DetailedCardSubContent}>: {pageCount}</h6>}
			{pageCount > 0 && <br />}
			{pageCount > 0 && <br />}
			<h5 className={styles.DetailedCardSubHead}>Description: </h5>
			<p className={styles.Description}>{description ?? "No description available."}</p> */}
		</div>
	);
};

export default BookCard_Detailed;
