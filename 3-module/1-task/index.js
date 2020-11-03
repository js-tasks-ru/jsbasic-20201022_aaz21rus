/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
let usersName

function namify(users) {
  let name = users.map(item => item.name)
  return name
}
