const removePreloader = () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('gone');
  }, 900);

  setTimeout(() => {
    preloader.classList.add('d-none');
  }, 1000);
};

export default removePreloader;
