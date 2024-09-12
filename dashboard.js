const arrowDown = document.querySelector('.arrow-down');
    const dropdownContent = document.querySelector('.dropdown-content');

    arrowDown.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!arrowDown.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });




