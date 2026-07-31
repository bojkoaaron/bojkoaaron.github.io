document.addEventListener('DOMContentLoaded', function () {
const filterButtons = document.querySelectorAll('#videos .filter-btn');
const cards = document.querySelectorAll('#videos .video-card');

filterButtons.forEach(function (btn) {
btn.addEventListener('click', function () {
filterButtons.forEach(function (b) {
b.classList.remove('active');
});
btn.classList.add('active');

const filter = btn.getAttribute('data-filter');

cards.forEach(function (card) {
if (filter === 'all' || card.getAttribute('data-category') === filter) {
card.style.display = '';
} else {
card.style.display = 'none';
}
});
});
});
});
