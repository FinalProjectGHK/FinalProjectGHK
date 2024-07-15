const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); // npm install cors

app.use(express.json()) // middleware
app.use(cors())

const { MongoClient, ServerApiVersion } = require('mongodb');
//mongodb+srv://new:new123@trytry1.yohksea.mongodb.net/?retryWrites=true&w=majority&appName=trytry1
//mongodb://atlas-sql-668e0373b852c27e64a8fc3b-qhwvd.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin
const uri = "mongodb+srv://nicholaschui1012:wqymTE5qfESLsFbo@cluster-nick.8xybkon.mongodb.net/?appName=Cluster-Nick";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getProducts() {
  try {
    await client.connect();
    const db = client.db('sushi_db');//sample_mflix
    const userResult = await db.collection("sushi").find().toArray();//comments //
    console.log(userResult)
    return userResult;
  } catch(err) {
      //console.dir;
      console.log(err);
  } finally {
    await client.close();
  }
}
app.get('/products', async (req, res) => {
  const result = await getProducts();
  //console.log(`app.get: ${result}`)
  //res.send(result);
  res.json(result);
});

app.listen(port, () =>{
    console.log(`The app is listening to port ${port}.`);
});