import React, { useState } from "react";

import "../App.css";

export default function ButtonCounterComponent() {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>
				Este é um componente de botão contador simples em TypeScript com React.
			</p>
			<button className="button" onClick={handleClick}>
				Contar
			</button>
			<button className="button" onClick={() => setCount(count - 1)}>
				Diminuir
			</button>
			<button className="button" onClick={() => setCount(0)}>
				Zerar
			</button>
			<p>Contagem: {count}</p>
		</div>
	);
}
