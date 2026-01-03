import React from "react";
import "./App.css";

import ShowInfoComponent, { Skills } from "./components/ShowInfoComponent";
import ButtonCounterComponent from "./components/ButtonCounterComponent";
import ShowInfoCurser from "./components/ShowInfoCurser";
import CardComponent from "./components/CardComponent";

type textOrNull = string | null;

interface TypeContext {
	language: string;
	framework: string;
	version: number;
}

export const AppContext = React.createContext<TypeContext | null>(null);

function App() {
	const title: string = "TypeScript com React";
	const subtitle: string =
		"Essa é a nossa primeira aplicação utilizando TypeScript com React!";

	const name: string = "Paulo";
	const age: number = 19;
	const isStudent: boolean = true;

	const userGreeting = (userName: string): string => {
		return `Olá, ${userName}! Bem-vindo ao TypeScript com React.`;
	};

	const containsText: textOrNull = "Este é um texto que pode ser nulo.";
	const emptyText: textOrNull = null;
	const isText: string = emptyText ?? "O valor é nulo.";

	const contextValue: TypeContext = {
		language: "TypeScript",
		framework: "React",
		version: 18,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<div className="App">
				<h1 className="title">{title}</h1>
				<p className="description">{subtitle}</p>
				<div className="content">
					<div className="contentTitle"></div>
					<div className="cards">
						<div className="card">
							<h2 className="cardTitle">Aula de variáv eis e tipos:</h2>
							<div className="cardContent">
								<p>Nome: {name}</p>
								<p>Idade: {age}</p>
								<p>É estudante: {isStudent ? "Sim" : "Não"}</p>
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula de funções:</h2>
							<div className="cardContent">
								<p>{userGreeting(name)}</p>
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula de componentes:</h2>
							<div className="cardContent">
								<CardComponent />
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula de props em componentes:</h2>
							<div className="cardContent">
								<ShowInfoComponent
									name={name}
									age={age}
									isStudent={isStudent}
									nivelTypeScript={Skills.Beginner}
									nivelReact={Skills.Intermediate}
								/>
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula de useState:</h2>
							<div className="cardContent">
								<ButtonCounterComponent />
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula sobre enums:</h2>
							<div className="cardContent">
								<p>Texto com conteúdo: {containsText}</p>
								<p>Texto vazio: {isText}</p>
							</div>
						</div>
						<div className="card">
							<h2 className="cardTitle">Aula sobre context API:</h2>
							<div className="cardContent">
								<ShowInfoCurser />
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
