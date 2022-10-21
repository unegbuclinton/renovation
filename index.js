const menuList = document.querySelector('#menu');
const donateBtns = Array.from(document.querySelectorAll('.btn'));
const modal = document.getElementById('modal');
const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
const customBtn = document.getElementById('custom-btn');
const buttonArray = Array.from(document.getElementsByClassName('btn'));
const customDonation = document.querySelector('.custom-donate');
const donateValue = document.getElementById('donation-value');
const modalButtonArray = Array.from(
  document.getElementsByClassName('modal-btn')
);
const submittedValue = document.querySelector('.final-amount');
const cancelButton = document.getElementById('modal-cancel');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active-menu');
  });
});
const activeBtn = (e) => {
  donateBtns.forEach((btn) => btn.classList.remove('active-btn'));
  e.target.classList.add('active-btn');
};

donateBtns.forEach((btn) => btn.addEventListener('click', activeBtn));

cancelButton.addEventListener('click', closeModal);

buttonArray.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

// attach active selector to modal buttons
modalButtonArray.forEach((btn) => {
  btn.addEventListener('click', modalActiveButton);
});

donateValue.addEventListener('keyup', () => {
  modalButtonArray.forEach((btn) => {
    btn.classList.remove('active-btn');
    if (donateValue.value === btn.dataset.price) {
      btn.classList.add('active-btn');
    }
  });
});

function closeModal() {
  modal.classList.add('in-active');
}

function openModal(e) {
  prepopulateModal(e);
  modal.classList.remove('in-active');
}

function prepopulateModal(e) {
  if (e.target.dataset.price) {
    // populate modal
    donateValue.value = e.target.dataset.price;
    submittedValue.value = e.target.dataset.price;
    // set the active button
    modalButtonArray.forEach((btn) => {
      btn.classList.remove('active-btn');
      if (donateValue.value === btn.dataset.price) {
        btn.classList.add('active-btn');
      }
    });
  } else {
    donateValue.value = 50;
    submittedValue.value = 50;
  }
}
function injectToModal(price) {
  donateValue.value = price;
  submittedValue.value = price;
}

function modalActiveButton(e) {
  modalButtonArray.forEach((btn) => {
    btn.classList.remove('active-btn');
  });
  e.target.classList.add('active-btn');
  injectToModal(e.target.dataset.price);
}

const customDonate = () => {
  modal.classList.remove('in-active');
  const value = customDonation.value;
  donateValue.value = value;
};

customBtn.addEventListener('click', customDonate);

(function () {
  document.getElementById('play').addEventListener('click', (e) => {
    e.preventDefault();
    const player = document.getElementById('player');
    player.src += '?autoplay=1';
    player.style.display = 'block';

    document.getElementById('video-cover').classList.add('dis');
    document.getElementById('video-overlay').style.display = 'none';
    document.getElementById('play').style.display = 'none';
  });
})();
