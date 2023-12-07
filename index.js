const input = document.getElementById("button");
function addingEventListener() {
    function listen(){
        alert(`just clicked my ${input.id}`);
    }
  input.addEventListener("click", listen);
}
addingEventListener();