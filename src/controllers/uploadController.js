const path = require("path")
const fs = require("fs")
exports.uploadFile = (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                message: "no file uploaded"
            })
        }

        res.status(200).json({
            message: "file uploaded successfully",
            file: req.files.filename,
            path: req.files.path
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

exports.streamupload = (req, res) => {
    const filePath = path.join(__dirname, "../../uploads/bigfile.zip")
    const writeStream = fs.createWriteStream(filePath)
    req.pipe(writeStream)
    req.on("end", () => {
        res.status(200).json({
            message: "uploded. successfully by stream"
        })
    })

    req.on("error", (err) => {
        res.status(500).json({
            error: err.message
        });
    });
}

