
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function () {
    modalBackdrop.classList.add("is-open");
  });

  closeModalBtn.addEventListener("click", function () {
    modalBackdrop.classList.remove("is-open");
  });
});


/*or (const item of showModalWindow) {
    item.querySelector(".modal-btn-close").onclick = () => item.remove();
  }
*/