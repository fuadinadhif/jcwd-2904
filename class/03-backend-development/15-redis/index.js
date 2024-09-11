import express from "express";
import * as redis from "redis";
import axios from "axios";

const PORT = 3000;
const app = express();
const redisClient = redis.createClient();

// Connect to the Redis server
await redisClient.connect();

app.get("/", async (req, res) => {
  try {
    // Take Redis data
    const redisData = await redisClient.get("posts");

    if (redisData) return res.status(200).send(JSON.parse(redisData));

    console.log("I GOT HIIIITTTTTTTTTTTTTTT!!");

    const postsData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(postsData);

    // Set data in the Redis cache
    await redisClient.setEx("posts", 5, JSON.stringify(postsData.data));

    return res.status(200).send(postsData.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
