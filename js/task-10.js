function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesCountainerEl: document.querySelector("#boxes"),
};

  refs.createBtnEl.addEventListener("click", createBoxes);
  refs.destroyBtnEl.addEventListener("click", onDestroyBtnElClick);

  //! Цикл создания div
  function createBoxes(amount) {
    const divs = [];
    amount = refs.inputEl.value;
    for (let i = 1; i <= amount; i += 1) {
      console.log("amount", amount);

      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width =  `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;

      console.log("width", div.style.width);
      console.log("height", div.style.height);
      divs.push(div);
    }
    refs.boxesCountainerEl.append(...divs);
  }
  //! Очищаем div#boxes
  function onDestroyBtnElClick() {
    refs.boxesCountainerEl.innerHTML = "";
    refs.inputEl.value = "";
  
    console.log("div#boxes очищен!");
  }