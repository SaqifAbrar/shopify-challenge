import React from "react";
import SkeletonCard from "../../common/components/skeletonCard";

export default function RoverSkeletonSection() {
	return (
		<div>
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
		</div>
	);
}
