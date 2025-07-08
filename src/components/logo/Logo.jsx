import logoSmall from "../../assets/images/navbar/LOGO.png";
import logoLarge from "../../assets/images/navbar/LOGO.png";

const Logo = ({ size = "small" }) => {
  const isSmall = size === "small";

  return (
    <div className={isSmall ? "logo--small" : "logo--large"}>
      <img
        src={isSmall ? logoSmall : logoLarge}
        alt="Logo"
        className={isSmall ? "logo-img--small" : "logo-img--large"}
      />
    </div>
  );
};

export default Logo;
