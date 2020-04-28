const express = require('express');
const cors = require('cors'); //Pacote de segurança
const routes = require("./routes"); //Utilizar barra paa entender que um arquivo

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


app.listen(3333);

