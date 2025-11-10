type Player = {
  userId: string;
  guestId: string;
  kind: "user" | "guest";
  username: string;
  avatarUrl: string;
};
export default Player;
