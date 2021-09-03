import express from "express";
const app = express();
import fetch from "node-fetch";

const PORT = process.env.PORT || 3001;

app.get("/products", async (req, serverResponse) => {
  var url = "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";
  const externalApiResponse = await fetch(url);
  const jres = await externalApiResponse.json();
  // console.log(jres);
  serverResponse.send(jres);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
