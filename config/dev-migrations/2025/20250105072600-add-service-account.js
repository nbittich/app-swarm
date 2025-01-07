const execute = async (db, context) => {
    const { uuid, bcrypt } = context;
    const user = {
        _id: uuid(),
        username: 'bnb',
        password: bcrypt.hashSync("bnb", 10),
        firstName: 'BNB',
        lastName: "Consumer",
        email: "bnb@example.com",
        serviceAccount: true
    };
    const userCollection = await db.collection('users');
    await userCollection.insertOne(user);
}

const rollback = async (db, _context = {}) => {
    const collection = await db.collection('user');
    await collection.deletOne({ username: "bnb" });
};

module.exports = {
    targetDatabases: ['public'],
    description: 'Add dev service account',
    rollback,
    execute,
};
