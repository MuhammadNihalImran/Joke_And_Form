import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Jokeapi = () => {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    const getFirstJoke = async () => {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };
    getFirstJoke();
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>get joke</button>
    </div>
  );
};

export default Jokeapi;
