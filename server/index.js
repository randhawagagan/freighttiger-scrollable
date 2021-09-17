import express from "express";
const app = express();
import fetch from "node-fetch";

const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../shopping-app//build")));

app.get("/freighttiger-scrollable/products", async (req, serverResponse) => {
  var url = "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";
  const externalApiResponse = await fetch(url);
  const jres = await externalApiResponse.json();
  serverResponse.send(jres);
});

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../shopping-app/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
