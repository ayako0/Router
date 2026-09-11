import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import initApp from "./myComponent.js";
import renderApp from "./component.js";
import renderApp1 from "./component1.js";



// Define routes and map them to imported page functions
const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/init": initApp,
  "/render": renderApp,
  "/render1": renderApp1
};

async function router() {
  const path = window.location.pathname;
  const match = routes[path] || routes["/"]; // Fallback to Home if not found

  // Render the page content into the main element
  document.getElementById("app").innerHTML = match();

  // Update active state on sidebar links
  document.querySelectorAll("nav a[data-link]").forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Intercept clicks on links with `data-link` attribute to prevent full page reload
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});

// Handle back/forward browser buttons
window.addEventListener("popstate", router);

// Load initial route on page load
window.addEventListener("DOMContentLoaded", router);
