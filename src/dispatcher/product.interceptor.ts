import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Success response schema
 */
export interface Response<T> {
  data: T;
  message: string;
  isError: boolean;
}

/**
 * Response transformer
 * Transforms object to valid json response
 */
@Injectable()
export class ProductInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((result) => ({
        isError: false,
        message: result.message || 'Success',
        data: result.data,
      })),
    );
  }
}
