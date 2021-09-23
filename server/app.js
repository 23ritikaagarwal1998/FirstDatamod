
const express = require("express");
const app = express();
const path = require('path');
app.use(express.static('../client/build'));
app.get('/*', function (req, res) {
  const index = path.join(__dirname, '/', '../client/build', 'index.html' );
  res.sendFile(index);
});
const PORT = process.env.PORT || 6060;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
exports = module.exports = app;