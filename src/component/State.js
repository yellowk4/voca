import { useState } from "react";
import UserName from "./UserName";

export default function State({ age }) {
	// let name = "Mike";
	const [name, setName] = useState('Mike');
	//const [age, setAge] = useState(props.age);
	const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

	// function changeName() {
		
	// 	// document.getElementById("name").innerText = name; // DOM 업데이트
	// 	setName(name === "Mike" ? "Jane" : "Mike");
	// 	console.log(name);
	// }

	return (
		<div>
			<h1>state</h1>
			<h2 id="name">{name}({age}) : {msg}</h2>

			<UserName name={name} />

			<button 
				onClick={() => {
					setName(name === "Mike" ? "Jane" : "Mike");
					// setAge(age + 1);
				}}
			>
				Change
			</button>
		</div>
	);
}