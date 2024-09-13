import React from "react";
import hero from "../assets/images/hero.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className="hero">
      <div className="max-w-[1240px]  mx-auto hero__container flex flex-row justify-between">
        <div className="hero__text w-1/2 flex flex-col justify-center">
          <div className="w-7/10 mx-auto">
            <p
              className="font-semibold text-[18px]"
              style={{ color: "#4A3AFF" }}
            >
              - {t("Webflow Design Agency")}
            </p>
            <h1
              className=""
              style={{
                marginTop: "28px",
                fontSize: "50px",
                fontWeight: "700",
              }}
            >
              {t("A top-notch Webflow Design Agency")}
            </h1>
            <section style={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                width: "500px"
            }}>
              {t('Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.')}
            </section> 
            <div className="mt-12 flex flex-row gap-6">
                <button className="bg-blue-600 text-white hover:bg-blue-300" style={{
                    padding: "18px 40px",
                    borderRadius: "100px"
                }}>{t("Get started")}</button>
                <button className="hover:bg-blue-600 hover:text-white" style={{
                    padding: "18px 40px",
                    borderRadius: "100px",
                    border: "1px solid #4A3AFF"
                }}>{t("Learn more")}</button>
            </div>
          </div>
        </div>
        <div className="hero__img w-1/2">
          <img
            src={hero}
            className="relative left-[150px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
