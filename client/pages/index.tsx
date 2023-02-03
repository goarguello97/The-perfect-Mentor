import type { NextPage } from "next";
import Image from "next/image";
import Vector from "../assets/img/The-Perfect-Mentor.svg";
import Ellipse from "../assets/img/Ellipse.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.png";
import Doodle3 from "../assets/img/Doodle3.png";
import Saly1 from "../assets/img/Saly-1.png";
import SalySvg from "../assets/img/Saly-1.svg"
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuey";

const Home: NextPage = () => {
  const { width } = useMediaQuery();

  return width < 1000 ? (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={Vector} alt="The Perfect Mentor" />
      </div>
      <div className={styles.saly}>
        <Image src={Ellipse} alt="Elipse" className={styles.ellipse} />
        <Image src={Doodle} alt="Doodle" className={styles.doodle} />
        <Image src={Saly1} className={styles.saly1} alt="Saly-1" />
        <Image src={Doodle2} className={styles.doodle2} alt="Doodle2" />
      </div>
      <Link href="/signup" className={styles.signUp}>
        <p>Sign Up</p>
      </Link>
      <Link href="/signin" className={styles.logIn}>
        <p>Log in</p>
      </Link>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.principal}>
        <div className={styles.images}>
          <Image src={SalySvg} className={styles.salySvg} alt="Saly-1" />
          <Image src={Doodle} className={styles.doodle} alt="Doodle" />
          <Image src={Doodle2} className={styles.doodle2} alt="Doodle2" />
          <Image src={Doodle3} className={styles.doodle3} alt="Doodle3" />
        </div>
        <div className={styles.titleDesktop}>
          <div className={styles.title}>
            <Image src={Vector} alt="The Perfect Mentor" />
          </div>
          <Link href="/signup" className={styles.signUp}>
            <p>Sign up</p>
          </Link>
          <Link href="/signin" className={styles.logIn}>
            <p>Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
