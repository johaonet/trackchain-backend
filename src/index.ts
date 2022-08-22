import { Application, urlencoded, json } from 'express';
import * as fs from 'fs';
import { WriteStream } from 'fs';
import * as path from 'path';
import * as winston from 'winston';

import { unCoughtErrorHandler } from './handlers/errorHandler';
import Routes from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    const accessLogStream: WriteStream = fs.createWriteStream(
      path.join(__dirname, './logs/access.log'),
      { flags: 'a' }
    );
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(unCoughtErrorHandler);
  }
}

process.on('beforeExit', function (err) {
  winston.error(JSON.stringify(err));
  console.error(err);
});
