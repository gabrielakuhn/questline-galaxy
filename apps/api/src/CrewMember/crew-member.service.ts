import { Injectable, NotFoundException } from '@nestjs/common';
import { CrewMember, Prisma } from '@prisma/client';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class CrewMemberService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<CrewMember[]> {
    return await this.prismaService.crewMember.findMany();
  }

  async findById(crewMemberId: number): Promise<CrewMember> {
    const crewMember = await this.prismaService.crewMember.findUnique({
      where: {
        id: crewMemberId,
      },
    });

    if (crewMember === null) {
      throw new NotFoundException();
    }

    return crewMember;
  }

  async createCrewMember(
    data: Prisma.CrewMemberCreateInput,
  ): Promise<CrewMember> {
    return this.prismaService.crewMember.create({
      data,
    });
  }
}
