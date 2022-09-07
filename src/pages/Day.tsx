// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

export default function Day() {

	// const day = 1;
	// const day = useParams().day;
	const { day } = useParams<{ day: string }>();
	// const wordList = dummy.words.filter(word => word.day === Number(day)); //문자 vs 숫자 비교
	// const [words, setWords] = useState([]);

	// useEffect(() => {

	// 	fetch(`http://localhost:3030/words?day=${day}`)
	// 	.then(res => {
	// 		return res.json();
	// 	})
	// 	.then(data => {
	// 		setWords(data);
	// 	});

	// }, [day]);  // 의존성 배열, 상태값 이후에 딱 한번만 실행할때는 빈배열
	
	// const a = useParams();
	// console.log(a);

	const words : IWord[] = useFetch(`http://localhost:3030/words?day=${day}`);

	return <div>
		<h2>Day {day}</h2>
		{words.length === 0 && <span>Loading......</span>}
		<table>
			<tbody>
				{words.map(word => (
					<Word word={word} key={word.id} />
				))}

				
			</tbody>
		</table>
	</div>
}