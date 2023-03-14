import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidConversationIdException extends HttpException {
  constructor() {
    super('ID hội thoại không hợp lệ', HttpStatus.BAD_REQUEST);
  }
}
