const detectMonth = code => {
    const dictionary = {
      'jan': 'January',
      'feb': 'February',
      'mar': 'Mart',
      'apr': 'April',
      'may': 'May',
      'jun': 'Juny',
      'jul': 'July',
      'aug': 'August',
      'sep': 'September',
      'oct': 'October',
      'nov': 'November',
      'dec': 'December'
    };

    return dictionary[code];
};

export default detectMonth;