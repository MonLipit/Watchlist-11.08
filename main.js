const film1 = document.querySelector("#film__1");
const movie1 = document.querySelector("#movie__1");
const watchList = document.querySelector("#watch-list");

movie1.addEventListener("click", () => {
  console.log("hello");
  const li = document.createElement("li");
  li.attributes = film1;
  watchList.appendChild(li);
});
