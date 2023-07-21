{
    let bttn = document.getElementById("bttn");
    const mail = document.getElementById("mail");
    const errMessage = document.getElementById("errMessage");
    let canva = document.getElementsByClassName("firstForm")[0];
    let deskImg = document.getElementsByClassName("deskImg")[0];
    let container = document.getElementsByClassName("container")[0];
    let acanva = document.getElementsByClassName("activeForm")[0];
    function errValidation() {
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if(!emailReg.test(mail.value)) {
            errMessage.innerHTML = "Valid email required";
            mail.classList.add("err");
        } else {
            setTimeout(emailValid, 1000);
        }
    }
    function emailValid() {
        mail.classList.remove("err");
        canva.style.display = "none";
        acanva.style.display = "flex";
        container.classList.add("small");
        mail.value = "";
    }
    function inputFunction() {
        if(mail.classList.contains("err")) {
            mail.classList.remove("err");
            errMessage.innerHTML = "";
        }
    }

    function containerResize() {
        if(container.classList.contains("small")) {
            container.classList.remove("small");
        }
    }
    

    bttn.addEventListener("focus", () => {
        errValidation();
        deskImg.style.transform = "scale(1.1)";
    });
    mail.addEventListener("focus", () => {
        inputFunction();
        deskImg.style.transform = "scale(1.1)";
    });
    mail.addEventListener("blur", () => {
        deskImg.style.transform = "scale(1)";
    });
    bttn.addEventListener("blur", () => {
        deskImg.style.transform = "scale(1)";
    });

    let susBtn = document.getElementsByClassName("activebttn")[0];
    susBtn.addEventListener("focus", () => {
        acanva.style.display = "none";
        canva.style.display = "flex";
        containerResize();
    
    });
}
