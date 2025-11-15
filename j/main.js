
 
 
 
 //Part2 fetch color. I had to delete all of my part one work to get this fetch to work
  document.addEventListener("DOMContentLoaded",init);
// generata a color scheme
 async function getColorInfo() {
    const seedColor = getRandomHex();
    let color = await fetch(
        "https://www.thecolorapi.com/scheme?hex=" + seedColor + "&mode=quad&count=4"
// four colors
    );
let response = await color.json();
    try {
        return response;
    } catch {
        (err) => console.error("oops", err.message);
    }
}

async function init() {
    try {
  
    const data = await getColorInfo();
        let bgcolor = data.colors[0].hex.value;
        let h1 = data.colors[1].hsl.h;
        let s1 = data.colors[1].hsl.s;
        let l1 = data.colors[1].hsl.l * 0.4; //make the lightness value darker
        let h3 = data.colors[3].hsl.h;
        let s3 = data.colors[3].hsl.s;
        let l3 = data.colors[3].hsl.l * 1.5; 
    

     document.body.style.backgroundColor = bgcolor;
        setCSSVariable("--light", `hsl(${h3}, ${s3}%, ${l3}%)`);
        setCSSVariable("--mid", data.colors[2].hex.value);
        setCSSVariable("--dark", `hsl(${h1}, ${s1}%, ${l1}%)`);
    } catch {
        (err) => console.error("oops", err.message);
    }
}

function getCSSVariable(cssPropName) {
  const cssRoot = document.querySelector(":root");
  const cssRootInfo = getComputedStyle(cssRoot);
  const prop = cssRootInfo.getPropertyValue(cssPropName);
  return prop;
}
// setting a CSS variable value
function setCSSVariable(cssPropName, value) {
  const cssRoot = document.querySelector(":root");
  cssRoot.style.setProperty(cssPropName, value);
}
function getRandomHex() {
  var letters = "0123456789ABCDEF".split("");
  //split int an array
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}








  
