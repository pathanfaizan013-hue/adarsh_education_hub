const Content = require("../models/Content");

exports.uploadContent = async (req, res) => {
  try {
    const { subjectId, type, title } = req.body;

    const newContent = new Content({
      subjectId,
      type,
      title,
      file: req.file.filename   // IMPORTANT
    });

    await newContent.save();

    res.status(200).json({
      message: "File uploaded successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getContent = async (req, res) => {
  try {
    const { id, type } = req.params;

    const content = await Content.find({
      subjectId: id,
      type: type
    });

    res.json(content);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};