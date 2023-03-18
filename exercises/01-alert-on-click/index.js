window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
document.querySelector('body').style.backgroundColor = 'grey'
document.querySelector('#button2').addEventListener('click', myClickFunction);