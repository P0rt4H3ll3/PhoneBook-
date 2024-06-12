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
  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    skip: !searchName,
  });

  return (
    <div>
      <h2>Search:</h2>
      <input
        value={searchName}
        placeholder="search name"
        onChange={handleChange}
      />
      <ul>
        {resultSearchPersons.data?.person.map((data) => {
          return (
            <li key={data.id}>
              {data.name} {data.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchPersons;
