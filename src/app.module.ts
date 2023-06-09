import { FriendRequestsModule } from './friend-request/friend-requests.module';
import { FriendsModule } from './friends/friends.module';
import { GroupModule } from './groups/group.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConversationsModule } from './conversations/conversations.module';
import { GatewayModule } from './gateway/gateway.module';
import entities from './utils/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessagesModule } from './messages/messages.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerBehindProxyGuard } from './utils/throttler';
import { ExistsModule } from './exists/exists.module';

@Module({
  imports: [
    FriendRequestsModule,
    FriendsModule,
    MessagesModule,
    ExistsModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath: '.env.development' }),
    PassportModule.register({ session: true }),
    GatewayModule,
    GroupModule,
    FriendRequestsModule,
    ThrottlerModule.forRoot({
      ttl: 30,
      limit: 10,
    }),
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: parseInt(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_DB_USERNAME,
      password: '',
      database: process.env.MYSQL_DB_NAME,
      synchronize: true,
      entities,
      logging: false,
    }),
    ConversationsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
})
export class AppModule {}
