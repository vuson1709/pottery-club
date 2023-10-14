const labelExplore = document.querySelectorAll(".exploreJS");
const modal = document.getElementById("explore-workshops");
const modalContent = document.getElementById("explore-workshops-modal-content");
const btnClose = document.querySelectorAll(".modal-close");
const overlay = document.querySelector(".overlay");
const form = document.getElementById("form");
const formDetails = document.getElementById("form-details");
const btnSignUp = document.querySelectorAll(".sign-up");
const btnSubmit = document.querySelector(".form-btn");

// Display Modal Workshops
for (let i = 0; i < labelExplore.length; i++) {
  labelExplore[i].addEventListener("click", function () {
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
  });
}

// Close Modal Workshops
const closeModal = function () {
  modal.classList.remove("modal");
  modalContent.classList.remove("modal-content");
  form.classList.add("hidden");
};

// Close modal using button X
for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", function () {
    closeModal();
  });
}

// Close modal using escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// close modal using click on background
window.addEventListener("click", function (e) {
  if (e.target == modal) closeModal();
});

// Close modal Sign up form
for (let i = 0; i < btnSignUp.length; i++) {
  btnSignUp[i].addEventListener("click", function () {
    form.classList.remove("hidden");
  });
}

// close modal using click on background
window.addEventListener("click", function (e) {
  if (e.target == form) closeModal();
});

// Send data from form to Google Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycby7z6fG-awsx2lHs1nfePOTLPbWtmvTR5b2WrWfmpI3v1jUpChQJyYZauJ95ZjoVEKR/exec";

formDetails.addEventListener("submit", (e) => {
  setTimeout(() => (btnSubmit.style.backgroundColor = "gray"), 1000);

  btnSubmit.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(formDetails);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((res) => {
      console.log(1);
      alert("Success!", res);
      btnSubmit.disabled = false;
    })
    .catch((err) => {
      alert("Error!", err.message);
      btnSubmit.disabled = false;
    });
});
