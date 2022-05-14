exports = async function({_id, isDone}) {
  //
  const coll = context.functions.execute("dbConnect", 'mongodb-atlas', 'kitTodos', 'todos')
  // Query for an existing user document with the specified username
  const query = {
    _id
  }
  const update = {
    '$set': {
      isDone,
      updatedAt: new Date()
    }
  }
  const options = {
    '$upsert': true
  }
  const resource = await coll.updateOne(query, update, options);
  //
  if (resource) {
    return resource;
  } else {
    return 'Error Updating todo'
  }
};