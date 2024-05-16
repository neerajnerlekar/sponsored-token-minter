"use client";

import { blo } from "blo";
import { Hex } from "viem";

export const BlockieAvatar = ({ address, size }: { address: Hex; size: number }) => (
  // Don't want to use nextJS Image here (and adding remote patterns for the URL)
  // eslint-disable-next-line @next/next/no-img-element
  <img className="rounded-full" src={blo(address)} width={size} height={size} alt={`${address} avatar`} />
);
