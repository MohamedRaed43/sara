document.addEventListener("DOMContentLoaded",  ()=> {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(
    async function(el) {
    const file = el.getAttribute("data-include");
   const depth = window.location.pathname.split("/").length - 2;
    
    // Go back folders (e.g., '../', '../../', etc.)
    const prefix = '../'.repeat(depth);

    // Fetch file from root relative to current depth
    const response = await fetch(prefix + file);    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      el.innerHTML = "<p>Error loading " + file + "</p>";
    }
  }
);
});
