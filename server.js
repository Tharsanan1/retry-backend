const express = require('express');
const app = express();

// Define a retry counter
let currentCount = 0;
let retryCount = 3;

// Middleware to parse JSON request bodies
app.use(express.json());

// Retry endpoint
app.get('/retry', (req, res) => {
  if (currentCount < retryCount) {
    currentCount++;
    res.status(500).json({ message: 'Something went wrong. Please retry.' });
  } else {
    currentCount = 0;
    res.status(200).json({ message: 'Success!' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Success!' });
  
});

// Reset endpoint
app.post('/reset', (req, res) => {
  currentCount = 0;
  res.status(200).json({ message: 'Retry count reset.' });
});

// Set retry count endpoint
app.post('/set-retry-count', (req, res) => {
  const { count } = req.body;

  if (typeof count !== 'number' || count < 0) {
    res.status(400).json({ message: 'Invalid retry count. Retry count must be a non-negative number.' });
  } else {
    retryCount = count;
    res.status(200).json({ message: `Retry count set to ${count}.` });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
