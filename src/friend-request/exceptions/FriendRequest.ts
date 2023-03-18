import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestException extends HttpException {
  constructor(msg?: string) {
    const defaultMessage = 'Không thể chấp nhận yêu cầu kết bạn';
    const error = msg ? defaultMessage.concat(': ', msg) : defaultMessage;
    super(error, HttpStatus.BAD_REQUEST);
  }
}
