import React from "react";
import styles from "./options.module.scss";

export default function Options({ onChangeState }) {
	return (
		<div className={styles.optionsContainer}>
			<button onClick={() => onChangeState("CREATE")}>New Item</button>
			<button>Get CSV</button>
		</div>
	);
}
