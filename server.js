//Install express server
const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-frontend'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/my-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("App is running on port " + port);
});
