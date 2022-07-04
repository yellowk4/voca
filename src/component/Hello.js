import World from "./World";
import styles from "./Hello.module.css";

const Hello = () => {
	return (
		<div>
			<h1>Hello</h1>
			<World />
			<div className={styles.box}>Hello</div>
		</div>
	)
};

export default Hello;