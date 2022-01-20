import React from "react";
import ItemCard from "../../common/components/itemCard";

export default function ItemsSection({ items, onChangeState }) {
	return (
		<>
			{" "}
			<div className='itemsContainer'>
				<h2>Items</h2>
				{items.map((item) => (
					<ItemCard key={item.id} item={item} onChangeState={onChangeState} />
				))}
			</div>
			<style jsx>{`
				.itemsContainer {
					margin: 1% 0;
				}
			`}</style>
		</>
	);
}
