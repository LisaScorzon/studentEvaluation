import {JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import Batches from './entity'
//import * as request from 'superagent'


@JsonController()
export default class BatchesController {
  // requests all batches
  @Get('/batches')
  async allbatches(){
    const batches = await Batches.find()
    if (!batches) throw new NotFoundError('batches table doesn\'t exist')
    return {batches}
  }
  // requests one batch
  @Get('/batches/:id')
  async batch(
    @Param('id') id: number
  ){
    const batch = await Batches.findOneById(id)
    return { batch }

    }

@Post('/batches')
  async createBatches(
    @Body() batch: Batches
  ) {
    return batch.save()
  }
}

