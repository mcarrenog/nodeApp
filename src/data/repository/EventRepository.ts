import {
  EntityManager,
  EntityRepository,
  getManager,
  InsertResult,
} from "typeorm";
import { EventEntity } from "../entity/EventEntity";

@EntityRepository()
export default class EventRepository {
  constructor(private entityManager: EntityManager = getManager()) {}

  public async insertEvent(event: EventEntity): Promise<InsertResult> {
    const result = await this.entityManager.insert(EventEntity, event);

    return result;
  }

  public async insertEvents(events: EventEntity[]): Promise<InsertResult> {
    const result = await this.entityManager.insert(EventEntity, events);

    return result;
  }

  public async findEventsByCountry(country: string): Promise<EventEntity[]> {
    const result = await this.entityManager.find(EventEntity, {
      where: { country },
    });
    return result;
  }

  public async updateEvent(event: EventEntity): Promise<any> {

    const eventToUpdate = await this.entityManager.findOne(EventEntity, {messageId: event.messageId});

    eventToUpdate.country = event.country;
    eventToUpdate.message = event.message;
    eventToUpdate.service = event.service;
    eventToUpdate.serviceType = event.serviceType;
    

    const result = await this.entityManager.save(EventEntity, eventToUpdate)

    return result;
  }

  public async deleteEvent(event: EventEntity): Promise<string>
  {
       const result = await this.entityManager.delete(EventEntity, {messageId: event.messageId});

      return result.affected.toString();
  }
}
