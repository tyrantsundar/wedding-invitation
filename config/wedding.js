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

    mapUrl: "https://maps.app.goo.gl/wzLa8BKsyMHXLfaA9",
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
    name: "Thirukoilure",
    display: "📍 Thirukoilure",

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

    groomLabel: "The family that gave him his roots",

    brideLabel: "The family that taught her to bloom",

    groomTitle: "GROOM'S TEAM",

    brideTitle: "BRIDE'S TEAM",

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
      "As we begin this beautiful chapter together, we will carry the warmth of your wishes and the memories we create with you in our hearts, always.",

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
        src: "images/couple-1.jpeg",
        alt: COUPLE.altName,
      },

      {
        src: "images/80s-era.jpeg",
        alt: COUPLE.altName,
      },

      // {
      //   src: "images/cowboys-era.jpeg",
      //   alt: COUPLE.altName,
      // },

      // {
      //   src: "images/kings-era.jpeg",
      //   alt: COUPLE.altName,
      // },
    ],
  },

  groom: {
    title: "Groom's Family",

    photos: [
      {
        src: "images/groom-parents.jpeg",
        alt: "Groom family",
      },
      {
        src: "images/groom-sister.jpeg",
        alt: "Groom family",
      },
      {
        src: "images/groom-brother.jpeg",
        alt: "Groom family",
      },
      {
        src: "images/groom-chithappa.jpeg",
        alt: "Groom family",
      },
      {
        src: "images/groom-brother-anandh.jpeg",
        alt: "Groom family",
      },
    ],
  },

  bride: {
    title: "Bride's Family",

    photos: [
      {
        src: "images/bride-parents.jpeg",
        alt: "Bride family",
      },
      {
        src: "images/bride-brother.jpeg",
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
      time: "05:00 AM",
      title: "Engagement",
      venue: `Tenkasi, ${WEDDING.location.name}`,
      photo: "images/wedding-events/engagement.jpeg",
      details:
        "Our celebrations begin with Engagement at our home in Tenkasi — a precious family moment filled with love, blessings, and the joy of bringing two families together.",
    },
    {
      time: "07:00 AM",
      title: "Family Gathering",
      venue: `Wedding Venue, ${WEDDING.location.name}`,
      photo: "images/wedding-events/family-gathering.jpeg",
      details:
        "Families and close relatives gather together for the auspicious wedding rituals. This is a special time for both families to come together.",
    },
    {
      time: "09:00 AM to 10:30 AM",
      title: "Wedding",
      venue: `Wedding Venue, ${WEDDING.location.name}`,
      photo: "images/wedding-events/thali-kattu.jpeg",
      details: `A beautiful and sacred moment as ${COUPLE.groom.name} ties the thali, marking the beginning of our journey together.`,
    },
    {
      time: "10:00 AM",
      title: "Family Blessings & Photos",
      venue: `Wedding Venue, ${WEDDING.location.name}`,
      photo: "images/wedding-events/photo-shoot.jpeg",
      details:
        "Seeking the blessings of our elders and capturing precious moments with our families.",
    },
    {
      time: "12:30 PM",
      title: "Lunch",
      venue: `Wedding Venue, ${WEDDING.location.name}`,
      photo: "images/wedding-events/lunch.jpeg",
      details: "Nalla sapdunga bro !",
    },
    {
      time: "05:00 PM",
      title: "The New Begging !",
      venue: `Wedding Venue, ${WEDDING.location.name}`,
      photo: "images/wedding-events/new-beginning.jpeg",
      details:
        "Thank you for joining us and blessing the beginning of our new journey.",
    },
  ],

  reception: [
    {
      time: "04:00 PM",

      title: "Reception",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: "images/reception-events/photo-shoot.jpeg",

      details:
        "Welcome to the reception. Guests are invited to arrive and join the celebration.",
    },

    {
      time: "07:00 PM",

      title: "Dinner",

      venue: `Reception Venue, ${RECEPTION.location.name}`,

      photo: "images/reception-events/dinner.jpeg",

      details: "An opportunity to meet the couple, family members and friends.",
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
