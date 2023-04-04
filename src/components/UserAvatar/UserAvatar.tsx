import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FC } from "react";

interface Props {
  size?: string
}

export const UserAvatar: FC<Props> = ({size = '2x'}) => {
  return (
    <a href='/MiPerfil'>
      <FontAwesomeIcon icon={faCircleUser} className="text-primary" size='2x' />
    </a>
  )
}
