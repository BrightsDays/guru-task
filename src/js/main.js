import loadMonths from './components/loadMonths';

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    fetch("https://brightsdays.github.io/guru-task/numbers.json")
        .then(res => res.text())
        .then(body => {
            try {
                const string = body.replace(/\,(?=\s*?[\}\]])/g, '');
                loadMonths('.nav ul', JSON.parse(string).numbers);
            } catch {
                const dataError = document.createElement('p');
                dataError.textContent = 'Data error :(';
                dataError.classList.add('error');
                document.querySelector('.table').appendChild(dataError);
            }
        });
});