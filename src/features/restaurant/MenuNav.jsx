import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function MenuNav({ item, handleHeight, height }) {
  const [scrollTopData, setScrollTopData] = useState("");
  // console.log(item);
  // const { title } = item;
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 500) {
        setScrollTopData("");
      } else {
        setScrollTopData("is_stuck");
      }
    });

    const heightPX = navRef.current.offsetHeight;
    handleHeight(() => heightPX);
  }, [handleHeight]);

  return (
    <nav
      className={`secondary_nav sticky_horizontal ${scrollTopData}`}
      ref={navRef}
      id="secondary-nav"
    >
      <div className="container">
        <ul id="secondary_nav">
          {item.map((category, index) => {
            return (
              <li key={category.title}>
                <Link
                  to={`#section-${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    let hero = document.getElementById(`section-${index + 1}`);
                    const y =
                      hero.getBoundingClientRect().top +
                      window.pageYOffset +
                      -height;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }}
                >
                  {category.title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <span></span>
    </nav>
  );
}

export default MenuNav;
