import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SkipThrottle } from '@nestjs/throttler';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from '../auth/utils/Guards';
import { Routes, Services } from '../utils/constants';
import { AuthUser } from '../utils/decorators';
import { User } from '../utils/typeorm';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';

@ApiTags(Routes.CONVERSATIONS)
@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
    private readonly events: EventEmitter2,
  ) {}

  @Post()
  async createConversation(
    @AuthUser() user: User,
    @Body() createConversationPayload: CreateConversationDto,
  ) {
    console.log('createConversation');
    const conversation = await this.conversationsService.createConversation(
      user,
      createConversationPayload,
    );
    this.events.emit('conversation.create', conversation);
    return conversation;
  }

  @Get()
  @SkipThrottle()
  async getConversations(@AuthUser() { id }: User) {
    console.log('1');

    return this.conversationsService.getConversations(id);
  }

  @Get(':id')
  @SkipThrottle()
  async getConversationById(@Param('id') id: number) {
    const conversation = await this.conversationsService.findConversationById(
      id,
    );
    return conversation;
  }

  // @Delete(':conversationId/messages/:messageId')
}
