const Text = require("../../models/Text");

module.exports = {
  getTexts: (req, res) => {
    return Text.find()
      .then((texts) => {
        if (!texts) {
          return res.status(204);
        }
        return res.status(200).json(texts);
      })
      .catch((err) => res.status(404).json(err));
  },
  postText: async (req, res) => {
    const { text } = req.body;

    let textInDb = await Text.findOne({ text: text });

    if (!textInDb) {
      let textInvertido = Array.from(text).reverse().join('')
      textInDb = new Text({ text: textInvertido });
      await textInDb.save();
      return res.status(200).json("Text is created");
    }

    return res.status(302).json({ message: "Text is already exist" });
  },
  deleteText: (req, res) => {
    const { id } = req.params;

    return Text.findByIdAndDelete(id)
      .then((textRemove) => {
        if (!textRemove) {
          return res
            .status(409)
            .json({ message: "You have already deleted the text" });
        }

        return res.status(200).json({ message: "Text deleted" });
      })
      .catch((err) => res.status(404).json({ message: err }));
  },
};
