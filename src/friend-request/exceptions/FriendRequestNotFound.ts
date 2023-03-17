import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestNotFoundException extends HttpException {
  constructor() {
    super('Yêu cầu kết bạn không tìm thấy', HttpStatus.BAD_REQUEST);
  }
}
