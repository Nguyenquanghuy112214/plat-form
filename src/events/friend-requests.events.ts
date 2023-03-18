import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ServerEvents, WebsocketEvents } from 'src/utils/constants';
import { AcceptFriendRequestResponse } from 'src/utils/types';
import { MessagingGateway } from '../gateway/gateway';
import { FriendRequest } from '../utils/typeorm';

@Injectable()
export class FriendRequestsEvents {
  constructor(private readonly gateway: MessagingGateway) {}

  @OnEvent('friendrequest.create')
  friendRequestCreate(payload: FriendRequest) {
    console.log('friendrequest.create');
    const receiverSocket = this.gateway.sessions.getUserSocket(
      payload.receiver.id,
    );
    receiverSocket && receiverSocket.emit('onFriendRequestReceived', payload);
  }

  @OnEvent('friendrequest.cancel')
  handleFriendRequestCancel(payload: FriendRequest) {
    console.log('friendrequest.cancel');
    const receiverSocket = this.gateway.sessions.getUserSocket(
      payload.receiver.id,
    );
    receiverSocket && receiverSocket.emit('onFriendRequestCancelled', payload);
  }

  @OnEvent(ServerEvents.FRIEND_REQUEST_ACCEPTED)
  handleFriendRequestAccepted(payload: AcceptFriendRequestResponse) {
    console.log(ServerEvents.FRIEND_REQUEST_ACCEPTED);
    const senderSocket = this.gateway.sessions.getUserSocket(
      payload.friendRequest.sender.id,
    );
    senderSocket &&
      senderSocket.emit(WebsocketEvents.FRIEND_REQUEST_ACCEPTED, payload);
  }

  @OnEvent(ServerEvents.FRIEND_REQUEST_REJECTED)
  handleFriendRequestRejected(payload: FriendRequest) {
    console.log(ServerEvents.FRIEND_REQUEST_REJECTED);
    const senderSocket = this.gateway.sessions.getUserSocket(payload.sender.id);
    senderSocket &&
      senderSocket.emit(WebsocketEvents.FRIEND_REQUEST_REJECTED, payload);
  }
}
