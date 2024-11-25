import { SITE } from "../lib/consts";

const component = `<nav>
<a href="/" class="font-semibold">${SITE.REPO}</a>
        <ul>
            <button class="icon" id="theme-toggle" aria-label="Theme"></button>
        </ul>
      </nav>`;

const navbar = document.getElementById("navbar");

navbar.innerHTML = component;
