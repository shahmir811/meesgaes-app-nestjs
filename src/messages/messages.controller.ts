import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Asalam o Alaikum';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'Message created successfully';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('ID: ' + id);
    return 'This is the specific message';
  }
}
