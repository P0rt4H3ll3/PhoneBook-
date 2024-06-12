const Query = {
  // access to the db through the context of apollo/server/standalone
  // context only returns objects so i have to use Object.values() to return to Array
  allPersons: (root, args, context) => {
    const db = Object.values(context);
    return db;
  },

  person: (root, { name }, context) => {
    const db = Object.values(context);
    return db.filter((person) =>
      person.name.toLowerCase().includes(name.toLowerCase())
    );
  },
};

export default Query;
