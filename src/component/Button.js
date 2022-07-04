export default function Button() {
	
	function showName() {
		console.log("Tom");
	}
	function showAge2(age) {
		console.log(age);
	}

	function showText(e) {
		console.log(e.target.value);
	}

	return (
		<div>
			<h1>버튼 삽입</h1>
			<button onClick={showName}>show name</button>  
			<button
				onClick={() => {
					console.log(30);
				}}
			>show age</button>
			<button
				onClick={() => {
					showAge2(10)
				}}
			>show age2</button>

			<br />
			<br />
			<input type="text" onChange={showText} />

		</div>
	);
}