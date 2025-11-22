window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

// --------------- Sticky Header ---------------
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight; // store header height
const placeholder = document.createElement('div'); // placeholder for flow
placeholder.style.height = headerHeight + 'px'; 
placeholder.style.display = 'none';
header.parentNode.insertBefore(placeholder, header.nextSibling);

window.addEventListener('scroll', function() {
    if (window.scrollY > 5) {
        header.classList.add('scrolled');
        placeholder.style.display = 'block'; // reserve space
    } else {
        header.classList.remove('scrolled');
        placeholder.style.display = 'none';
    }
});

// --------------- Project Filter Tabs with sliding animation ---------------
document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".projects_filter li");
    const items = document.querySelectorAll(".projects .project_tile");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const filterValue = filter.getAttribute("data-filter");

            filters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");

            items.forEach(item => {
                if (filterValue === "*" || item.classList.contains(filterValue.substring(1))) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });
});
