import PlayerType from "@/types/dataTypes/PlayerType";

type IdentityStateType = PlayerType & {
  setUsername: (name: string) => void;
  setGuest: (id: string) => void;
  setUser: (id: string) => void;
};
export default IdentityStateType;
