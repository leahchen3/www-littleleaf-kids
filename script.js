console.log("Hello world!");

// Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear;

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

document.addEventListener("DOMContentLoaded", () => {
  const pictureWall = document.querySelector(".picture-wall");
  const pictureItems = Array.from(pictureWall.children);
  const numberOfClones = pictureItems.length;

  // Clone the pictures to make the loop seamless
  pictureItems.forEach((item) => {
    const clone = item.cloneNode(true);
    pictureWall.appendChild(clone);
  });

  // Duplicate the animation duration based on the total width of the items
  pictureWall.style.animationDuration = `${numberOfClones * 10}s`; // Adjust speed as needed
});
