
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.
//fetch is the name of the function

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = `<p class="house">${house.name}</p>
        <p class="folks">${family}</p>`;
            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process. end fetch. Log is a function. 
    //method of console object


    //list
      // display a list of the house members 
  // when the select list has changed.
  house.addEventListener('change', (e) => {
    //get the house code from the select
    const code = e.target.value;
    let members = getCharacters(code);
   
    // DOM ref for ul to display members
    const container = document.getElementById('characters');
    
    // clear out any previous member names
    container.innerHTML = '';
   
    // create the li's and append to the ul
    members.forEach((person)=> {
      let item = document.createElement('LI');
      item.innerText = person;
      container.appendChild(item);
    });
    
  }); //end addEventListener - change


  //fetch color
  document.addEventListener("DOMContentLoaded",init);

  function init() {
    const seedColor = 
    getRandomHex();
    fetch(
        "https"://www.thecolorapi.com/scheme?
        hex=" + mantis + "&mode=quad&count=4"
    )
  
  .then((response) => response.json ())
  .then((data) => {
    let bgcolor = data.colors[0].hex.value;
    let h1 = data.colors[1].hsl.h;
    let s1 = data.colors[1].hsl.s;
    let l1 = data.colors[1].hsl.l * 0.4;
    let h3 = data.colors[3].hsl.h;
    let s3 = data.colors[3].hsl.s;
    let l3 = data.colors[3].hsl.l * 1.5;
    data.colors[1].hsl.h;

    document.body.style.backgroundColor = bgcolor;
    setCSSVariable("--light", 'hsl(${h3}, ${s3}%, ${l3}%)');
    setCSSVariable("--mid",) data.colors[2].hex.value);
    setCSSVa
  }

  
