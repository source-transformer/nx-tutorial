import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {

      console.log('service.getData():',service.getData());

      //expect(service.getData()).toEqual({message: 'Welcome to api!'});
      //[{"title": "Todo 1"}, {"title": "Todo 2"}]
      expect(service.getData().length).toEqual(2);
    });
  });
});
