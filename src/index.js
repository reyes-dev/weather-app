import "./style.css";
import { buildForm } from "./form";
import { processWeatherData } from "./weather";
import { displayDataOnPage, clearOldWeatherData } from "./display";
buildForm();
const submitBtn = document.querySelector("button");
let input = document.querySelector("input");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearOldWeatherData();
  processWeatherData(input.value).then((data) => displayDataOnPage(data));
  input.value = "";
});
