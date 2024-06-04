import React from "react";
import styles from "../styles/itemBar.module.css"

const ItemBar = () => {
  return (
    <div className={styles.itemBar}>
      <div className={styles.itemBars}>
        <div>
          <a href="#">
            <img className={styles.imgBar}
              src="/images/1.png"
              alt="item 1"
            />
            <p className={styles.itemImg}>
              دیجی‌کالا جت
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/2.png"
              alt="item 2"
            />
            <p  className={styles.itemImg}>دیجی پی</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/3.png"
              alt="item 3"
            />
            <p  className={styles.itemImg}>
              حراج دیجی‌استایل
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/4.png"
              alt="item 4"
            />
            <p  className={styles.itemImg}>
              موبایل کارکرده
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/5.png"
              alt="item 5"
            />
            <p  className={styles.itemImg}>
              خرید سوپرمارکتی
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/6.png"
              alt="item 6"
            />
            <p  className={styles.itemImg}>
              تخم‌مرغ شانسی
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/7.png"
              alt="item 7"
            />
            <p  className={styles.itemImg}>
              تخفیف ویژه کتاب
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img  className={styles.imgBar}
              src="/images/gridicons--ellipsis-circle.svg"
              alt="item 8"
            />
            <p className={styles.itemImgs}>بیشتر</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemBar;
