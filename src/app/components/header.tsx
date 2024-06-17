"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import styles from "../styles/header.module.css";


const Header: React.FC = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<number | null>(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategoryHover = (index : number) => {
    setActiveCategory(index);
    setActiveSubcategory(null);
  };

  const handleSubcategoryHover = (index : number) =>{
    setActiveSubcategory(index);
  }

  const toggleCityDropdown = () => {
    setIsCityDropdownOpen(!isCityDropdownOpen);
  };

  const categories = [
  { name: "موبایل", subcategories: [
    {
      name: "برندهای مختلف گوشی موبایل",
       options:["گوشی آیفون", "گوشی سامسونگ", "گوشی شیائومی"],
      },
      {
        name: "گوشی براساس قیمت",
        options:["گوشی موبایل ارزان", "گوشی موبایل قسطی", "گوشی تا 2 میلیون تومن"],
      },
    {
      name: "گوشی براساس عملکرد",
      options:["گوشی گیمینگ", "گوشی دکمه‌ای ", "گوشی ضدآب"],
    }]},
  { name: "کتاب، لوازم تحریر و هنر", subcategories: [
    {
       name:"کتاب و مجله", 
    options:["کتاب چاپی", "مجلات داخلی و خارجی"],
    },
    {
      name:"کتاب صوتی",
      options:[""],
    },
    {
      name: "محتوای آموزشی",
        options:["آموزش موسیقی", "آموزش ورزش و سرگرمی","آموزش زبان"],
    },
    {
      name:"لوازم تحریر",
        options:["لوازم اداری و اقلام مصرفی", "کیف، کوله‌پشتی و جامدادی", "چراغ مطالعه"],
    }]},
  { name: "کالای دیجیتال",
   subcategories: [
    {
     name: "لپ‌تاپ",
     options:["لپ‌تاپ ایسوس", "لپ‌تاپ لنوو", "لپ‌تاپ دل"],
    }, 
   {
   name: "لوازم جانبی لپ‌تاپ",
    options:["شارژر لپ‌تاپ", "کیف لپ‌تاپ", "کول پد"],
  },
  {
   name: "هدفون",
    options:["هدفون بی‌سیم", "هدفون اپل(ایرپاد)", "هدفون سونی"],
  },
  {
    name:  "پرینتر",
    options:["پرینتر سه بعدی", "پرینتر حرارتی", "پرینتر رنگی"],
  }]},
  { name: "خانه و آشپزخانه", subcategories: [
    { name: " ظروف پخت و پز",
    options: ["قابلمه و تابه", "زودپز", "سرویس پخت و پز"],
  },
  {
    name: "ابزار آشپزی",
    options: ["ست کفگیر و ملاقه", "چاقو" ,"تخته گوشت"],
  },
  {
    name: "مبلمان و دکوراسیون خانگی",
    options: ["پاف و بین‌بگ", "مبل", "کتابخانه"],
  },
  {
    name: "حمام",
    options: ["حوله", "دمپایی", "لیف"],
  }]},
  { name: "لوازم خانگی برقی", subcategories: [
    { 
      name: "صوتی تصویری",
      options: ["", "", ""],
    },
    {
      name: "یخچال فریزر",
      options: ["یخچال فریزر ساید بای ساید", "یخچال فریزر دوقلو", "یخچال فریزر هتلی"],
    },
    {
      name: "جارو برقی",
      options: ["جارو شارژی", "لوازم جانبی جارو‌برقی و بخارشور"],
    },
    {
      name: "ماشین لباسشویی",
      options: ["ماشین لباسشویی پاکشوما", "ماشین لباسشویی دوو", "ماشین لباسشویی اسنوا"],
    }]},
  { name: "مد و پوشاک", subcategories: [
  { name: "لباس زنانه",
  options: ["هودی زنانه", "سویشرت زنانه", "دامن زنانه"],
  },
  {
    name: "لباس مردانه", 
    options: ["تی‌شرت مردانه", "پیراهن مردانه", "شلوار مردانه"],
  },
  {
    name:  "پالتو، بارانی و کاپشن مردانه",
    options: ["پالتو مردانه", "کاپشن مردانه", "کت چرم مردانه"],
  },
  {
    name: "لباس دخترانه",
    options: ["بلوز دخترانه", "شومیز دخترانه"],
  }]},
  { name: "ساعت، طلا و جواهرات", subcategories: [
  { name: "شمش و پلاک طلا",
    options: ["", "", ""],
  },
  { name:  "سکه طلا",
    options: ["", "", ""],
  },
  { name: "طلای آب شده",
    options: ["", "", ""],
  }]},
  { name: "آرایشی بهداشتی", subcategories: [
    {
      name: "لوازم آرایشی", 
        options:["آرایش صورت", "آرایش چشم", "آرایش ابرو"],
    },
    {
      name: "مراقبت پوست",
        options:["کرم ضدآفتاب", "کرم مرطوب‌کننده و نرم‌کننده", "ماسک صورت و بدن"],
    },
    {
      name: "مراقبت و زیبایی مو",
        options:["شامپو و مراقبت مو", "آرایش مو"],
    }]},
  { name: "تجهیزات پزشکی و سلامت", subcategories: [
  { 
    name: "تجهیزات پزشکی",
    options: ["کنترل دیابت", "لوازم پزشک", "ماساژور"],
  },
  { 
    name:  "مکمل غذایی",
    options: ["", "", ""],
  },
  { 
    name: "مکمل ورزشی",
    options: ["پروتئین", "آمینواسید", "کراتین"],
  }]},
  { name: "ورزش و سفر", subcategories: [
  {
    name: "پوشاک ورزشی زنانه",
    options: ["", "", ""],
  },
  {
    name: "پوشاک ورزشی مردانه",
    options: ["", "", ""],
  },
  {
    name: "کفش ورزشی مردانه",
    options: ["", "", ""],
  }]},
  ];
  const cities = ["آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر"];
  return (
    <header className={styles.header}>
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
          {/* NavBar */}
          <div className={styles.container}>
            <nav className={styles.navLists}>
            <ul className={styles.navList}>
              <img className={styles.menuIist}
                src="/images/menu.png"
                alt="categories"
                onClick={toggleCategoryDropdown}
              />
              <li className={styles.linkLists}>
                دسته‌بندی کالاها
                {isCategoryDropdownOpen && (
                  <ul className={styles.dropdownList}>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className={styles.dropdownItem}
                        onMouseEnter={() => handleCategoryHover(index)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        <FaChevronRight className={styles.dropdownIcon} />
                        {category.name}
                        {activeCategory === index && (
                          <ul className={styles.subDropdownList}>
                            {category.subcategories.map((subcategory, subIndex) => (
                              <li
                                key={subIndex}
                                className={styles.subDropdownItem}
                                onMouseEnter={() => handleSubcategoryHover(subIndex)}
                                onMouseLeave={() => handleSubcategoryHover(null)}
                              >
                                {subcategory.name}
                                {activeSubcategory === subIndex && (
                                  <ul className={styles.subDropdownList}>
                                    {subcategory.options.map((option, optionIndex) => (
                                      <li key={optionIndex} className={styles.subDropdownItem}>
                                        {option}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
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
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Header;