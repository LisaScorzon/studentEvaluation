import {JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import Users from './entity';
//import * as request from 'superagent'



@JsonController()
export default class UsersController {
  // requests all teachers
  @Get('/users')
  async allUsers(){
    const users = await Users.find()
    if (!users) throw new NotFoundError('users table doesn\'t exist')
    return {users}
  }
  // requests one teacher
  @Get('/users/:id')
  async user(
    @Param('id') id: number
  ){
    const user = await Users.findOneById(id)
    return { user }
  }

  // creates a teacher
  @Post('/user')
  async createUser(
    @Body() user: Users
  ) {
    const {password, ...rest} = user
    const entity = Users.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
}