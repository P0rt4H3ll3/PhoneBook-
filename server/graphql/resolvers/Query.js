const Query = {
  // access to the db through the context of apollo/server/standalone at main.jsx

  allPersons: (root, args, context) => {
    // alles in eine Query
    // logic for displaying all entries
    const db = Object.values(context);
    return db;
  },

  person: (root, { name }, context) => {
    // original db has no ids thats why i have to give them a unique
    // context only returns objects so i have to use Object.values() to return to Array
    const db = Object.values(context);
    // logic for displaying all names if no search
    if (name === "") {
      return db;
    } else {
      // logic for displaying searched Name
      const searchArr = db.filter((person) =>
        person.name.toLowerCase().includes(name.toLowerCase())
      );
      return searchArr;
    }
  },
};

export default Query;
