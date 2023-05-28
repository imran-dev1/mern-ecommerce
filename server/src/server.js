const app = require('./app');
const morgan = require("morgan")

const port = process.env.PORT || 5001;

app.use(morgan("dev"))

app.listen(port, () => { 
console.log(`Server is listening on ${port}`);
})