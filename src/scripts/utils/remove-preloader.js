const removePreloader = () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('gone');
  }, 700);

  setTimeout(() => {
    preloader.classList.add('d-none');
  }, 800);
};

export default removePreloader;
