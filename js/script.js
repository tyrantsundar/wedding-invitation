// =========================
// WEDDING COUNTDOWN
// =========================

const weddingDate = new Date("November 28, 2026 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();

  const difference = weddingDate - now;

  // Wedding day has arrived
  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// =========================
// PHOTO GALLERY SCROLL
// =========================

function scrollGallery(galleryId, direction) {
  const gallery = document.getElementById(galleryId);

  const scrollAmount = 320;

  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

const eventData = {
  wedding: {
    type: "WEDDING CEREMONY",
    title: "Sundar & Sundari",
    date: "28 November 2026",
    time: "9:00 AM – 10:30 AM",
    location: "📍 Tenkasi",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tenkasi",
    scheduleTitle: "Wedding Day Schedule",

    events: [
      {
        time: "08:00 AM",
        title: "Guest Arrival",
        venue: "Wedding Venue, Tenkasi",

        // Add photo when available
        photo: "images/wedding-events/guest-arrival.jpg",

        // Everything you want to show when Details is clicked
        details:
          "Welcome to our special day. Guests are invited to arrive, settle in and take their seats.",
      },

      {
        time: "08:30 AM",
        title: "Family Gathering",
        venue: "Wedding Venue, Tenkasi",

        // No photo yet
        photo: null,

        details:
          "Families and close relatives gather together for the auspicious wedding rituals. This is a special time for both families to come together.",
      },

      {
        time: "09:00 AM",
        title: "Wedding Ceremony Begins",
        venue: "Wedding Venue, Tenkasi",

        photo: "images/wedding-events/ceremony.jpg",

        details:
          "The wedding ceremony begins with the blessings of our families and elders.",
      },

      {
        time: "09:15 AM",
        title: "Thali Kattu",
        venue: "Wedding Venue, Tenkasi",

        photo: "images/wedding-events/thali-kattu.jpg",

        details:
          "A beautiful and sacred moment as Sundar ties the thali, marking the beginning of our journey together.",
      },

      {
        time: "09:30 AM",
        title: "Wedding Rituals",
        venue: "Wedding Venue, Tenkasi",

        photo: null,

        details:
          "Traditional wedding rituals and blessings with our family and loved ones.",
      },

      {
        time: "10:00 AM",
        title: "Family Blessings & Photos",
        venue: "Wedding Venue, Tenkasi",

        photo: "images/wedding-events/family-blessings.jpg",

        details:
          "Seeking the blessings of our elders and capturing precious moments with our families.",
      },

      {
        time: "10:30 AM",
        title: "Wedding Ceremony Ends",
        venue: "Wedding Venue, Tenkasi",

        photo: null,

        details:
          "Thank you for joining us and blessing the beginning of our new journey.",
      },

      {
        time: "12:30 PM",
        title: "Lunch",
        venue: "Wedding Venue, Tenkasi",

        photo: null,

        details:
          "Please join us for a traditional wedding lunch with family and friends.",
      },
    ],
  },

  reception: {
    type: "RECEPTION",
    title: "Celebration Evening",
    date: "29 November 2026",
    time: "4:00 PM – 10:00 PM",
    location: "📍 Viluppuram",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Viluppuram",
    scheduleTitle: "Reception Schedule",

    events: [
      {
        time: "04:00 PM",
        title: "Guest Arrival",
        venue: "Reception Venue, Viluppuram",

        photo: "images/reception-events/guest-arrival.jpg",

        details:
          "Welcome to the reception. Guests are invited to arrive and join the celebration.",
      },

      {
        time: "04:30 PM",
        title: "Meet & Greet",
        venue: "Reception Venue, Viluppuram",

        photo: null,

        details:
          "An opportunity to meet the couple, family members and friends.",
      },

      {
        time: "05:30 PM",
        title: "Couple's Entry",
        venue: "Reception Venue, Viluppuram",

        photo: "images/reception-events/couple-entry.jpg",

        details:
          "Join us as we welcome Sundar & Sundari to their special evening.",
      },

      {
        time: "06:00 PM",
        title: "Greetings & Blessings",
        venue: "Reception Venue, Viluppuram",

        photo: null,

        details:
          "Family and friends share their blessings and warm wishes with the couple.",
      },

      {
        time: "07:00 PM",
        title: "Photography & Memories",
        venue: "Reception Venue, Viluppuram",

        photo: "images/reception-events/photography.jpg",

        details:
          "Let's capture some beautiful memories together with family and friends.",
      },

      {
        time: "07:30 PM",
        title: "Dinner",
        venue: "Reception Venue, Viluppuram",

        photo: null,

        details:
          "Please join us for dinner and continue the celebration with us.",
      },

      {
        time: "09:30 PM",
        title: "Final Greetings",
        venue: "Reception Venue, Viluppuram",

        photo: null,

        details:
          "A final opportunity to meet, greet and share your blessings with the couple.",
      },

      {
        time: "10:00 PM",
        title: "Reception Ends",
        venue: "Reception Venue, Viluppuram",

        photo: null,

        details:
          "Thank you for being part of our celebration and making our evening memorable.",
      },
    ],
  },
};

function openEvent(eventName) {
  const event = eventData[eventName];

  if (!event) {
    return;
  }

  document.getElementById("modal-event-type").textContent = event.type;

  document.getElementById("modal-event-title").textContent = event.title;

  document.getElementById("modal-event-date").textContent = event.date;

  document.getElementById("modal-event-time").textContent = event.time;

  document.getElementById("modal-event-location").textContent = event.location;

  document.getElementById("modal-map-button").href = event.mapUrl;

  renderTimeline(event.timeline);

  renderEventPhotos(event.photos);

  const modal = document.getElementById("event-modal");

  modal.classList.add("active");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeEvent() {
  const modal = document.getElementById("event-modal");

  modal.classList.remove("active");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

function renderTimeline(timeline) {
  const container = document.getElementById("event-timeline");

  container.innerHTML = "";

  timeline.forEach((item) => {
    const timelineItem = document.createElement("div");

    timelineItem.className = "timeline-item";

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>

      <div class="timeline-time">
        ${item.time}
      </div>

      <div class="timeline-content">
        <h4>${item.title}</h4>

        <p>${item.description}</p>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}

function renderEventPhotos(photos) {
  const container = document.getElementById("event-photo-grid");

  container.innerHTML = "";

  photos.forEach((photo) => {
    const imageWrapper = document.createElement("div");

    imageWrapper.className = "event-photo";

    imageWrapper.innerHTML = `
      <img
        src="${photo}"
        alt="Wedding memory"
        loading="lazy"
      />
    `;

    container.appendChild(imageWrapper);
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEvent();
  }
});

document.getElementById("modal-schedule-title").textContent =
  event.scheduleTitle;

function openEvent(eventName) {
  const event = eventData[eventName];

  if (!event) {
    return;
  }

  document.getElementById("modal-event-type").textContent = event.type;

  document.getElementById("modal-event-title").textContent = event.title;

  document.getElementById("modal-schedule-title").textContent =
    event.scheduleTitle;

  document.getElementById("modal-event-date").textContent = event.date;

  document.getElementById("modal-event-time").textContent = event.time;

  document.getElementById("modal-event-location").textContent = event.location;

  document.getElementById("modal-map-button").href = event.mapUrl;

  renderTimeline(event.timeline);

  renderEventPhotos(event.photos);

  const modal = document.getElementById("event-modal");

  modal.classList.add("active");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function renderEventSchedule(events) {
  const container = document.getElementById("event-timeline");

  container.innerHTML = "";

  events.forEach((event, index) => {
    const eventItem = document.createElement("div");

    eventItem.className = "schedule-card";

    eventItem.innerHTML = `
      ${
        event.photo
          ? `
            <div class="schedule-photo">
              <img
                src="${event.photo}"
                alt="${event.title}"
                loading="lazy"
              />
            </div>
          `
          : ""
      }

      <div class="schedule-card-content">

        <div class="schedule-time">
          ${event.time}
        </div>

        <h4>${event.title}</h4>

        <p class="schedule-venue">
          📍 ${event.venue}
        </p>

        <button
          class="schedule-details-button"
          onclick="toggleEventDetails(${index})"
        >
          View Details
        </button>

        <div
          class="schedule-details"
          id="schedule-details-${index}"
        >
          <p>${event.details}</p>
        </div>

      </div>
    `;

    container.appendChild(eventItem);
  });
}

function toggleEventDetails(index) {
  const details = document.getElementById(`schedule-details-${index}`);

  const button = details.previousElementSibling;

  const isOpen = details.classList.contains("active");

  // Close all other details
  document.querySelectorAll(".schedule-details").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".schedule-details-button").forEach((item) => {
    item.textContent = "View Details";
  });

  // Open selected one
  if (!isOpen) {
    details.classList.add("active");
    button.textContent = "Hide Details";
  }
}

function openEvent(eventName) {
  const event = eventData[eventName];

  if (!event) {
    return;
  }

  document.getElementById("modal-event-type").textContent = event.type;

  document.getElementById("modal-event-title").textContent = event.title;

  document.getElementById("modal-schedule-title").textContent =
    event.scheduleTitle;

  document.getElementById("modal-event-date").textContent = event.date;

  document.getElementById("modal-event-time").textContent = event.time;

  document.getElementById("modal-event-location").textContent = event.location;

  document.getElementById("modal-map-button").href = event.mapUrl;

  renderEventSchedule(event.events);

  const modal = document.getElementById("event-modal");

  modal.classList.add("active");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeEvent() {
  const modal = document.getElementById("event-modal");

  modal.classList.remove("active");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}
