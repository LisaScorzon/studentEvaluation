import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import TeachersController from './teachers/controller';
import StudentsController from './students/controller';
import BatchesController from './batches/controller';
import ColorsController from './color/controller';


const port = process.env.PORT || 4000


const app = createKoaServer({
  cors: true,
  controllers: [
    TeachersController,
    StudentsController,
    BatchesController,
    ColorsController
    ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Dude, We're listening on port ${port}`))
  })
  .catch(err => console.error(err))