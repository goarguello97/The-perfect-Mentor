import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import vector2 from "../../assets/img/Navbar/Vector2.svg";
import frame5 from "../../assets/img/Navbar/Frame 5.svg";
import frame6 from "../../assets/img/Navbar/Frame 6.svg";
import frame7 from "../../assets/img/Navbar/Frame 7.svg";
import stadistics from "../../assets/img/Navbar/Rectangle92.svg"
import reports from "../../assets/img/Navbar/Vector8.svg"
import profile from "../../assets/img/Navbar/Group163.svg"
import Vector from "../../assets/img/The-Perfect-Mentor.svg";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuey";

const Navbar = () => {
  const { width } = useMediaQuery();
  const [shadow, setShadow] = useState(false);

  return width < 1440 ? (
    <div id="navbar">
      <div className={styles.nav}>
        <div className={styles.icon}>
          <Link href="/users">
            <Image src={vector2} alt="vector2" />
          </Link>
        </div>

        <div className={styles.icon}>
          <Link href="/stadistics">
            <Image src={frame5} alt="frame5" />
          </Link>
        </div>

        <div className={styles.icon}>
          <Link href="/reports">
            <Image src={frame6} alt="frame6" />
          </Link>
        </div>

        <div className={styles.icon}>
          <Link href="/profile">
            <Image src={frame7} alt="frame7" />
          </Link>
        </div>
      </div>
      <div className={shadow ? styles.shadow : styles.none}></div>
    </div>
  ) : (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Image src={Vector} alt="The-Perfect-Mentor" />
      </div>
      <div className={styles.menu}>
        <div className={styles.selected}>
          <Link href="/users">
            <Image src={vector2} alt="vector2" className={styles.iconMenu} />
          </Link>
          <p>Users</p>
        </div>
        <div>
          <Link href="/stadistics">
            <Image src={stadistics} alt="frame5" className={styles.iconMenu} />
          </Link>
          <p>Stadistics</p>
        </div>
        <div>
          <Link href="/reports">
            <Image src={reports} alt="frame6" className={styles.iconMenu}  />
          </Link>
          <p>Reports</p>
        </div>
        <div>
          <Link href="/profile">
            <Image src={profile} alt="frame7" className={styles.iconMenu}  />
          </Link>
          <p>Profile</p>
        </div>
      </div>
      <div className={styles.logout}>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default Navbar;
