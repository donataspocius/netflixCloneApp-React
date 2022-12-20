import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.Layout}>
      <Header />
      <main className={classes.Layout__main}>{children}</main>
      <Footer />
    </div>
  );
}
