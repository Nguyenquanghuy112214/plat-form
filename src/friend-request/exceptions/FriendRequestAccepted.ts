import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestAcceptedException extends HttpException {
  constructor() {
    super('Yêu cầu kết bạn đã được chấp nhận', HttpStatus.BAD_REQUEST);
  }
}
