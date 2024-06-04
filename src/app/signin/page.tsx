import React from 'react';
import styles from "../styles/signin.module.css";
const SignInForm = () => {
  return (
    <div className={styles.signinForm}>
      <div className={styles.signinForms}>
        <div className={styles.imgSignin}>
            <img className={styles.imgsSignin} src="/images/logo.svg" alt="logo" />
            <p>ورود | ثبت‌نام</p>
          <p className={styles.parSignin}>سلام!</p>
          <p className={styles.parSignin}>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          <input className={styles.signinPut} type="text" />
          <button className={styles.signinButton}>ورود</button>
        </div>
        <p className={styles.paraSignin}>ورود شما به معنای <a className={styles.signinLink} href='#'>پذیرش شرایط</a> دیجی‌کالا و <a  href='#'>قوانین حریم‌خصوصی</a> است</p>
        
      </div>
    </div>
  );
};

export default SignInForm;
