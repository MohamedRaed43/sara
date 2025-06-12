document.addEventListener("DOMContentLoaded",  ()=> {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(
    async function(el) {
    const file = el.getAttribute("data-include");
   const name = window.location.pathname.split("/");
   console.log(name)
   let depth=-1;
   
   let i=1;
  while (name[name.length-i]!="sara") {
    console.log(name[name.length-i])
        depth++;
        i++;
  }
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
