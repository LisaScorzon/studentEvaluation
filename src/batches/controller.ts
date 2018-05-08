import {JsonController, Get, Post, Param, Body, NotFoundError, HttpCode } from 'routing-controllers'
import Batches from './entity'
//import * as request from 'superagent'


@JsonController()
export default class BatchesController {
  
  
  
  @Get('/batches')
  @HttpCode(201)
  getBatches(){
      return Batches.find()
  }


  
  @Get('/batches/:id([0-9]+)')
  async getBatch(
      @Param('id') id: number,
  ){
      return await Batches.findOneById(id)
  }



@Post('/batches')
@HttpCode(201)
async addBatch(
    @Body() batch: Batches
) {
    const entity  = await batch.save()
    return entity
}
}

// @Patch('/batches/:id([0-9]+)')
//     async updateBatch(
//         @Param('id') batchId: Number,
//         @Body() update
//     ) {
//         console.log('At line1 Patch')

//         let batch = await Batches.findOneById(batchId)

//         console.log('At line2 Patch')

//         batch = await update
//         if(batch){
//             return quiz.save()
//         } else {
//             return "error"
//         }
    //}
