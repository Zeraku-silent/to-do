import { Title } from "./components/Title";
import { List } from "./components/List";
import { Avatar } from "./components/LearnReact/Avatar";
import { nanoid } from "nanoid";
import { getImageUrl } from "./components/LearnReact/utils";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const Item = ({ name, isPackced }) => {
  let itemContent = name;
  if (isPackced) {
    itemContent = <del>{name + "✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
};

function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];
  const chemists = people.filter((person) => person.profession === "chemist");

  const listItems = people.map((person) => (
    <li key={nanoid()}>
      <img
        style={{
          borderRadius: 50,
        }}
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const Recipe = ({ drinkers }) => {
    return (
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>
          Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
        </li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  };

  return (
    <div className="App">
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For gathering</h2>
        <Recipe drinkers={4} />
      </section>
      <section>
        <h1> Sally Ride's Packing List</h1>
        <ul>
          <Item isPackced={true} name="Space suit" />
          <Item isPackced={true} name="Helmet with a golden leaf" />
          <Item isPackced={false} name="Photo of Tam" />
        </ul>
      </section>
      <ul>{listItems}</ul>
      <Title />
      <List />
    </div>
  );
}

export default App;
