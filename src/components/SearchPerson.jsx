import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const SEARCH_PERSON = gql`
  query ($name: String) {
    person(name: $name) {
      id
      name
      phone
    }
  }
`;

const SearchPersons = ({ searchName, handleChange }) => {
  const [showResults, setShowResults] = useState(false);
  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    skip: !searchName,
  });

  const handle = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h2>Search:</h2>
      <input value={searchName} onChange={handleChange} />
      <ul>
        {resultSearchPersons.data?.person.map((data) => {
          return (
            <li key={data.id}>
              {data.name}
              {data.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchPersons;

/* This is with the button so only search when button is clicked 
const SearchPersons = ({ searchName, handleChange }) => {
  const [showResults, setShowResults] = useState(false);
  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    skip: "",
  });

  const handleClick = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h2>Search:</h2>
      <input value={searchName} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {showResults &&
        resultSearchPersons.data?.person.map((data) => {
          return (
            <p>
              {data.name}
              {data.phone}
            </p>
          );
        })}
    </div>
  );
};

export default SearchPersons;
*/
