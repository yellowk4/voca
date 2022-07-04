import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";


export default function Day() {

	// const day = 1;
	// const day = useParams().day;
	const { day } = useParams();
	const wordList = dummy.words.filter(word => word.day === Number(day)); //문자 vs 숫자 비교
	
	// const a = useParams();
	// console.log(a);

	return <div>
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{wordList.map(word => (
					<Word word={word} key={word.id} />
				))}

				
			</tbody>
		</table>
	</div>
}