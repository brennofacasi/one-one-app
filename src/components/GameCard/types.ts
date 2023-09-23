interface GameCardProps {
  id: number;
  title: string;
  time: number;
  maxPlayers: number;
  maxGroups: number;
  image: string;
  favorite: boolean;
  skills: Array<string>;
}
