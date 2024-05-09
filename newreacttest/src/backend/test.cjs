const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://henzoohansen1:bDvoH1PjCzcwpCSO@rtwchatmessages.w5vmt1b.mongodb.net/?retryWrites=true&w=majority&appName=RTWchatmessages";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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

app.listen(5000);
console.log("App listen at port 5000");