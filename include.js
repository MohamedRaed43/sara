document.addEventListener("DOMContentLoaded",  ()=> {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(
    async function(el) {
    const file = el.getAttribute("data-include");
    const response = await fetch("sara/"+file);
    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      el.innerHTML = "<p>Error loading " + file + "</p>";
    }
  }
);
});
