import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import instanceAxios from "./../../axios";

import "./movie.css";

const MovieScreen = () => {
	const api_key = "9708e26b3212dc53fa4084f8be9aaff6";
	const { id } = useParams();
	const p = useParams();

	console.log(p);
	console.log(window.history);

	const [movie, setMovie] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const req = await instanceAxios.get(
				`/movie/${99966}?api_key=${api_key}`
			);

			setMovie(req.data);
		}

		fetchData();
	}, [id]);

	return (
		<div>
			<h1>{movie?.name}</h1>
		</div>
	);
};

export default MovieScreen;
