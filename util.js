export const select = (...selectors) =>selectors.map(selector =>document.querySelector(selector))

export const selectAll = (...selectors) =>selectors.map(selector =>document.querySelectorAll(selector))


const [play, record] = select('.play', '.record')

//console.log(record)