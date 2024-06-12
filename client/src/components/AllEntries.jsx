import { gql, useQuery } from "@apollo/client";

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
    }
  }
`;

const AllEntries = ({ searchName }) => {
  const { loading, data, error } = useQuery(ALL_PERSONS, {
    skip: !!searchName,
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
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
  );
};

export default AllEntries;
