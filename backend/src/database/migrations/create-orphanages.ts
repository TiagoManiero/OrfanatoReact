import {  MigrationInterface, QueryRunner } from 'typeorm';
import { idText } from 'typescript';

export class createOrphanage implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void>{
        //reliza alterações no banco de dados
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "about",
                    type: "text",
                },
                {
                    name: "instructions",
                    type: "text",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        //desfazer o que foi feito no método up
        await queryRunner.dropTable('orphanage');
    }   
}