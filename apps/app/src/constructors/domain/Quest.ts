import { Quest as QuestType } from "@/types";

export class QuestInstance {
  constructor(public readonly quest: QuestType) {}

  isFinished(): boolean {
    return this.quest.end !== undefined;
  }
}
