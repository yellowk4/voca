import { useEffect, useState } from "react";

export default function useFetch(url: string) {
	const [data, setData] = useState([]);

	useEffect(() => {

		fetch(url)
		.then(res => {
			return res.json();
		})
		.then(data => {
			setData(data);
		});

	}, [url]);  // 의존성 배열, 상태값 이후에 딱 한번만 실행할때는 빈배열

	return data;

}