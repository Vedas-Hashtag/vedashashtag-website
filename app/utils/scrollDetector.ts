export const scroll = () => {
  if (window.scrollY > 5) {
    console.log("Scroll detected.");
    document.getElementById("navbar")?.classList.add("shadow-md, sticky");
  } else {
    document.getElementById("navbar")?.classList.remove("shadow-md, sticky");
  }
};
