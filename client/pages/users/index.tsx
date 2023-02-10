import { NextPage } from "next";
import Image from "next/image";
import search from "../../assets/img/search.svg";
import Doodle4 from "../../assets/img/Doodle4.svg";
import Doodle5 from "../../assets/img/Doodle5.svg";
import Ellipse14 from "../../assets/img/Ellipse14.svg";
import Ellipse142 from "../../assets/img/Ellipse14-2.svg";
import Ellipse18 from "../../assets/img/Ellipse18.svg";
import Ellipse24 from "../../assets/img/Ellipse24.svg";
import Ellipse30 from "../../assets/img/Ellipse30.svg";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/Users.module.css";
import useMediaQuery from "../../hooks/useMediaQuey";

const Users: NextPage = () => {
  const { width } = useMediaQuery();

  return width < 1440 ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Users</h1>
        <p>View all the users</p>
        <Image src={Doodle5} alt="Doodle5" className={styles.doodle5} />
        <Image
          src={Doodle4}
          alt="Doodle4"
          priority={true}
          className={styles.doodle4}
        />
        <div className={styles.searchContainer}>
          <div className={styles.searchContainer2}>
            <input
              className={styles.search}
              type="text"
              placeholder="search for users"
            />
            <Image src={search} alt="search" className={styles.searchIcon} />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.filter}>
          <h3 className={styles.filterTitle}>Filters</h3>
          <div className={styles.age}>Age</div>
          <div className={styles.status}>
            Status <AiOutlineClose />
          </div>
        </div>
        <div className={styles.cardUnverify}>
          <p>Michael David | age 25</p>
          <p>
            Email: <span>ma.da@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardUnverify}>
            Unverified <Image src={Ellipse14} alt="Ellipse14" />
          </div>
        </div>
        <div className={styles.cardVerify}>
          <p>Micaela Tamos | age 30</p>
          <p>
            Email: <span>micatamos@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardVerify}>
            Verify <Image src={Ellipse142} alt="Ellipse142" />
          </div>
        </div>
        <div className={styles.cardUnverify}>
          <p>Michael David | age 25</p>
          <p>
            Email: <span>ma.da@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardUnverify}>
            Unverified <Image src={Ellipse14} alt="Ellipse14" />
          </div>
        </div>
        <div className={styles.cardVerify}>
          <p>Micaela Tamos | age 30</p>
          <p>
            Email: <span>micatamos@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardVerify}>
            Verify <Image src={Ellipse142} alt="Ellipse142" />
          </div>
        </div>
        <div className={styles.cardUnverify}>
          <p>Michael David | age 25</p>
          <p>
            Email: <span>ma.da@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardUnverify}>
            Unverified <Image src={Ellipse14} alt="Ellipse14" />
          </div>
        </div>
        <div className={styles.cardVerify}>
          <p>Micaela Tamos | age 30</p>
          <p>
            Email: <span>micatamos@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardVerify}>
            Verify <Image src={Ellipse142} alt="Ellipse142" />
          </div>
        </div>
        <div className={styles.cardUnverify}>
          <p>Michael David | age 25</p>
          <p>
            Email: <span>ma.da@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardUnverify}>
            Unverified <Image src={Ellipse14} alt="Ellipse14" />
          </div>
        </div>
        <div className={styles.cardVerify}>
          <p>Micaela Tamos | age 30</p>
          <p>
            Email: <span>micatamos@gmail.com</span>
          </p>
          <p>
            Role: <span>Mentor</span>
          </p>
          <p>
            Joined Date: <span>Jan 13, 2022</span>
          </p>
          <div className={styles.statusCardVerify}>
            Verify <Image src={Ellipse142} alt="Ellipse142" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.users}>
        <div className={styles.header}>
          <h1>Users</h1>
          <p>View all the users</p>
          <Image src={Doodle5} alt="Doodle5" className={styles.doodle5} />
          <Image src={Doodle4} alt="Doodle4" className={styles.doodle4} />
        </div>
        <div className={styles.body}>
          <div className={styles.searchContainer}>
            <Image src={search} alt="search" className={styles.searchIcon} />
            <input type="text" placeholder="search for users" />
            <div className={styles.filterDesktop}>
              <div className={styles.clear}>Clear filters</div>
              <div className={styles.age}>Age</div>
              <div className={styles.status}>Status</div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.headTable}>
              <p className={styles.name}>Name</p>
              <p className={styles.ageT}>Age</p>
              <p className={styles.email}>Email</p>
              <p className={styles.role}>Role</p>
              <p className={styles.joined}>Joined Date</p>
              <p className={styles.statusT}>Status</p>
            </div>
            <div className={styles.footerTable}>
              <p className={styles.pages}>Page 2/13</p>
            </div>
            <div className={styles.cardUnverify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardUnverify}>
                Unverified <Image src={Ellipse14} alt="Ellipse14" />
              </div>
            </div>
            <div className={styles.cardVerify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardVerify}>
                Verify <Image src={Ellipse142} alt="Ellipse142" />
              </div>
            </div>
            <div className={styles.cardUnverify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardUnverify}>
                Unverified <Image src={Ellipse14} alt="Ellipse14" />
              </div>
            </div>
            <div className={styles.cardVerify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardVerify}>
                Verify <Image src={Ellipse142} alt="Ellipse142" />
              </div>
            </div>
            <div className={styles.cardUnverify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardUnverify}>
                Unverified <Image src={Ellipse14} alt="Ellipse14" />
              </div>
            </div>
            <div className={styles.cardVerify}>
              <p className={styles.pName}>Michael David</p>
              <p className={styles.pAge}>25</p>
              <p className={styles.pEmail}>ma.da@gmail.com</p>
              <p className={styles.pRole}>Mentor</p>
              <p className={styles.pJoined}>Jan 13, 2022</p>
              <div className={styles.statusCardVerify}>
                Verify <Image src={Ellipse142} alt="Ellipse142" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <Image src={Ellipse24} alt="Ellipse24" />
          <div className={styles.activePage}>
            <Image src={Ellipse30} alt="Ellipse30" className={styles.circle}/>
            <Image src={Ellipse18} alt="Ellipse18" className={styles.point}/>
          </div>
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
          <Image src={Ellipse24} alt="Ellipse24" />
        </div>
      </div>
    </div>
  );
};

export default Users;
