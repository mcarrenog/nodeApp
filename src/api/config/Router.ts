import express, { Request, Response } from 'express';
import HttpStatus from './HttpStatus';
import EventController from '../controller/EventController';
import EventUseCase from '../../domain/usecase/EventUseCase';
import IndicatorUseCase from '../../domain/usecase/IndicatorUseCase';
import { IndicatorGateway }  from '../../data/gateway/IndicatorGateway';
import IndicatorController from '../controller/IndicatorController';
import { EventEntity } from '../../data/entity/EventEntity';
import EventRepository from '../../data/repository/EventRepository';





const router = express.Router();

const eventController = () => {
  return new EventController(new EventUseCase(new EventRepository()));
};

const indicatorController = () => {
    return new IndicatorController(new IndicatorUseCase(new IndicatorGateway()));
  };

  router.get('/Indicator',
  async (req: Request, res: Response) => {
    try {
      const date: string = req.query.date as string;

      const response = await indicatorController().getIndicator(date);
      return res.status(HttpStatus.OK.value).json(response).end();
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER.value).json(error).end();

    }
  });

router.post('/Events',
  async (req: Request, res: Response) => {
    try {
      const listEvents: EventEntity[] = req.body;

      const response = await eventController().postEvents(listEvents);
      return res.status(HttpStatus.OK.value).json(response).end();
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER.value).json(error).end();

    }
  });

  router.get('/Events',
  async (req: Request, res: Response) => {
    try {
      const country: string = req.query.country as string;

      const response = await eventController().getEvents(country);
      return res.status(HttpStatus.OK.value).json(response).end();
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER.value).json(error).end();

    }
  });
  
  router.put('/Event',
  async (req: Request, res: Response) => {
    try {
      const event: EventEntity = req.body;

      const response = await eventController().putEvent(event);
      return res.status(HttpStatus.OK.value).json(response).end();
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER.value).json(error).end();

    }
  });

  router.delete('/Event',
  async (req: Request, res: Response) => {
    try {
      const event: EventEntity = req.body;

      const response = await eventController().deleteEvent(event);
      return res.status(HttpStatus.OK.value).json(response).end();
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER.value).json(error).end();

    }
  });

export default router;
