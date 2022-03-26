
import { useEffect, useState } from "react";
import instanceAxios from "./../../axios"
import './index.css'
const RowMovies = ({title, fetchUrl}) => {

	
const base_url = "https://image.tmdb.org/t/p/original/"

  function handleClickPosterMovie() {}


	const [movies, setMovies] = useState([]);

	useEffect(() => {
		

		async function fetchData(){
			const req = await instanceAxios.get(fetchUrl);
			setMovies(req.data.results);
		}

		fetchData();

	}, [fetchUrl])
	return (
		<div className="row">

		<h2 className="row-title">{title}</h2>


<div className="posters_container">
{movies.map(m =>
	(
		<div key={m.id} className="poster_movie" onClick={handleClickPosterMovie}>
      <img src={`${base_url}${m.poster_path}`}  alt={m.title}/>
    </div>
	)

	)}
</div>
		</div>
	)
}

export default RowMovies