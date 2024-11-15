
document.addEventListener('scroll', () => {
  const header =  document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})


function navDropdown_button() {
    document.getElementById("navDropdown_container").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropdown_btn')) {
      var dropdowns = document.getElementsByClassName("navDropdown_container");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }