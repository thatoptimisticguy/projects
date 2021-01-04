 var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }


window.onload=function(){
  console.log('It worked');
trigger.addEventListener("click", toggleModal);
console.log('It did not work');
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
}