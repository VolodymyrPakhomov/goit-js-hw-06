// const itemElRef = document.querySelectorAll("#categories");
// console.log(itemElRef);
// const quantityLi = itemElRef.children.length;
// console.log("Number of categories:", quantityLi);

const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories:${itemsRef.length}`);

itemsRef.forEach(item => {
    const nickСategory = item.querySelector("h2");
    const quantityItСategory = item.querySelectorAll("li");
    console.log(`Category: ${nickСategory.textContent} \nElements: ${quantityItСategory.length}`);
    
});