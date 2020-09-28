import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm-expo/browser';

@Entity()
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'character', length: 6 })
  color: string;

  @Column({ type: 'int' })
  weekDay: number;

  @Column({ type: 'int' })
  startTime: number;

  @Column({ type: 'int' })
  finishTime: number;

  @Column({ type: 'varchar' })
  description: string;
}
