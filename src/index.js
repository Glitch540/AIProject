function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "Heroes rise with power bright, Iron, thunder, webs in flight.",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);



  
  