const express = require("express")
require("dotenv").config()
const cors = require("cors")
const { converterRouter } = require("./routes/converter.route")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/code",converterRouter)

app.listen(process.env.PORT,()=>{
    console.log(`serving running at ${process.env.PORT}`);
}) 