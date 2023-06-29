import React ,{useState}from 'react';
import '../styles/style.css'

export default function Search() {

    const [query,SetQuery]=useState('');
    const [movies,setMovies]=useState([]);
    const serachMovie=async(e)=>{
        e.preventDefault();
        console.log("submitting");
        
        const URL=`https://api.themoviedb.org/3/search/movie?api_key=792bc90b761123498a685087b0a0b8d3&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res=await fetch(URL);
        const data=await res.json(res);
        setMovies(data.results);
        console.log(data.results);
        
        }
        catch(err){
            console.log(err);
        }
    
        }
  return (
    <>

    <div className='main'>
    <h1>Movie Search App</h1>
    <form onSubmit={serachMovie}>
    <div className='form'>
    <input type='text' name='query' value={query} onChange={(e)=>{
        SetQuery(e.target.value)
    }}></input>
    <br></br>
    <button type='submit' id='submit'>Search</button>
    </div></form>
    
    {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
    
    </div>
    
    </>
  )
}
