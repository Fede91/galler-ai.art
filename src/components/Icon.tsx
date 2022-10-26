import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type Props = {
  icon: string;
} & FontAwesomeIconProps;

export const Icon: React.FC<Props> = ({ icon, ...otherProps }) => {
  // @ts-ignore
  return <FontAwesomeIcon icon={icon.split("-")} size="lg" {...otherProps} />;
};
