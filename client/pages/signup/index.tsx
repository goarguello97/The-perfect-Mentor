import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/SignUp.module.css";
import Vector from "../../assets/img/The-Perfect-Mentor.svg";
import Doodle from "../../assets/img/Doodle.svg";
import Doodle2 from "../../assets/img/Doodle2.png";
import Doodle3 from "../../assets/img/Doodle3.png";
import Saly2 from "../../assets/img/Saly-2.svg";
import MaskGroup from "../../assets/img/Mask-Group.svg";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import useMediaQuery from "../../hooks/useMediaQuey";

const signUp: NextPage = () => {
  const { width } = useMediaQuery();

  return width < 1000 ? (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <Image src={Vector} alt="The Perfect Mentor" />
          <Image src={Doodle} alt="Doodle" className={styles.doodle} />
          <Image src={Doodle2} alt="Doodle2" className={styles.doodle2} />
        </div>
      </div>
      <div className={styles.signup}>
        <div className={styles.signupTitle}>
          <h3>Sign up</h3>
        </div>
        <div className={styles.hr}></div>
        <input className={styles.input} type="text" placeholder="username" />
        <div className={styles.username}>
          <AiOutlineUser />{" "}
        </div>
        <input className={styles.input} type="text" placeholder="email" />
        <div className={styles.mail}>
          <AiOutlineMail />{" "}
        </div>
        <input className={styles.input} type="text" placeholder="password" />
        <div className={styles.password}>
          <RiLockPasswordLine />{" "}
        </div>
      </div>
      <button className={styles.button}>Sign up</button>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.principal}>
        <Image
          src={Vector}
          alt="The Perfect Mentor"
          className={styles.vector}
        />
        <div className={styles.images}>
          <Image src={Saly2} alt="Saly-2" className={styles.saly2} />
          <Image
            src={MaskGroup}
            alt="Mask-Group"
            className={styles.maskgroup}
          />
          <Image src={Doodle2} alt="Doodle2" className={styles.doodle2} />

          <Image src={Doodle} alt="Doodle" className={styles.doodle} />

          <Image src={Doodle3} alt="Doodle" className={styles.doodle3} />
          
        </div>
        <div className={styles.hr2}></div>
        <div className={styles.signup}>
          <div className={styles.signupTitle}>
            <h3>Sign up</h3>
          </div>
          <div className={styles.hr}></div>
          <input className={styles.input} type="text" placeholder="username" />
          <div className={styles.username}>
            <AiOutlineUser />{" "}
          </div>
          <input className={styles.input} type="text" placeholder="email" />
          <div className={styles.mail}>
            <AiOutlineMail />{" "}
          </div>
          <input className={styles.input} type="text" placeholder="password" />
          <div className={styles.password}>
            <RiLockPasswordLine />{" "}
          </div>
          <button className={styles.button}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default signUp;
