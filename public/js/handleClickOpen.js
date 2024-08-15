const handleClickOpen = () => {
  /*--------- toggle navbar -------------*/
  let open = document.getElementById('nav');
  open.classList.toggle('open');
  /*---------- turn menu burger to cross ------*/
  let crossone = document.getElementById('one');
  let crosstwo = document.getElementById('two');
  let crossthree = document.getElementById('three');
  crossone.classList.toggle('rotate-right');
  crosstwo.classList.toggle('vanish');
  crossthree.classList.toggle('rotate-left');
};
