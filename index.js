//1. cd --> npm init
//2. npm i express
//3. npm install ejs

//in package.json--> type:module
import express from "express";
import ejs from "ejs";

const app = express();
const port =3000;

//to link even static files & css--> in public folder my static files r present
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/about', (req, res) => {
    res.render("about.ejs");
})

app.get('/contact', (req, res) => {
    res.render("contact.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})