const searchInput = document.getElementById('name');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.item');
    const noResults = document.getElementById('no_results');

    let hasResults = false;

    items.forEach((item) => {
        // Ignora o item de "No Results" na verificação
        if (item.id !== 'no_results') {
            if (formatString(item.textContent).indexOf(value) !== -1) {
                item.style.display = 'flex';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        }
    });

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'flex';
    }
});

function formatString(value) {
    if (value === null || value === undefined) {
        return '';
    }

    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}
