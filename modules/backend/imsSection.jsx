import React, { useState, useEffect } from "react";
import axios from "axios";
import ChangeInventorySection from "./changeInventorySection";
import ItemsSection from "./itemsSection";
import Options from "./options";
import styles from "./imsSection.module.scss";
import Notes from "./notes";

/* central state management component */
export default function IMSSection() {
	/* state management here would be very similar if there was a real database */

	const [allItems, setAllItems] = useState([]);
	const [changingState, setChangingState] = useState("");
	const [updateItem, setUpdateItem] = useState({});

	useEffect(() => {
		// prevent race conditions with nested async function
		async function fetchData() {
			const inventoryItems = await axios
				.get("/api/inventory")
				.then((res) => res.data);

			setAllItems(inventoryItems);
		}
		fetchData();
	}, []);

	const handleChangeState = async (state, item) => {
		if (item !== undefined) {
			if (item.id) setUpdateItem(item);

			switch (state) {
				case "CREATE":
					const createdItem = await axios
						.post("/api/inventory", item)
						.then((res) => res.data);

					setAllItems((prevAllItems) => {
						return [createdItem, ...prevAllItems];
					});
					state = "";
					break;
				case "UPDATE":
					if (Object.keys(updateItem).length) {
						const updatedItem = await axios
							.put(`/api/inventory/${updateItem.id}`, item)
							.then((res) => res.data);

						const updateIndex = allItems.findIndex(
							(i) => i.id === updateItem.id,
						);

						setAllItems((prevItems) => {
							prevItems[updateIndex] = updatedItem;
							return prevItems;
						});

						setUpdateItem({});
						state = "";
					}
					break;
				case "DELETE":
					await axios.delete(`/api/inventory/${item.id}`); //calling theoretical server

					setAllItems((prevAllItems) => {
						return prevAllItems.filter((i) => i.id !== item.id);
					});
					state = "";
					break;
				default:
				/* can return error message for front-end display */
			}
		}
		setChangingState(state);
	};

	/* controlled components */
	return (
		<div className={styles.imsContainer}>
			<div className={styles.imsWrapper}>
				<Notes />
				<Options onChangeState={handleChangeState} allItems={allItems} />
				{changingState && (
					<ChangeInventorySection
						changingState={changingState}
						onChangeState={handleChangeState}
					/>
				)}
				<ItemsSection items={allItems} onChangeState={handleChangeState} />
			</div>
		</div>
	);
}
