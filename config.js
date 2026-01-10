const CONFIG = {
    // ... (Keep your existing colors, hero, etc.) ...

    // --- IMAGES ---
    heroImage: "hero.JPG", 
    magazine: {
        photo1: "Handout.JPG", 
        photo2: "arm.JPG",
        
        // NEW: The image for your "About Us" story
        about: "907A3642.JPG"
    },

    // --- NAVIGATION ---
    nav: {
        story: "Our Story", // NEW LINK
        party: "Wedding Party", // NEW LINK
        details: "Details",
        transport: "Getting There",
        stay: "Stay",
        registry: "Registry",
        rsvp: "RSVP"
    },

    // --- NEW SECTION: ABOUT US ---
    about: {
        title: "Our Story",
        body: "It all started five years ago at a coffee shop in Denver. Tom spilled his latte, Sarah offered him a napkin, and the rest is history. We have spent the last few years hiking every peak in Colorado, adopting our golden retriever, and building a life we love.",
    },

    // --- NEW SECTION: WEDDING PARTY ---
    party: {
        title: "The Wedding Party",
        people: [
            {
                name: "Jessica Smith",
                role: "Maid of Honor",
                bio: "Sarah's sister and partner in crime since 1995. She knows where all the bodies are buried.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Mike Jones",
                role: "Best Man",
                bio: "Tom's college roommate. Once ate 50 chicken wings in one sitting. A true legend.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Emily Davis",
                role: "Bridesmaid",
                bio: "Met Sarah in nursing school. The kindest soul you will ever meet.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
            }
            // Add as many people as you want here!
        ]
    },

    // ... (Keep details, transport, stay, registry, rsvp as they were) ...
};
