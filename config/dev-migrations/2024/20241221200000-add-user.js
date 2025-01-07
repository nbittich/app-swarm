const execute = async (db, context) => {
    const { uuid, bcrypt } = context;
    const user = {
        _id: uuid(),
        username: 'admin',
        password: bcrypt.hashSync("admin", 10),
        firstName: 'Nordine',
        lastName: "Bittich",
        email: "user@example.com",
        serviceAccount: false
    };
    const userCollection = await db.collection('users');
    await userCollection.insertOne(user);
}

const rollback = async (db, _context = {}) => {
    const collection = await db.collection('user');
    await collection.deletOne({ username: "admin" });
};

module.exports = {
    targetDatabases: ['public'],
    description: 'Add dev user',
    rollback,
    execute,
};
