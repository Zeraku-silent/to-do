import { Title } from "./components/Title";
import { List } from "./components/List";
import { Avatar } from "./components/LearnReact/Avatar";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

function App() {
  return (
    <div className="App">
      <Title />
      <List />
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Naruto Uzumaki",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
    </div>
  );
}

export default App;
