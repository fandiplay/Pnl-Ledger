PNL Ledger (PWA)
Isi folder: index.html, manifest.webmanifest, sw.js, icons/, vendor/ (Font Awesome, SheetJS, font Outfit - semua lokal, jalan offline).
PWA hanya bisa di-install kalau dibuka lewat HTTPS (hosting) atau http://localhost. content:// atau file:// tidak bisa.
Lewat Termux:  cd folder-ini && python3 -m http.server 8080   lalu buka http://localhost:8080 di Chrome.
Setelah update file, versi baru otomatis diambil saat online supaya HP mengambil versi baru.
