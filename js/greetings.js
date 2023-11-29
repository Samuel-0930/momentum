const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const userName = loginInput.value;
	console.log(userName);
	localStorage.setItem(USERNAME_KEY, userName);
	paintGreetings(userName);
}

function paintGreetings(username) {
	greeting.innerText = `hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
