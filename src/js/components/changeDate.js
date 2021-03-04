const changeDate = date => {
    const newDate = date.slice(0, -9).split('-');
    return `${newDate[2]}.${newDate[1]}.${newDate[0]}`;
};

export default changeDate;