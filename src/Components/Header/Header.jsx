import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTermContext } from "../../Contexts/SearchTermProvider";
import logo from "../../Assets/DeweyLogo.png";
import styles from "./Header.module.scss";

const Header = () => {
	const { resetSearch } = useContext(SearchTermContext);
	const navigate = useNavigate();

	const handleClick = () => {
		resetSearch();
		navigate("/");
	};

	return (
		<div className={styles.Header}>
			<img src={logo} alt="Dewey Belong Together?" className={styles.Header_Logo} onClick={handleClick} />

			<h2 className={styles.Header_Subtitle}> - Find your next great read - </h2>
		</div>
	);
};

export default Header;
