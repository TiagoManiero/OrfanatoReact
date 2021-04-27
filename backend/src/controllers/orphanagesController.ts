import { Request,Response } from 'express';
import * as Yup from 'yup';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanagesView';

export default {

    async index(request: Request,response: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = orphanagesRepository.find();
        //se o find tiver um relacionamento com imagens OneToMany onde images é a classe = relations: ['images']
        //dentro do parametro de find 
        return response.json(orphanageView.renderMany(orphanages));

    },

    async show(request: Request,response: Response){
        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = orphanagesRepository.findOneOrFail(id);

        return response.json(orphanageView.render(orphanage));

    },

    async create(request: Request,response: Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions
        } = request.body;
        
        const orphanagesRepository = getRepository(Orphanage);

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
        });

        await schema.validate(data,{
            abortEarly: false,
        });
        
        const orphanage = orphanagesRepository.create(data);
    
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
}