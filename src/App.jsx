import { gql, useQuery } from "@apollo/client"; // gql parser function. This function is used to parse the plain string as a graphql query
import React, { useState } from "react";
import SearchPersons from "./components/SearchPerson";

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
    }
  }
`;

const App = () => {
  const [searchName, setSearchName] = useState("");
  const { loading, data, error } = useQuery(ALL_PERSONS, {
    skip: !!searchName,
  });

  // giving the phonebook data a id so that no two children have the same key
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <SearchPersons searchName={searchName} handleChange={handleChange} />
      <div>
        <ul>
          {data?.allPersons?.map((person) => {
            return (
              <li key={person.id}>
                {person.name} {person.phone}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
