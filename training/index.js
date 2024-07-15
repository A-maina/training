const itemInput = document.getElementById("itemInput");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const body = document.querySelector("body");
addBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = itemInput.value;
  list.appendChild(listItem);
  //itemInput.value = "";  // Clear the input after adding the item
});
const toyBtn = document.getElementById("toyBtn");
toyBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/toys")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((toy) => {
        console.log(toy);
        const toyName = document.createElement("p");
        toyName.textContent = toy.name;
        body.appendChild(toyName);

        const btn = document.createElement("button")
        btn.textContent = "purchase"
        btn.classList.add ("hhhh")
        btn.addEventListener("click",() =>{
          btn.style.textDecoration = "line-through"
        })
        body.appendChild(btn)

        const toyImage = document.createElement("img");
        toyImage.setAttribute("src", toy.image);
        body.appendChild(toyImage);
      });
     
    });
});
