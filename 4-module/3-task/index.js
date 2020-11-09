/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  // console.log(table.rows);
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]
    if (row.cells[3].getAttribute('data-available') === 'true') {
      row.cells[3].classList.add('available')
    } else {
      row.cells[3].classList.add('unavailable');
    }
    if (!row.cells[3].hasAttribute('data-available')) {
      row.cells[3].setAttribute('hidden', true)
    }
    if (row.cells[2].innerHTML === 'm') {
      row.cells[2].classList.add('male')
    } else {
      row.cells[2].classList.add('female')
    }
    if (row.cells[1].innerHTML < 18) {
      row.cells[1].style.textDecoration = 'line-through'
    }
  }
}
