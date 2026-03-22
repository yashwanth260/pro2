// --- CONFIGURATION ---
const API_KEY = 'SIMULATED_AI'; // No real key needed for Mock AI

const playlistData = {
    "English": {
        "20s": {
            "Chill": ["Sunflower - Post Malone", "Circles - Post Malone", "Location - Khalid", "Stay - Justin Bieber", "Golden - Harry Styles", "Heat Waves - Glass Animals", "Peaches - Justin Bieber", "Levitating - Dua Lipa", "Watermelon Sugar", "Blinding Lights"],
            "Romantic": ["Perfect - Ed Sheeran", "Lover - Taylor Swift", "Adore You - Harry Styles", "Thinking Out Loud - Ed Sheeran", "All of Me - John Legend", "A Thousand Years", "Say You Won't Let Go", "Just The Way You Are"],
            "Melody": ["Yesterday - Beatles", "Fix You - Coldplay", "The Scientist - Coldplay", "Yellow - Coldplay", "Hallelujah - Jeff Buckley", "Vienna - Billy Joel", "Sparks - Coldplay", "Shallow", "Drivers License"],
            "Broken": ["Glimpse of Us - Joji", "Someone Like You - Adele", "Happier - Olivia Rodrigo", "Traitor - Olivia Rodrigo", "Let Her Go - Passenger", "Lose You To Love Me", "Bruises - Lewis Capaldi"]
        },
        "90s": {
            "Chill": ["Summertime - DJ Jazzy Jeff", "Santeria - Sublime", "Wonderwall - Oasis", "Smooth - Santana"],
            "Romantic": ["I Will Always Love You - Whitney Houston", "My Heart Will Go On - Celine Dion", "Truly Madly Deeply"],
            "Melody": ["Linger - Cranberries", "Zombie - Cranberries", "Fields of Gold - Sting", "Black - Pearl Jam"],
            "Broken": ["Unbreak My Heart - Toni Braxton", "Don't Speak - No Doubt", "Creep - Radiohead", "Everybody Hurts"]
        }
    },
    "Hindi": {
        "20s": {
            "Chill": ["Iktara - Wake Up Sid", "Kabira - YJHD", "Kun Faya Kun - Rockstar", "Safarnama - Tamasha", "Tum Ho - Rockstar", "Saware - Phantom", "Mast Magan", "Matargashti", "Ilahi"],
            "Romantic": ["Tum Hi Ho - Aashiqui 2", "Kesariya - Brahmastra", "Raataan Lambiyan - Shershaah", "Dil Diyan Gallan", "Tum Se Hi", "Shayad - Love Aaj Kal", "Tera Ban Jaunga"],
            "Melody": ["Agar Tum Saath Ho - Tamasha", "Abhi Mujh Mein Kahin - Agneepath", "Moh Moh Ke Dhaage", "Nazm Nazm", "Qaafirana", "Kal Ho Naa Ho", "Ae Dil Hai Mushkil"],
            "Broken": ["Channa Mereya - ADHM", "Tujhe Bhula Diya", "Bekhayali - Kabir Singh", "Hamari Adhuri Kahani", "Pachtaoge", "Duaa", "Bulleya"]
        },
        "90s": {
            "Chill": ["Pehla Nasha - JJWS", "Chaiya Chaiya - Dil Se", "Chura Liya Hai", "Humma Humma", "Urvashe"],
            "Romantic": ["Tujhe Dekha To - DDLJ", "Bahon Ke Darmiyan", "Dheere Dheere Se", "Ek Sanam Chahiye"],
            "Melody": ["Ae Mere Humsafar - QSQT", "Tu Mile Dil Khile", "Chalte Chalte", "Rimjhim Gire Sawan", "Lag Jaa Gale"],
            "Broken": ["Tadap Tadap Ke - HDDCS", "Dil De Diya Hai", "Tanhayee", "Lambi Judai"]
        }
    },
    "Kannada": {
        "20s": {
            "Chill": ["Belageddu - Kirik Party", "Neene Bari Neene - Milana", "Ninnindale - Milana", "Paramathma - Title", "Nee Sanihake Bandre", "Gello Neenu", "Chuttu Chuttu"],
            "Romantic": ["Paravashanadenu - Paramathma", "Aleya Reethi - Kirik Party", "Maleyali Jotheyali", "Kanasalu Neene", "Muddada Gali", "Sanju Mattu Geetha"],
            "Melody": ["Gombe Helutaithe - Raajakumara", "Salaga Melody - Salaga", "Naguva Nayana", "Minchagi Neenu", "Banigondu Elle", "Raajakumara - Title"],
            "Broken": ["Sariyuva Nenapu - Mungaru Male 2", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Nooru Janmaku - Sad"]
        },
        "90s": {
            "Chill": ["Santhoshakke - Lokesh", "Hrudaya Hrudaya", "Preethse Preethse", "Karunade - Majestic"],
            "Romantic": ["Anisuthide - Mungaru Male", "Nooru Janmaku", "Naguva Nayana - Old Gold", "Usire Usire - Huccha"],
            "Melody": ["Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye", "Onde Ondu Sari"],
            "Broken": ["Mungaru Male Title", "Kaanada Kadalige", "Kariya Title - Sad", "Huccha Sad"]
        }
    },
    "Telugu": {
        "20s": {
            "Chill": ["Samajavaragamana - AVPL", "Butta Bomma", "Oke Oka Lokam", "Undiporaadhey", "Vachinde - Fidaa", "Maguva Maguva", "Saami Saami"],
            "Romantic": ["Oh Sita Hey Rama - Sita Ramam", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama - Majili", "Kadhale Kadhale"],
            "Melody": ["Telusa Telusa - Sarrainodu", "Kadalalle - Dear Comrade", "Chitti Adugu", "Kalyanam - Pushpa", "Nuvve Nuvve", "Srivalli", "Naatu Naatu"],
            "Broken": ["Life of Ram - Jaanu", "Arjun Reddy Sad BGM", "Naa Kanulu Yepudu", "Po Ve Po", "Oosupodu", "Vellipoke", "Evare - Premam"]
        },
        "90s": {
            "Chill": ["Priya Priyathama - Killer", "Telusa Telusa - Old", "O Paapa Laali", "Jagadeka Veerudu"],
            "Romantic": ["Nuvve Kavali - Title", "Prematho - Title", "Kushi Title Track", "Nuvvostanante", "Yamaha Nagari"],
            "Melody": ["Evare - Premam", "Manasa - YMC", "Neeve - Darling", "Priyathama - Old Gold", "Nammaka Tappani"],
            "Broken": ["O Cheliya - Premikudu", "Yemaindhi Ee Vela", "Gundellona", "Nammavemo Gani"]
        }
    }
};

// --- NAVIGATION & UI LOGIC ---
function switchMode(mode) {
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('commonInputs').style.display = 'block';
    
    // Update Title based on mode
    const title = document.getElementById('appTitle');
    if (mode === 'ai') {
        title.innerText = "AI Photo Match (Simulated)";
        document.getElementById('aiSection').style.display = 'block';
        document.getElementById('manualSection').style.display = 'none';
    } else {
        title.innerText = "Manual Vibe Selection";
        document.getElementById('manualSection').style.display = 'block';
        document.getElementById('aiSection').style.display = 'none';
    }
}

function resetApp() {
    location.reload();
}

// --- MANUAL VIBE LOGIC ---
function getManualSong(mood) {
    const lang = document.getElementById('langSelect').value;
    const era = document.getElementById('eraSelect').value;
    
    if (!playlistData[lang]) {
        alert("Please select a language first!");
        return;
    }

    const songList = playlistData[lang][era][mood];
    const song = songList[Math.floor(Math.random() * songList.length)];
    showResult(song, lang, mood);
}

// --- IMAGE RECOGNITION (SIMULATED AI) LOGIC ---
const imageInput = document.getElementById('imageInput');

if (imageInput) {
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = async (event) => {
            // Setup UI for results
            document.getElementById('aiSection').style.display = 'none';
            document.getElementById('result-box').style.display = 'block';
            document.getElementById('loader').style.display = 'block';
            document.getElementById('song-display').innerHTML = ""; // Clear old song
            
            // Preview the uploaded image
            const preview = document.getElementById('imagePreview');
            preview.src = event.target.result;
            preview.style.display = 'block';
            
            // Run the simulated analysis
            await mockAIAnalysis();
        };
        reader.readAsDataURL(file);
    });
}

