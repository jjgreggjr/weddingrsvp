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
        targetDate: "June 19, 2027 15:30:00 GMT-0600"
    },

    // --- NAV ---
    nav: {
        story: "Our Story",
        party: "Wedding Party",
        details: "Details",
        transport: "Getting There",
        stay: "Stay",
        registry: "Registry",
        faq: "FAQ",
        rsvp: "RSVP"
    },

    // --- SECTIONS ---
    about: {
        title: "Our Story",
        body: "It all started five years ago at a coffee shop in Denver. Tom spilled his latte, Sarah offered him a napkin, and the rest is history. We have spent the last few years hiking every peak in Colorado, adopting our golden retriever, and building a life we love.",
    },

    // --- THE ROAD TO US (winding-road timeline) ---
    // Two separate roads (jj + court) that converge at 'first-date', then one
    // shared road down to the proposal, then a dotted trail to the wedding.
    // Each event's `id` maps to a fixed position on the road art in index.html
    // (ROAD_LAYOUT) — keep the ids if you want to keep the desktop layout.
    // Add an `image` URL to any event to replace its "photo coming soon" placeholder.
    journey: {
        title: "Our Story",
        intro: "From New York and Minnesota, to Denver, to Massachusetts, to Saint Louis, and back to Denver — this is a timeline of Courtney and JJ.",
        jjName: "JJ",
        courtName: "Courtney",
        bothName: "Together",
        events: [
            { id: "jj-born",    who: "jj",    date: "1993",         fact: "Born in Colorado",         desc: "",                                                                                              image: "" },
            { id: "court-born", who: "court", date: "1996",         fact: "Born in Minnesota",        desc: "",                                                                                              image: "" },
            { id: "jj-ny",      who: "jj",    date: "1998",         fact: "Moved to New York",        desc: "",                                                                                              image: "" },
            { id: "jj-du",      who: "jj",    date: "Sep 2012",     fact: "Attends DU",               desc: "JJ moves to DU to be an entrepreneur.",                                                          image: "" },
            { id: "court-du",   who: "court", date: "Sep 2015",     fact: "Attends DU",               desc: "Courtney moves to DU to study psychology.",                                                      image: "" },
            { id: "jj-grad",    who: "jj",    date: "Aug 2017",     fact: "Graduation",               desc: "After 5 years of undergrad, JJ graduates.",                                                      image: "" },
            { id: "court-grad", who: "court", date: "Jun 2019",     fact: "Graduation",               desc: "Courtney graduates. Eric & Courtney dominate the beer-pong table against JJ.",                   image: "" },
            { id: "first-date", who: "both",  date: "Jun 2019",     fact: "First Date",               desc: "JJ & Court grab a slice of pizza on their first date.",                                          image: "9O7A3642.JPG" },
            { id: "cohab",      who: "both",  date: "Mar 2022",     fact: "First Co-Habitation",      desc: "3 years into the relationship, C & J move to the Cheesman Park area together.",                  image: "" },
            { id: "law-school", who: "both",  date: "Aug 2022",     fact: "Start of Law School",      desc: "Courtney takes JJ with her to New Bedford, Massachusetts for her first year of law school.",     image: "" },
            { id: "transfer",   who: "both",  date: "Aug 2023",     fact: "Transfer to Wash U Law",   desc: "Courtney drags JJ across the country again as she transfers to Wash U Law in Saint Louis.",      image: "" },
            { id: "bootstrap",  who: "both",  date: "Sep 2024",     fact: "Bootstrap William Turner", desc: "Bootstrap is adopted into the Gregg/Cuff house. 🐾",                                              image: "" },
            { id: "bar",        who: "both",  date: "Jul 2025",     fact: "Bar Exam",                 desc: "Courtney takes (and passes) the bar in Saint Louis.",                                            image: "" },
            { id: "denver",     who: "both",  date: "Aug 2025",     fact: "Return to Denver",         desc: "Jourtney settle into the South Pearl area of Denver.",                                           image: "" },
            { id: "proposal",   who: "both",  date: "Aug 2025",     fact: "Proposal",                 desc: "JJ's 9 months of lying culminates in a surprise Prague proposal.",                               image: "" },
            { id: "wedding",    who: "both",  date: "Jun 19, 2027", fact: "Betrothal", future: true,  desc: "The couple throws a huge party with all of their favorite people at Granby Ranch, CO.",          image: "" }
        ]
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
                dressCode: "Cocktail attire — western flair encouraged",
                note: "All guests welcome — come meet, eat, and kick off the weekend with us.",
                hosts: "Jim & Emily Gregg"
            },
            {
                title: "Ceremony",
                date: "Saturday, June 19, 2027",
                time: "3:00 PM",
                venue: "Granby Ranch",
                address: "1000 Village Rd, Granby, CO 80446",
                dressCode: "Formal attire",
                note: "Please arrive by 2:30 PM.",
                hosts: "Lisa & Erik Olson"
            },
            {
                title: "Reception",
                date: "Saturday, June 19, 2027",
                time: "Following the ceremony",
                venue: "Granby Ranch",
                address: "1000 Village Rd, Granby, CO 80446",
                dressCode: "Formal attire",
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
        intro: "There's plenty of parking at the venue. A couple of things are worth knowing, though: Grand County has no rideshare services like Uber or Lyft, and the Granby Connect ride app only runs until 9 PM — so we recommend renting a car or staying close to the ceremony and reception site. There will be parking at the ceremony, and guests staying nearby will be offered free overnight parking plus a free shuttle back home at the end of the night.",
        options: [
            {
                type: "Car or Shuttle",
                desc: "Rent a car at the airport OR book a Home James shuttle for roundtrips from the Denver Airport to Granby. Reserve a car rental from Avalanche Car Rental in Granby or download the Granby Connect ride-share app (runs until 9 PM).",
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
            },
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
                name: "Granby Ranch Lodging",
                desc: "Book lodging right on the ranch — every option here is on the Granby Ranch property, exactly where you'll want to be for the weekend.",
                link: "https://granbyranch.com/lodging/",
                btn: "Book on Granby Ranch"
            }
        ],
        activityLinks: [
            { text: "Summer in Granby Blog", link: "https://www.destinationgranby.com/blog/post/summer-in-granby/" },
            { text: "Grand County Summer Activities", link: "https://www.visitgrandcounty.com/play/summer-activities" }
        ],
        walkMap: {
            image: "walking-radius-map.png",
            badge: "Within a 25-Minute Walk",
            caption: "This outline shows roughly everything within a 25-minute walk of the reception — just so you can picture it. You don't need to stay inside the circle! Plenty of homes a little farther out are still close by, and our shuttle will run at the end of the reception to get everyone back to their lodging either way.",
            legend: "Red outline ≈ a 25-minute walk to the reception"
        }
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
        // Set locked: true to hide the search form and show lockedMessage instead.
        // Flip to false once invitations have gone out to open RSVPs.
        locked: true,
        lockedMessage: "RSVPs aren't open just yet — this section will open as soon as invitations go out. Check back soon; we can't wait to celebrate with you!",
        contactNote: "We're collecting your email and phone so we can send booking reminders, travel tips, and a few weekend updates."
    },

    faq: {
        title: "FAQ",
        items: [
            {
                q: "Is there public transportation or rideshare?",
                a: "Grand County has no Ubers, Lyfts, or taxis. We'll provide a shuttle from the reception back to your lodging in Granby Ranch. If you're staying off-site and plan to indulge, please plan to have a designated driver (or be prepared to walk!)."
            },
            {
                q: "Is there a dress code?",
                a: "We're asking that all guests come dressed in formal attire for the wedding. Please wear comfortable shoes, as the wedding takes place outside and there's a short walk from the chair lift to the ceremony. Shuttles will be provided to and from Granby Ranch for the welcome party."
            },
            {
                q: "Can I bring a guest?",
                a: "Unless your formal invitation specifies otherwise, we ask that you don't bring a guest. We'll only have seating arranged for the guests who RSVP. Thanks for understanding!"
            },
            {
                q: "I have a food allergy — can I make a special request?",
                a: "Of course! Our caterer is happy to accommodate all food allergies. Just let us know when you RSVP."
            }
        ]
    }
};
