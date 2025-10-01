function renderCity(sectionId, timezone) {
   const section = document.querySelector("#" + sectionId);
   if (!sectionId) return;

   const dateEl = section.querySelector(".date");
   const timeEl = section.querySelector(".time");
   const cityTime = moment().tz(timezone);

   dateEl.textContent = cityTime.format("MMMM Do YYYY");
   timeEl.innerHTML =
      cityTime.format("h:mm:ss") +
      ' <span class="ampm">' +
      cityTime.format("A") +
      "</span>";
}

function refreshClocks() {
   renderCity("los-angeles", "America/Los_Angeles");
   renderCity("sydney", "Australia/Sydney");
   renderCity("tokyo", "Asia/Tokyo");
   renderCity("paris", "Europe/Paris");
}

//Los angeles
const losAngEl = document.querySelector("#los-angeles");
const losAngDateEl = losAngEl.querySelector(".date");
const losAngTimeEl = losAngEl.querySelector(".time");
const losAngTime = moment().tz("America/Los_Angeles");

losAngDateEl.innerHTML = losAngTime.format("MMMM Do YYYY");
losAngTimeEl.innerHTML = `${losAngTime.format(
   "h:mm:ss"
)} <span class="ampm">${losAngTime.format("A")}</span>`;

//Paris
const parisEl = document.querySelector("#paris");
const parisDateEl = parisEl.querySelector(".date");
const parisTimeEl = parisEl.querySelector(".time");
const parisTime = moment().tz("Europe/Paris");

parisDateEl.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeEl.innerHTML = `${parisTime.format(
   "h:mm:ss"
)} <span class="ampm">${parisTime.format("A")}</span>`;

//Sydney
const sydneyEl = document.querySelector("#sydney");
const sydneyDateEl = sydneyEl.querySelector(".date");
const sydneyTimeEl = sydneyEl.querySelector(".time");
const sydneyTime = moment().tz("Australia/Sydney");

sydneyDateEl.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeEl.innerHTML = `${sydneyTime.format(
   "h:mm:ss"
)} <span class="ampm">${sydneyTime.format("A")}</span>`;

//Tokyo
const tokyoEl = document.querySelector("#tokyo");
const tokyoDateEl = tokyoEl.querySelector(".date");
const tokyoTimeEl = tokyoEl.querySelector(".time");
const tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateEl.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeEl.innerHTML = `${tokyoTime.format(
   "h:mm:ss"
)} <span class="ampm">${tokyoTime.format("A")}</span>`;

refreshClocks();
setInterval(refreshClocks, 1000);
