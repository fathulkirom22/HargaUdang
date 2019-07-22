# React Native Developer Test, Jala

![alt text](https://github.com/fathulkirom22/HargaUdang/blob/master/HargaUdang.png)

## Brief
Pada tes React Native ini, anda diminta untuk mengimplementasi design UI dan API Jala yang ada.
Anda akan membuat aplikasi yang menampilkan data harga udang di beberapa daerah berbeda.
Aplikasi harga udang ini akan digunakan oleh petambak sebagai media informasi bagi mereka untuk menentukan harga udang yang akan mereka jual.
Untuk API list, silakan cek [di sini](https://documenter.getpostman.com/view/807424/RzfZQYhu?version=latest)

## 1 Shrimp Price
Merupakan tampilan awal dari halaman shrimp price yang berisi list dari harga harga udang yang masuk dalam aplikasi/server Jala. 
Masing masing card menampilkan informasi singkat mengenai,
- Harga udang untuk size 50 contoh: Rp 66.000
- Lokasi penjual udang, contoh: Kab Purworejo, Jawa Tengah
- Tanggal harga dibuat, contoh: 21 Oktober 2018. Serta pembuat harga contoh: Syauqy Aziz
- Serta tombol "Harga lengkap" Yang mengarah ke halaman detail harga udang seperti di #2 Shrimp Price

<br>
![alt text](https://photos-4.dropbox.com/t/2/AABkwMCvQZXKD3CHjkRKmjFwwDEaVt2nZGkvvPNNNOZafg/12/_/png/2048x1/5/1563267600/0/10/image.png/_/png%2520https%253A%252F%252Fpaper-attachments.dropbox.com%252Fs_9C8C5F218442185FA51922B5181B72E7D19E31ED63D06678C7E6647FD43683E3_1545398733435_image.png?preserve_transparency=1&size=2048x1&size_mode=5)

## 2 Shrimp Price
Adalah tampilan detail dari harga udang. Terbagi ke dalam beberapa section/card
1. adalah informasi spesies dan lokasi penjual udang.
2. adalah list/tabel harga udang dengan size tertentu dari size 120 hingga size 30
3. adalah grafik perkembangan harga udang. Untuk grafik ini, sebagai dummy, gunakan list harga dari size 120 ke size 30. (Y axis adalah harga, X axis adalah ukuran)
4. adalah kontak penjual (pada design yg dikirimkan belum ada)
5. adalah catatan dari penjual
6. adalah status dari laporan harga udang contoh: 21 Oktober, 2018 oleh Syauqy Aziz

![alt text](https://photos-6.dropbox.com/t/2/AAA8VDpzTaRvq7tnKO91hRc3a3QB9gDgg521qU9U-0y9bg/12/_/png/2048x1/5/1563267600/0/10/image.png/_/png%2520https%253A%252F%252Fpaper-attachments.dropbox.com%252Fs_9C8C5F218442185FA51922B5181B72E7D19E31ED63D06678C7E6647FD43683E3_1545399185593_image.png?preserve_transparency=1&size=2048x1&size_mode=5)

## 3 Shrimp Price
Ini adalah fitur filter sesuai asal lokasi penjual udang.
Formatnya sendiri adalah flat, Seperti "Purworejo, Jawa Tengah" dan bukan seperti design yang sekarang. dropdownnya semua lokasi diganti oleh satu search bar.
Jika saya mengetik "Purworejo, Jawa Tengah" -> list harga di daerah purworejo saja yang akan muncul.
Jika saya mengetik "Jawa Tengah" -> list harga yang muncul tidak hanya dari purworejo, dari daerah lain di Jawa Tengah pun harus muncul.

![alt text](https://photos-3.dropbox.com/t/2/AADpgNc6peOG8vtj4koiVNzSEwDdJKUH7UqvzPCEU5tdBA/12/_/png/2048x1/5/1563267600/0/10/image.png/_/png%2520https%253A%252F%252Fpaper-attachments.dropbox.com%252Fs_9C8C5F218442185FA51922B5181B72E7D19E31ED63D06678C7E6647FD43683E3_1545399306832_image.png?preserve_transparency=1&size=2048x1&size_mode=5)


Tampilan design flownya dapat dilihat [di sini](https://www.loom.com/share/bd7b1e89bc134b23a1e3b67f4e8f865b)

## Poin tambahan *optional

Pada #1 Shrimp price, mampu untuk menampilkan harga terbaru dan terdekat dengan lokasi pencari harga (menggunakan geo-location) pada satu buah card di posisi sebelum list harga udang.

Hasil test dikumpulkan dalam bentuk apk dan dikirimkan ke **contact@jala.tech**. Dengan subject Jala **RND - {Nama Anda}**.

Jika ada pertanyaan mengenai tes ini, anda dapat menghubungi **syauqy@jala.tech**"# HargaUdang" 
