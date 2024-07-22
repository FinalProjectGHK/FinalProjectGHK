const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors"); // npm install cors

app.use(express.json()); // middleware
app.use(cors());

const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
//mongodb+srv://new:new123@trytry1.yohksea.mongodb.net/?retryWrites=true&w=majority&appName=trytry1
//mongodb://atlas-sql-668e0373b852c27e64a8fc3b-qhwvd.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin
const uri =
  "mongodb+srv://nicholaschui1012:wqymTE5qfESLsFbo@cluster-nick.8xybkon.mongodb.net/?appName=Cluster-Nick";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

mongoose.connect(
  "mongodb+srv://nicholaschui1012:wqymTE5qfESLsFbo@cluster-nick.8xybkon.mongodb.net/restaurant_db"
);

const membersSchema = new mongoose.Schema({
  name: String,
  userId: String,
  password: String,
  confirmPassword: String,
  email: String,
  tel: String,
  favouriteItem: Array,
  prevOrders: Array,
});

const Members = mongoose.model("members", membersSchema);

async function getProducts(category) {
  try {
    await client.connect();
    const db = client.db("restaurant_db");
    const userResult = await db
      .collection("menu")
      .find({ category: category })
      .toArray();
    console.log(userResult);
    return userResult;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

// http://localhost:3001/products/?category=rice -> getting all the items with the category being "rice"
app.get("/products", async (req, res) => {
  const result = await getProducts(req.query.category);
  res.json(result);
});

// Posting member registration details to database
app.post("/register", async (req, res) => {
  let member = new Members(req.body);
  let result = await member.save();
  res.send(result);
});

app.listen(port, () => {
  console.log(`The app is listening to port ${port}.`);
});
