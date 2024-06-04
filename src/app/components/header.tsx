"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import styles from "../styles/header.module.css";


const Header: React.FC = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const toggleCityDropdown = () => {
    setIsCityDropdownOpen(!isCityDropdownOpen);
  };

  const cities = ["آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر"];
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <div className={styles.headerImage}>
            <img src="/images/header.gif" alt="header " />
          </div>
          <div className={styles.headerSearch}>
            <Link href="/">
              <img className={styles.logo} src="/images/logo.svg" alt="logo"/>
            </Link>
            <div className={styles.searchBar}>
              <input className={styles.searchBox} type="search" placeholder="جستجو"/>
              <FaSearch className={styles.searchIcon}/>
            </div>
            <div className={styles.loginContainer}>
              <img className={styles.loginImage}
                src="/images/login.png"
                alt="login"
              />
              <Link
                href="/signin" className={styles.loginLink}>
                ثبت‌نام
              </Link>
              <span className={styles.separator}>
                |
              </span>
              <Link
                href="/login" className={styles.loginLink}>
                ورود
              </Link>
            </div>
            <span className={styles.spanCart}>|</span>
            <Link href="/cart">
              <FaCartShopping className={styles.cartIcon}/>
            </Link>
          </div>
          {/* Nav lists */}
          <div className={styles.navLists}>
            <ul className={styles.navList}>
              <img className={styles.menuImg}
                src="/images/menu.png"
                alt="categories"
              />
              <li className={styles.linkLists}>
                <Link href="#" className={styles.navLinks}> 
                دسته‌بندی کالاها
                </Link>
              </li>
              <span className={styles.spanLink}>|</span>
              <li className={styles.linkLists}>
                <Link href="#">شگفت‌انگیزها</Link>
              </li>
              <li className={styles.linkLists}>
                <Link href="#">سوپرمارکت</Link>
              </li>
              <li className={styles.linkLists}>
                <Link href="#">کارت‌هدیه</Link>
              </li>
              <li className={styles.linkLists}>
                <Link href="#">پرفروش‌ترین‌ها</Link>
              </li>
              <li className={styles.linkLists}>
                <Link href="#">تخفیف‌ها و پیشنهادها</Link>
              </li>
              <span className={styles.spanLink}>|</span>
              <li className={styles.linkLists}>
                <Link href="#">سوالی دارید؟</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="#">در دیجی کالا بفروشید</Link>
              </li>
              <li className={styles.navLink}>
                <div className={styles.imgLinks}>
                  <img className={styles.imgList}
                    onClick={toggleCityDropdown}
                    src="/images/location.png"
                    alt="location"
                  />
                  <Link href="#">
                    <p className={styles.listItemText} onClick={toggleCityDropdown}>
                      لطفا شهر خود را انتخاب کنید
                      </p>
                      {isCityDropdownOpen && (
                <ul className={styles.listItemTexts} >
                  {cities.map((city, index) => (
                    <li key={index} className={styles.listItems}>
                      {city}
                    </li>
                  ))}
                </ul>
              )}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;