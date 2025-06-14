document.addEventListener('DOMContentLoaded', () => {
    // Clear the cookie first
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

    // Clear localStorage if needed
    localStorage.removeItem('token');  

    // Then navigate back to login page
    window.location.href = "/sara";
});