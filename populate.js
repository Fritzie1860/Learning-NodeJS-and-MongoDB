// populate.js

const mongoose = require("mongoose");
const Song = require("./models/song");
const Artist = require("./models/artist");
const PopularSong = require("./models/popularSong");
const Playlist = require("./models/playlist");

async function populateDatabase() {
  await mongoose.connect("mongodb://localhost:27017/songtify_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const songsData = [
    {
      title: "Kelana",
      artist: "Tulus",
      album: "Manusia",
    },
    {
      title: "Melawan Restu",
      artist: "Mahalini",
      album: "Fabula",
    },
    {
      title: "Angels Like You",
      artist: "Miley Cyrus",
      album: "Plastic Hearts",
    },
    {
      title: "Rumah ke Rumah",
      artist: "Hindia",
      album: "Menari Dengan Bayangan",
    },
    {
      title: "Losing My Mind",
      artist: "Chalie Puth",
      album: "Nine Track Mind",
    },
    {
      title: "Off My Face",
      artist: "Justin Bieber",
      album: "Justice",
    },
    {
      title: "Mercy",
      artist: "Shawn Mendes",
      album: "Illuminate",
    },
    {
      title: "Tally",
      artist: "Black Pink",
      album: "Born Pink",
    },
    {
      title: "April",
      artist: "Fiersa Besari",
      album: "Tempat Aku Pulang",
    },
    {
      title: "Remidi",
      artist: "Tulus",
      album: "Manusia",
    },
    {
      title: "Yellow",
      artist: "Coldplay",
      album: "Parachutes",
    },
    {
      title: "Karma",
      artist: "Taylor Swift",
      album: "Midnights",
    },
  ];

  const artistsData = [
    {
      name: "Tulus",
      dateOfBirth: new Date("1987-08-20"),
      genres: ["Pop", "Jazz"],
    },
    {
      name: "Mahalini",
      dateOfBirth: new Date("2000-03-04"),
      genres: ["Indonesian Pop"],
    },
    {
      name: "Miley Cyrus",
      dateOfBirth: new Date("1992-11-23"),
      genres: ["Pop", "Rock"],
    },
    {
      name: "Chalie Puth",
      dateOfBirth: new Date("1991-12-02"),
      genres: ["Pop"],
    },
    {
      name: "Justin Bieber",
      dateOfBirth: new Date("1994-03-01"),
      genres: ["R&B", "Pop", "Hip-Hop", "Rap"],
    },
    {
      name: "Shawn Mendes",
      dateOfBirth: new Date("1998-08-08"),
      genres: ["Pop"],
    },
    {
      name: "Jennie Kim",
      dateOfBirth: new Date("1996-01-16"),
      genres: ["Blues", "K-Pop"],
    },
    {
      name: "Fiersa Besari",
      dateOfBirth: new Date("1984-03-03"),
      genres: ["Indonesian Indie", "Indonesian Rock", "Indonesian Pop"],
    },
    {
      name: "Christopher Anthony John Martin",
      dateOfBirth: new Date("1977-03-02"),
      genres: ["Pop", "Rock", "R&B", "Funk", "Indie"],
    },
    {
      name: "Baskara Putra",
      dateOfBirth: new Date("1994-02-22"),
      genres: ["Indonesian Indie", "Indonesian Pop"],
    },
    {
      name: "Taylor Swift",
      dateOfBirth: new Date("1989-12-13"),
      genres: ["Pop", "Country"],
    },
  ];

  const popularSongsData = [
    {
      title: "Kelana",
      playCount: 120,
      totalMinutesPlayed: 384,
    },
    {
      title: "Angels Like You",
      playCount: 100,
      totalMinutesPlayed: 350,
    },
    {
      title: "Off My Face",
      playCount: 300,
      totalMinutesPlayed: 1050,
    },
    {
      title: "Mercy",
      playCount: 110,
      totalMinutesPlayed: 385,
    },
    {
      title: "Tally",
      playCount: 330,
      totalMinutesPlayed: 1155,
    },
    {
      title: "Rumah ke Rumah",
      playCount: 90,
      totalMinutesPlayed: 315,
    },
    {
      title: "April",
      playCount: 105,
      totalMinutesPlayed: 367,
    },
    {
      title: "Yellow",
      playCount: 500,
      totalMinutesPlayed: 1750,
    },
    {
      title: "Melawan Restu",
      playCount: 350,
      totalMinutesPlayed: 1225,
    },
    {
      title: "Karma",
      playCount: 200,
      totalMinutesPlayed: 700,
    },
  ];

  const playlistData = [
    {
      name: "Playlist",
      song: [],
    },
  ];

  try {
    await Song.insertMany(songsData);
    console.log("Songs data inserted successfully");

    await Artist.insertMany(artistsData);
    console.log("Artists data inserted successfully");

    await PopularSong.insertMany(popularSongsData);
    console.log("Popular Songs data inserted successfully");

    await Playlist.insertMany(playlistData);
    console.log("Playlist data inserted successfully");
  } 
  catch (error) {
    console.error("Error inserting data:", error);
  } 
  finally {
    mongoose.connection.close();
  }
}

populateDatabase();

module.exports = {
  Song,
  Artist,
  PopularSong,
};

//Future Implementation: Creating data duplication prevention logic in the database. 
// app.get('/', async (req, res) => {
//   try {
//     const songs = await Song.find();
//     const popularSongs = await PopularSong.find();

//     res.render('index', { songs, popularSongs }); // Passing both "songs" and "popularSongs" to the view
//   } catch (error) {
//     console.error('Error fetching playlist:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });