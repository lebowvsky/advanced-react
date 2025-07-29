import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState([...data]);

  const removePeople = (id) => {
    const filteredPeople = people.filter((elt) => elt.id !== id);
    setPeople([...filteredPeople]);
  };
  return (
    <>
      <h2>useState array example</h2>
      <ul className="container">
        {people.map((elt) => (
          <li className="elt " key={elt.id}>
            {elt.name}
            <br />
            <button className="btn" onClick={() => removePeople(elt.id)}>
              Vire-moi ça !
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseStateArray;
