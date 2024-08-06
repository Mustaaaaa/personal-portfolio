const scrollFunction = (sectionRef) => {
  const navbarHeight = 64; // Altezza della navbar in px
  window.scrollTo({
      top: sectionRef.current.offsetTop + navbarHeight,
      behavior: 'smooth'
  });
};

export default scrollFunction;