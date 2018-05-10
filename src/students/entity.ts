import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'


//import Batches from '../batches/entity'

@Entity()
export default class Students extends BaseEntity {

  
  @PrimaryGeneratedColumn()
  id?: number

  

  
  @Column('text', {nullable: false})
  fullName: string


  // @ManyToOne(_ => Batches, batch => batch.batchNumber)
  // @JoinColumn()
  // batchNumber: Batches []

  @Column( {nullable: true})
  batchNumber: number

  @Column( {nullable: true})
  studentNumber: number


  @Column('text',{nullable: true})
  photo: string

 
  @Column('text',{nullable: true})
  remarks:string

 
  @Column('text',{nullable: true})
  question:string

 @Column('text',{nullable: true})
 currentColor: string

 @Column('text',{nullable: true})
 date: string

}
