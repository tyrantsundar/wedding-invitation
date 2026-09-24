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

    timeline: [
      {
        time: "08:00 AM",
        title: "Guest Arrival",
        description:
          "Welcome to our special day. Guests are invited to arrive and take their seats.",
      },

      {
        time: "08:30 AM",
        title: "Family Gathering",
        description:
          "Families and close relatives gather together for the auspicious wedding rituals.",
      },

      {
        time: "09:00 AM",
        title: "Wedding Ceremony Begins",
        description:
          "The wedding ceremony begins with the blessings of our families and elders.",
      },

      {
        time: "09:15 AM",
        title: "Thali Kattu",
        description:
          "A beautiful and sacred moment as Sundar ties the thali, marking the beginning of our journey together.",
      },

      {
        time: "09:30 AM",
        title: "Wedding Rituals",
        description:
          "Traditional wedding rituals and blessings with our family and loved ones.",
      },

      {
        time: "10:00 AM",
        title: "Family Blessings & Photos",
        description:
          "Seeking the blessings of our elders and capturing precious moments with our families.",
      },

      {
        time: "10:30 AM",
        title: "Wedding Ceremony Ends",
        description:
          "Thank you for joining us and blessing the beginning of our new journey.",
      },

      {
        time: "12:30 PM",
        title: "Lunch",
        description:
          "Please join us for a traditional wedding lunch with family and friends.",
      },
    ],

    photos: [
      "images/wedding-1.jpg",
      "images/wedding-2.jpg",
      "images/wedding-3.jpg",
      "images/wedding-4.jpg",
    ],
  },

  reception: {
    type: "RECEPTION",
    title: "Celebration Evening",
    date: "29 November 2026",
    time: "4:00 PM – 10:00 PM",
    location: "📍 Viluppuram",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Viluppuram",

    timeline: [
      {
        time: "04:00 PM",
        title: "Guest Arrival",
        description:
          "Welcome to the reception. Guests are invited to arrive and join the celebration.",
      },

      {
        time: "04:30 PM",
        title: "Meet & Greet",
        description:
          "An opportunity to meet the couple, family members and friends.",
      },

      {
        time: "05:30 PM",
        title: "Couple's Entry",
        description:
          "Join us as we welcome Sundar & Sundari to their special evening.",
      },

      {
        time: "06:00 PM",
        title: "Greetings & Blessings",
        description:
          "Family and friends share their blessings and warm wishes with the couple.",
      },

      {
        time: "07:00 PM",
        title: "Photography & Memories",
        description:
          "Let's capture some beautiful memories together with family and friends.",
      },

      {
        time: "07:30 PM",
        title: "Dinner",
        description:
          "Please join us for dinner and continue the celebration with us.",
      },

      {
        time: "09:30 PM",
        title: "Final Greetings",
        description:
          "A final opportunity to meet, greet and share your blessings with the couple.",
      },

      {
        time: "10:00 PM",
        title: "Reception Ends",
        description:
          "Thank you for being part of our celebration and making our evening memorable.",
      },
    ],

    photos: [
      "images/reception-1.jpg",
      "images/reception-2.jpg",
      "images/reception-3.jpg",
      "images/reception-4.jpg",
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
