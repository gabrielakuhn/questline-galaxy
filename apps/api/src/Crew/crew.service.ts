import { Injectable, NotFoundException } from '@nestjs/common';
import { Crew, Prisma } from '@prisma/client';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class CrewService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Crew[]> {
    return await this.prismaService.crew.findMany({
      include: {
        members: true,
      },
    });
  }

  async findById(crewId: Crew['id']): Promise<Crew> {
    const crew = await this.prismaService.crew.findUnique({
      where: {
        id: crewId,
      },
    });

    if (crew === null) {
      throw new NotFoundException();
    }

    return crew;
  }

  async createCrew(data: Prisma.CrewCreateInput) {
    return this.prismaService.crew.create({
      data,
      include: { members: true },
    });
  }
}
