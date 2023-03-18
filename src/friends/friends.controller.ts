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
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm';
import { Routes, Services } from '../utils/constants';
import { IFriendsService } from './friends';

@ApiTags(Routes.FRIENDS)
@Controller(Routes.FRIENDS)
export class FriendsController {
  constructor(
    @Inject(Services.FRIENDS_SERVICE)
    private readonly friendsService: IFriendsService,
  ) {}

  @Get()
  getFriends(@AuthUser() user: User) {
    console.log('Fetching Friends');
    return this.friendsService.getFriends(user.id);
  }

  @Delete(':id/delete')
  deleteFriend(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.friendsService.deleteFriend({ id, userId });
  }
}
