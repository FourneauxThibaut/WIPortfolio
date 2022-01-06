// npm button => sweetalert2
document.getElementById('npm').onclick = function() {
      Swal.fire({
            background: '#434343',
            padding: '3em',
            title: "<h5 style='color:white'><b style='word-spacing: 0.6rem; letter-spacing: 0.05rem'>" + "npx mtkuma" + "</b></h5>",
            html: "<i style='color: rgba(255, 255, 255, 0.7)'>" + "open a terminal and type that!" + "</i>",
            color: '#FFFFFFF',
            showConfirmButton: false,
      })
}

// align portfolio_item_link to right for single items
let portfolioLink = document.querySelectorAll('.portfolio__list__item__footer__link');
portfolioLink.forEach(element => {
      if (element.children.length <= 1){
            element.querySelector('li').style.marginLeft = "50%"
      }
});
