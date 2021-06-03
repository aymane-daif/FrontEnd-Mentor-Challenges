const countriesEl = document.querySelector(".countries");
const mainHeadingEl = document.getElementById("main-heading");
const mainEl = document.getElementById("main");
const selectEl = document.getElementById("filter");
const searchForm = document.getElementById("search-form");
const searchEl = document.getElementById("search");

//get all data on load
getData("https://restcountries.eu/rest/v2/all");

//get filtered data by regions
selectEl.addEventListener("change", (e) => {
  countriesEl.innerHTML = "";
  getData(`https://restcountries.eu/rest/v2/region/${e.target.value}`);
});

//get filtered data by input
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  countriesEl.innerHTML = "";
  let value = searchEl.value.trim();
  if (value === "") {
    alert("You didn't entered anything...!");
    getData("https://restcountries.eu/rest/v2/all");
  } else {
    getData(`https://restcountries.eu/rest/v2/name/${value}`);
  }
  searchEl.value = "";
});

//get details on clicked country
// countriesEl.addEventListener("click", (e) => {
//   if (countriesEl.contains(e.target) && e.target !== countriesEl) {
//     mainHeadingEl.classList.add("hide");
//     countriesEl.classList.add("hide");
//     getDetails(
//       `https://restcountries.eu/rest/v2/name/${e.target.getAttribute(
//         "data-name"
//       )}?fullText=true`
//     );
//   }
// });

function getData(url) {
  const getCountries = async () => {
    let response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("cannot fetch the data");
    }

    let data = await response.json();
    return data;
  };

  getCountries()
    .then((data) => {
      data.forEach((el) => {
        updateUI(el.flag, el.name, el.population, el.region, el.capital);
      });
    })
    .catch((err) => alert("something went wrong ...:", err.message));
}

// function getDetails(url) {
//   const getDetail = async () => {
//     let response = await fetch(url);

//     if (response.status !== 200) {
//       throw new Error("cannot fetch the data");
//     }

//     let data = await response.json();
//     return data;
//   };

//   getDetail()
//     .then((data) => {
//       updateDetail(
//         data[0].flag,
//         data[0].name,
//         data[0].nativeName,
//         data[0].population,
//         data[0].region,
//         data[0].subregion,
//         data[0].capital,
//         data[0].topLevelDomain[0],
//         data[0].currencies[0].name,
//         data[0].languages,
//         data[0].borders
//       );
//       const detailsEl = document.getElementById("details");
//       const backEl = document.getElementById("back");

//       countriesEl = document.getElementById("countries");
//       mainHeadingEl = document.getElementById("main-heading");
//       backEl.addEventListener("click", () => {
//         detailsEl.remove();
//         mainHeadingEl.classList.remove("hide");
//         mainHeadingEl.classList.add("show");
//         countriesEl.classList.remove("hide");
//         countriesEl.classList.add("grid");
//       });
//     })
//     .catch((err) => alert("something went wrong ...:", err.message));
// }

function updateUI(flag, name, population, region, capital) {
  let html = `
    <div class="country" data-name = "${name}">
    <img
      src="${flag}"
      alt="flag"
      id="flag"
      data-name = "${name}"
    />
    <div class="info" data-name = "${name}">
      <div data-name = "${name}">
        <h3 id="name" data-name = "${name}">${name}</h3>
      </div>
      <div data-name = "${name}">
        <p data-name = "${name}">Population:</p>
        <span id="population" data-name = "${name}">${population}</span>
      </div>
      <div data-name = "${name}">
        <p data-name = "${name}">Region:</p>
        <span id="region" data-name = "${name}">${region}</span>
      </div>
      <div data-name = "${name}">
        <p data-name = "${name}">Capital:</p>
        <span id="capital" data-name = "${name}">${capital}</span>
      </div>
    </div>
  </div>
    `;
  countriesEl.innerHTML += html;
}

// function updateDetail(
//   flag,
//   name,
//   nativeName,
//   population,
//   region,
//   subregion,
//   capital,
//   tld,
//   currency,
//   languages,
//   borders
// ) {
//   let html = `
//   <div class="details" id="details">
//   <div class="details-heading">
//     <button id="back">
//       <img src="./images/arrow-back.svg" alt="arrow-back" />
//       <span>Back</span>
//     </button>
//   </div>
//   <div class="details-content">
//     <div class="left">
//       <img src="${flag}" alt="flag" />
//     </div>
//     <div class="right">
//       <h2>${name}</h2>
//       <div class="detail-info">
//         <div class="info-left">
//           <div>
//             <p>Native Name:</p>
//             <span id="native-name">${nativeName}</span>
//           </div>
//           <div>
//             <p>Population:</p>
//             <span id="population">${population}</span>
//           </div>
//           <div>
//             <p>Region:</p>
//             <span id="region">${region}</span>
//           </div>
//           <div>
//             <p>Sub Region:</p>
//             <span id="sub-region">${subregion}</span>
//           </div>
//           <div>
//             <p>Capital:</p>
//             <span id="capital">${capital}</span>
//           </div>
//         </div>
//         <div class="info-right">
//           <div>
//             <p>Top Level Domain:</p>
//             <span id="tld">${tld}</span>
//           </div>
//           <div>
//             <p>Currencies:</p>
//             <span id="currencies">${currency}</span>
//           </div>
//           <div>
//             <p>Languages:</p>
//             `;
//   languages.forEach((lang) => {
//     html += `<span id="languages">${lang.name}</span>`;
//   });
//   html += `
//           </div>
//         </div>
//       </div>
//       <div class="boundaries">
//         <p>Border Countries:</p>
//         <div class="border-countries">`;
//   borders.forEach((border) => {
//     html += `<h5>${border}</h5>`;
//   });
//   html += `
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     `;
//   main.firstElementChild.innerHTML += html;
// }
