import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  textColor: string;
  text: string;
  onClick?: () => Promise<void>;
};

function NavigationLink(props: Props) {
  return (
    <Link
      className="nav-link"
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
}

export default NavigationLink;
