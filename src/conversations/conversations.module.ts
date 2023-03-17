import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Services } from '../utils/constants';
import { Conversation, Message } from '../utils/typeorm';
import { ConversationsController } from './conversations.controller';
import { isAuthorized } from '../utils/helpers';
import { ConversationsService } from './conversations.service';
import { ConversationMiddleware } from './middlewares/convarsation.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation, Message]), UsersModule],
  controllers: [ConversationsController],
  providers: [
    {
      provide: Services.CONVERSATIONS,
      useClass: ConversationsService,
    },
  ],
  exports: [
    {
      provide: Services.CONVERSATIONS,
      useClass: ConversationsService,
    },
  ],
})
export class ConversationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthorized, ConversationMiddleware)
      .forRoutes('conversations/:id');
  }
}
