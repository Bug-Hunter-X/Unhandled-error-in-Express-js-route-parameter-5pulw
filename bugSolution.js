const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // ... database query or other operations using userId ...
  res.send(`User ${userId}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));