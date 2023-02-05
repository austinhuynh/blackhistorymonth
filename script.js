import { Events } from "./events.js";

window.addEventListener("resize", () => {
  checkScreenType();
});
var screenType = window.screen.width < 769 ? "tablet" : "desktop";

document.getElementById("week-4").addEventListener("click", () => {
  generateWeeklyEvents("week-4");
});
document.getElementById("week-5").addEventListener("click", () => {
  generateWeeklyEvents("week-5");
});
document.getElementById("week-6").addEventListener("click", () => {
  generateWeeklyEvents("week-6");
});
document.getElementById("week-7").addEventListener("click", () => {
  generateWeeklyEvents("week-7");
});
document.getElementById("week-8").addEventListener("click", () => {
  generateWeeklyEvents("week-8");
});
// document.getElementById("week-9").addEventListener("click", () => {
//   generateWeeklyEvents("week-9");
// });
document.getElementById("ongoing").addEventListener("click", () => {
  generateWeeklyEvents("ongoing");
});

document.getElementById("week-4-sm").addEventListener("click", () => {
  generateWeeklyEvents("week-4");
});
document.getElementById("week-5-sm").addEventListener("click", () => {
  generateWeeklyEvents("week-5");
});
document.getElementById("week-6-sm").addEventListener("click", () => {
  generateWeeklyEvents("week-6");
});
document.getElementById("week-7-sm").addEventListener("click", () => {
  generateWeeklyEvents("week-7");
});
document.getElementById("week-8-sm").addEventListener("click", () => {
  generateWeeklyEvents("week-8");
});
// document.getElementById("week-9-sm").addEventListener("click", () => {
//   generateWeeklyEvents("week-9");
// });
document.getElementById("ongoing-sm").addEventListener("click", () => {
  generateWeeklyEvents("ongoing");
});

const weekMap = {
  "week-4": "WEEK 4",
  "week-5": "WEEK 5",
  "week-6": "WEEK 6",
  "week-7": "WEEK 7",
  "week-8": "WEEK 8",
  // "week-9": "WEEK 9",
  ongoing: "ONGOING"
};


const createEvent = (event, week) => {
  const eventTemplate = `<div class="row sep-event-tile">
  <div class="col event-tile" style="background-image : url(${event.image})">

    <div class="row" style="min-height: 30rem;" >
      <div class="col-3 event-date">
      <h2 style=" transform : rotate(-90deg); margin-top : 10rem; font-size: 4vw; position : absolute; top: 4rem; left : 0; font-weight: 700" >${
    event.date
  }</h2>

      </div>
      <div class="col event-info">
      <div style="margin-top : 4.5rem; margin-right : 4rem; margin-bottom: 4rem" >
          <h3 style="display: inline; text-transform : ${"uppercase"}; font-weight : 800">${
            event.title 
          }</h3>
          <em><h3 style="display: inline; text-transform : ${"uppercase"}; font-weight : 800">${
            event.title_italic || ''
          }</h3></em>
        <br />
        <br />
        <p>
          <span>Time: </span> ${event.time}
          <br />
          <br />
          <span>Sponsors: </span> ${
    event.sponsors
  }
                  <br />
                  <br />
          <span>Location: </span> ${
    event.location
  }
          <br />
          <br />
          <span>Ticket: </span> <a href=${
    event.link
  } target="_blank"> ${event.ticket} </a>

  <br />
  <br />
  <span>About: </span> ${event.description}
        </p>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  return eventTemplate;
};

/*
const createEvent = (event, week) => {
  const eventTemplate = `<div class="row sep-event-tile">
  <div class="col event-tile" style="background-image : url(${event.image})">

    <div class="row" style="min-height: 30rem; background : ${
      event.background
    }" >
      <div class="col-3 event-date">
      <h2 style="color : ${
        event.text_color
      }; transform : rotate(-90deg); margin-top : 10rem; font-size: 4vw; position : absolute; top: 4rem; left : 0; font-weight: 700" >${
    event.date
  }</h2>

      </div>
      <div class="col event-info">
      <div style="margin-top : 4.5rem; margin-right : 4rem; margin-bottom: 4rem" >
          <h3 style="display: inline; color : ${event.text_color}; text-transform : ${"uppercase"}; font-weight : 800">${
            event.title 
          }</h3>
          <em><h3 style="display: inline; color : ${event.text_color}; text-transform : ${"uppercase"}; font-weight : 800">${
            event.title_italic || ''
          }</h3></em>
        <br />
        <br />
        <p style="color : ${event.base_color}">
          <span style="color : ${event.text_color}">Time: </span> ${event.time}
          <br />
          <br />
          <span style="color : ${event.text_color}">Sponsors: </span> ${
    event.sponsors
  }
                  <br />
                  <br />
          <span style="color : ${event.text_color}">Location: </span> ${
    event.location
  }
          <br />
          <br />
          <span style="color : ${event.text_color}">Ticket: </span> <a href=${
    event.link
  } target="_blank" style="color : ${event.text_color}"> ${event.ticket} </a>

  <br />
  <br />
  <span style="color : ${event.text_color}">About: </span> ${event.description}
        </p>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  return eventTemplate;
};

