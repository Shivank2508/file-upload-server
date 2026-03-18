const express = require("express")
const uploadRoutes = require("./routes/uploadRoutes")
const cors = require("cors")

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

app.use("/", uploadRoutes);

app.use("/api/upload", uploadRoutes);
const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})