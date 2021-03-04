const validate = (eventTarget, max) => {
    eventTarget.value = eventTarget.value.replace(/[^0-9]/g, '');
    const nValue = eventTarget.value.replace(/\s/g, "");
  
    if (+nValue <= max) {
      eventTarget.value = eventTarget.value.replace(/(\..*)\./g, '$1');
    } else {
      eventTarget.value = max;
      eventTarget.value = eventTarget.value.replace(/(\..*)\./g, '$1');
    }
};

export default validate;