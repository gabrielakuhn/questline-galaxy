import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CrewService } from './Crew/crew.service';
import { CrewMemberService } from './CrewMember/crew-member.service';
import { PrismaService } from './Prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, CrewService, CrewMemberService, PrismaService],
})
export class AppModule {}
