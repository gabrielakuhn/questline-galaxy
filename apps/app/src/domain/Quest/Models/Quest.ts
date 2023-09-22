import { CrewMember } from "@/domain/Crew/Models/CrewMember";

export type Quest = {
  id: string;
  name: string;
  start: string | number;
  end?: string | number;
  description?: string;
  crew?: CrewMember[];
};
