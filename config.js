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
        about: "9O7A3642.JPG",
        photo1: "arm.JPG", 
        photo2: "Handout.JPG"
    },

    // --- HERO ---
    hero: {
        title: "CCC & JMG",
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
        // Set to a string to hide bride/groom columns and show a coming-soon note instead.
        // Remove or set to "" to re-enable the full party section.
        placeholder: "Our bridal and groom parties are coming soon — we're still putting the finishing touches on our lineup. Check back later!",
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
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Bridesmaid",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
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
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Name TBD",
                role: "Groomsman",
                bio: "Short bio goes here.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            }
        ]
    },

    venue: {
        title: "The Venue",
        body: "Granby Ranch is a family-owned ski resort tucked into the Colorado Rockies. We'll exchange vows at the summit, celebrate under a tent at the base, and spend the weekend together in rentals right on the property. One address, three days, no commutes.",
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/GrandLakeCO/Granby-Ranch-1_a267b004-64f3-411d-b8f4-7dabe273881e.jpeg"
    },

    details: {
        title: "The Weekend",
        dateText: "June 18–20, 2027 · Granby, Colorado",
        events: [
            {
                title: "Welcome Party",
                date: "Friday, June 18, 2027",
                time: "5:00 – 10:00 PM",
                venue: "Strawberry Creek Ranch",
                address: "4012 County Rd 57, Granby, CO 80446",
                note: "All guests welcome — come meet, eat, and kick off the weekend with us.",
                hosts: "Jim & Emily Gregg"
            },
            {
                title: "Ceremony",
                date: "Saturday, June 19, 2027",
                time: "3:00 PM",
                venue: "Granby Ranch",
                address: "1000 Village Rd, Granby, CO 80446",
                note: "Please arrive by 2:30 PM.",
                hosts: "Lisa & Erik Olson"
            },
            {
                title: "Reception",
                date: "Saturday, June 19, 2027",
                time: "Following the ceremony",
                venue: "Granby Ranch",
                address: "1000 Village Rd, Granby, CO 80446",
                note: "Cocktails, dinner & dancing.",
                hosts: "Lisa & Erik Olson"
            },
            {
                title: "Farewell",
                date: "Sunday, June 20, 2027",
                time: "TBD",
                venue: "TBD",
                address: "",
                note: "A goodbye activity — details to come."
            }
        ]
    },

    altitude: {
        title: "A Note on the Altitude",
        elevationFt: "7,935",
        elevationLabel: "Elevation at Granby Ranch",
        intro: "The thin mountain air is part of the magic — and also the reason your body might want a little extra care for the weekend. A few small habits before and during your visit make a big difference.",
        tips: [
            "Start hydrating a week before you arrive. Double your normal water intake and keep it up all weekend.",
            "Go easy on alcohol and caffeine — both hit harder up here and dehydrate you faster. 😉",
            "Sleep well, party light on night one. Plan an easy Friday.",
            "Sunscreen and lip balm — the sun is stronger at altitude, even when it's cool out.",
            "If you feel a headache, dizziness, or nausea, rest and drink water.",
            "Talk to your doctor about ibuprofen or prescription acetazolamide if you're sensitive to altitude."
        ]
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
        intro: "Book early — we don't have a hotel block. Rooms and rentals fill up fast for summer weekends, so we highly recommend booking as soon as you've RSVP'd yes.",
        importantNote: "Stay on the Granby Ranch property itself, not in the town of Granby. The town is a 15-minute drive from the ranch and the roads are dark at night. The ceremony, reception, and most of the weekend are all on the ranch — being able to walk back to your room is a game-changer.\n\nThe ranch address is 1000 Village Rd, Granby, CO 80446. When you search any of the booking sites below, filter results to lodging ON the ranch or at Granby Ranch Resort — not anywhere in town.",
        recommendations: [
            {
                name: "Google Hotels",
                desc: "Browse everything near Granby Ranch in one place.",
                link: "https://www.google.com/travel/search?q=stay%20near%20granby%20ranch%20colorado&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAafwphEjUyJTB4ODc0MDE0NzQ5YjE4NTZiNzoweGM3NTQ4MzMxNDk5MGE3ZmY6DEdyYW5ieSBSYW5jaBooChIJqsKTclwEREARZMKuTJV6WsASEgmswY4UawdEQBFkwq6YLHlawBIaEhQKBwjqDxAFGB0SBwjqDxAFGB4YATICCAEqCQoFOgNVU0QaAA&qs=CAE4BkIJEZhmgm7_vItkQgkRwluHr1VDV8JCCRFJGG57IrazSkgAWmYyZKoBYQoNL2cvMTFoNnlyX2c1cBABKggiBHN0YXkoADIfEAEiGzzK1O4O3f3Sw-Lblq2P3B8L0wlJvamP5-6aJTIjEAIiH3N0YXkgbmVhciBncmFuYnkgcmFuY2ggY29sb3JhZG8&ap=KigKEgmqwpNyXAREQBFkwq5MlXpawBISCazBjhRrB0RAEWTCrpgseVrAMAI&ictx=111",
                btn: "Search Hotels"
            },
            {
                name: "Expedia",
                desc: "Dates pre-filled for the wedding weekend (June 18–20, 2027).",
                link: "https://www.expedia.com/Hotel-Search?regionId=&locale=en_US&siteid=1&sort=RECOMMENDED&startDate=2027-06-18&endDate=2027-06-20&destination=&categorySearch=any_option&useRewards=false&pwaOverlay=map&latLong=40.04695%2C-105.90263&mapBounds=40.04022%2C-105.92101&mapBounds=40.05368%2C-105.88425",
                btn: "Browse on Expedia"
            },
            {
                name: "Airbnb",
                desc: "Houses and cabins near Granby Ranch, dates pre-filled.",
                link: "https://www.airbnb.com/s/Granby-Ranch--Granby--CO/homes?adults=1&place_id=ChIJTdZHTFsuaocRkKI5V1HN_hE&checkin=2027-06-18&checkout=2027-06-20&date_picker_type=calendar&query=Granby%20Ranch%2C%20Granby%2C%20CO&search_mode=regular_search",
                btn: "Browse on Airbnb"
            },
            {
                name: "VRBO",
                desc: "Vacation rentals near the ranch.",
                link: "https://www.vrbo.com/search?latLong=40.0467%2C-105.9044&mapBounds=40.03714%2C-105.91502&mapBounds=40.05626%2C-105.89378&sort=RECOMMENDED",
                btn: "Browse on VRBO"
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
        link: "https://www.zola.com",
        // Set comingSoon: false once the registry is live. While true, the button is greyed out + non-clickable.
        comingSoon: true,
        comingSoonText: "Registry coming soon..."
    },

    rsvp: {
        title: "RSVP",
        intro: "Please search for your name below to unlock your RSVP.",
        searchPlaceholder: "First or Last Name (e.g. Smith)",
        btnFind: "Find Invitation",
        btnSubmit: "Save RSVP",
        lockedMessage: "RSVPs are closed. Please text us if you need to make a change.",
        contactNote: "We're collecting your email and phone so we can send booking reminders, travel tips, and a few weekend updates."
    }
};
