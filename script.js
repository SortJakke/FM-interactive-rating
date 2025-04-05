const ratingSection = document.querySelector(".rating-card")
const thanksSection = document.querySelector(".thanks-card")
const yourRate = document.querySelector("#your-rating")

const form = document.querySelector(".rating-form")
const buttons = document.querySelectorAll(".rating-option")

let rate

form.addEventListener("click", (event) => {
  if (event.target.classList.contains("rating-option")) {
    const button = event.target
    rate = parseFloat(button.innerText)

    buttons.forEach((button) => button.classList.remove("active"))
    button.classList.add("active")
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (!rate) {
    window.alert("Please rate your experience!")
  } else {
    console.log("rate: " + rate)
    yourRate.innerText = `You selected ${rate} out of 5`
    ratingSection.style.display = "none"
    thanksSection.style.display = "grid"
  }
})
