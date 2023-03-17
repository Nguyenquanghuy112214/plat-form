import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestPending extends HttpException {
  constructor() {
    super('Yêu cầu kết bạn đang chờ xử lý', HttpStatus.BAD_REQUEST);
  }
}
