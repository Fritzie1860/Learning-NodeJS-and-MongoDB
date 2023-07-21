# Learning-NodeJS-and-MongoDB
**Songtify**

Proyek ini dibangun menggunakan teknologi Node.js, Express.js, dan MongoDB untuk memenuhi tugas Modul 2 (Node JS) sekaligus sebagai latihan Modul 3 (MongoDB) Generasi GIGIH 3.0. Songtify adalah sebuah proyek aplikasi web sederhana untuk menyimpan dan memutar daftar lagu (playlist). 


**Tasks**

Task 1:
Create an HTTP Server to store your playlist
1. Add song to your playlist
Attributes: Title, Artists (can have multiple artist), URL (from spotify URL)
2. Play song from your playlist
3. Get List of songs from your playlist

Task 2:
1. Create a database that stores the following information:
- Songs, containing the following data: the title of the song, the name of the artist(s),
and the album
- Artists, containing the following data: name, date of birth, genre(s)
- Popular Songs, containing the following data: the title of the song, how many times it’s
played, period of time
2. Populate the database you’ve created above with at least 10 data for each collection


**Fitur**

Menambahkan lagu ke dalam playlist dengan judul, artis, dan URL dari Spotify. (Current Condition: URL belum ada di dalam song)
Memutar lagu dari playlist berdasarkan ID lagu. (Current Condition: Pemutaran lagu hanya ditampilkan di console)
Mendapatkan daftar lagu dari playlist.


**Menjalankan Aplikasi**

- Pastikan MongoDB telah berjalan di port default (27017). Jika menggunakan port lain, sesuaikan URL di server.js.
- Jalankan aplikasi dengan perintah: node server.js.
- Buka browser dan akses http://localhost:3000 untuk melihat Songtify.


**Penggunaan**

- Di halaman utama, terdapat daftar lagu yang ada dalam playlist dan lagu-lagu populer. (Statis dan fungsi count play ataupun sum minute play belum berfungsi)
- Untuk memutar lagu, klik tombol "Play" pada lagu yang diinginkan.
- Untuk melihat daftar lagu dalam playlist, klik link "PLAYLIST" di header. Nama playlist lainnya juga dapat ditambahkan. 
- Lagu dapat ditambahkan ke dalam playlist dengan mengklik tombol "Tambahkan ke Playlist" pada halaman utama dan mengisi detail lagu yang ingin ditambahkan.


**Limitation Lainnya**

Project dibuat dengan berusaha menggunakan ODM dan mengkoneksikan MongoDB dengan NodeJS-nya sesuai dengan Modul 3.3. View sebagai pendukung didapat dari referensi dan code yang didapat dari hasil pengerjaan latihan di Progate.
