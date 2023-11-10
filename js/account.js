
    var modal = document.getElementById("myModal");
    var openBtn = document.getElementById("openModalBtn");
    var closeBtn = document.getElementById("closeModalBtn");
    var closeBtn2 = document.getElementById('closeModalBtn2')
    var accountmain= document.getElementById("accountmain");
    var registerbtn = document.getElementById("registerpage");
    var accountsite = document.getElementById("accountsite");
    var loginsite= document.getElementById('loginsite');
    var loginbtn = document.getElementById('loginpage');
    openBtn.onclick = function() {
        accountmain.classList.add('active');
    }

    closeBtn.onclick = function() {
        accountmain.classList.remove('active')
    }

    closeBtn2.onclick = function() {
        accountmain.classList.remove('active')
    }

    registerbtn.onclick = function() {
        accountsite.classList.add('active')
        loginsite.classList.add('active')
    }


    loginbtn.onclick = function() {
        accountsite.classList.remove('active')
        loginsite.classList.remove('active') 
    }
    
