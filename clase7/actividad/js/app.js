import { nav } from './Navbar.js';
import { header } from './Header.js';
import { about } from './About.js';
import { contactMe } from './ContactMe.js';

const app = document.getElementById('root');


app.innerHTML = nav;
app.innerHTML += header;
app.innerHTML += about;
app.innerHTML += contactMe;
