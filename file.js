/**
 * VIBE MATCHER - TERMINAL LOGIC
 * Features: Auth System, 30-Song Database, AI Image Keyword Recognition
 */

// --- 1. THE COMPLETE SONG DATABASE (30 PER CATEGORY) ---
const playlistData = {
    "English": {
        "20s": {
            "Chill": ["Sunflower", "Circles", "Location", "Stay", "Heat Waves", "Peaches", "Levitating", "Watermelon Sugar", "Blinding Lights", "Starboy", "Night Changes", "Save Your Tears", "Sweater Weather", "Adore You", "Positions", "Best Part", "Better", "Talk", "Eastside", "Without Me", "Bad Guy", "Ocean Eyes", "Lovely", "Mood", "Montero", "Industry Baby", "Kiss Me More", "Say So", "Good 4 U"],
            "Romantic": ["Perfect", "Lover", "All of Me", "Thinking Out Loud", "A Thousand Years", "Say You Won't Let Go", "Just The Way You Are", "Marry You", "Dandelions", "Line Without a Hook", "Love Story", "Willow", "Cardigan", "Invisible String", "Adore You", "Stuck with U", "Holy", "Lonely", "Ghost", "Attention", "Light Switch", "Havana", "Senorita", "Die For You", "Until I Found You", "Double Take", "Angel Baby", "Imagine", "POV", "7 Rings"],
            "Melody": ["Yellow", "Fix You", "The Scientist", "Yesterday", "Hallelujah", "Vienna", "Sparks", "Gravity", "Shallow", "Drivers License", "Heather", "Ghost Town", "Everglow", "Magic", "Clocks", "Stop This Train", "Slow Dancing", "Vultures", "Gravity", "Blue", "Ocean Eyes", "Six Feet Under", "When the Party's Over", "Everything I Wanted", "Happier Than Ever", "Wildflower", "Fine Line", "Falling", "Sweet Creature", "Cherry"],
            "Broken": ["Glimpse of Us", "Someone Like You", "Happier", "Traitor", "Lose You To Love Me", "Bruises", "Before You Go", "Dancing On My Own", "Let Her Go", "Say Something", "I'm Not The Only One", "Stay With Me", "Too Good At Goodbyes", "Pray", "Burning", "Fire On Fire", "Arcade", "Another Love", "July", "Moral of the Story", "Mockingbird", "Stan", "When I'm Gone", "Space Bound", "Not Afraid", "Liability", "Supercut", "Hard Feelings", "Liability", "Ribs"]
        },
        "90s": {
            "Chill": ["Summertime", "Santeria", "Wonderwall", "Smooth", "Virtual Insanity", "No Diggity", "Waterfalls", "Creep", "Say My Name", "No Scrubs", "Black or White", "Remember The Time", "Dangerous", "Gonna Make You Sweat", "Ice Ice Baby", "U Can't Touch This", "California Love", "Mo Money Mo Problems", "Hypnotize", "Big Poppa", "Juicy", "Changes", "Life Goes On", "Ambitionz Az A Ridah", "Dear Mama", "Hail Mary", "I Get Around", "Keep Ya Head Up", "Old School", "Hit 'Em Up"],
            "Romantic": ["I Will Always Love You", "My Heart Will Go On", "Truly Madly Deeply", "Iris", "Always", "Hero", "Vision of Love", "Emotions", "One Sweet Day", "Dreamlover", "Fantasy", "Always Be My Baby", "Honey", "Butterfly", "Heartbreaker", "I'll Be There", "Without You", "Endless Love", "Against All Odds", "Take A Bow", "You'll See", "Frozen", "Ray of Light", "Music", "Vogue", "Like A Prayer", "Borderline", "Lucky Star", "Holiday", "Material Girl"],
            "Melody": ["Linger", "Zombie", "Fields of Gold", "Black", "Tears in Heaven", "One", "November Rain", "Don't Cry", "Patience", "Civil War", "Estranged", "Knockin' on Heaven's Door", "Sweet Child O' Mine", "Welcome to the Jungle", "Paradise City", "Rocket Queen", "Nightrain", "Mr. Brownstone", "My Michelle", "You're Crazy", "Anything Goes", "Think About You", "Move to the City", "Mama Kin", "Used to Love Her", "You Could Be Mine", "Double Talkin' Jive", "The Garden", "Bad Obsession", "Dust N' Bones"],
            "Broken": ["Unbreak My Heart", "Don't Speak", "Creep", "Everybody Hurts", "Nothing Compares 2 U", "I'd Do Anything for Love", "Black Hole Sun", "Jeremy", "Alive", "Even Flow", "Daughter", "Better Man", "Yellow Ledbetter", "Given to Fly", "Wishlist", "Last Kiss", "Nothingman", "Elderly Woman", "Corduroy", "Hail Hail", "Off He Goes", "Red Mosquito", "Present Tense", "Mankind", "Around the Bend", "In My Tree", "Smile", "Habit", "Sometimes", "Who You Are"]
        }
    },
    "Hindi": {
        "20s": {
            "Chill": ["Iktara", "Kabira", "Kun Faya Kun", "Safarnama", "Tum Ho", "Saware", "Mast Magan", "Matargashti", "Ilahi", "Ullu Ka Pattha", "Khaabon Ke Parindey", "Dil Chahta Hai", "Jane Kyun", "Sooraj Dooba Hai", "Subhanallah", "Zinda", "Aazaadiyan", "Sham", "Gulaabo", "Gallan Goodiyaan", "Kar Gayi Chull", "Nashe Si Chadh Gayi", "Ghungroo", "Jai Jai Shivshankar", "Badri Ki Dulhania", "High Rated Gabru", "Proper Patola", "Bom Diggy Diggy", "Dilbar", "Aankh Marey"],
            "Romantic": ["Tum Hi Ho", "Kesariya", "Raataan Lambiyan", "Dil Diyan Gallan", "Tum Se Hi", "Shayad", "Tera Ban Jaunga", "Zehnaseeb", "Hawayein", "Nazm Nazm", "Qaafirana", "Pal Pal Dil Ke Paas", "Ve Maahi", "Tujhe Kitna Chahne Lage", "Kaun Tujhe", "Jab Tak", "Pee Loon", "Tum Jo Aaye", "Ishq Sufiyana", "Mere Bina", "Phir Le Aya Dil", "Aayat", "Mohe Rang Do Laal", "Deewani Mastani", "Pinga", "Ghar More Pardesiya", "Kalank Title", "First Class", "Tabaah Ho Gaye", "Rajvaadi Odhni"],
            "Melody": ["Agar Tum Saath Ho", "Abhi Mujh Mein Kahin", "Moh Moh Ke Dhaage", "Kal Ho Naa Ho", "Ae Dil Hai Mushkil", "Hamari Adhuri Kahani", "Humsafar", "Roke Na Ruke Naina", "Afeemi", "Maana Ke Hum Yaar Nahin", "Haareya", "Meri Pyaari Bindu", "Ye Jawaani Hai Deewani", "Badtameez Dil", "Balam Pichkari", "Dilliwaali Girlfriend", "Choreya Re Choreya", "Pareshaan", "Daaru Desi", "Lat Lag Gayee", "Beintehaan", "Allah Vaariyan", "Sunn Raha Hai", "Chahun Main Ya Naa", "Milne Hai Mujhse Aayi", "Hum Mar Jayenge", "Piya Aaye Na", "Bhula Dena", "Aashiqui 2 Mashup", "Meri Aashiqui"],
            "Broken": ["Channa Mereya", "Tujhe Bhula Diya", "Bekhayali", "Pachtaoge", "Duaa", "Bulleya", "Main Jahaan Rahoon", "Phir Bhi Tumko Chaahunga", "Thodi Jagah", "Dil Hi Toh Hai", "Pal", "Muskurane", "Jeena Jeena", "Saibo", "Beintehaan", "Pee Loon", "Tu Hi Junoon", "Heer", "Jiya Re", "Saans", "Ishq Shava", "Challa", "Jab Tak Hai Jaan Title", "Heer", "Saans Reprise", "Jiya Re", "Ishq Shava", "Challa", "Jab Tak Hai Jaan", "Heer"]
        },
        "90s": {
            "Chill": ["Tanha Dil", "Lift Karade", "Mera Dil Le Gaya", "Sona Sona", "Shava Shava", "Say Shava Shava", "You Are My Soniya", "Bole Chudiyan", "Suraj Hua Maddham", "Yeh Ladka Hai Allah", "Kabhie Khushi Kabhie Gham", "Deewana Hai Dekho", "Koi Mil Gaya", "Kuch Kuch Hota Hai", "Ladki Badi Anjani Hai", "Saajanji Ghar Aaye", "Tujhe Yaad Na Meri Aayee", "Main Koi Aisa Geet", "Chaand Taare", "Yes Boss", "Baadshah Title", "Woh Ladki Jo", "Hum To Deewane", "Mohabbat Ho Gayi", "O Mere Dil Ke Chain", "Gulabi Aankhen", "Pyaar Deewana Hota Hai", "Yeh Shaam Mastani", "Zindagi Ke Safar Mein", "O Mere Dil Ke Chain", "Roop Tera Mastana"],
            "Romantic": ["Tujhe Dekha To", "Bahon Ke Darmiyan", "Dheere Dheere Se", "Ek Sanam Chahiye", "Dil To Pagal Hai", "Bholi Si Surat", "Are Re Are", "Pyar Kar", "Koi Ladki Hai", "Dholna", "Le Gayi", "Chanda Re", "Vennilave", "Dil Se Re", "Jiya Jale", "Chaiyya Chaiyya", "Ae Ajnabi", "Satrangi Re", "Ishq Bina", "Taal Se Taal", "Nahin Saamne", "Ramta Jogi", "Kahin Aag Lage", "Ni Main Samajh Gayi", "Pyaar Ki Kasam", "Dil Mere", "Humko Humise Chura Lo", "Aankhen Khuli", "Pehla Nasha", "Chura Liya Hai"],
            "Melody": ["Ae Mere Humsafar", "Tu Mile Dil Khile", "Chalte Chalte", "Rimjhim Gire Sawan", "Lag Jaa Gale", "Ajeeb Dastan", "Abhi Na Jao", "Chaudhvin Ka Chand", "Mere Mehboob", "Gulabi Aankhen", "O Mere Dil Ke Chain", "Pal Pal Dil Ke Paas", "Roop Tera Mastana", "Kora Kagaz", "Mere Sapno Ki Rani", "Jai Jai Shiv Shankar", "Pyaar Deewana", "Yeh Shaam Mastani", "Kuch Toh Log Kahenge", "Chingari Koi Bhadke", "Raat Kali", "O Majhi Re", "Zindagi Ke Safar", "Musafir Hoon Yaaron", "Tere Bina Zindagi", "Tum Aa Gaye Ho", "Is Mod Se", "Bheegi Bheegi Raaton", "Sagar Kinare", "Humein Tumse Pyar"],
            "Broken": ["Tadap Tadap Ke", "Dil De Diya Hai", "Tanhayee", "Lambi Judai", "Adayein Bhi Hain", "Mera Dil Bhi", "Bahut Pyar Karte Hain", "Jeeye To Jeeye Kaise", "Tu Pyar Hai Kisi Aur Ka", "Tumhe Apna Banane Ki Kasam", "Ghunghat Ki Aad", "Dil Hai Ke Manta Nahin", "Chahat Na Hoti", "O Priya O Priya", "Dil De Diya", "Aadat", "Woh Lamhe", "Tera Mera Rishta", "Bheege Hoth Tere", "Kaho Na Kaho", "Loot Gaye", "Dil Ko Tumse Pyar", "Zara Zara", "Sach Keh Raha Hai", "Rehnaa Hai Terre Dil Mein", "Pyaar Tune Kya Kiya", "Kambakkht Ishq", "Tanha Dil", "Tujhe Yaad Na", "Dil To Baccha Hai"]
        }
    },
    "Kannada": {
        "20s": {
            "Chill": ["Belageddu", "Neene Bari Neene", "Ninnindale", "Paramathma", "Nee Sanihake Bandre", "Gello Neenu", "Chuttu Chuttu", "Open The Bottle", "Party Anthem", "Appu Dance", "Hands Up", "Katheyonda Helide", "Yajamana Title", "Shivanandi", "Basanni", "Dheera Dheera", "Salam Rocky Bhai", "Mehabooba", "Sulthana", "Toofan", "Ra Ra Rakkamma", "The Monster Song", "Hey Fakira", "Yatake", "Dance With Appu", "Karabu", "Pogaru Title", "Kharab", "Maadeva", "Singara Siriye"],
            "Romantic": ["Paravashanadenu", "Aleya Reethi", "Maleyali Jotheyali", "Kanasalu Neene", "Muddada Gali", "Sanju Mattu Geetha", "Nee Amrutha Dhare", "San Sanana", "Male Nintu Hoda Mele", "Minchagi Neenu", "Anisuthide", "Mungaru Male 2", "Onte Ondu Sari", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Nooru Janmaku", "Onde Ondu Sari", "Santhoshakke", "Hrudaya Hrudaya", "Preethse Preethse", "Karunade", "Usire Usire", "Kariya Title", "Huccha Sad", "Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye"],
            "Melody": ["Gombe Helutaithe", "Salaga Melody", "Naguva Nayana", "Minchagi Neenu", "Banigondu Elle", "Raajakumara Title", "Appu Dance", "Hogadiru", "Baanagondu Elle", "Endendu Ninnanu", "Nooru Janmaku", "Nee Bandu Nintaaga", "Naguva Nayana", "Jotheyali Jothe Jotheyali", "Ee Sanje Yaakaagide", "Maleye Maleye", "Jenina Holeyo", "Premada Loke", "Hosa Belaku", "Chalisuva Modagalu", "Onde Ondu Sari", "Mungaru Male", "Anisuthide", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Belageddu", "Kirik Party"],
            "Broken": ["Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Nooru Janmaku Sad", "Kariya Title Sad", "Huccha Sad Title", "Mungaru Male Title", "Kaanada Kadalige", "Jenina Holeyo Sad", "E Sanje Yaakaagide Sad", "Maleye Maleye Sad", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Nooru Janmaku", "Onde Ondu Sari", "Santhoshakke", "Hrudaya Hrudaya", "Preethse Preethse", "Karunade", "Usire Usire", "Kariya Title", "Huccha Sad", "Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye"],
            "Rayaru": ["Raghavendra Enni Rekke Badiri", "Guruvaara Banthamma", "Karuniso Ranga", "Yaare Bandaru Yaare Bandaru", "Paavananaada Guruva", "Tungaa Theerada Virajitha", "Mantralaya Raaya", "Raghavendra Guruve", "Om Sri Raghavendraya Namaha", "Neenillade Naanilla", "Mantralayake Baaro Guruve", "Raghavendra Stotra", "Guru Raghavendra Charanam", "Guruvaara Guruvaara", "Dhyana Maado Guruve", "Kaayo Guru Raghavendra", "Sharanu Sharanu", "Rayara Darshana", "Nambi Kettavarilla", "Guruve Nee Gathi", "Bhagyada Lakshmi Baramma", "Mantralaya Deepa", "Raghavendra Ashtakam", "Guru Sarvabhouma", "Mantralaya Vaasa", "Tungaa Baala", "Kamadhenu Kalpavruksha", "Yati Raaja", "Shri Raghavendra Guru", "Rayaru Nammane Devaru"]
        },
        "90s": {
            "Chill": ["Santhoshakke", "Hrudaya Hrudaya", "Preethse Preethse", "Karunade", "Nooru Janmaku", "Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye", "Naguva Nayana", "Hosa Belaku", "Chalisuva Modagalu", "Onde Ondu Sari", "Mungaru Male", "Anisuthide", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Hosa Belaku", "Premada Loke", "Chalisuva Modagalu", "Onde Ondu Sari", "Santhoshakke", "Bandhana Title", "Nee Bandu Nintaaga", "Nammura Mandara Hoove", "Onde Ondu Sari", "Amruthadhare", "Jodi Hakki"],
            "Romantic": ["Anisuthide", "Nooru Janmaku", "Naguva Nayana", "Usire Usire", "Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Endendu Ninnanu", "Nooru Janmaku", "Nee Bandu Nintaaga", "Naguva Nayana", "Jotheyali Jothe Jotheyali", "Ee Sanje Yaakaagide", "Maleye Maleye", "Belageddu", "Kirik Party", "Gombe Helutaithe", "Salaga Melody", "Naguva Nayana", "Minchagi Neenu", "Banigondu Elle", "Raajakumara Title", "Appu Dance", "Hogadiru", "Baanagondu Elle"],
            "Melody": ["Jenina Holeyo", "E Sanje Yaakaagide", "Maleye Maleye", "Onde Ondu Sari", "Naguva Nayana", "Hosa Belaku", "Chalisuva Modagalu", "Mungaru Male", "Anisuthide", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Belageddu", "Kirik Party", "Gombe Helutaithe", "Salaga Melody", "Naguva Nayana", "Minchagi Neenu", "Banigondu Elle", "Raajakumara Title", "Appu Dance", "Hogadiru", "Baanagondu Elle", "Endendu Ninnanu", "Nooru Janmaku", "Nee Bandu Nintaaga", "Naguva Nayana"],
            "Broken": ["Mungaru Male Title", "Kaanada Kadalige", "Kariya Title Sad", "Huccha Sad", "Jenina Holeyo Sad", "E Sanje Yaakaagide Sad", "Maleye Maleye Sad", "Sariyuva Nenapu", "Maayavi Kanase", "Baite Baite", "Kelade Nimageega", "Yava Mohana", "Belageddu", "Kirik Party", "Gombe Helutaithe", "Salaga Melody", "Naguva Nayana", "Minchagi Neenu", "Banigondu Elle", "Raajakumara Title", "Appu Dance", "Hogadiru", "Baanagondu Elle", "Endendu Ninnanu", "Nooru Janmaku", "Nee Bandu Nintaaga", "Naguva Nayana", "Jotheyali Jothe Jotheyali", "Ee Sanje Yaakaagide", "Maleye Maleye"]
        }
    },
    "Telugu": {
        "20s": {
            "Chill": ["Samajavaragamana", "Butta Bomma", "Oke Oka Lokam", "Undiporaadhey", "Vachinde", "Maguva Maguva", "Saami Saami", "Ramuloo Ramulaa", "Oo Antava", "Naatu Naatu", "Dosti", "Kommuram Bheemudo", "Bullet Song", "Ra Ra Rakkamma", "Srivalli", "Palamuru", "Dhamaka", "Dandakadiyal", "Mind Block", "He's So Cute", "What Amma", "Saranga Dariya", "Top Tucker", "Rowdy Baby", "Ma Ma Mahesha", "Kalaavathi", "Penny Song", "Halamithi Habibo", "Arabic Kuthu", "Mehabooba"],
            "Romantic": ["Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama", "Kadhale Kadhale", "Mellaga Karagani", "Telusa Telusa", "Kadalalle", "Chitti Adugu", "Kalyanam", "Srivalli", "Naatu Naatu", "Nuvve Nuvve", "Sita Ramam Title", "Manasa Manasa", "Neeve Neeve", "Darling Title", "Priyathama Old", "Nammaka Tappani", "Bommarillu Title", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po", "Oosupodu", "Vellipoke", "Evare Premam", "Priya Priyathama", "Telusa Telusa Old"],
            "Melody": ["Telusa Telusa", "Kadalalle", "Chitti Adugu", "Kalyanam", "Nuvve Nuvve", "Srivalli", "Naatu Naatu", "Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama", "Kadhale Kadhale", "Mellaga Karagani", "Telusa Telusa", "Manasa Manasa", "Neeve Neeve", "Darling Title", "Priyathama Old", "Nammaka Tappani", "Bommarillu Title", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po", "Oosupodu", "Vellipoke", "Evare Premam", "Priya Priyathama", "Telusa Telusa Old"],
            "Broken": ["Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po", "Oosupodu", "Vellipoke", "Evare Premam", "O Cheliya", "Yemaindhi Ee Vela", "Gundellona", "Nammavemo Gani", "Priya Priyathama", "Telusa Telusa", "O Paapa Laali", "Jagadeka Veerudu", "Nuvve Kavali", "Prematho", "Kushi Title", "Nuvvostanante", "Yamaha Nagari", "Evare Premam", "Manasa YMC", "Neeve Darling", "Priyathama Old", "Nammaka Tappani", "Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama Majili"]
        },
        "90s": {
            "Chill": ["Masta Masta", "Priya Priyathama", "Telusa Telusa", "O Paapa Laali", "Jagadeka Veerudu", "Nuvve Kavali", "Prematho", "Kushi Title", "Nuvvostanante", "Yamaha Nagari", "Evare Premam", "Manasa YMC", "Neeve Darling", "Priyathama Old", "Nammaka Tappani", "Srivalli", "Naatu Naatu", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po", "O Cheliya", "Yemaindhi Ee Vela", "Gundellona", "Nammavemo Gani", "Telusa Telusa Old", "Kadalalle", "Chitti Adugu", "Kalyanam", "Nuvve Nuvve", "Srivalli"],
            "Romantic": ["Nuvve Kavali", "Prematho", "Kushi Title", "Nuvvostanante", "Yamaha Nagari", "Evare Premam", "Manasa YMC", "Neeve Darling", "Priyathama Old", "Nammaka Tappani", "Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama Majili", "Telusa Telusa", "Kadalalle", "Chitti Adugu", "Kalyanam", "Nuvve Nuvve", "Srivalli", "Naatu Naatu", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po", "Oosupodu", "Vellipoke", "Evare Premam", "Priya Priyathama"],
            "Melody": ["Evare", "Manasa", "Neeve", "Priyathama", "Nammaka Tappani", "Nuvve Kavali", "Prematho", "Kushi Title", "Nuvvostanante", "Yamaha Nagari", "Manasa YMC", "Neeve Darling", "Priyathama Old", "Nammaka Tappani", "Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama Majili", "Telusa Telusa", "Kadalalle", "Chitti Adugu", "Kalyanam", "Nuvve Nuvve", "Srivalli", "Naatu Naatu", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po"],
            "Broken": ["O Cheliya", "Yemaindhi Ee Vela", "Gundellona", "Nammavemo Gani", "Nuvve Kavali", "Prematho", "Kushi Title", "Nuvvostanante", "Yamaha Nagari", "Evare Premam", "Manasa YMC", "Neeve Darling", "Priyathama Old", "Nammaka Tappani", "Oh Sita Hey Rama", "Nee Kallu Neeli", "Inkem Inkem", "Adiga Adiga", "Priyathama Majili", "Telusa Telusa", "Kadalalle", "Chitti Adugu", "Kalyanam", "Nuvve Nuvve", "Srivalli", "Naatu Naatu", "Life of Ram", "Arjun Reddy Sad", "Naa Kanulu Yepudu", "Po Ve Po"]
        }
    }
};

// --- 2. AUTHENTICATION LOGIC ---

function toggleAuth(isSignup) {
    const title = document.getElementById('authTitle');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const toggleLink = document.getElementById('toggleText');

    if (isSignup) {
        title.innerHTML = "AGENT <span>REGISTRATION</span>";
        loginBtn.style.display = "none";
        signupBtn.style.display = "block";
        toggleLink.innerHTML = 'Authorized? <a href="#" onclick="toggleAuth(false)">Initialize Login</a>';
    } else {
        title.innerHTML = "VIBE<span>MATCHER</span>";
        loginBtn.style.display = "block";
        signupBtn.style.display = "none";
        toggleLink.innerHTML = 'New User? <a href="#" onclick="toggleAuth(true)">Create Profile</a>';
    }
}

function handleSignup() {
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value.trim();
    if(u && p) {
        localStorage.setItem("vibe_u_" + u, p);
        alert("ACCESS GRANTED. Account created for " + u);
        toggleAuth(false);
    } else {
        alert("CREDENTIALS REQUIRED.");
    }
}

function handleLogin() {
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value.trim();
    const stored = localStorage.getItem("vibe_u_" + u);

    if(stored && stored === p) {
        // Trigger the "Attractive" transition
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        
        // Power-up the container style
        const container = document.getElementById('mainContainer');
        container.style.border = "1px solid #00ff88";
        container.style.boxShadow = "0 0 40px rgba(0, 255, 136, 0.2)";
        
        localStorage.setItem("vibe_active", "true");
    } else {
        const err = document.getElementById('loginError');
        err.innerText = "ACCESS DENIED: INVALID CREDENTIALS";
        err.style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("vibe_active");
    location.reload();
}

// --- 3. APP LOGIC ---

function showAIScreen() {
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('aiSection').style.display = 'block';
}

function showManualScreen() {
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('manualSection').style.display = 'block';
}

function getManualSong(mood) {
    const lang = document.getElementById('langSelect').value;
    const era = document.getElementById('eraSelect').value;
    const songs = playlistData[lang][era][mood];
    const picked = songs[Math.floor(Math.random() * songs.length)];
    showResult(picked, lang, mood);
}

// AI Keyword Detection
const imageInput = document.getElementById('imageInput');
if(imageInput) {
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if(!file) return;
        
        const name = file.name.toLowerCase();
        const reader = new FileReader();
        
        reader.onload = function(event) {
            // Visual feedback
            document.getElementById('aiSection').style.display = 'none';
            document.getElementById('scanLine').style.display = 'block';
            document.getElementById('imagePreview').src = event.target.result;
            
            setTimeout(() => {
                let mood = "Chill";
                if(name.includes("love") || name.includes("couple") || name.includes("date")) mood = "Romantic";
                else if(name.includes("sad") || name.includes("alone") || name.includes("broken")) mood = "Broken";
                else if(name.includes("nature") || name.includes("peace") || name.includes("sky")) mood = "Melody";
                else if(name.includes("temple") || name.includes("god") || name.includes("rayaru")) mood = (document.getElementById('langSelect').value === "Kannada") ? "Rayaru" : "Melody";
                
                const lang = document.getElementById('langSelect').value;
                const era = document.getElementById('eraSelect').value;
                const songs = playlistData[lang][era][mood] || playlistData[lang][era]["Chill"];
                const song = songs[Math.floor(Math.random() * songs.length)];
                
                document.getElementById('scanLine').style.display = 'none';
                document.getElementById('result-box').style.display = 'block';
                document.getElementById('aiFeedback').innerText = "VIBE DETECTED: " + mood;
                showResult(song, lang, mood);
            }, 2000);
        };
        reader.readAsDataURL(file);
    });
}

function showResult(song, lang, vibe) {
    document.getElementById('manualSection').style.display = 'none';
    document.getElementById('result-box').style.display = 'block';
    document.getElementById('song-display').innerText = song;
    
    const link = document.getElementById('search-link');
    link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(song + " " + lang + " song")}`;
}

// Check session on load
window.onload = function() {
    if(localStorage.getItem("vibe_active") === "true") {
        // Bypass login if already logged in
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('mainContainer').style.border = "1px solid #00ff88";
    }
};