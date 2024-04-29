const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://henzoohansen1:bDvoH1PjCzcwpCSO@rtwchatmessages.w5vmt1b.mongodb.net/?retryWrites=true&w=majority&appName=RTWchatmessages";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

const express = require('express');
const app = express();
const cors = require("cors");
const { default: mongoose } = require('mongoose');
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("App is Working");
})

app.post("/regiser", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log("Uesr already regiser");
    }

  } catch (e) {
    res.send("Something went wrong");
  }
});
app.listen(5000);