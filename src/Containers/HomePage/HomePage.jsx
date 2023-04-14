import React from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./HomePage.module.scss";

const HomePage = () => {
	return (
		<div className={styles.HomePage}>
			<Header />
			<SearchBar />
		</div>
	);
};

export default HomePage;
