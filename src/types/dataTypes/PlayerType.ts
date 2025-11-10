type Player = {
  userId?: string | null;
  guestId?: string | null;
  kind: "user" | "guest";
  username: string;
};
export default Player;
