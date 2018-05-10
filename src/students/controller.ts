import {JsonController, Get, Post, Param, Body, NotFoundError, Put, Delete, HttpCode } from 'routing-controllers'
import Students from './entity'
//import * as request from 'superagent'



@JsonController()
export default class StudentsController {
  // requests all students
  @Get('/students')
  async allStudents(){
    const students = await Students.find()
    if (!students) throw new NotFoundError('students table doesn\'t exist')
    return {students}
  }
  // requests one student
  @Get('/students/:studentNumber')
  @HttpCode(201)
    async getStudent(
    @Param('studentNumber') studentNumber:  number,
  ){
   // const student = await Students.findOneById(id)
    return await Students.findOneById(studentNumber)
  }
      //, {relations: ["batches"]})

      @Get('/students/currentColor')
  @HttpCode(201)
    async getCurrentColor(
    @Param('currentColor') currentColor:  Students,
  ){
    console.log('endpoint eval')
   // const student = await Students.findOneById(id)
    return await Students.findOneById(currentColor)
  }
  //creates a student
  @Post('/students')
    @HttpCode(201)
    async createStudent(
        @Body() student: Students
    ) {
        const entity = await student.save()

        return entity
    }


  @Put('/students/:id')
  // @HttpCode(200)
  async editStudent(
    @Param('id') id: number,
    @Body() update : Partial<Students>
  ){
    const student = await Students.findOneById(id)
    if (!student) throw new NotFoundError('Student doesn\'t exist')

    return Students.merge(student, update).save()
  }

  @Delete('/students/:id')
  async deleteStudent(
    @Param('id') id: number
  ) {
    const student = await Students.findOneById(id)
    if (!student) throw new NotFoundError('Student doesn\'t exist')
    if(student) Students.removeById(id)
    return 'successfully deleted'
  }

}