const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51Pgfnm2MAyR1R09ohcS9fVPk3qa1abrPCdYK6T0rC5HNXD0MnAhFkJWcD2oyUrWwmsJLQtWAxtkdPTcwam9sM8jm00FYhmU3GF"
);
const port = 3001;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json()); // middleware
app.use(cors());

const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
const uri =
  "mongodb+srv://nicholaschui1012:wqymTE5qfESLsFbo@cluster-nick.8xybkon.mongodb.net/?appName=Cluster-Nick";
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

const members = client.db("restaurant_db").collection("members");
const menu = client.db("restaurant_db").collection("menu");

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
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function getFav(userEmail) {
  try {
    await client.connect();
    const db = client.db("restaurant_db");
    const userFav = await db
      .collection("members")
      .find({ email: userEmail })
      .toArray();
    console.log(userFav);
    return userFav;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function getAllProducts() {
  try {
    await client.connect();
    const db = client.db("restaurant_db");
    const userResult = await db.collection("menu").find().toArray();
    console.log(userResult);
    return userResult;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

// http://localhost:3001/products/?category=rice -> getting all the items with the category being "rice"
app.get("/products", async (req, res) => {
  const result = await getProducts(req.query.category);
  res.json(result);
});

// http://localhost:3001/userFav/?email=nicholaschui133@gmail.com
app.get("/userFav", async (req, res) => {
  const result = await getFav(req.query.email);
  res.json(result);
});

// http://localhost:3001/allproducts
app.get("/allproducts", async (req, res) => {
  const result = await getAllProducts();
  res.json(result);
});

// Posting member registration details to database
app.post("/register", async (req, res) => {
  let member = new Members(req.body);
  let result = await member.save();
  res.send(result);
});

app.patch("/addFavItem", async (req, res) => {
  console.log(req.body);
  members.updateOne(
    { email: req.body.email },
    {
      $addToSet: {
        favouriteItem: {
          chineseName: req.body.chineseName,
          foodPic: req.body.foodPic,
          price: req.body.price,
        },
      },
    }
  );
  res.send("Updated");
});

app.patch("/removeFavItem", async (req, res) => {
  console.log(req.body);
  members.updateOne(
    { email: req.body.email },
    {
      $pull: {
        favouriteItem: {
          chineseName: req.body.chineseName,
          foodPic: req.body.foodPic,
          price: req.body.price,
        },
      },
    }
  );
  res.send("Updated");
});

// Sales Ranking part

app.patch("/sales", async (req, res) => {
  console.log(req.body);
  for (let i = 0; i < req.body.length; i++) {
    menu.updateOne(
      { name_c: req.body[i]["chineseName"] },
      { $inc: { sales: req.body[i]["quantity"] } }
    );
  }

  res.send("Updated");
});

// async function getRankedProducts() {
//   try {
//     await client.connect();
//     const db = client.db("restaurant_db");
//     const userResult = await db.collection("menu").aggregate().toArray();
//     console.log(userResult);
//     return userResult;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

// app.get("/rankedProducts", async (req, res) => {
//   const result = await getRankedProducts();
//   res.json(result);
// });

// Stripe Payment

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 140000,
    currency: "hkd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`The app is listening to port ${port}.`);
});
