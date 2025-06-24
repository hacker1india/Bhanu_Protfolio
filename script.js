const typingEl = document.querySelector('.typing');
const words = ['Bhanu Prakash', 'Data Analyst', 'ML Developer'];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    typingEl.textContent = current;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 150);
    }
  }
}
document.addEventListener('DOMContentLoaded', type);
