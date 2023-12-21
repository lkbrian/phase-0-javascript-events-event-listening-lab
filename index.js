const alertButton = document.getElementById("button");
function addingEventListener() {
  function listen() {
    const funFact =
      "You just clicked me \n Fun fact  About me💡\n I am a <input tag >, a grand child to the <main tag> \n so i'm nested";

    alert(`${funFact}`);
  }
  alertButton.addEventListener("click", listen);
}
addingEventListener();
