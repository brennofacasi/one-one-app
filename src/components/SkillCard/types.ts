type SkillCardProps = {
  id: number;
  name: string;
  description: string;
  games: [
    {
      games: {
        id: number;
        title: string;
      };
    }
  ];
};
