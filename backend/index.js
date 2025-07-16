const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./api/router');

// Middleware to parse JSON
app.use(express.json());

// Add cors related headers
app.use(cors());

// Initializing the Application Routes
app.use("/", router);


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});