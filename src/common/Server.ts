import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { createConnection } from 'typeorm';
import { logger } from '../shared/ConfigLog';
import { Database } from '../data/config/Database';
import { dbRepositoriesFactory } from 'nodeapprepositories';
import router from '../api/config/Router';

export class Server {
  constructor(private app: Application = express()) {}

  init(): void {
    this.app.use(express.json({ limit: '100mb' }));
    this.app.use(express.urlencoded({ extended: false, limit: '100mb' }));
    this.app.use(express.static('public'));
    this.app.use(router);
    this.app.get('/', (_req: Request, res: Response): void => {
      res.redirect('/api-docs');
    });

    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerOptions: {
          url: '/swagger.json',
        },
      }),
    );

    createConnection(Database)
      .then(async () => {
        dbRepositoriesFactory.setUrlDB(process.env.URL_DB!);
        dbRepositoriesFactory.setUrlCache(process.env.URL_DB_CACHE!);
        await dbRepositoriesFactory.connect();
        logger.info('Connected to DB');
        this.start();
      })
      .catch((error) => logger.error('TypeORM connection error: ', error));
  }

  start(): void {
    const PORT: number = process.env.PORT ? +process.env.PORT : 8080;
    this.app.listen(PORT, () => {
      logger.info('server started at http://localhost:' + PORT);
    });
  }
}
