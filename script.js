const _navMenu = document.getElementById('_navMenu'),
    _navClose = document.getElementById('_navClose'),
    _navToggle = document.getElementById('_navToggle');


if (_navToggle) {
    _navToggle.addEventListener('click', () => {
        _navMenu.classList.add('show-Menu');
    });
}

if (_navClose) {
    _navClose.addEventListener('click', () => {
        _navMenu.classList.remove('show-Menu');
    });
}