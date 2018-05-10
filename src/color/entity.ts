import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'




@Entity()
export default class Colors extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', { nullable: true})
    batchId: number

    @Column('text', {nullable: false})
    full_name: string

    @Column('text', {nullable: false})
    date: string
   
    @Column('text', {nullable: false})
    color: string
   
    @Column( {nullable: true})
    studentNumber: number
  
}