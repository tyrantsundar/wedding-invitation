// ============================================================
// WEDDING CONFIG
// ============================================================

const wedding = WEDDING_CONFIG;

// ============================================================
// PAGE INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initializePage();

  initializeModal();

  initializeCountdown();
});

// ============================================================
// PAGE INITIALIZATION
// ============================================================

function initializePage() {
  renderMetaContent();

  renderHero();

  renderCelebrations();

  renderStory();

  renderFamilyGalleries();

  renderCountdownContent();

  renderThankYou();
}

// ============================================================
// META / PAGE TITLE
// ============================================================

function renderMetaContent() {
  const metaDescription = document.getElementById("meta-description");

  const pageTitle = document.getElementById("page-title");

  if (metaDescription) {
    metaDescription.setAttribute("content", wedding.content.meta.description);
  }

  if (pageTitle) {
    pageTitle.textContent = wedding.content.meta.title;
  }
}

// ============================================================
// HERO
// ============================================================

function renderHero() {
  setText("hero-invitation-label", wedding.content.hero.invitationLabel);

  setText("hero-message", wedding.content.hero.message);

  setCoupleName("hero-couple-names");

  setText("hero-wedding-date", wedding.wedding.date.display);

  setText("hero-scroll-text", wedding.content.hero.scrollText);
}

// ============================================================
// COUPLE NAME
// ============================================================

function setCoupleName(elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.innerHTML = `
    ${escapeHtml(wedding.couple.groom.fullName)}

    <span>&</span>

    ${escapeHtml(wedding.couple.bride.fullName)}
  `;
}

// ============================================================
// CELEBRATIONS
// ============================================================

function renderCelebrations() {
  const content = wedding.content.celebrations;

  setText("celebrations-label", content.label);

  setText("celebrations-title", content.title);

  setText("celebrations-description", content.description);

  renderEventCard("wedding", content.weddingButton, content.locationButton);

  renderEventCard("reception", content.receptionButton, content.locationButton);
}

// ============================================================
// EVENT CARD
// ============================================================

function renderEventCard(eventName, exploreButtonText, locationButtonText) {
  const event = wedding.events[eventName];

  if (!event) {
    return;
  }

  setText(`${eventName}-event-type`, event.type);

  setText(`${eventName}-event-title`, event.title);

  setText(`${eventName}-event-date`, event.date);

  setText(`${eventName}-event-time`, event.time);

  setText(`${eventName}-event-location`, event.location);

  setText(`${eventName}-event-button`, exploreButtonText);

  const locationButton = document.getElementById(
    `${eventName}-location-button`,
  );

  if (locationButton) {
    locationButton.textContent = locationButtonText;

    locationButton.href = event.mapUrl;
  }
}

// ============================================================
// STORY
// ============================================================

function renderStory() {
  const content = wedding.content.story;

  setText("story-label", content.label);

  setText("story-title", content.title);

  setText("story-description", content.description);
}

// ============================================================
// FAMILY GALLERIES
// ============================================================

function renderFamilyGalleries() {
  renderFamilyGallery("couple", "couple-gallery");

  renderFamilyGallery("groom", "groom-gallery");

  renderFamilyGallery("bride", "bride-gallery");

  const content = wedding.content.family;

  setText("couple-family-label", content.coupleLabel);

  setText("couple-family-title", wedding.couple.displayName);

  setText("groom-family-label", content.groomLabel);

  setText("groom-family-title", content.groomTitle);

  setText("bride-family-label", content.brideLabel);

  setText("bride-family-title", content.brideTitle);

  setAttribute("couple-prev-button", "aria-label", content.previousCouple);

  setAttribute("couple-next-button", "aria-label", content.nextCouple);

  setAttribute("groom-prev-button", "aria-label", content.previousGroom);

  setAttribute("groom-next-button", "aria-label", content.nextGroom);

  setAttribute("bride-prev-button", "aria-label", content.previousBride);

  setAttribute("bride-next-button", "aria-label", content.nextBride);
}

// ============================================================
// RENDER FAMILY GALLERY
// ============================================================

function renderFamilyGallery(familyName, galleryId) {
  const gallery = wedding.family[familyName];

  const container = document.getElementById(galleryId);

  if (!gallery || !container) {
    return;
  }

  container.innerHTML = "";

  gallery.photos.forEach((photo) => {
    const photoElement = document.createElement("div");

    photoElement.className = "family-photo";

    const image = document.createElement("img");

    image.src = photo.src;

    image.alt = photo.alt;

    image.loading = "lazy";

    photoElement.appendChild(image);

    container.appendChild(photoElement);
  });
}

// ============================================================
// COUNTDOWN CONTENT
// ============================================================

function renderCountdownContent() {
  const content = wedding.content.countdown;

  setText("countdown-label", content.label);

  setText("countdown-title", content.title);

  setText("countdown-message", content.message);

  setText("countdown-days-label", content.days);

  setText("countdown-hours-label", content.hours);

  setText("countdown-minutes-label", content.minutes);

  setText("countdown-seconds-label", content.seconds);

  setText("countdown-date", wedding.wedding.date.display);
}

// ============================================================
// WEDDING COUNTDOWN
// ============================================================

let weddingDate;

