const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.argv[2] || "localhost";

app.use(express.static("public")); // This will serve files from the 'public' directory
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
