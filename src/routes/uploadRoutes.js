const express = require("express")
const router = express.Router()

const { uploadFile, streamupload } = require("../controllers/uploadController")
const upload = require("../middleware/uploadMiddleware")



router.post("/", upload.single("file"), uploadFile)

router.post("/multiple", upload.array("files", 5), uploadFile)

router.post("/stream-upload", streamupload)
// router.get("/", (req, res) => {
//     res.json({ message: "Upload route working" })
// })

module.exports = router