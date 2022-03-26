
import { EventEntity } from '../../data/entity/EventEntity';
import { InsertResult } from 'typeorm';
import EventRepository from '../../data/repository/EventRepository';




export default class EventUseCase {
    constructor(private readonly eventRepository: EventRepository) {}

    public async getEventsByCountry(country: string) : Promise<EventEntity[]>{
        const response = await this.eventRepository.findEventsByCountry(country);
        return response;
    }

    public async insertEvents(events: EventEntity[]) : Promise<InsertResult>{
        const response = await this.eventRepository.insertEvents(events);
        return response;
    }

    public async deleteEvent(event: EventEntity) : Promise<any>{
        const response = await this.eventRepository.deleteEvent(event);
        return response;
    }

    public async updateEvent(event: EventEntity) : Promise<string>{
        const response = await this.eventRepository.updateEvent(event);
        return response;
    }
}