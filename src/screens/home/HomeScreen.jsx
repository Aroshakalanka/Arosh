import React from "react";
import css from "./HomeScreen.module.css";

import VerifyIcon from "../../assets/Icons/VerifyIcon.svg";
import bg from "../../assets/images/bg.jpg";

function HomeScreen() {
  return (
    <div className={css.container}>
      <div className={css.overlay} />
      <img
        // src="https://firebasestorage.googleapis.com/v0/b/arosh-aa9fe.appspot.com/o/Wallpaper%201.jpg?alt=media&token=91180df0-9d9c-4f16-8f66-a5f170562ee9"
        src={bg}
        alt="Background"
        className={css.background}
      />

      <div className={css.box}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/arosh-aa9fe.appspot.com/o/Arosh.jpg?alt=media&token=c1242323-ce23-4430-a9e7-c5b464f8cb54"
          alt="Me"
          className={css.myImage}
        />

        <div className={css.name}>
          Arosh Akalanka Perera
          {/* <CheckCircleIcon /> */}
          <img src={VerifyIcon} alt="Verify Icon" width={25} height={25} />
        </div>

        <div className={css.bio}>Coding | Sleeping | 😉💻❤</div>

        <div className={css.ChatBtn}>Chat With Me!</div>
      </div>
    </div>
  );
}

export default HomeScreen;
