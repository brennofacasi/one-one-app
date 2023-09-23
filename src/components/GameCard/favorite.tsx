"use client";

import { useEffect, useState } from "react";
import { clientFetch } from "@/services/fetch";
import { Button } from "../forms/Button";

import heart from "@/icons/heart.svg";
import heartFilled from "@/icons/heart-filled.svg";

export function Favorite({ gameId }: { gameId: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    clientFetch
      .get(`game/${gameId}`)
      .then((game) => setActive(game.data.favorite));
  }, []);

  const handleClick = () => {
    clientFetch
      .patch(`game/${gameId}`, {
        favorite: !active,
      })
      .then(() => setActive(!active));
  };

  return <Button icon={active ? heartFilled : heart} onClick={handleClick} />;
}
