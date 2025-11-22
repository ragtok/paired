import { ReactNode } from "react";

export type PrefCardProps = {
  number: string | number;
  title: string;
  children?: ReactNode;
};

export default PrefCardProps;
