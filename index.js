import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
const port = process.env.PORT || 9000;

//? middlewares
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://moinkhan:100504248668420123.@expresso-emporium.znax4hm.mongodb.net/?retryWrites=true&w=majority&appName=expresso-emporium";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const server = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("database connected successfully.");

    const database = client.db("expresso_emporium");
  } finally {
    //// client.close()
  }
};

server().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.listen(port, () => {
  console.log("listening to port:", port);
});
