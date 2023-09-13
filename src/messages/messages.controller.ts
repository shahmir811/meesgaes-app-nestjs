import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Asalam o Alaikum';
  }

  @Post()
  createMessage() {
    return 'Message created successfully';
  }

  @Get('/:id')
  getMessage() {
    return 'This is the specific message';
  }
}
