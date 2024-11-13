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
    document.getElementById("navDropdown_containerVac").classList.toggle("show");
}

function navDropdown_buttonFale() {
  document.getElementById("navDropdown_containerFale").classList.toggle("show");
}



//JEITO ANTIGO DE CRIAR O MENU DROPDOWN ABAIXO!!!
// window.onclick = function(event) {
//     if (!event.target.matches('.navDropdown_btnVac')) {
//       var dropdowns = document.getElementsByClassName("navDropdown_containerVac");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// window.onclick = function(event) {
//     if (!event.target.matches('.navDropdown_btnFale')) {
//       var dropdowns = document.getElementsByClassName("navDropdown_containerFale");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

  // function navDropdown_buttonInvisivel() {
  //   document.getElementById("navDropdown_containerInvisivel").classList.toggle("show");
  // } //A PARTIR DESSA FUNÇÃO É UM DROPDOWN QUE NÃO EXISTE MAS QUE POR ALGUM MOTIVO CONSERTA BUGS

  // window.onclick = function(event) {
  //   if (!event.target.matches('.navDropdown_invisivel')) {
  //     var dropdowns = document.getElementsByClassName("navDropdown_containerInvisivel");
  //     var i;
  //     for (i = 0; i < dropdowns.lenfth; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

  //CLICAR FORA DO DROPDOWN FECHA OS PARANAUÊ

  // const menuBtn_vacina = document.querySelector('navDropdown_btnVac');
  // const dropdown_vacina = document.querySelector('navDropdown_containerVac');

  // menuBtn_vacina.addEventListener('click' , () => {
  //   dropdown_vacina = toggle('hide')
  // })

  // document.addEventListener('click' , (e) => {
  //   if (!dropdown_vacina.contains(e.target)) {
  //     dropdown_vacina = add('hide');
  //   }
  // })

  //MENU HAMBURGER
  const navCelular = document.querySelector(".navLista");
  const navHamburger = document.querySelector(".navHamburger_ativacao");

  navHamburger.addEventListener('click', () => {
    const visibility = navCelular.getAttribute("data-visible");
    
    if (visibility === "false") {
      navCelular.setAttribute("data-visible", "true");
      navHamburger.setAttribute("aria-expanded", "true");
    } else if (visibility === "true")  {
      navCelular.setAttribute("data-visible", "false");
      navHamburger.setAttribute("aria-expanded", "false");
    }
  });