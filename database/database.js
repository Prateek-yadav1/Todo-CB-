const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let _db;


// Database Name
const dbName = 'todoApp';

async function main() {

  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  _db = client.db(dbName);

}
function getDB(){
    if(_db){
        return _db;
        return null;
    }
}
module.exports.mongoConnect=main;
module.exports.getDB=getDB;