interface GameProps {
  id: number;
  title: string;
  time: number;
  maxPlayers: number;
  maxGroups: number;
  image: string;
  favorite: boolean;
  steps: string;
  skills: Array<string>;
  assets: Array<string>;
}
