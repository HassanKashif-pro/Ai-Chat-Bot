import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With Love By
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://github.com/Hassankashifpro1221"}
            >
              Hassan Kashif
            </Link>
          </span>
          💘
        </p>
      </div>
    </footer>
  );
};

export default Footer;
