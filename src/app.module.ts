import { Module } from '@nestjs/common';

import { BotModule } from './modules/bot/bot.module';
import { ClientModule } from './modules/client/client.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotName } from './app.constants';
@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BotName,
      useFactory: () => ({
        token: '7162153743:AAFo0d8eDXHSNvRL6JxzWqjTmkU23KQzCZU',
        middlewares: [],
        include: [BotModule],
      }),
    }),
    BotModule,
    ClientModule,
  ],
})
export class AppModule {}
