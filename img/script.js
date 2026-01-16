const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateDateTime() {
  const now = new Date();

  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear();

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  dateEl.textContent = `${day}.${month}.${year}`;
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// kjør med én gang
updateDateTime();

// oppdater hvert sekund, som et normalt fungerende samfunn
setInterval(updateDateTime, 1000);
