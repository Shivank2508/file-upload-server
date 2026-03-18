const express = require("express")
const router = express.Router()

const { uploadFile } = require("../controllers/uploadController")
const upload = require("../middleware/uploadMiddleware")


router.post("/", upload.single("file"), uploadFile)
// router.get("/", (req, res) => {
//     res.json({ message: "Upload route working" })
// })

module.exports = router