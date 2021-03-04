import changeDate from './changeDate';

const loadList = (listName, elements) => {
    const list = document.querySelector(`.${listName}`);
  
    for (let i = 0; i < elements.length; i++) {
      let tableRow = document.createElement('tr');
      let number = document.createElement('td');
      let date = document.createElement('td');
      tableRow.classList.add('table__item');
  
      if (elements[i][1].number && elements[i][1].cdate) {
        number.textContent = elements[i][1].number;
        date.textContent = changeDate(elements[i][1].cdate);
        list.appendChild(tableRow);
        tableRow.appendChild(number);
        tableRow.appendChild(date);
      }
    }
};

export default loadList;