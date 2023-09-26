import { CrewMember } from "@/types";

export type Quest = {
  id: string;
  name: string;
  start: string | number;
  end?: string | number;
  description?: string;
  crew?: CrewMember[];
};
