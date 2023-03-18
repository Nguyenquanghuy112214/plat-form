import { HttpException, HttpStatus } from '@nestjs/common';

export class DeleteFriendException extends HttpException {
  constructor() {
    super('Không thể xóa bạn', HttpStatus.BAD_REQUEST);
  }
}
