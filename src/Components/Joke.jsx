import axios from 'axios';
import HeaderSection from './HeaderSection';
import { useState } from 'react';
function Joke() {
  const [joker, setJoker] = useState('');

  const getJoke = async () => {
    const jokeApi = await axios.get('https://api.chucknorris.io/jokes/random');
    const joke = await jokeApi.data;
    setJoker(joke);
  };

  //   console.log(joker);
  useState(() => {
    getJoke();
  }, [joker]);

  return (
    <>
      <HeaderSection />
      <div className="container">
        <h1 className="mt-4">Joke Of The Day</h1>
        <button className="btn btn-primary" onClick={getJoke}>
          Next Joke
        </button>
        <div className="joke-box">
          <h4 className="mt-4">{joker.value}</h4>
        </div>
      </div>
    </>
  );
}

export default Joke;
