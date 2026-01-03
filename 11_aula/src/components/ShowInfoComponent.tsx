import React from "react";
import "../App.css";

type Props = {
	name: string;
	age: number;
	isStudent: boolean;
	nivelTypeScript?: Skills;
	nivelReact?: Skills;
};

export enum Skills {
	Beginner = "Iniciante",
	Intermediate = "Intermediário",
	Advanced = "Avançado",
}

export default function ShowInfoComponent({
	name,
	age,
	isStudent,
	nivelTypeScript,
	nivelReact,
}: Props) {
	return (
		<div className="cardContent">
			<p>Nome: {name}</p>
			<p>Idade: {age}</p>
			<p>É estudante: {isStudent ? "Sim" : "Não"}</p>
			<p>Nível de habilidade em TypeScript: {nivelTypeScript}</p>
			<p>Nível de habilidade em React: {nivelReact}</p>
		</div>
	);
}
