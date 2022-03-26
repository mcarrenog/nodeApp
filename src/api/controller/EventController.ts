import { Body, Delete, Get, Post, Put, Query, Response, Route, SuccessResponse, Tags } from 'tsoa';
import { ApiError } from '../model/ApiError';
import EventUseCase from '../../domain/usecase/EventUseCase';
import { EventEntity } from '../../data/entity/EventEntity';


@Tags('EventController')
@Route('')
export default class EventController{
    constructor(private readonly eventUseCase: EventUseCase) {}
    
    @Post('/Events')
    @Response<ApiError>(404, 'Not Found')
    @SuccessResponse('200', 'EventResponse')
    public async postEvents(@Body() events: EventEntity[]): Promise<any> {
       const response = await this.eventUseCase.insertEvents(events);
      return response;
    }

    @Put('/Event')
    @Response<ApiError>(404, 'Not Found')
    @SuccessResponse('200', 'EventResponse')
    public async putEvent(@Body() event: EventEntity): Promise<any> {
       const response = await this.eventUseCase.updateEvent(event);
      return response;
    }

    @Delete('/Event')
    @Response<ApiError>(404, 'Not Found')
    @SuccessResponse('200', 'EventResponse')
    public async deleteEvent(@Body() event: EventEntity): Promise<string> {
       const response = await this.eventUseCase.deleteEvent(event);
      return response;
    }

    @Get('/Events')
    @Response<ApiError>(404, 'Not Found')
    @SuccessResponse('200', 'EventResponse')
    public async getEvents(@Query() country: string): Promise<EventEntity[]> {
       const response = await this.eventUseCase.getEventsByCountry(country);
      return response;
    }
}