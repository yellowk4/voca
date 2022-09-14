// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

export default function Day() {

	const { day } = useParams<{ day: string }>(); // <>제네릭 문법?

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