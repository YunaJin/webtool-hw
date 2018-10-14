const express = require('express');
const index = require("./indexhtml");
const buttonhtml = require('./button-html');
const app = express();
app.get('', (request, response) => {
    response.send(index.index())
});
app.get('/report/:button/', (request, response) => {
    let button = request.params.button;
    console.log("Button " + button + " was pressed");
    response.send(buttonhtml.button(button));
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

