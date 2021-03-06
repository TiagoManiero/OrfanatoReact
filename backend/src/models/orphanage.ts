import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;
    
}