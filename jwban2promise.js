fetch("https://reqres.in/api/users", {
  headers: {
    "x-api-key": "reqres-free-v1",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data API");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data pengguna:");
    console.log(data);
  })
  .catch((error) => {
    console.log("Terjadi kesalahan:", error);
  });
