import React from "react";

export default function Notes() {
	return (
		<>
			<div className='notesContainer'>
				<p>
					<b>
						<u>Note: </u>
					</b>
					{
						"Please use Google Chrome for the best experience. You may have to reload if the data is not loading. Because I using an database placeholder, requests may be slower. Additionally, you may have to press buttons more than once (for example the CSV button may redirect you initially, but will work afterwords on Chrome). I'm sorry for the inconvenience, I just focused on polishing the backend/API!"
					}
				</p>
			</div>
			<style jsx>
				{`
					.notesContainer {
						margin: 5% 0;
					}
				`}
			</style>
		</>
	);
}
