import validate from './validate';

const filterInfo = (selector, targets) => {
    const items = document.querySelectorAll(targets);
    document.querySelector(selector).addEventListener('input', e => {
      validate(e.target, 999999);
  
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.match(e.target.value)) {
          items[i].style.display = "revert";
        } else {
          items[i].style.display = "none";
        }
      }
    });
};

export default filterInfo;