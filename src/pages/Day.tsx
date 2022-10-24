// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";
import {useNavigate} from "react-router-dom";

export default function Day() {

	const { day } = useParams<{ day: string }>(); // <>제네릭 문법?
	const words : IWord[] = useFetch(`http://localhost:3030/words?day=${day}`);
	const navigate = useNavigate();


	function del() {
		if(window.confirm("삭제 하시겠습니까?")) {
			fetch(`http://localhost:3030/days/${day}`, {
				method : 'DELETE'
			}).then(res => {
				if (res.ok) {
					alert("삭제 되었습니다.");
					navigate(`/`);
				}
			})
		}
	}

	return <div>
		<h2>
			Day {day}
			<span>
				<button onClick={del} className="btn_del">Day {day} 삭제</button>
			</span>
		</h2>
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