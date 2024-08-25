import React from "react";
import ProfileBarItems from "./profileBarItems";
import styles from "../styles/profileBar.module.css";


const ProfileBar = () => {
 const itemArray = [
  {
    id: 1,
    src: "/images/profile 1.jpg",
    title: "مشاوره خرید کالای الکترونیک",
  },
  {src: "/images/profile 2.jpg", title: "ساعت با نور لئونی"},
  {src: "/images/profile 3.jpg", title: "ساعت با نور لئونی"},
  {src: "/images/profile 4.jpg", title: "دستبند طبیعت گردی"},
  {src: "/images/profile 5.jpg", title: "تیشرت مردانه"},
  {src: "/images/profile 6.jpg", title: "کشک و قره قروت"},
  {src: "/images/profile 7.jpg", title: "پانچ و مته"},
  {src: "/images/profile 8.jpg", title: "انواع اسپری ها"},
  {src: "/images/profile 9.jpg", title: "دهنتو شیرین کن"},
  {src: "/images/profile 10.jpg", title: "تونر ویتامین سی"},
 ];

 return (
  <div className={styles.profileBar}>
    {itemArray.map((item, index) =>(
      <ProfileBarItems key={index} src={item.src} title={item.title} />
    ))}
  </div>
 );
};

export default ProfileBar;