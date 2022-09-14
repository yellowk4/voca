// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json"

export interface IDay {
	id: number;
	day: number;
}

export default function DayList() {

	const days : IDay[] = useFetch("http://localhost:3030/days");

	if(days.length === 0) {
		return <span>Loading...</span>
	}

	return ( 
		<>
			<ul className="list_day">
				{days.map(day => (
					<li key={day.id}>
						{/* Day {day.day} */}
						<Link to={`/day/${day.day}`}>Day {day.day}</Link>
					</li>
				))}
			</ul>
			
		</>
	);
}