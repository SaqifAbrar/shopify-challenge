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
					<button
						className='button-default'
						onClick={() => onChangeState("UPDATE", item)}
						style={{
							margin: "1vw 1vw 0 0",
							color: "#F7DC8B",
							borderColor: "#F7DC8B",
						}}
					>
						UPDATE
					</button>
					<button
						className='button-default'
						onClick={() => onChangeState("DELETE", item)}
						style={{
							margin: "1vw 1vw 0 0",
							color: "#C23A22",
							borderColor: "#C23A22",
						}}
					>
						DELETE
					</button>
				</div>
			</div>
		</div>
	);
}
