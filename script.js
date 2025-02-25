const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.items.item');

    items.forEach((item) => {
        if (formatString(item, textContent).indexOf(value) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
});

function formatString(value) {
    if (value === null || value === undefined) {
        return '';
    }

    return value
        .toLowerCase()
        .trim();
}
