// ============================================================
// WEDDING WEBSITE CONFIGURATION
// Single source of truth for all website content and data
// ============================================================

// ============================================================
// COUPLE
// ============================================================

const COUPLE = {
  groom: {
    name: "Sundar",
    fullName: "Sundar Pirabu Raj R",
  },

  bride: {
    name: "Vaishnavi SP",
    fullName: "Vaishnavi SP",
  },

  displayName: "Sundar & Vaishnavi",

  altName: "Sundar and Vaishnavi",
};

// ============================================================
// WEDDING
// ============================================================

const WEDDING = {
  date: {
    display: "20 November 2026",
    iso: "2026-11-20",
  },

  time: "9:00 AM – 10:30 AM",

  countdownDateTime: "2026-11-20T09:00:00",

  location: {
    name: "Tenkasi",
    display: "📍 Tenkasi",

    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tenkasi",
  },
};

// ============================================================
// RECEPTION
// ============================================================

const RECEPTION = {
  date: {
    display: "29 November 2026",
    iso: "2026-11-29",
  },

  time: "3:30 PM – 09:00 PM",

  location: {
    name: "Viluppuram",
    display: "📍 Viluppuram",

    mapUrl: "https://www.google.com/maps/search/?api=1&query=Viluppuram",
  },
};

// ============================================================
// WEBSITE TEXT
// ============================================================

const CONTENT = {
  meta: {
    description: "Wedding invitation of Sundar Pirabu Raj R and Vaishnavi",

    title: "Sundar & Vaishnavi | Wedding Invitation",
  },

  hero: {
    invitationLabel: "WEDDING INVITATION",

    message:
      "With the blessings of our families, we invite you to celebrate our special day with us.",

    scrollText: "Scroll to explore",
  },

  celebrations: {
    label: "JOIN US",

    title: "The Celebrations",

    description:
      "Two cherished moments, one beautiful journey, forever woven together.",

    weddingButton: "Wedding Day Events",

    receptionButton: "Reception Day Events",

    locationButton: "View Location",
  },

  story: {
    label: "TWO FAMILIES, ONE JOURNEY",

    title: "Our Story",

    description:
      "A celebration of two hearts and the families that made us who we are.",
  },

  family: {
    coupleLabel: "THE COUPLE",

    groomLabel: "GROOM'S FAMILY",

    brideLabel: "BRIDE'S FAMILY",

    groomTitle: "Where the Groom Comes From, He has",

    brideTitle: "Where the Bride Comes From, She has",

    previousCouple: "Previous couple photo",

    nextCouple: "Next couple photo",

    previousGroom: "Previous groom family photo",

    nextGroom: "Next groom family photo",

    previousBride: "Previous bride family photo",

    nextBride: "Next bride family photo",
  },

  countdown: {
    label: "THE WAIT BEGINS",

    title: "Counting Down",

    message: "Until we begin our forever",

    days: "Days",

    hours: "Hours",

    minutes: "Minutes",

    seconds: "Seconds",
  },

  thankYou: {
    label: "WITH GRATITUDE",

    title: "Thank You",

    messageOne:
      "Having you with us on this special day would mean more than we could ever put into words. Your presence, love, and blessings will make our celebration truly complete.",

    messageTwo:
      "As we begin this beautiful new chapter together, we will carry the warmth of your wishes and the memories we create with you in our hearts, always.",

    backToBeginning: "Back to Beginning ↑",
  },

  modal: {
    closeLabel: "Close event details",

    mapButton: "Open Google Maps",

    scheduleLabel: "THE SCHEDULE",

    defaultScheduleTitle: "Event Schedule",

    viewDetails: "View Details",

    hideDetails: "Hide Details",

    emptySchedule: "Event schedule will be updated soon.",
  },
};

// ============================================================
// FAMILY PHOTOS
// ============================================================

const FAMILY = {
  couple: {
    title: "The Couple",

    photos: [
      {
        src: "images/couple-1.jpg",
        alt: COUPLE.altName,
      },

      {
        src: "images/couple-2.jpg",
        alt: COUPLE.altName,
      },

      {
        src: "images/couple-3.jpg",
        alt: COUPLE.altName,
      },

      {
        src: "images/couple-4.jpg",
        alt: COUPLE.altName,
      },
    ],
  },

  groom: {
    title: "Groom's Family",

    photos: [
      {
        src: "images/groom-family-1.jpg",
        alt: "Groom family",
      },

      {
        src: "images/groom-family-2.jpg",
        alt: "Groom family",
      },

      {
        src: "images/groom-family-3.jpg",
        alt: "Groom family",
      },

      {
        src: "images/groom-family-4.jpg",
        alt: "Groom family",
      },
    ],
  },

  bride: {
    title: "Bride's Family",

    photos: [
      {
        src: "images/bride-family-1.jpg",
        alt: "Bride family",
      },

      {
        src: "images/bride-family-2.jpg",
        alt: "Bride family",
      },

      {
        src: "images/bride-family-3.jpg",
        alt: "Bride family",
      },

      {
        src: "images/bride-family-4.jpg",
        alt: "Bride family",
      },
    ],
  },
};

