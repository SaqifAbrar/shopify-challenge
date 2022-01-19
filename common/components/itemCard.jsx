import React from "react";
import styles from "./itemCard.module.scss";

export default function ItemCard({ item, onChangeState }) {
	const { title, category, price, description } = item;
	return (
		<div className={styles.itemCardContainer}>
			<div className={styles.itemCardWrapper}>
				<div className={styles.mainInfoContainer}>
					<h3>{title}</h3>
					<p>{category}</p>
				</div>
				<div className={styles.priceContainer}>
					<p>{price}</p>
				</div>
				<div className={styles.descriptionContainer}>
					<p>{description}</p>
				</div>
				<div className={styles.btnContainer}>
					<button onClick={() => onChangeState("UPDATE", item)}>UPDATE</button>
					<button onClick={() => onChangeState("DELETE", item)}>DELETE</button>
				</div>
			</div>
		</div>
	);
}
