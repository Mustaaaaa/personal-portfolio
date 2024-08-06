const scrollFunctionMobile = (sectionRef) => {
  const navbarHeight = 64;
  window.scrollTo({
      top: sectionRef.current.offsetTop + navbarHeight,
      behavior: 'smooth'
  });
};

export default scrollFunctionMobile;