import { HttpException, HttpStatus } from '@nestjs/common';

export class ConversationNotFoundException extends HttpException {
  constructor() {
    super('Không tìm thấy cuộc trò chuyện', HttpStatus.NOT_FOUND);
  }
}
