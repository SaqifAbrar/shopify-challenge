import React, { useState, useEffect } from "react";
import ChangeInventorySection from "./changeInventorySection";
import styles from "./imsSection.module.scss";
import ItemsSection from "./itemsSection";
import Options from "./options";
import axios from "axios";

/* central state management component */
export default function IMSSection() {
	/* items and tempItems wouldn't be neccesary but I'm using a fake external database API so it is neccesary */
	const [items, setItems] = useState([]);
	const [tempItems, setTempItems] = useState([]);
	const [allItems, setAllItems] = useState([]);
	const [changingState, setChangingState] = useState("");
	const [updateItemId, setUpdateItemId] = useState({});

	useEffect(() => {
		// prevent race conditions with nested async function
		async function fetchData() {
			const inventoryItems = await axios
				.get("/api/inventory")
				.then((res) => res.data);
			setItems(inventoryItems);
			setAllItems(inventoryItems);
		}
		fetchData();
	}, []);

	const handleChangeState = async (state, item) => {
		console.log(state, item);
		if (item !== undefined) {
			const check = items.some((i) => i.id === item.id);
			const workingItems = check ? [...items] : [...tempItems]; ///since there is no database, tempItems is included

			switch (state) {
				case "CREATE":
					const createdItem = await axios
						.post("/api/inventory", item)
						.then((res) => res.data);

					setTempItems((prevTempItems) => {
						return [createdItem, ...prevTempItems];
					});
					setAllItems((prevAllItems) => {
						return [createdItem, ...prevAllItems];
					});
					state = "";
					break;
				case "UPDATE":
					break;
				case "DELETE":
					setItems((prevItems) => {
						return prevItems.filter((i) => i.id !== item.id);
					});
					setTempItems((prevTempItems) => {
						return prevTempItems.filter((i) => i.id !== item.id);
					});
					setAllItems((prevAllItems) => {
						return prevAllItems.filter((i) => i.id !== item.id);
					});
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
				<Options onChangeState={handleChangeState} />
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
