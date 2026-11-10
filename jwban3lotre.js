function lottery(num) {
  return new Promise((resolve, reject) => {
    console.log("Undian sedang berlangsung...");
    console.log("Silahkan tunggu 10 detik.");

    setTimeout(() => {
      let random = Math.floor(Math.random() * 150) + 1;

      console.log("Angka undian:", random);

      if (num === random) {
        resolve("Selamat! Anda memenangkan lottery!");
      } else {
        reject("Maaf, Anda belum beruntung. Silahkan Coba lagi!");
      }
    }, 10000);
  });
}

// Memanggil fungsi lottery
lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Undian lotre telah berakhir_");
  });
