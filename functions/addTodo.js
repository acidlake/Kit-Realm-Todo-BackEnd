exports = async function({title, realmUserId}) {
  //
  const coll = context.functions.execute("dbConnect", 'mongodb-atlas', 'kitTodos', 'todos')
  // Query for an existing user document with the specified username
  const todoPayLoad = {
    title: title.trim(),
    isDone: false,
    realmUserId,
    createdAt: new Date()
  }
  const resource = await coll.insertOne(todoPayLoad);
  //
  if (resource) {
    return resource;
  } else {
    return 'Error inserting the todo'
  }
};