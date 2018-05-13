document.addEventListener("DOMContentLoaded", function(event) {
  var partnersItem = document.getElementsByClassName("partners__item");

  function setTransition() {
    for (var i = 0; i < partnersItem.length; i++) {
      partnersItem[i].style.transition = "1s ease";
    }
  }
  function setPosition(callback) {
    var position = 0;
    for (var i = 0; i < partnersItem.length; i++) {
      partnersItem[i].style.transform = "translateX(" + position +"px)";
      position = position + 277.5;
    }
    setTimeout(function(){
      callback();
    }, 1);
  }
  setPosition(setTransition);

  setInterval(function(){
    var partnersWrapper = document.getElementsByClassName("partners-wrapper")[0];
    var partnersItems = document.querySelectorAll(".partners__item");
    var lastPartnersItem = partnersItems[partnersItems.length-1];

    var clnLastBefore = lastPartnersItem.cloneNode(true);
    clnLastBefore.style.transform = "translateX(-277.5px)";
    partnersWrapper.insertBefore(clnLastBefore, partnersWrapper.childNodes[0]);

    var lastElementChild = partnersWrapper.lastElementChild;
    partnersWrapper.removeChild(lastElementChild);

    setTimeout(function(){
      var position = 0;
      for (var i = 0; i < partnersItem.length; i++) {

        partnersItem[i].style.transform = "translateX(" + position +"px)";
        position = position + 277.5;
      }
    }, 1000);
  }, 2000);


  // function ClearAllIntervals() {
  //     for (var i = 1; i < 99999; i++)
  //         window.clearInterval(i);
  // }
  // ClearAllIntervals();

});
