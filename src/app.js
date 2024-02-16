function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = `0d38oda45d824a5t0254fbaff5f740bd`;
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let context = `You are a romantic poem expert who loves to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Please make sure to follow the user instructions. Do not include a title to the poem. Sign the poem as 'Tu Inteligencia Artificial' in a <strong> element at the end of the poem and not at the beginning.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a Spanish poem about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