*/

const generateWeeklyEvents = week => {
  const weeklyEvents = Events[week];
  const eventNodes = weeklyEvents
    .map(obj => {
      return createEvent(obj, week);
    })
    .join("");

  var weeklyEvent = document.createElement("div");
  weeklyEvent.innerHTML =
    `<div class="row"><h1>${weekMap[week]}</h1></div>` + eventNodes;
  document.getElementById(week + "-child").innerHTML =
    `<div class="row"><h1 style="margin-top : 4rem">${weekMap[week]}</h1></div>` +
    eventNodes;
  document.getElementById(week + "-child").classList.toggle("visibility");

  // if (screenType === "desktop"){
  document.getElementById("event-display").innerHTML =
    `<div class="row"><h1 style="margin-top : 4rem">${weekMap[week]}</h1></div>` +
    eventNodes;
  // } else {
  //   document.getElementById(week + "-sm").innerHTML =
  //   `<div class="row"><h1>${weekMap[week]}</h1></div>` + eventNodes;
  // }
};

const checkScreenType = () => {
  var currentScreenType = window.screen.width < 769 ? "tablet" : "desktop";
  if (currentScreenType !== screenType) {
    console.log("NOT SAME");
    generateWeeklyEvents("week-4");
    // generateWeeklyEvents("week-5");
  }
  screenType = currentScreenType;
};

// Generate date and display according to today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var date = mm + dd
console.log(date)

if (date == '0130' ||
        date == '0131' ||
        date == '0201' ||
        date == '0202' ||
        date == '0203' ||
        date == '0204' ||
        date == '0205') {
  generateWeeklyEvents("week-4");
}
if (date == '0206' ||
        date == '0207' ||
        date == '0208' ||
        date == '0209' ||
        date == '0210' ||
        date == '0211' ||
        date == '0212') {
  generateWeeklyEvents("week-5");
}
else if (date == '0213' ||
        date == '0214' ||
        date == '0215' ||
        date == '0216' ||
        date == '0217' ||
        date == '0218' ||
        date == '0219') {
  generateWeeklyEvents("week-6");
}
else if (date == '0220' ||
        date == '0221' ||
        date == '0222' ||
        date == '0223' ||
        date == '0224' ||
        date == '0225' ||
        date == '0226') {
  generateWeeklyEvents("week-7");
}
else if (date == '0227' ||
        date == '0228' ||
        date == '0301' ||
        date == '0302' ||
        date == '0303' ||
        date == '0304' ||
        date == '0305') {
  generateWeeklyEvents("week-8");
}
// else if (date == '0306' ||
//         date == '0307' ||
//         date == '0308' ||
//         date == '0309' ||
//         date == '0310' ||
//         date == '0311' ||
//         date == '0312') {
//   generateWeeklyEvents("week-9");
// }
else {
  //generateWeeklyEvents("week-5");
  generateWeeklyEvents("week-4");
}


