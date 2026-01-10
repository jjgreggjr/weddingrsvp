const CONFIG = {
    // --- VISUAL SETTINGS ---
    colors: {
        main: "#7b7f68",    // Olive Green
        accent: "#223346",  // Navy Blue
        background: "#f9f9f7",
        white: "#ffffff"
    },

    // --- IMAGES ---
    heroImage: "hero.JPG", 
    
    magazine: {
        about: "907A3642.JPG",
        photo1: "arm.JPG", 
        photo2: "Handout.JPG"
    },

    // --- HERO ---
    hero: {
        title: "CCC & JJG",
        date: "June 19, 2027",
        targetDate: "June 19, 2027 16:00:00 GMT-0600" 
    },

    // --- NAV ---
    nav: {
        story: "Our Story",
        party: "Wedding Party",
        details: "Details",
        transport: "Getting There",
        stay: "Stay",
        registry: "Registry",
        rsvp: "RSVP"
    },

    // --- SECTIONS ---
    about: {
        title: "Our Story",
        body: "It all started five years ago at a coffee shop in Denver. Tom spilled his latte, Sarah offered him a napkin, and the rest is history. We have spent the last few years hiking every peak in Colorado, adopting our golden retriever, and building a life we love.",
    },

    party: {
        title: "The Wedding Party",
        // LEFT SIDE (White/Olive)
        brideSideTitle: "The Goiois",
        bride: [
            {
                name: "Jessica Smith",
                role: "Maid of Honor",
                bio: "Sarah's sister and partner in crime since 1995. She knows where all the bodies are buried.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Emily Davis",
                role: "Bridesmaid",
                bio: "Met Sarah in nursing school. The kindest soul you will ever meet.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
            }
        ],
        // RIGHT SIDE (Navy/White)
        groomSideTitle: "The Boiois",
        groom: [
            {
                name: "Mike Jones",
                role: "Best Man",
                bio: "Tom's college roommate. Once ate 50 chicken wings in one sitting. A true legend.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Chris Johnson",
                role: "Groomsman",
                bio: "Tom's brother. He claims he's the better skier, but we all know the truth.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
            }
        ]
    },

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

    transport: {
        title: "Transportation",
        intro: "We encourage guests to book transportation early due to limited parking at the venue.",
        options: [
            {
                type: "Car or Shuttle",
                desc: "Rent a car at the airport OR book a Home James shuttle for roundtrips from the Denver Airport to Granby. Reserve a car rental from Avalanche Car Rental in Granby or download the Granby Connect ride-share app.",
                link: "https://www.ridehomejames.com", 
                btn: "Home James Shuttle"
            },
            {
                type: "Train",
                desc: "Take the train from DIA to Union Station. Then take the Amtrak train through the mountains. Call 800-USA-RAIL or visit amtrak.com.",
                link: "https://www.amtrak.com",
                btn: "Visit Amtrak"
            },
            {
                type: "Bus",
                desc: "Take the train from DIA to Union Station, then take the BUSTANG Outrider (charter bus) to Granby.",
                link: "https://ridebustang.com",
                btn: "Bustang Schedule"
            }
        ]
    },

    stay: {
        title: "Travel & Stay",
        intro: "Your guests can book lodging via their favorite online booking platform or directly from our website Granby Ranch.",
        recommendations: [
            {
                name: "Our Favorite VRBO",
                desc: "VRBO #1460059. This is our FAVORITE property, perfect for getting ready/brunch and the owner will waive the minimum night stay for our couples!",
                link: "http://vrbo.com/1460059",
                btn: "View Property"
            },
            {
                name: "Granby Penthouse",
                desc: "Ski-In/Ski-Out Granby Penthouse w/ Mountain Views via Evolve.",
                link: "#",
                btn: "View on Evolve"
            },
            {
                name: "Base Camp Escape",
                desc: "Ski-In/Ski-Out Granby Base Camp Escape w/ Balcony via Evolve.",
                link: "#",
                btn: "View on Evolve"
            }
        ],
        activityLinks: [
            { text: "Summer in Granby Blog", link: "https://www.destinationgranby.com/blog/post/summer-in-granby/" },
            { text: "Grand County Summer Activities", link: "https://www.visitgrandcounty.com/play/summer-activities" }
        ]
    },

    registry: {
        title: "Registry",
        body: "Your presence is the greatest gift. However, should you wish to help us celebrate with a gift, a registry is held at:",
        btnText: "View Registry",
        link: "https://www.zola.com"
    },

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
