import loadList from './loadList';
import filterInfo from './filterInfo';
import detectMonth from './detectMonth';

const loadMonths = (navName, elements) => {
    const nav = document.querySelector(navName);
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].is_visible && elements[i].number_list) {
            loadList('table__body', Object.entries(elements[i].number_list));
            filterInfo('.filter__input', '.table__item');
            break;
        }
    }

    for (let i = 0; i < elements.length; i++) {
        const monthName = document.createElement('li');
        const counter = document.createElement('p');

        monthName.addEventListener('click', () => {
            document.querySelector('.table__body').innerHTML = '';
            document.querySelector('.filter__input').value = '';

            loadList('table__body', Object.entries(elements[i].number_list));
            filterInfo('.filter__input', '.table__item');
        });

        if (elements[i].is_visible && elements[i].number_list) {
            monthName.textContent = detectMonth(elements[i].alias);
            counter.textContent = Object.entries(elements[i].number_list).length;

            counter.classList.add('nav__number');
            monthName.classList.add('nav__item');

            nav.appendChild(monthName);
            monthName.appendChild(counter);
        }
    }
};

export default loadMonths;