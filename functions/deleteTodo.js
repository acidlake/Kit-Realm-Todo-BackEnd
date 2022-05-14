exports = async function({_id}) {
  //
  const coll = context.functions.execute("dbConnect", 'mongodb-atlas', 'kitTodos', 'todos')
  // Query for an existing user document with the specified username

  const resource = await coll.deleteOne({ _id });
  //
  if (resource) {
    return resource;
  } else {
    return 'Error deleting todo'
  }
};