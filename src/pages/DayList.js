import { Link } from "react-router-dom";
import dummy from "../db/data.json"

export default function DayList() {
	console.log(dummy);

	return <ul className="list_day">
		{dummy.days.map(day => (
			<li key={day.id}>
				{/* Day {day.day} */}
				<Link to={`/day/${day.day}`}>Day {day.day}</Link>
			</li>
		))}
	</ul>
}