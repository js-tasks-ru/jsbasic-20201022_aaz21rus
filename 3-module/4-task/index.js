/**данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 * showSalary
 * @param {Array} users -
 */
function showSalary(users, age) {
  const sortUsers = users.filter(item => (item.age <= age))
    .map(item => {
      `${item.name} ${item.balance}\n`
      // for (let i = 0; i < item.length; i++) {
      //     if(i = item.length) {
      //         item[i].name + ' ' + item[i].balance
      //     }
      //     `${item[i].name} ${item[i].balance}'\n`
      // }
    })

  const str = sortUsers.join('')
  console.log(str)
}