function initializeCountdown() {
  weddingDate = new Date(wedding.wedding.countdownDateTime).getTime();

  updateCountdown();

  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  if (!weddingDate) {
    return;
  }

  const now = new Date().getTime();

  const difference = weddingDate - now;

  const daysElement = document.getElementById("days");

  const hoursElement = document.getElementById("hours");

  const minutesElement = document.getElementById("minutes");

  const secondsElement = document.getElementById("seconds");

  if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  daysElement.textContent = String(days).padStart(2, "0");

  hoursElement.textContent = String(hours).padStart(2, "0");

  minutesElement.textContent = String(minutes).padStart(2, "0");

  secondsElement.textContent = String(seconds).padStart(2, "0");
}

// ============================================================
// THANK YOU
// ============================================================

function renderThankYou() {
  const content = wedding.content.thankYou;

  setText("thank-you-label", content.label);

  setText("thank-you-title", content.title);

  setText("thank-you-message-one", content.messageOne);

  setText("thank-you-message-two", content.messageTwo);

  setCoupleName("thank-you-names");

  setText("thank-you-date", wedding.wedding.date.display);

  setText("back-to-top-button", content.backToBeginning);
}

// ============================================================
// PHOTO GALLERY SCROLL
// ============================================================

function scrollGallery(galleryId, direction) {
  const gallery = document.getElementById(galleryId);

  if (!gallery) {
    return;
  }

  const scrollAmount = 320;

  gallery.scrollBy({
    left: direction * scrollAmount,

    behavior: "smooth",
  });
}

// ============================================================
// EVENT DATA
// ============================================================

const eventData = wedding.events;

// ============================================================
// OPEN EVENT MODAL
// ============================================================

function openEvent(eventName) {
  const event = eventData[eventName];

  if (!event) {
    console.error(`Event "${eventName}" not found.`);

    return;
  }

  setText("modal-event-type", event.type);

  setText("modal-event-title", event.title);

  setText("modal-event-date", event.date);

  setText("modal-event-time", event.time);

  setText("modal-event-location", event.location);

  setText("modal-schedule-title", event.scheduleTitle);

  const mapButton = document.getElementById("modal-map-button");

  if (mapButton) {
    mapButton.href = event.mapUrl;
  }

  renderEventSchedule(event.events);

  const modal = document.getElementById("event-modal");

  if (!modal) {
    return;
  }

  modal.classList.add("active");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const modalContent = modal.querySelector(".event-modal-content");

  if (modalContent) {
    modalContent.scrollTop = 0;
  }
}

// ============================================================
// CLOSE EVENT MODAL
// ============================================================

function closeEvent() {
  const modal = document.getElementById("event-modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

// ============================================================
// RENDER EVENT SCHEDULE
// ============================================================

function renderEventSchedule(events) {
  const container = document.getElementById("event-timeline");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!events || events.length === 0) {
    container.innerHTML = `
      <p class="no-schedule">
        ${escapeHtml(wedding.content.modal.emptySchedule)}
      </p>
    `;

    return;
  }

  events.forEach((event, index) => {
    const eventItem = document.createElement("div");

    eventItem.className = "schedule-card";

    const photoHtml = event.photo
      ? `
            <div class="schedule-photo">
              <img
                src="${escapeHtml(event.photo)}"
                alt="${escapeHtml(event.title)}"
                loading="lazy"
              />
            </div>
          `
      : "";

    eventItem.innerHTML = `
        ${photoHtml}

        <div class="schedule-card-content">

          <div class="schedule-time">
            ${escapeHtml(event.time)}
          </div>

          <h4>
            ${escapeHtml(event.title)}
          </h4>

          <p class="schedule-venue">
            📍 ${escapeHtml(event.venue)}
          </p>

          <button
            type="button"
            class="schedule-details-button"
            onclick="toggleEventDetails(${index})"
            aria-expanded="false"
            aria-controls="schedule-details-${index}"
          >
            ${escapeHtml(wedding.content.modal.viewDetails)}
          </button>

          <div
            class="schedule-details"
            id="schedule-details-${index}"
          >
            <p>
              ${escapeHtml(event.details)}
            </p>
          </div>

        </div>
      `;

    container.appendChild(eventItem);
  });
}

// ============================================================
// TOGGLE EVENT DETAILS
// ============================================================

function toggleEventDetails(index) {
  const details = document.getElementById(`schedule-details-${index}`);

  if (!details) {
    return;
  }

  const button = details.previousElementSibling;

  const isOpen = details.classList.contains("active");

  document.querySelectorAll(".schedule-details").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".schedule-details-button").forEach((item) => {
    item.textContent = wedding.content.modal.viewDetails;

    item.setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    details.classList.add("active");

    if (button) {
      button.textContent = wedding.content.modal.hideDetails;

      button.setAttribute("aria-expanded", "true");
    }
  }
}

// ============================================================
// MODAL INITIALIZATION
// ============================================================

function initializeModal() {
  const modal = document.getElementById("event-modal");

  if (!modal) {
    return;
  }

  modal.setAttribute("aria-hidden", "true");

  const closeButton = document.getElementById("modal-close-button");

  if (closeButton) {
    closeButton.setAttribute("aria-label", wedding.content.modal.closeLabel);
  }

  setText("modal-schedule-label", wedding.content.modal.scheduleLabel);

  setText("modal-map-button", wedding.content.modal.mapButton);
}

// ============================================================
// KEYBOARD CONTROLS
// ============================================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEvent();
  }
});

// ============================================================
// DOM HELPERS
// ============================================================

function setText(elementId, value) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.textContent = value ?? "";
}

function setAttribute(elementId, attribute, value) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.setAttribute(attribute, value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
