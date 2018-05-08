import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'

import StudentsController from './students/controller';
import BatchesController from './batches/controller';
import ColorsController from './color/controller';
import UsersController from './users/controller';
import LoginController from './logins/controller';


const port =  4002


const app = createKoaServer({
  cors: true,
  controllers: [
    UsersController,
    StudentsController,
    BatchesController,
    ColorsController,
    LoginController
    ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Dude, We're listening on port ${port}`))
  })
  .catch(err => console.error(err))