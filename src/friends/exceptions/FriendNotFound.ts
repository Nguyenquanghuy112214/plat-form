import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendNotFoundException extends HttpException {
  constructor() {
    super('Không tìm thấy bạn', HttpStatus.NOT_FOUND);
  }
}
