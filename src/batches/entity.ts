import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

//import Students from '../students/entity'

@Entity()
export default class Batches extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', { nullable: true})
    batchNumber: number

  // @OneToMany(_ => Students, student => student.batchNumber)
  // @JoinColumn()
  // batchNumberId: Students [] 

  // @ManyToOne(_ => Batches, batches => batches.batch_number)
  // batch_number: Batches
  
  @Column( {nullable: false})
  start_date: string


  @Column( {nullable: false})
  end_date: string

}