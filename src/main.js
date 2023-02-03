import { createCard } from "./markup";
import { contactRef, formRef } from "./refs";
import { getData, sendData } from "./api";
import { addMarkup } from "./utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function init() {
  try {
    const resultData = await getData();
    const markup = createCard(resultData);
    addMarkup(contactRef, markup);
    console.log(markup);
  } catch (error) {
    console.log(error.message);
  }
}
init();

formRef.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  try {
    event.preventDefault();
    const result = Object.fromEntries(new FormData(event.target));
    result.createdAt = Date.now();
    event.target.reset();
    const response = await sendData(result);
    const markup = createCard([response]);
    addMarkup(contactRef, markup);
  } catch (error) {
    console.log(error.message);
  }
}
