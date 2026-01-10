const CONFIG = {
    // --- VISUAL SETTINGS ---
    colors: {
        main: "#7b7f68",    // Olive Green
        accent: "#223346",  // Navy Blue
        background: "#f9f9f7",
        white: "#ffffff"
    },

    // --- IMAGES ---
    // You can use "hero.jpg" if uploaded to GitHub, or full URLs
    heroImage: "hero.jpg", 
    
    // These are the elegant "break" images between sections
    scrollImage1: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80", // Between Details & Transport
    scrollImage2: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80", // Between Transport & Stay

    // --- HERO SECTION ---
    hero: {
        title: "JJ & CCC",
        date: "June 19, 2027",
        targetDate: "June 19, 2027 16:00:00 GMT-0600" // Date for Countdown
    },

    // --- NAVIGATION ---
    nav: {
        details: "Details",
        transport: "Getting There", // New Link
        stay: "Travel & Stay",
        registry: "Registry",
        rsvp: "RSVP"
    },

    // --- SECTION: DETAILS ---
    details: {
        title: "The Details",
        dateText: "Saturday, June 19, 2027",
        
        // Card 1: Ceremony
        ceremonyTitle: "Ceremony",
        ceremonyVenue: "The Mountain Overlook",
        ceremonyTime: "4:00 PM",
        ceremonyNote: "Please arrive by 3:30 PM for a welcome drink.",

        // Card 2: Reception
        receptionTitle: "Reception",
        receptionVenue: "Pine Ridge Lodge",
        receptionTime: "5:30 PM",
        receptionNote: "Cocktails, Dinner & Dancing to follow."
    },

    // --- SECTION: TRANSPORTATION (NEW) ---
    transport: {
        title: "Getting There",
        body: "Shuttles will be provided from the main hotels to the ceremony site. Parking at the venue is limited, so we encourage using the shuttle!",
        
        // Shuttle Schedule Card
        shuttleTitle: "Shuttle Schedule",
        shuttleBody: "Departs Grand Alpine Hotel: 3:15 PM\nDeparts Mountain Inn: 3:30 PM",
        
        // Driving Card
        driveTitle: "Driving?",
        driveBody: "If you choose to drive, take Hwy 82 to Maroon Creek Road. Valet parking is complimentary."
    },

    // --- SECTION: TRAVEL / STAY ---
    stay: {
        title: "Travel & Stay",
        intro: "We have reserved room blocks at these nearby hotels. Please mention the Smith/Jones wedding.",
        
        hotel1Name: "Grand Alpine Hotel",
        hotel1Price: "$189 / Night",
        hotel1Link: "#",
        hotel1Btn: "Book Room",

        hotel2Name: "Mountain Inn",
        hotel2Price: "$149 / Night",
        hotel2Link: "#",
        hotel2Btn: "Book Room"
    },

    // --- SECTION: REGISTRY ---
    registry: {
        title: "Registry",
        body: "Your presence is the greatest gift. However, should you wish to help us celebrate with a gift, a registry is held at:",
        btnText: "View Registry",
        link: "https://www.zola.com"
    },

    // --- SECTION: RSVP ---
    rsvp: {
        title: "RSVP",
        intro: "Please search for your name below to unlock your RSVP.",
        searchPlaceholder: "First or Last Name (e.g. Smith)",
        btnFind: "Find Invitation",
        
        // Form Labels
        attendLabel: "Will you be attending?",
        yesLabel: "Joyfully Accept",
        noLabel: "Regretfully Decline",
        
        stayLabel: "Where are you staying?",
        stayPlaceholder: "Hotel Name or Airbnb",
        
        msgLabel: "Message to the Couple",
        msgPlaceholder: "Leave a note...",
        
        btnSubmit: "Submit RSVP"
    }
};
