/**данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 * showSalary
 * @param {Array} users -
 */
function showSalary(users, age) {
  const sortUsers = users.filter(item => (item.age <= age))
  const showUsers = sortUsers.map((item, index) => {
    if(index === sortUsers.length-1) {
      return item.name + ', ' + item.balance
    } else {
      return `${item.name}, ${item.balance}\n`
    }
  }).join('')
  return showUsers
}
