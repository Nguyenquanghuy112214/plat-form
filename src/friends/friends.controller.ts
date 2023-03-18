/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Body,
  Controller,
  Inject,
  Post,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm';
import { Routes, ServerEvents, Services } from '../utils/constants';
import { IFriendsService } from './friends';

@ApiTags(Routes.FRIENDS)
@Controller(Routes.FRIENDS)
export class FriendsController {
  constructor(
    @Inject(Services.FRIENDS_SERVICE)
    private readonly friendsService: IFriendsService,
    private readonly event: EventEmitter2,
  ) {}

  @Get()
  getFriends(@AuthUser() user: User) {
    console.log('Fetching Friends');
    return this.friendsService.getFriends(user.id);
  }

  @Delete(':id/delete')
  async deleteFriend(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const friend = await this.friendsService.deleteFriend({ id, userId });
    this.event.emit(ServerEvents.FRIEND_REMOVED, { friend, userId });
    return friend;
  }
}
