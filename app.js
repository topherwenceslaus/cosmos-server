const { default: cosmosServer } = require("@zeit/cosmosdb-server");
const fs = require("fs");

cosmosServer({
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
}).listen(3000, () => {
  console.log(`Cosmos DB server running at https://localhost:3000`);
});
