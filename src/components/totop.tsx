import { useEffect, useState } from "react";
import styles from "../assets/resultado.module.css";
const { totop, visibleToTop } = styles;

export const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      isVisible && window.scrollY == 0
        ? setIsVisible(false)
        : setIsVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isVisible]);

  const clase = isVisible ? `${totop} ${visibleToTop}` : `${totop}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className={clase} onClick={scrollToTop}>
        to the top
      </button>
    </>
  );
};
