import SecondComponent from "./components/SecondComponent";
import FirstComponent from "./components/FirstComponent";
import "./App.css";
import { people } from "./data/people";
import PersonCard from "./components/PersonCard";

function App() {
  // const names = ["Emil", "Emil", "Lars", "Sofie", "Jonas", "Mina"];

  const filteredList = people.filter((person) => person.id === 1);
  const sortedList = [...people].sort((a, z) => (a.id - z.id) * -1).slice(0, 3);
  const mappedArry = people.map((person) =>
    person.id == 1 ? { ...person, name: "lars" } : person
  );

  return (
    <>
      {filteredList.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </>
  );
}

export default App;
