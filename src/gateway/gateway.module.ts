import { Module } from '@nestjs/common';
import { FriendsModule } from 'src/friends/friends.module';
import { ConversationsModule } from '../conversations/conversations.module';
import { GroupModule } from '../groups/group.module';
import { Services } from '../utils/constants';
import { MessagingGateway } from './gateway';
import { GatewaySessionManager } from './gateway.session';

@Module({
  imports: [ConversationsModule, GroupModule, FriendsModule],
  providers: [
    MessagingGateway,
    {
      provide: Services.GATEWAY_SESSION_MANAGER,
      useClass: GatewaySessionManager,
    },
  ],
  exports: [
    MessagingGateway,
    {
      provide: Services.GATEWAY_SESSION_MANAGER,
      useClass: GatewaySessionManager,
    },
  ],
})
export class GatewayModule {}
