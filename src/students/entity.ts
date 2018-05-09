import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator';



@Entity()
export default class Students extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', {default: 1, nullable: true})
    userId: number

  
  @Column('text', {nullable: false})
  full_name: string


  @Column( {nullable: false})
  batch_number: number

  @IsString()
  @Column('text')
  photo: string

  @IsString()
  @Column('text', {nullable: true})
  remarks:string

  @IsString()
  @Column('text', {nullable: true})
  question:string

 @Column('text', {nullable: false})
 currentColor: string

 @Column('text', {nullable: false})
 date: string

}
