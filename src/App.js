import { Title } from "./components/Title";
import { List } from "./components/List";
import { Avatar } from "./components/LearnReact/Avatar";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const Item = ({ name, isPackced }) => {
  return (
    <li className="item">{isPackced ? <del>{name + "✔"} </del> : name} </li>
  );
};

function App() {
  return (
    <div className="App">
      <section>
        <h1> Sally Ride's Packing List</h1>
        <ul>
          <Item isPackced={true} name="Space suit" />
          <Item isPackced={true} name="Helmet with a golden leaf" />
          <Item isPackced={false} name="Photo of Tam" />
        </ul>
      </section>
      <Title />
      <List />
    </div>
  );
}

export default App;
