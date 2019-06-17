import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      //expect(appController.getData()).toEqual({message: 'Welcome to api!'});

      //[{"title": "Todo 1"}, {"title": "Todo 2"}]
      expect(appController.getData().length).toEqual(2);
    });
  });
});
