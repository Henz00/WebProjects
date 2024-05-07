const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.listen(5000);
const { MongoClient, ServerApiVersion } = require("mongodb");
const { error } = require("console");
const uri =
  "mongodb+srv://henzoohansen1:bDvoH1PjCzcwpCSO@rtwchatmessages.w5vmt1b.mongodb.net/?retryWrites=true&w=majority&appName=RTWchatmessages";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
/* async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    var db = client.db("Messages");
    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log("Connected to database!");

    var myobj = { name: "Henrik", message: "Maybe this too?" };
    await db.collection("Chatrecords").insertOne(myobj, function(err, res) {
      if (err) throw err;
        
      console.log("1 document inserted");
    })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */

async function InsertOneMessage(message) {
  try {
    await client.connect();

    let db = client.db("Messages");

    await db.collection("Chatrecords").insertOne(message);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function InsertMultipleMessages(messages) {
  try {
    await client.connect();

    let db = client.db("Messages");

    await db.collection("Chatrecords").insertMany(messages);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/register", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    InsertOneMessage(data);
  } catch (e) {
    res.send("Something went wrong");
  }
});
