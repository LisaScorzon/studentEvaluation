import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'



@Entity()
export default class Batches extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', { nullable: true})
    batchNumber: number

  
  @Column( {nullable: false})
  start_date: string


  @Column( {nullable: false})
  end_date: string

}