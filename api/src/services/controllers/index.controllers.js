const Text = require('../../models/Text');

module.exports = {
  showDemo: (req,res) => res.status(200).send('Its okey'),
  getTexts: (req,res) => {
    return Text
      .find()
      .then((texts) => {
        if (!texts) {
          return res.status(204);
        }
        return res.status(200).json(texts);
      })
      .catch((err) => res.status(404).json(err))
  },
  postText: async (req,res) => {
    const { text } = req.body;

    if (!text) {
      return res.status(400);
    }

    let textInDb = await Text.findOne({ text: text });

    if (!textInDb) {
      textInDb = new Text({ text });
      await textInDb.save();
      return res.status(201).json('Se creo el texto');
    } else {
      return res.status(304);
    }
  }
}