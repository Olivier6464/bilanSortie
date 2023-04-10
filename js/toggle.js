function toggle(){
    const text = document.querySelector('h1');
    let a = text.innerText;
    a=="Bilan de sortie" ? a="Bilan intermédiaire" : a="Bilan de sortie";
    text.innerHTML=a;
    }


document.querySelector('a').addEventListener('click', toggle)


document.addEventListener("keydown", function(e) {
    if (e.ctrlKey  && e.keyCode == 83) {
      e.preventDefault();
      // Process the event here (such as click on submit button)
      toggle();
    }
  }, false);