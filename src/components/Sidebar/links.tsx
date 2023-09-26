import { StaticImageData } from "next/image";

import grid from "@/icons/grid.svg";
import users from "@/icons/users.svg";
import layers from "@/icons/layers.svg";
import heart from "@/icons/heart.svg";

interface INavLinks {
  label: string;
  href: string;
  icon: StaticImageData;
}

export const links: Array<INavLinks> = [
  {
    label: "Painel",
    href: "/painel",
    icon: grid,
  },
  {
    label: "Mentorias",
    href: "/mentorias",
    icon: users,
  },
];
