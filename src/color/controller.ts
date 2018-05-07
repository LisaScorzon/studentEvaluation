import {JsonController, Get, Post, Param, Body, NotFoundError, Put} from 'routing-controllers'
import  Colors from './entity'
//import * as request from 'superagent'



@JsonController()
export default class ColorsController {
  // requests all students
  @Get('/colors')
  async allColors(){
    const colors = await Colors.find()
    if (!colors) throw new NotFoundError('colors table doesn\'t exist')
    return {colors}
  }
  // requests one student by color
  @Get('/colors/:id')
  async color(
    @Param('id') id: number
  ){
    const color = await Colors.findOneById(id)
    return { color }
  }

  // creates a student color post
  @Post('/colors')
  async createColors(
    @Body() color: Colors
  ) {
    return color.save()
  }
  @Put('/colors/:id')
  // @HttpCode(200)
  async editColor(
    @Param('id') id: number,
    @Body() update : Partial<Colors>
  ){
    const color = await Colors.findOneById(id)
    if (!color) throw new NotFoundError('this student and color doesn\'t exist')

    return Colors.merge(color, update).save()
  }

}