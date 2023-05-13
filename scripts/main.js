let btns = document.querySelectorAll('.btn');
let btns_more_info = document.querySelectorAll('.more_info');
const overlay = document.querySelector('.overlay');
console.dir(overlay);
const form = document.querySelector('.callback-form');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });
});

btns_more_info.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});
