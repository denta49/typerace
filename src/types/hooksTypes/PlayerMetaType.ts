import { PlayerRow } from "@/validation/db";

type PlayerMetaType = {
  playerId: PlayerRow["id"];
  username: PlayerRow["username"];
};

export default PlayerMetaType;
