async function getUsers() {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data API");
    }

    const data = await response.json();

    console.log("Data pengguna:");
    console.log(data);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

getUsers();
