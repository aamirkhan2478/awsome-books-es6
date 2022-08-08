import { DateTime } from "./luxon.js";
import { dateTime } from "./getElements.js";

class DTime {
  dateTime = () => {
    dateTime.innerHTML = `
        <h4>${DateTime.now().toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}</h4>
    `;
  };
}

export default DTime;
