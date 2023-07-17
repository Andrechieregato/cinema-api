import './App.css';
import { useState } from 'react';
import Campo from './components/Campo'
import Filme from './components/Filme'
import Footer from './components/Footer'

function App() {

  const [movie, setAddress] = useState({});
  const [hiddenDisplay, setHiddenDisplay] = useState(true);
  const [marginBottom, setMarginBottom] = useState(true);
 
  function getAddress (evento){
    const movieName = evento.target.value

    setAddress({
      movieName
    })

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f87208326ff3fd37f180fb69b544e46&query=${encodeURIComponent(movieName)}`)
      .then(resposta => resposta.json())
      .then(dados => {
        if(dados.results.length > 0){
          console.log(dados.results.length)
        setHiddenDisplay(false);
        setMarginBottom(false);
        const movieData = dados.results[0];
       
        setAddress({
          id: movieData.id,
          name:movieData.original_title,
          popularity:movieData.popularity,
          poster_path: `https://image.tmdb.org/t/p/original/${movieData.poster_path}`,
          overview:movieData.overview
          
        })
      } else {
        setHiddenDisplay(true);
        setMarginBottom(true);
        setAddress({}); // Reset movie data if no movie is found
      }
      })
      .catch(error => {
        console.error('Error:', error);
      });
     
  }
  return (
    <div className="App">
      <header className="App-header">
          <Campo marginBottom={marginBottom} placeholder="Type your movie" onChange={getAddress}/>
          <Filme  hiddenDisplay={hiddenDisplay} image={movie.poster_path} name={movie.name} id={movie.id} popularity={movie.popularity} overview={movie.overview}/>
          <Footer />
      </header>
    </div>
  );
}

export default App;
