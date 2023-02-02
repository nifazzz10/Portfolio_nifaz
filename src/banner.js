
import $ from 'jquery';

function Banner() {
  $(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
  $('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
  return (
    <div >
      
 <nav class="custom-navbar" data-spy="affix" data-offset-top="20">
        <div class="container">
            <a class="logo" href="#">Nifaz</a>         
            <ul class="nav">
                <li class="item">
                    <a class="link" href="#home">Home</a>
                </li>
                <li class="item">
                    <a class="link" href="#about">About Me</a>
                </li>
                <li class="item">
                    <a class="link" href="#portfolio">Portfolio</a>
                </li>
                <li class="item">
                    <a class="link" href="#testmonial">Testmonial</a>
                </li>
         
                <li class="item">
                    <a class="link" href="#contact">Contact</a>
                </li>
               
            </ul>
           
          
        </div>          
    </nav>
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                <span class="down">I am Nifaz</span>
            </h1>
            <p class="header-subtitle"> WEB DEVELOPER</p>            

            <button class="btn btn-primary">Visit My Works</button>
        </div>              
    </header>

    </div>
  );
}

export default Banner;
