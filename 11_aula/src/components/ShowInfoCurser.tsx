import React, { useContext } from "react";

import "../App.css";

import { AppContext } from "../App";

type Props = {};

export default function ShowInfoCurser({}: Props) {
	const details = useContext(AppContext);

	return (
		<>
			{details && (
				<div className="cardContent">
					<p> Lingugem: {details.language}</p>
					<p> Biblioteca: {details.framework}</p>
					<p> Versão: {details.version}</p>
				</div>
			)}
		</>
	);
}
