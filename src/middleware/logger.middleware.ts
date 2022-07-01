import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class Loggermiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logger ........................');
    next();
  }
}
