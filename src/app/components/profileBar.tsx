import React from "react";
import styles from "../styles/profileBar.module.css";

const ProfileBar = () => {
  return (
      <div className={styles.profileBar}>
        <div className={styles.profileBars}>
          <img className={styles.imgProfile}
            src="/images/profile 1.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            مشاوره خرید کالای الکترونیک
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 2.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            ساعت با نور نئونی
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 3.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            بهترین لیوان تاشو دیجی‌کالا
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 4.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            دستبند 4 کاره طبیعت‌گردی
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 5.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            تی‌شرت مردانه
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 6.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            کشک و قره‌قروت میکس
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 7.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            پانچ و مته خزینه
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 8.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            انواع اسپری‌ها 2
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 9.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            دهنتو شیرین کن
          </p>
        </div>
        <div>
          <img className={styles.profileImg}
            src="/images/profile 10.jpg"
            alt="Profile Picture"
          />
          <p className={styles.imgsProfile}>
            تونر ویتامین سی ویتالیر
          </p>
        </div>
    </div>
  );
};

export default ProfileBar;
