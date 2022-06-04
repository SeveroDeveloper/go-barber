import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
    id: String;

  @Column()
    provider: String;

  @Column('timestamp without time zone')
    date: Date;
}

export default Appointment;
