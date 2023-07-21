// popularSong.js

const mongoose = require("mongoose");

const popularSongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  playCount: { type: Number, default: 0 },
  totalMinutesPlayed: { type: Number, default: 0 },
});

const PopularSong = mongoose.model("PopularSong", popularSongSchema);

module.exports = PopularSong;
