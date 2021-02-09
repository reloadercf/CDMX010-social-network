export const loginVisibility = () => {
    const btnVisibility = document.getElementById('visibility');
    const inputPassword = document.getElementById('login-password-input');
    btnVisibility.addEventListener('click',function showPassword() {
            if (inputPassword.type === "password") {
                inputPassword.type = "text";
                btnVisibility.src="./images/visibility_off.png";       
            }else{
            inputPassword.type = "password";
            btnVisibility.src="./images/visibility.png";
            }
    });
}