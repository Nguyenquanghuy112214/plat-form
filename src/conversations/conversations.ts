import {
  ConversationAccessParams,
  CreateConversationParams,
} from 'src/utils/types';
import { Conversation, User } from '../utils/typeorm';

export interface IConversationsService {
  createConversation(
    user: User,
    conversationParams: CreateConversationParams,
  ): Promise<Conversation>;
  getConversations(id: number): Promise<Conversation[]>;
  findConversationById(id: number): Promise<Conversation | undefined>;
  hasAccess(params: ConversationAccessParams): Promise<boolean>;
  isCreated(
    userId: number,
    recipientId: number,
  ): Promise<Conversation | undefined>;
}
