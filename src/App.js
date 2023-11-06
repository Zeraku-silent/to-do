import { Title } from "./components/Title";
import { List } from "./components/List";
import { Avatar } from "./components/LearnReact/Avatar";
import { nanoid } from "nanoid";
import { getImageUrl } from "./components/LearnReact/utils";
import { sculptureList } from "./components/LearnReact/data";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleMoreClick = () => setShowMore(!showMore);

  let sculpture = sculptureList[index];

  return (
    <div className="App">
      <>
        <button onClick={handleNextClick}>Next</button>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </>

      <Title />

      <List />
    </div>
  );
}

export default App;
