import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! to view all products go to <a href="/products">products</a>';
  }
}
