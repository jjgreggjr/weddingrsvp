const CONFIG = {
    // --- VISUAL SETTINGS ---
    colors: {
        main: "#7b7f68",    // Olive Green
        accent: "#223346",  // Navy Blue
        background: "#f9f9f7",
        white: "#ffffff"
    },

    // --- IMAGES ---
    heroImage: "hero.jpg", 
    
    // Magazine Style Vertical Photos (Portrait orientation works best)
    // You can use file names (e.g., "photo1.jpg") or URLs
    magazine: {
        photo1: "arm.JPG", // Next to Transport
        photo2: "Handout.JPG"  // Next to Stay
    },

    // --- HERO SECTION ---
    hero: {
        title: "JJG & CCC",
        date: "June 19, 2027",
        targetDate: "June 19, 2027 16:00:00 GMT-0600" 
    },

    // --- NAVIGATION ---
    nav: {
        details: "Details",
        transport: "Getting There",
        stay: "Stay",
        registry: "Registry",
        rsvp: "RSVP"
    },

    // --- SECTION: DETAILS ---
    details: {
        title: "The Details",
        dateText: "Saturday, June 19, 2027",
        
        ceremony: {
            title: "Ceremony",
            venue: "The Mountain Overlook",
            time: "4:00 PM",
            note: "Please arrive by 3:30 PM for a welcome drink."
        },
        reception: {
            title: "Reception",
            venue: "Pine Ridge Lodge",
            time: "5:30 PM",
            note: "Cocktails, Dinner & Dancing to follow."
        }
    },

    // --- SECTION: TRANSPORTATION (Flexible List) ---
    transport: {
        title: "Transportation",
        intro: "Shuttles will be provided from the main hotels. Parking at the venue is limited.",
        
        // Add as many transport options as you like below:
        options: [
            {
                type: "Car or Shuttle",
                desc: "Rent a car at the airport OR book a Home James shuttle for roundtrips from Denver Airport to Granby. Reserve a rental from Avalanche Car Rental in Granby or download the Granby Connect app.",
                link: "https://www.homejames.com", 
                btn: "Book Shuttle"
            },
            {
                type: "Train",
                desc: "Take the train from DIA to Union Station. Then take the scenic Amtrak train right to Granby. Call 800-USA-RAIL or visit amtrak.com.",
                link: "https://www.amtrak.com",
                btn: "Visit Amtrak"
            },
            {
                type: "Bus",
                desc: "Take the train from DIA to Union Station, then take the BUSTANG Outrider (charter bus) to Granby.",
                link: "https://ridebustang.com",
                btn: "Bus Schedule"
            }
        ]
    },

    // --- SECTION: STAY (Flexible List) ---
    stay: {
        title: "Travel & Stay",
        intro: "Your guests can book lodging via their favorite online booking platform or directly from our website Granby Ranch.",
        
        // Add as many hotels/rentals as you like below:
        recommendations: [
            {
                name: "Our Favorite VRBO",
                desc: "Property #1460059. Perfect for getting ready/brunch! The owner will waive the minimum night stay for our couples.",
                link: "http://vrbo.com/1460059",
                btn: "View VRBO"
            },
            {
                name: "Granby Penthouse",
                desc: "Ski-In/Ski-Out Granby Penthouse w/ Mountain Views!",
                link: "#",
                btn: "View on Evolve"
            },
            {
                name: "Base Camp Escape",
                desc: "Ski-In/Ski-Out Granby Base Camp Escape w/ Balcony.",
                link: "#",
                btn: "View on Evolve"
            }
        ],

        // Links for activities
        activityLinks: [
            { text: "Summer in Granby Blog", link: "https://www.destinationgranby.com/blog/post/summer-in-granby/" },
            { text: "Grand County Summer Activities", link: "https://www.visitgrandcounty.com/play/summer-activities" }
        ]
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
