const openModalButton = document.querySelector(".description__btn");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".login-form__cross");
const form = document.querySelector(".login-form");

const handleVisibility = () => {
  if (modal.classList.contains("visible")) {
    form.classList.remove("visible");
    modal.classList.remove("visible");
    setTimeout(() => {
      modal.classList.add("removed");
    }, 300);
  } else {
    openModalButton.disabled = true;
    modal.classList.remove("removed");
    setTimeout(() => {
      form.classList.add("visible");
      modal.classList.add("visible");
    }, 0);
    setTimeout(() => {
      openModalButton.disabled = false;
    }, 300);
  }
};

openModalButton.addEventListener("click", handleVisibility);

closeModalButton.addEventListener("click", handleVisibility);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  console.log({ email, password });
  handleVisibility();
});

document.addEventListener("click", (event) => {
  if (event.target === modal && event.target !== form) {
    handleVisibility();
  }
});
