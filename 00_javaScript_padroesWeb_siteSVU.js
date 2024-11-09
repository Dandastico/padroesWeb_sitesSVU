//ANIMAÇÃO SCROLL DA NAV
document.addEventListener('scroll', () => {
  const header =  document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

//FUNÇÃO DO DROPDOWN
function navDropdown_buttonVac() {
    document.getElementById("navDropdown_containerVac").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropdown_btnVac')) {
      var dropdowns = document.getElementsByClassName("navDropdown_containerVac");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function navDropdown_buttonFale() {
    document.getElementById("navDropdown_containerFale").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropdown_btnFale')) {
      var dropdowns = document.getElementsByClassName("navDropdown_containerFale");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }