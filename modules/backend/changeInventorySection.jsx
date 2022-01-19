import React, { useState } from "react";
import styles from "./changeInventorySection.module.scss";

export default function ChangeInventorySection({
	onChangeState,
	changingState,
}) {
	const [info, setInfo] = useState({
		title: "",
		category: "",
		price: "",
		description: "",
	});

	function changeField(e, property) {
		setInfo((prevInfo) => {
			let newInfo = Object.assign({}, prevInfo);
			newInfo[property] = e.target.value;
			return { ...newInfo };
		});
	}

	return (
		<div className={styles.inventoryContainer}>
			<div className={styles.inventoryWrapper}>
				<p>Title</p>
				<input type='text' onChange={(e) => changeField(e, "title")} />
				<p>Category</p>
				<input type='text' onChange={(e) => changeField(e, "category")} />
				<p>Price</p>
				<input type='text' onChange={(e) => changeField(e, "price")} />
				<p>Description</p>
				<input type='text' onChange={(e) => changeField(e, "description")} />
				<button onClick={() => onChangeState(changingState, info)}>
					{changingState}
				</button>
			</div>
		</div>
	);
}
