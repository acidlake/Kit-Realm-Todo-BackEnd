exports = function(CLUSTER, DBNAME, COLLECTION){
    return context.services.get(CLUSTER).db(DBNAME).collection(COLLECTION);
};