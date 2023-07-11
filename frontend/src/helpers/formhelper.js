
function clearValues(modal) {
    const tagName = modal._element.querySelectorAll('input, select, textarea')

    tagName.forEach(tag => {
        tag.id === 'clientOption' ? clearClientsList(tag) : tag.value = ''
    });
}

export {clearValues}