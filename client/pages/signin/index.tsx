import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/SignIn.module.css";
import Vector from "../../assets/img/The-Perfect-Mentor.svg";
import Doodle from "../../assets/img/Doodle.svg";
import Doodle2 from "../../assets/img/Doodle2.png";
import Doodle3 from "../../assets/img/Doodle3.png";
import Saly2 from "../../assets/img/Saly-2.svg";
import MaskGroup from "../../assets/img/Mask-Group.svg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import useMediaQuery from "../../hooks/useMediaQuey";
import Link from "next/link";
import { login, restart } from "../../features/user/authSlice";
import { validationLogin } from "../../helpers/validations";
import { LOGIN_INITIAL_VALUES } from "../../constants/constants";
import useForm from "../../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";

const SignIn: NextPage = () => {
  const { width } = useMediaQuery();
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.auth);

  const { values, handleChange, handleSubmit, errors } = useForm(
    LOGIN_INITIAL_VALUES,
    login,
    validationLogin
  );

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        dispatch(restart());
      }, 5000);
    }
  }, [error]);

  console.log(error)

  return width < 1000 ? (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <Image src={Vector} alt="The Perfect Mentor" />
          <Image src={Doodle} alt="Doodle" className={styles.doodle} />
          <Image src={Doodle2} alt="Doodle2" className={styles.doodle2} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.signup}>
          <div className={styles.signupTitle}>
            <h3>Sign in</h3>
          </div>
          <div className={styles.hr}></div>
          <p className={styles.signinName}>Hi, name</p>
          <input
            className={styles.input}
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <div className={styles.mail}>
            <AiOutlineMail />{" "}
          </div>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <div className={styles.password}>
            <RiLockPasswordLine />{" "}
          </div>
          <Link href="" className={styles.forgot}>
            Do you forgot your password?
          </Link>
        </div>
        <button className={styles.button} type="submit">
          Sign in
        </button>

        {error.length > 0 ? (
          <div className={styles.errorContainer}>
            <div className={styles.error}>
              <h3>Ups...</h3>
              <div className={styles.hr3}></div>
              {error?.map((err: { message: string }, i) => (
                <p key={i}>{err.message}</p>
              ))}
            </div>
          </div>
        ) : null}
        {Object.keys(errors).length !== 0 ? (
          <div className={styles.errorContainer}>
            <div className={styles.error}>
              <h3>Ups...</h3>
              <div className={styles.hr3}></div>
              {Object.values(errors).map((error: any, i) => (
                <p key={i}>{error}</p>
              ))}
            </div>
          </div>
        ) : null}
      </form>
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
          <form onSubmit={handleSubmit}>
            <div className={styles.signupTitle}>
              <h3>Sign in</h3>
            </div>
            <div className={styles.hr}></div>

            <input
              className={styles.input}
              type="text"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <div className={styles.mail}>
              <AiOutlineMail />{" "}
            </div>
            <input
              className={styles.input}
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
            <div className={styles.password}>
              <RiLockPasswordLine />{" "}
            </div>
            <br />
            <Link href="" className={styles.forgot}>
              Do you forgot your password?
            </Link>

            <button className={styles.button} type="submit">
              Sign in
            </button>

            {error.length > 0 ? (
              <div className={styles.error}>
                <h3>Ups...</h3>
                <div className={styles.hr3}></div>
                {error?.map((err: { message: string }, i) => (
                // <p key={i}>{err.message}</p>
                <p></p>
              ))}
              </div>
            ) : null}
            {Object.keys(errors).length !== 0 ? (
              <div className={styles.error}>
                <h3>Ups...</h3>
                <div className={styles.hr3}></div>
                {Object.values(errors).map((error: any, i) => (
                  <p key={i}>{error}</p>
                ))}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
