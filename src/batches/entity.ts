import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDateString } from 'class-validator';



@Entity()
export default class Batches extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', { nullable: true})
    batchId: number

  @IsDateString()
  @Column( {nullable: false})
  start_date: Date

@IsDateString()
  @Column( {nullable: false})
  end_date: Date

}