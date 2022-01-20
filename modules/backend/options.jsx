import React, { useState } from "react";
import axios from "axios";

export default function Options({ onChangeState, allItems }) {
	const [csvString, updateCSVString] = useState("");

	const getCSVURI = async (items) => {
		const refString = await axios
			.post("/api/inventory/csv", items)
			.then((res) => res.data);

		updateCSVString(refString);
	};

	return (
		<>
			<div className='optionsContainer'>
				<button
					className='button-default'
					onClick={() => onChangeState("CREATE")}
					style={{
						margin: "1vw 1vw 0 0",
						color: "#95BF46",
						borderColor: "#95BF46",
					}}
				>
					New Item
				</button>
				<button
					className='button-default'
					onClick={() => getCSVURI(allItems)}
					style={{
						margin: "1vw 1vw 0 0",
						color: "#95BF46",
						borderColor: "#95BF46",
					}}
				>
					<a href={csvString} target='_blank' rel='noreferrer'>
						Get CSV
					</a>
				</button>
			</div>
			<style jsx>{`
				.optionsContainer {
					margin: 2% 0;
				}
			`}</style>
		</>
	);
}
