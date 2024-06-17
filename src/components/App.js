import React, {useState, useEffect} from "react";

const App = () => {
  const [dogPicture, setDogPicture] = useState('')

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((r) => setDogPicture(r.message))
  }, []);

  return dogPicture ? <img src={dogPicture} alt='A Random Dog'/> : <p>Loading</p>
}

export default App;
