
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const closeModalBtn = document.getElementById("closeModalBtn");

  const menuMobileBtn = document.getElementById("menuMobileBtn");
  const closeMobileBtn = document.getElementById("closeMobileBtn");

  openModalBtn.addEventListener("click", function () {
    modalBackdrop.classList.add("is-open");
  });

  closeModalBtn.addEventListener("click", function () {
    modalBackdrop.classList.remove("is-open");
  });

  menuMobileBtn.addEventListener('click', function () {
    mobileWindow.classList.add("is-open");
  });

  closeMobileBtn.addEventListener("click", function () {
    mobileWindow.classList.remove("is-open");
  });

});
/*for (const item of showModalWindow) {
    item.querySelector(".modal-btn-close").onclick = () => item.remove();
  }
*/