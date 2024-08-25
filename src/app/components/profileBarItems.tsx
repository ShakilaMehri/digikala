import styles from "../styles/profileBar.module.css";

const ProfileBarItems = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className={styles.profileBar}>
      <img className={styles.imgProfile} src={src} alt="Profile Picture" />
      <p className={styles.imgsProfile}>{title}</p>
    </div>
  );
};

export default ProfileBarItems;
