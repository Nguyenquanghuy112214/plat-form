import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestException extends HttpException {
  constructor() {
    super('Không thể chấp nhận yêu cầu kết bạn', HttpStatus.BAD_REQUEST);
  }
}
