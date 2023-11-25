import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { CrewService } from './Crew/crew.service';
import { CrewMemberService } from './CrewMember/crew-member.service';
import {
  Crew as CrewModel,
  CrewMember as CrewMemberModel,
  Prisma,
} from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly crewService: CrewService,
    private readonly crewMemberService: CrewMemberService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('crew')
  async getAllCrew(): Promise<CrewModel[]> {
    return await this.crewService.findAll();
  }

  @Get('crewMember')
  async getAllCrewMember(): Promise<CrewMemberModel[]> {
    return await this.crewMemberService.findAll();
  }

  @Get('crew/:id')
  async getCrewById(@Param('id') id: number): Promise<CrewModel> {
    return this.crewService.findById(id);
  }

  @Get('crewMember/:id')
  async getCrewMemberById(@Param('id') id: string): Promise<CrewMemberModel> {
    return this.crewMemberService.findById(parseInt(id));
  }

  @Post('crew')
  async createCrew(
    @Body() crewData: Prisma.CrewCreateInput,
  ): Promise<CrewModel> {
    return this.crewService.createCrew(crewData);
  }

  @Post('crewMember')
  async createCrewMemr(
    @Body() crewMemberData: Prisma.CrewMemberCreateInput,
  ): Promise<CrewModel> {
    return this.crewMemberService.createCrewMember(crewMemberData);
  }
}
