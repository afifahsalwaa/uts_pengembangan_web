function asynchronous() {
  setTimeout(() => {
    console.log("Tahap 1");
  }, 1000);

  setTimeout(() => {
    console.log("Tahap 2");
  }, 2000);

  setTimeout(() => {
    console.log("Tahap 4");
  }, 3000);

  setTimeout(() => {
    console.log("Tahap 5");
  }, 4000);

  setTimeout(() => {
    console.log("Tahap 3");
  }, 5000);
}

asynchronous();
