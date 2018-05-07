import {JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import Teachers from './entity'
//import * as request from 'superagent'



@JsonController()
export default class TeachersController {
  // requests all teachers
  @Get('/teachers')
  async allTeachers(){
    const teachers = await Teachers.find()
    if (!teachers) throw new NotFoundError('teachers table doesn\'t exist')
    return {teachers}
  }
  // requests one teacher
  @Get('/teachers/:id')
  async teacher(
    @Param('id') id: number
  ){
    const teacher = await Teachers.findOneById(id)
    return { teacher }
  }

  // creates a teacher
  @Post('/teachers')
  async createTeachers(
    @Body() teacher: Teachers
  ) {
    const {password, ...rest} = teacher
    const entity = Teachers.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
}