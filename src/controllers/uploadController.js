exports.uploadFile = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "no file uploaded"
            })
        }

        res.status(200).json({
            message: "file uploaded successfully",
            file: req.file.filename,
            path: req.file.path
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}