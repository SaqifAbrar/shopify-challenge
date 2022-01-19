import React from "react";
import ItemCard from "../../common/components/itemCard";
import styles from "./itemsSection.module.scss";

export default function ItemsSection({ items, onChangeState }) {
	return (
		<div className={styles.itemsContainer}>
			<h2>Items</h2>
			{items.map((item) => (
				<ItemCard key={item.id} item={item} onChangeState={onChangeState} />
			))}
		</div>
	);
}
