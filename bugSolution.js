const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Validate userId before fetching data
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database interaction to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData); 
});