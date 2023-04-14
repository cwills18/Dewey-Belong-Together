export const getBooksFromSearch = async (searchTerm) => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${searchTerm}`);
	if (!response.ok) {
		throw new Error("No search results found. Try again with a different search term.");
	}
	const results = await response.json();
	if (results.totalItems) {
		const { items } = results;
		const booksInfo = items.map((item) => item.volumeInfo);
		return booksInfo;
	}
	throw new Error("Something went wrong. Please try again.");
};

/* 	if (results.length < 1) {
		throw new Error("No books found for search term " + searchTerm);
	}
	console.log(results); */
