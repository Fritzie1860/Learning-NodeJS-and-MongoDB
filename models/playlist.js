// song.js

const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  song: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

const Playlist = mongoose.model("Playlist", songSchema);

module.exports = Playlist;
