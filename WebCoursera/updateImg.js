function update(selectedElement) {
  let tag = document.getElementById("selected_image");
  tag.innerHTML = selectedElement.innerHTML;
}
function chooseSearchBar(selected) {
  let element = document.querySelector(".search_bar");
  element.style.backgroundColor = "white";
  let element1 = document.querySelector(".search_bar input");
  element1.style.color = "black";
}
divs = document.querySelectorAll(".books_of_week div");
divs1 = document.querySelectorAll(".books_of_week div");
divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    selectImg(div);
  });
});
divs.forEach((div) => {
  div.addEventListener("mouseout", () => {
    div.style.backgroundColor='white';
    div.style.color = "black";
  });
});

function selectImg(div) {
  div.style.backgroundColor = '#9e9e9e';
  div.style.color='white';
}
