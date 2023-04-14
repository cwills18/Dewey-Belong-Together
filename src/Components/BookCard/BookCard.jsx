import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book, overflowing }) => {
	const { title, subtitle, authors, imageLinks, industryIdentifiers } = book;
	let { description } = book;

	if (overflowing) {
		const overflowLimit = 401;
		description = description.slice(0, overflowLimit);
		const lastSpace = description.lastIndexOf(" ");
		description = description.slice(0, lastSpace);
	}

	const ISBN = industryIdentifiers[0].identifier;

	return (
		<div className={styles.BookCard}>
			{imageLinks && (
				<div className={styles.ImgHolder}>
					<img src={imageLinks.thumbnail} alt={title} className={styles.ImgHolder_Img} />
				</div>
			)}

			<h4 className={styles.Title}>{title && subtitle ? `${title}: ` : title ? `${title}` : "Unknown Title"}</h4>

			{subtitle && <h4 className={styles.Subtitle}>{subtitle}</h4>}

			<h5 className={styles.Authors}>{authors ? authors.join(", ") : "Unknown Author"}</h5>
			<div className={styles.Description}>
				<p className={styles.Description_MainText}>{description ?? "No description available."}</p>
				{overflowing && <p className={styles.Description_ReadMore}>read more...</p>}
			</div>
		</div>
	);
};

export default BookCard;
