<script>
<script src="../js/script.js"></script>
// JavaScript for the "Click me" button
document.getElementById('clickMeButton').addEventListener('click', function(event) {
    event.preventDefault()} // Prevent the default link behavior
    alert("Thank you for clicking me po!");
{});

// Smooth scroll for internal links (if you add sections later)
const links = document.querySelectorAll('nav a');
links.forEach(link ={'>'} {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            }); 
        }
    })}
{''};
</script>

