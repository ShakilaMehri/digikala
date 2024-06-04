import React from 'react';
import styles from "../styles/login.module.css"

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForms}>
        <div className={styles.imgLogin}>
            <img className={styles.imgsLogin} src="/images/logo.svg" alt="logo" />
            <p>ورود | ثبت‌نام</p>
          <p className={styles.parLogin}>سلام!</p>
          <p className={styles.parLogin}>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          <input className={styles.loginPut} type="text"/>
          <button className={styles.loginButton}>ورود</button>
        </div>
        <p className={styles.paraLogin}>ورود شما به معنای <a className={styles.loginLink} href='#'>پذیرش شرایط</a> دیجی‌کالا و <a className={styles.loginLink} href='#'>قوانین حریم‌خصوصی</a> است</p>
      </div>
    </div>
  );
};

export default LoginForm;
