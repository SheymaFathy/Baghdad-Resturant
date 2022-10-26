$(document).ready(
    function(){

        $("html").niceScroll();

        // change height

        // $('body').height($(window).height());

         // show hidden items
     
    });
//login & signUp page
    function myFunction(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    function fun1(){
       
        window.location.assign("home.html");
    }
    