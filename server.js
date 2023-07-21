const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { Song, Artist, PopularSong, Playlist } = require('./models');


mongoose.connect('mongodb://localhost:27017/songtify_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/play/:id', async (req, res) => {
  const songId = req.params.id;
  try {
    const song = await Song.findById(songId);

    if (!song) {
      return res.status(404).send('Song not found');
    }
    console.log(`Now Playing: ${song.title} - ${song.artist}`);
    res.redirect('/');
  } catch (error) {
    console.error('Error playing song:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    const popularSongs = await PopularSong.find();
    const playlists = await Playlist.find();


    res.render('index', { songs, popularSongs,playlists }); // Passing both "songs" and "popularSongs" to the view
  } catch (error) {
    console.error('Error fetching playlist:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/playlist', async (req, res) => {
  try {
    const songs = await Playlist.find();

    res.render('playlist', { songs }); // Passing both "songs" and "popularSongs" to the view
  } catch (error) {
    console.error('Error fetching playlist:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/playlist/:id', async (req, res) => {
  const songId = req.params.id;
  let listsong = [];
  try {
    const song = await Playlist.findById(songId).populate('song', 'title artist album');
    const name = song.name;
    const result = song.song;
    let file;
    result.forEach(async element => {
      file = await Song.findById(element[0]);
      listsong.push(file);
      console.log(file);
    });

    if (!song) {
      return res.status(404).send('Song not found');
    }
    console.log("obj: "+JSON.stringify(song));

     res.render('list_playlist', { result,name,listsong });
  } catch (error) {
    console.error('Error playing song:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/addplaylist', async (req, res) => {
  try {
    console.log(req.body);
    Playlist.insertMany({
      name: req.body.name,
      song: [],
    });

    res.redirect('/playlist');
  } catch (error) {
    console.error('Error fetching playlist:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/addsongtoplaylist', async (req, res) => {
  try {
    console.log(req.body);
    const filter = { _id: req.body.song };
    
    const update = { $push: { song: req.body.id } };
  
    // Use the updateOne() method to update a single document
    const result = await Playlist.updateOne(filter, update);
    console.log('tambah: '+JSON.stringify(result));

    res.redirect('/playlist');
  } catch (error) {
    console.error('Error fetching playlist:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