async function mockAIAnalysis() {
    const lang = document.getElementById('langSelect').value;
    
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        // Randomly pick a vibe
        const vibes = ["Chill", "Romantic", "Melody", "Broken"];
        const detectedVibe = vibes[Math.floor(Math.random() * vibes.length)];
        
        // Pick song (default to 20s era for AI)
        const langData = playlistData[lang] || playlistData["English"];
        const songList = langData["20s"][detectedVibe];
        const randomSong = songList[Math.floor(Math.random() * songList.length)];

        // Update UI
        document.getElementById('loader').style.display = 'none';
        document.getElementById('aiFeedback').innerText = `AI detected: ${detectedVibe} Vibes ✨`;
        document.getElementById('aiFeedback').style.display = 'block';
        
        showResult(randomSong, lang, detectedVibe);

    } catch (e) {
        console.error(e);
        document.getElementById('loader').style.display = 'none';
        alert("Error analyzing image. Please ensure a language is selected.");
    }
}

// --- DISPLAY RESULTS ---
function showResult(song, lang, vibe) {
    document.getElementById('manualSection').style.display = 'none';
    document.getElementById('result-box').style.display = 'block';
    
    const display = document.getElementById('song-display');
    display.innerHTML = `
        <div style="margin-bottom: 10px;">Vibe Detected: <span style="color: #6a11cb; font-weight: bold;">${vibe}</span></div>
        <div style="font-size: 1.2rem; color: #333;">Recommended Song: <br><strong>${song}</strong></div>
    `;
    
    const link = document.getElementById('search-link');
    if (link) {
        link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(song + " " + lang + " song")}`;
        link.style.display = 'inline-block';
    }
}