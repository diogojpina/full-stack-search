import { Link } from "react-router-dom";

interface ListItemProps {
  name: string;
  to: string;
  icon: string;
}

export default function ListItem({ name, to, icon }: ListItemProps) {
  return (
    <li>
      <Link to={to} className="dropdown-item">
        <i className={icon}></i>
        {name}
      </Link>
      <hr className="divider" />
    </li>
  );
}
