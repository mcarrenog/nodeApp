
import {MongoConnectionOptions} from "typeorm/driver/mongodb/MongoConnectionOptions";
import { EventEntity } from '../entity/EventEntity';
import { EventDTO } from '../../domain/model/EventDTO';

export const Database :MongoConnectionOptions = {
    type: "mongodb",
    url: 'mongodb://localhost:27017/test?retryWrites=true&w=majority',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
        EventDTO,
        EventEntity
    ]
}