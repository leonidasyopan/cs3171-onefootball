document.addEventListener("DOMContentLoaded", makeItClickable);

function makeItClickable() {
    const rows = document.querySelectorAll("tr[data-href]");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;
        }); 
    });
}