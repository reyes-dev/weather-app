import "./style.css";
import { buildForm } from "./form";
import { processWeatherData } from "./weather";
import { displayDataOnPage } from "./display";
buildForm();
const submitBtn = document.querySelector("button");
const input = document.querySelector("input");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  processWeatherData(input.value).then((data) => displayDataOnPage(data));
});
