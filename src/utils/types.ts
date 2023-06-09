import {
  Conversation,
  Friend,
  FriendRequest,
  Group,
  GroupMessage,
  Message,
  User,
} from './typeorm';
import { Request } from 'express';
export type CreateUserDetails = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ValidateUserDetails = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
  username: string;
}>;

export type FindUserOptions = Partial<{
  selectAll: boolean;
}>;

export type CreateConversationParams = {
  email: string;
  message: string;
};

export type ConversationIdentityType = 'author' | 'recipient';

export type FindParticipantParams = Partial<{
  id: number;
}>;

export interface AuthenticatedRequest extends Request {
  user: User;
}

export type CreateParticipantParams = {
  id: number;
};

export type CreateMessageParams = {
  content: string;
  conversationId: number;
  user: User;
};

export type CreateMessageResponse = {
  message: Message;
  conversation: Conversation;
};

export type DeleteMessageParams = {
  userId: number;
  conversationId: number;
  messageId: number;
};

export type EditMessageParams = {
  conversationId: number;
  messageId: number;
  userId: number;
  content: string;
};

export type EditGroupMessageParams = {
  groupId: number;
  messageId: number;
  userId: number;
  content: string;
};

export type CreateGroupParams = {
  creator: User;
  title?: string;
  users: string[];
};

export type FetchGroupsParams = {
  userId: number;
};

export type CreateGroupMessageParams = {
  groupId: number;
  content: string;
  author: User;
};

export type CreateGroupMessageResponse = {
  message: GroupMessage;
  group: Group;
};

export type DeleteGroupMessageParams = {
  userId: number;
  groupId: number;
  messageId: number;
};

export type AddGroupRecipientParams = {
  id: number;
  email: string;
  userId: number;
};

export type RemoveGroupRecipientParams = {
  id: number;
  removeUserId: number;
  issuerId: number;
};

export type AddGroupUserResponse = {
  group: Group;
  user: User;
};

export type RemoveGroupUserResponse = {
  group: Group;
  user: User;
};

export type ConversationAccessParams = {
  conversationId: number;
  userId: number;
};

export type TransferOwnerParams = {
  userId: number;
  groupId: number;
  newOwnerId: number;
};

export type LeaveGroupParams = {
  id: number;
  userId: number;
};

export type CheckUserGroupParams = {
  id: number;
  userId: number;
};

export type CreateFriendParams = {
  user: User;
  email: string;
};

export type FriendRequestStatus = 'accepted' | 'pending' | 'rejected';

export type FriendRequestParams = {
  id: number;
  userId: number;
};

export type CancelFriendRequestParams = {
  id: number;
  userId: number;
};

export type DeleteFriendRequestParams = {
  id: number;
  userId: number;
};

export type AcceptFriendRequestResponse = {
  friend: Friend;
  friendRequest: FriendRequest;
};

export type RemoveFriendEventPayload = {
  friend: Friend;
  userId: number;
};
