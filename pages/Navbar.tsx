import Image from "next/image";

const Nav = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src="https://media.autochek.africa/file/publicAssets/full-color-logo-new.png"
            alt=""
            width="150"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
