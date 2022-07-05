// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json"

export interface IDay {
	id: number;
	day: number;
}

export default function DayList() {
	// console.log(dummy);
	
	//const [count, setCount] = useState(0);

	// function onClick() {
	// 	setCount(count + 1);
	// }

	// function onClick2() {
	// 	setDays([
	// 		...days,
	// 		{
	// 			id: Math.random(),
	// 			day: 1,
	// 		},
	// 	]);
	// }


	// const [days, setDays] = useState([]);

	// useEffect(() => {
	// 	console.log("change");

	// 	fetch('http://localhost:3030/days')
	// 	.then(res => {
	// 		return res.json();
	// 	})
	// 	.then(data => {
	// 		setDays(data);
	// 	});

	// }, []);  // 의존성 배열, 상태값 이후에 딱 한번만 실행할때는 빈배열

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