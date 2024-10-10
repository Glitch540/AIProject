
function displayPoem(response) {
  console.log("Poem generated");  
  new Typewriter("#poem", {
    strings: response.data.answer, 
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "133dfa996a9f3f03de4ad12bobb44eat";
  let context = "Your mission is to generate a 4 line Marvel superhero poem and generate a new one every time. Make sure to follow the user instructions below";
  let prompt = `Generate a hero poem about Marvel superheroes ${instructionsInput.value.trim()}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


  
  