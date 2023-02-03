import { createCard } from "./markup";
import { contactRef, formRef } from "./refs";
import { getData } from "./api";
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
