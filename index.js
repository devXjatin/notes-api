const app = require('./app')
const connectDB = require('./config/db')
require("dotenv").config({ path: "./env/config.env" });
const PORT = process.env.PORT || 8000;
connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})