// Cetak dua angka pertama dari deret Fibonacci
console.log(0);
console.log(1);

// Inisialisasi penghitung
let count = 2;

// Fungsi rekursif untuk menghitung dan mencetak angka Fibonacci berikutnya
function fibonacci(prev1, prev2) {
  // Basis rekursi: jika count kurang dari atau sama dengan 19
  if (count <= 19) {
    // Hitung angka Fibonacci baru
    const newFibo = prev1 + prev2;
    // Cetak angka Fibonacci baru
    console.log(newFibo);
    // Tingkatkan penghitung
    count += 1;
    // Panggilan rekursif dengan angka Fibonacci terbaru dan sebelumnya
    fibonacci(newFibo, prev1);
  } else {
    // Jika count lebih besar dari 19, hentikan fungsi
    return;
  }
}

// Panggil fungsi rekursif pertama kali dengan nilai awal 1 dan 0
fibonacci(1, 0);
