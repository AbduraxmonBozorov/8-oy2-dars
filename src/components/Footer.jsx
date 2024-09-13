import React from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-t-2">
      <div className="footer max-w-[1240px] mx-auto p-[56px] flex flex-row justify-between items-center ">
        <div className="left">
          <img src={logo} alt="" />
          <p className="text-xl">
            {t("Copyright")} © {new Date().getFullYear()} {t("BRIX Templates")}{" "}
            | {t("All Rights Reserved")}
          </p>
        </div>
        <div className="right">
          <p className="border rounded-full p-2">
            <input
              type="email"
              name=""
              id=""
              placeholder={t("Enter your email")}
              className="input outline-none border-none focus:outline-none focus:border-none"
            />
            <button className="btn btn-primary py-3 px-4 rounded-full text-xl">
              {t("Subscribe")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
