const clear = document.getElementById("clear");
const jobs = document.getElementById("jobs");
const filteredTags = document.getElementById("filtered-tags");
//get jobs from JSON
const getJobs = async () => {
  let response = await fetch("js/data.json");
  let data = await response.json();
  return data;
};

getJobs().then((data) => {
  data.forEach((el) => {
    addJob(el);
  });
  const tags = document.querySelectorAll("#tags");
  const choosenTags = [];
  const initialTags = document.querySelectorAll(".initials");
  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") {
        filteredTags.style.display = "flex";
        let html = "";
        if (!choosenTags.includes(e.target.textContent)) {
          if (e.target.parentElement.classList.contains("languages")) {
            html = `
                    <div class="${e.target.parentElement.className} filtered">
                      <span>${e.target.textContent}</span>
                    </div>
              `;
            choosenTags.push(e.target.textContent);
          } else {
            html = `
                     <span class="${e.target.className} filtered">${e.target.textContent}</span>
             `;
            choosenTags.push(e.target.textContent);
          }

          filteredTags.firstElementChild.innerHTML += html;
        }

        initialTags.forEach((job) => {
          let lngArr = [];
          let role = job.getElementsByClassName("role")[0].textContent;
          let level = job.getElementsByClassName("level")[0].textContent;
          let lng = job.getElementsByClassName("languages")[0].children;
          lng = Array.from(lng).forEach((lang) =>
            lngArr.push(lang.textContent)
          );
          let existingTags = [role, level, ...lngArr];
          choosenTags.forEach((el) => {
            if (!existingTags.includes(el)) {
              job.style.display = "none";
            }
          });
        });
      }
    });
  });

  filteredTags.firstElementChild.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      choosenTags.splice(choosenTags.indexOf(e.target.textContent), 1);
      e.target.remove();
      if (choosenTags.length !== 0) {
        initialTags.forEach((job) => {
          let lngArr = [];
          let role = job.getElementsByClassName("role")[0].textContent;
          let level = job.getElementsByClassName("level")[0].textContent;
          let lng = job.getElementsByClassName("languages")[0].children;
          lng = Array.from(lng).forEach((lang) =>
            lngArr.push(lang.textContent)
          );
          let existingTags = [role, level, ...lngArr];

          let isThere = false;
          for (let el of choosenTags) {
            if (existingTags.includes(el)) {
              isThere = true;
            } else {
              isThere = false;
              break;
            }
          }

          if (!isThere) {
            job.style.display = "none";
          } else {
            job.style.display = "flex";
          }
          console.log(choosenTags);
        });
      } else {
        initialTags.forEach((job) => {
          job.style.display = "flex";
          filteredTags.style.display = "none";
        });
      }
    }
  });
  clear.addEventListener("click", () => {
    filteredTags.style.display = "none";
    choosenTags.length = 0;
    filteredTags.firstElementChild.innerHTML = "";
    initialTags.forEach((job) => {
      console.log(job);
      job.style.display = "flex";
    });
  });
});

function addJob(el) {
  let html = `
    <div class="info">
      <div class="logo">
        <img src="${el.logo}" alt="logo-${el.company}" />
      </div>
      <div class="content">
        <div class="info-heading">
          <h5>${el.company}</h5>
        <div>`;
  if (el.new) {
    html += `<span class="new">NEW!</span>`;
  }
  if (el.featured) {
    html += `<span class="featured">FEATURED</span>`;
  }
  html += `  
        </div>
       </div>
        <div class="info-body"><h2>${el.position}</h2></div>
        <div class="info-footer">
          <span class="date"> ${el.postedAt}</span>
          <span class="dot"></span>
          <span class="type">${el.contract}</span>
          <span class="dot"></span>
          <span class="location">${el.location}</span>
        </div>
      </div>
    </div>
    <div class="tags" id="tags">
      <span class="role">${el.role}</span>
      <span class="level">${el.level}</span>
      <div class="languages">
      `;
  el.languages.forEach((language) => {
    html += `<span>${language}</span>`;
  });
  el.tools.forEach((tool) => {
    html += `<span>${tool}</span>`;
  });
  html += `
      </div>
    </div>   
    `;
  let job = document.createElement("div");
  job.classList.add("job");
  job.classList.add("initials");
  job.innerHTML = html;
  jobs.append(job);
}