// ============================================================
// GALLERY
// ============================================================

const GALLERY = {
  enabled: false,

  title: "A Glimpse of Us",

  label: "OUR MOMENTS",

  description: "A few memories from our journey together.",

  photos: [],
};

// ============================================================
// EVENT SCHEDULES
// ============================================================

const EVENT_SCHEDULES = {
  wedding: [
    {
      time: "08:00 AM",

      title: "Guest Arrival",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: "images/wedding-events/guest-arrival.jpg",

      details:
        "Welcome to our special day. Guests are invited to arrive, settle in and take their seats.",
    },

    {
      time: "08:30 AM",

      title: "Family Gathering",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: null,

      details:
        "Families and close relatives gather together for the auspicious wedding rituals. This is a special time for both families to come together.",
    },

    {
      time: "09:00 AM",

      title: "Wedding Ceremony Begins",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: "images/wedding-events/ceremony.jpg",

      details:
        "The wedding ceremony begins with the blessings of our families and elders.",
    },

    {
      time: "09:15 AM",

      title: "Thali Kattu",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: "images/wedding-events/thali-kattu.jpg",

      details: `A beautiful and sacred moment as ${COUPLE.groom.name} ties the thali, marking the beginning of our journey together.`,
    },

    {
      time: "09:30 AM",

      title: "Wedding Rituals",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: null,

      details:
        "Traditional wedding rituals and blessings with our family and loved ones.",
    },

    {
      time: "10:00 AM",

      title: "Family Blessings & Photos",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: "images/wedding-events/family-blessings.jpg",

      details:
        "Seeking the blessings of our elders and capturing precious moments with our families.",
    },

    {
      time: "10:30 AM",

      title: "Wedding Ceremony Ends",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: null,

      details:
        "Thank you for joining us and blessing the beginning of our new journey.",
    },

    {
      time: "12:30 PM",

      title: "Lunch",

      venue: `Wedding Venue, ${WEDDING.location.name}`,

      photo: null,

      details:
        "Please join us for a traditional wedding lunch with family and friends.",
    },
  ],

  reception: [
    {
      time: "04:00 PM",

      title: "Guest Arrival",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: "images/reception-events/guest-arrival.jpg",

      details:
        "Welcome to the reception. Guests are invited to arrive and join the celebration.",
    },

    {
      time: "04:30 PM",

      title: "Meet & Greet",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: null,

      details: "An opportunity to meet the couple, family members and friends.",
    },

    {
      time: "05:30 PM",

      title: "Couple's Entry",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: "images/reception-events/couple-entry.jpg",

      details: `Join us as we welcome ${COUPLE.displayName} to their special evening.`,
    },

    {
      time: "06:00 PM",

      title: "Greetings & Blessings",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: null,

      details:
        "Family and friends share their blessings and warm wishes with the couple.",
    },

    {
      time: "07:00 PM",

      title: "Photography & Memories",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: "images/reception-events/photography.jpg",

      details:
        "Let's capture some beautiful memories together with family and friends.",
    },

    {
      time: "07:30 PM",

      title: "Dinner",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: null,

      details:
        "Please join us for dinner and continue the celebration with us.",
    },

    {
      time: "09:30 PM",

      title: "Final Greetings",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: null,

      details:
        "A final opportunity to meet, greet and share your blessings with the couple.",
    },

    {
      time: "10:00 PM",

      title: "Reception Ends",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: null,

      details:
        "Thank you for being part of our celebration and making our evening memorable.",
    },
  ],
};

// ============================================================
// FINAL CONFIG
// ============================================================

const WEDDING_CONFIG = {
  couple: COUPLE,

  wedding: WEDDING,

  reception: RECEPTION,

  content: CONTENT,

  family: FAMILY,

  gallery: GALLERY,

  events: {
    wedding: {
      type: "WEDDING CEREMONY",

      title: COUPLE.displayName,

      date: WEDDING.date.display,

      time: WEDDING.time,

      location: WEDDING.location.display,

      mapUrl: WEDDING.location.mapUrl,

      scheduleTitle: "Wedding Day Schedule",

      events: EVENT_SCHEDULES.wedding,
    },

    reception: {
      type: "RECEPTION",

      title: "Celebration Evening",

      date: RECEPTION.date.display,

      time: RECEPTION.time,

      location: RECEPTION.location.display,

      mapUrl: RECEPTION.location.mapUrl,

      scheduleTitle: "Reception Schedule",

      events: EVENT_SCHEDULES.reception,
    },
  },
};
