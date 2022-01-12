
const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);


const elements = allCategories.forEach( element => {

  const nameContent = element.firstElementChild.textContent;
  console.log(`Category: ${nameContent}`);

  const elemCount = element.lastElementChild.children.length;
  console.log(`Elements: ${elemCount}`);


}
)




