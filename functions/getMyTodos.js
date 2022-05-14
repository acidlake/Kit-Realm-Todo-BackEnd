exports = async function({realmUserId}) {
  //
  const coll = context.functions.execute("dbConnect", 'mongodb-atlas', 'kitTodos', 'todos')
  
  const pipeline = [{
    $match: {
      realmUserId
    }
  },
    {
      '$sort': {
        createdAt: -1
      }
    }
  ]
  const resource = await coll.aggregate(pipeline).toArray();
  //
  if (resource) {
    return resource;
  } else {
    return 'No records found'
  }
};