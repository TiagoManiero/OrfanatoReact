import express from 'express';
import routes from './routes';
//import path from 'path';
import 'express-async-errors';

import './database/connection'; 
import errorHandler from './errors/handler';


const app = express();

app.use(express.json);
app.use(routes);
//app.use('/uploads', express.static(path.join(__dirname, "..","uploads")))
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuário
//Métodos = GET,POST,PUT,DELETE
//GET = buscar uma informação
//POST = criando uma informação nova
//PUT = editando uma informação
//DELETE = deletar uma informação
//Parametros = há 3 tipos de parâmetros 
//queryparams inicia com ?concatena utilizando & e fica assim: users?search=tiago&maniero 
//routeparams enviado sem nome fica assim: users/1 (onde 1 por exemplo é o metodo)
//body corpo da requisição, normalmente utilizado json mas pode ser xml ou text


app.listen(3333); //localhost:3333 para acessar o bakcend




