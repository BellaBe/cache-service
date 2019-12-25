'user strict';

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
  `Server is listening on port ${PORT}`;
})