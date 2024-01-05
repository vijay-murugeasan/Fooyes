function Logo({ className, sticky }) {
  const logo = className && !sticky ? "logo" : "logo_sticky";
  return <img src={`/img/${logo}.svg`} alt="" />;
}

export default Logo;
