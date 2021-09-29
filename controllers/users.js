import { v4 as uuidv4 } from 'uuid';

//users array
let users = []

export const getUsers = (request, response) => {
  response.send(users)
}

export const createUser = (request, response) => {
  const user = request.body
  const userID = uuidv4() //pattern example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const userWithID = {...user, id: userID} //spreading users

  users.push(userWithID) //users.push({...user, id: uuidv4()})

  response.send(`User with name: ${user.name}, successfully added to database.`)
}

export const getUserByID = (request, response) => {
  const {id} = request.params
  const foundUser = users.find((user) => user.id === id)
  
  response.send(foundUser)
}

export const deleteUser = (request, response) => {
  const {id} = request.params
  users = users.filter((user) => user.id != id)
  /**
   * creating a new users array without the user with specified id.
   * 
   * remember that, we are re-setting the users array, so it cannot
   * be declared as "const"
   */

  response.send(`User with id: ${id}, successfully deleted from database.`)
}

export const updateUser = (request, response) => {
  const {id} = request.params
  const {name, middlename, age} = request.body
  const userToBeUpdated = users.find((users) => users.id === id)
  
  if(name) userToBeUpdated.name = name
  if(middlename) userToBeUpdated.middlename = middlename
  if(age) userToBeUpdated.age = age

  response.send(`User with id: ${id}, successfully updated.`)
}