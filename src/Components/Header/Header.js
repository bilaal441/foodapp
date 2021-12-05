import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import image from "./img/header-img.jpg";

const Header = () => {
  return (
    <header>
      <nav className={classes.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton />
      </nav>
      <main className={classes["main-image"]}>
        <img src={image} alt="food" />
      </main>
    </header>
  );
};

export default Header;
