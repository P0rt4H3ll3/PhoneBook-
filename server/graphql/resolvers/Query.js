const Query = {
  // access to the db through the context of apollo/server/standalone at main.jsx
  // original db has no ids thats why i have to give them a unique, do not know if i can mutate the original list
  // context only returns objects so i have to use Object.values() to return to Array
  allPersons: (root, args, context) => {
    // logic for displaying all entries
    const db = Object.values(context);
    return db;
  },

  person: (root, { name }, context) => {
    // logic for displaying searched Name
    const db = Object.values(context);
    const searchArr = db.filter((person) =>
      person.name.toLowerCase().includes(name.toLowerCase())
    );
    return searchArr;
  },
};

export default Query;
