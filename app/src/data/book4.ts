import type { Book } from './types'

export const book4: Book = {
  id: 4,
  title: 'Madinah Arabic Reader Book 4',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الرابع',
  description:
    'Book 4 covers present tense conjugation with all pronouns, the future particle sa-, negation across tenses, the verbal noun (masdar), the imperative verb, prohibitive commands, the verb of near-occurrence (kaada), color adjectives, diptotes, apposition, expressing desire with an, purpose with laam at-ta\'liil, possibility with yumkinu, the negative future particle lan, and the dual form. Lessons continue the conversation-based approach with Quranic references and hadith.',
  level: 'elementary',
  totalLessons: 10,
  lessons: [
    // =========================================================
    // LESSON 1
    // =========================================================
    {
      number: 1,
      title: 'Lesson 1',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme:
        'On the bus: present tense conjugation, future particle sa-, negation, verbal nouns, and amma...fa-',
      grammar: [
        {
          title: 'Present Tense Conjugation (al-Mudaari\')',
          arabicTitle: 'الْمُضَارِع — الإِسْنَاد',
          explanation:
            'The full conjugation of the present tense verb across all pronouns (except dual). Four prefix letters are used: ya (he/they m.), ta (she/you), a (I), na (we).',
          examples: [
            {
              arabic: 'إِخْوَتِي يَدْرُسُونَ بِالْجَامِعَةِ',
              english: 'My brothers are studying at the university',
            },
            {
              arabic: 'وَأَخَوَاتِي يَدْرُسْنَ بِالْمَدْرَسَةِ',
              english: 'And my sisters are studying at the school',
            },
            {
              arabic: 'مَاذَا تَكْتُبُ آمِنَةُ الْآنَ؟',
              english: 'What is Aminah writing now?',
            },
          ],
          rules: [
            'huwa: yadhhabu (he goes)',
            'hiya: tadhhabu (she goes)',
            'anta: tadhhabu (you m.s. go)',
            'ana: adhhabu (I go)',
            'hum: yadhhab-uuna (they m. go)',
            'hunna: yadhhab-na (they f. go)',
            'antum: tadhhab-uuna (you m.pl. go)',
            'antunna: tadhhab-na (you f.pl. go)',
            'nahnu: nadhhabu (we go)',
          ],
        },
        {
          title: 'The Particle of Futurity',
          arabicTitle: 'حَرْفُ الاسْتِقْبَالِ — سَـ',
          explanation:
            'The prefix sa- is attached to the mudaari\' to express future tense exclusively. It is NOT used in questions.',
          examples: [
            {
              arabic: 'سَيَذْهَبُ أَبِي إِلَى مَكَّةَ غَدًا',
              english: 'My father will go to Makkah tomorrow',
            },
            {
              arabic: 'سَأَكْتُبُ لَكَ رِسَالَةً إِنْ شَاءَ اللهُ',
              english: "I'll write you a letter, God willing",
            },
            {
              arabic: 'مَتَى تَذْهَبُ إِلَى الْهِنْدِ؟',
              english: 'When will you go to India? (no sa- in questions)',
            },
          ],
        },
        {
          title: 'Negation: Past and Present',
          arabicTitle: 'النَّفْي: مَا وَ لَا',
          explanation:
            'The past tense (al-maadi) is negated with ma. The present tense (al-mudaari\') is negated with la.',
          examples: [
            {
              arabic: 'مَا أَكَلْتُ شَيْئًا',
              english: 'I did not eat anything (past negation with ma)',
            },
            {
              arabic: 'لَا أَفْهَمُ الْفَرَنْسِيَّةَ',
              english: "I don't understand French (present negation with la)",
            },
            {
              arabic: 'لَا أَشْرَبُ الْقَهْوَةَ',
              english: "I don't drink coffee",
            },
          ],
        },
        {
          title: 'The Verbal Noun (Masdar)',
          arabicTitle: 'الْمَصْدَر',
          explanation:
            'The masdar is the verb stripped of tense and subject, expressing the abstract action. The pattern taught here is fu\'uulun. The masdar is a noun and takes al- (definite article) and tanwin.',
          examples: [
            {
              arabic: 'الدُّخُولُ مَمْنُوعٌ',
              english: 'Entry is forbidden',
            },
            {
              arabic: 'الرُّكُوعُ قَبْلَ السُّجُودِ',
              english: 'The bowing is before the prostration',
            },
            {
              arabic: 'دَخَلَ / يَدْخُلُ / دُخُولٌ',
              english: 'He entered / He enters / Entry (past/present/masdar)',
            },
          ],
          rules: [
            'dakhala/yadkhulu/dukhuulun (entry)',
            'kharaja/yakhruju/khuruujun (exit)',
            'sajada/yasjudu/sujuudun (prostration)',
            'raka\'a/yarka\'u/rukuu\'un (bowing)',
            'jalasa/yajlisu/juluusun (sitting)',
            'nazala/yanzilu/nuzuulun (descending)',
            'sa\'ada/yas\'adu/su\'uudun (ascending)',
            'rakiba/yarkabu/rukuubun (riding)',
          ],
        },
        {
          title: 'As for... (Topic-Comment Construction)',
          arabicTitle: 'أَمَّا ... فَـ',
          explanation:
            'Amma is used to distinguish between two or more items. The khabar (predicate) after amma must be preceded by fa-.',
          examples: [
            {
              arabic:
                'أَمَّا بِلَالٌ فَهُوَ مِنْ بَاكِسْتَانَ، وَأَمَّا إِبْرَاهِيمُ فَهُوَ مِنَ الْيَابَانِ',
              english:
                'As for Bilal, he is from Pakistan, and as for Ibrahim, he is from Japan',
            },
            {
              arabic: 'أُخْتِي تَسْكُنُ مَعِي. أَمَّا أَخِي فَيَسْكُنُ مَعَ أَبِي وَأُمِّي',
              english:
                'My sister lives with me. As for my brother, he lives with my father and mother',
            },
          ],
        },
        {
          title: 'Definite vs. Indefinite Kinship',
          arabicTitle: 'أَخِي وَ أَخٌ لِي',
          explanation:
            'Akhi means "my brother" (definite, a specific brother). Akhun li means "a brother of mine" (indefinite, one of my brothers).',
          examples: [
            {
              arabic: 'جَاءَ أَخِي مِنْ مَكَّةَ',
              english: 'My brother came from Makkah (specific)',
            },
            {
              arabic: 'جَاءَ أَخٌ لِي مِنْ مَكَّةَ',
              english: 'A brother of mine came from Makkah (one of them)',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'دَرَسَ / يَدْرُسُ', english: 'to study', category: 'verb' },
        { arabic: 'نَزَلَ / يَنْزِلُ', english: 'to descend, get off', category: 'verb' },
        { arabic: 'عَرَفَ / يَعْرِفُ', english: 'to know', category: 'verb' },
        { arabic: 'سَكَنَ / يَسْكُنُ', english: 'to stay, to live', category: 'verb' },
        { arabic: 'بَحَثَ / يَبْحَثُ عَنْ', english: 'to look for, search', category: 'verb' },
        { arabic: 'مَاتَ / يَمُوتُ', english: 'to die', category: 'verb' },
        { arabic: 'شَكَرَ / يَشْكُرُ', english: 'to thank', category: 'verb' },
        { arabic: 'صَعَدَ / يَصْعَدُ', english: 'to ascend, go up', category: 'verb' },
        { arabic: 'نَسِيتُ', english: 'I forgot', category: 'verb' },
        { arabic: 'حَلَّاقٌ', english: 'barber', category: 'noun' },
        { arabic: 'أَرُزٌّ', english: 'rice', category: 'noun' },
        { arabic: 'عُنْوَانٌ', english: 'address', category: 'noun' },
        { arabic: 'ثَوْبٌ', english: 'clothes, garment', category: 'noun' },
        { arabic: 'مُسْتَوْصَفٌ', english: 'clinic', category: 'noun' },
        { arabic: 'قَادِمٌ', english: 'coming, next', category: 'adjective' },
        { arabic: 'بِطَاقَةٌ', english: 'visiting card', category: 'noun' },
        { arabic: 'رِسَالَةٌ', english: 'letter', category: 'noun' },
        { arabic: 'صَيْدَلِيَّةٌ', english: 'pharmacy', category: 'noun' },
        { arabic: 'خَيْلٌ', english: 'horses', category: 'noun' },
        { arabic: 'قَرِيبٌ', english: 'relative', category: 'noun' },
        { arabic: 'مَحَطَّةٌ', english: 'station', category: 'noun' },
      ],
      dialogues: [
        {
          speaker: 'عَبْدُ اللهِ',
          arabic: 'أَدْرُسُ بِجَامِعَةِ الرِّيَاضِ. أَدْرُسُ فِي كُلِّيَّةِ الْهَنْدَسَةِ',
          english:
            'I study at the University of Riyadh. I study in the Faculty of Engineering.',
        },
        {
          speaker: 'فَيْصَل',
          arabic: 'فِي أَيِّ سَنَةٍ تَدْرُسُ؟',
          english: 'Which year are you in?',
        },
        {
          speaker: 'عَبْدُ اللهِ',
          arabic: 'فِي أَمَانِ اللهِ، وَإِلَى اللِّقَاءِ',
          english: "In God's protection, and until we meet again",
        },
      ],
      culturalNotes: [
        'The dialogue opens with the full Islamic greeting, modeling proper social interaction',
        'University life in Saudi Arabia is depicted with students across faculties: Medicine, Commerce, Arts, Sciences, and Engineering',
        'Gender-segregated education: sisters attend a separate girls\' school',
        'Large families with multiple siblings living in university dormitories or with relatives is common',
        'Prayer terminology: rukuu\' (bowing) and sujuud (prostration) are essential terms from Islamic prayer',
      ],
    },

    // =========================================================
    // LESSON 2
    // =========================================================
    {
      number: 2,
      title: 'Lesson 2',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme:
        'Family scene at home: feminine verb conjugation, inna vs anna, and time adverbs',
      grammar: [
        {
          title: 'Feminine "You" Verb Conjugation',
          arabicTitle: 'أَنْتِ + الْمُضَارِع',
          explanation:
            'The feminine singular "you" (anti) verb conjugation uses the -iina ending in the present tense. The feminine plural (antunna) uses the -na ending.',
          examples: [
            {
              arabic: 'مَاذَا تَفْعَلِينَ؟',
              english: 'What are you (f.) doing?',
            },
            {
              arabic: 'مَتَى تَذْهَبِينَ؟',
              english: 'When are you (f.) going?',
            },
            {
              arabic: 'أَتَعْرِفِينَ الطَّبِيبَةَ؟',
              english: 'Do you (f.) know the doctor?',
            },
          ],
        },
        {
          title: 'Inna vs. Anna: Usage Rules',
          arabicTitle: 'إِنَّ وَ أَنَّ',
          explanation:
            'Inna (with kasrah on hamzah) is used at the beginning of a sentence or after qaala. Anna (with fathah on hamzah) is used after other verbs.',
          examples: [
            {
              arabic: 'إِنَّ اللهَ رَبِّي',
              english: 'Indeed Allah is my Lord (beginning of sentence)',
            },
            {
              arabic: 'قَالَ الْمُدَرِّسُ: إِنَّ الامْتِحَانَ غَدًا',
              english: 'The teacher said: "Indeed the exam is tomorrow" (after qaala)',
            },
            {
              arabic: 'سَمِعْتُ أَنَّ الامْتِحَانَ غَدًا',
              english: 'I heard that the exam is tomorrow (after another verb)',
            },
          ],
        },
        {
          title: 'Time Adverbs (Dharf az-Zamaan)',
          arabicTitle: 'ظَرْفُ الزَّمَانِ',
          explanation:
            'The noun denoting time of an action is mansub (accusative). This is called maf\'uul fiihi.',
          examples: [
            {
              arabic: 'رَجَعَ بِلَالٌ يَوْمَ السَّبْتِ',
              english: 'Bilal returned on Saturday (yawma is mansub)',
            },
            {
              arabic: 'ذَهَبْتُ إِلَى السُّوقِ صَبَاحًا',
              english: 'I went to the market in the morning',
            },
            {
              arabic: 'أَذْهَبُ إِلَى الْمَكْتَبَةِ كُلَّ يَوْمٍ',
              english: 'I go to the library every day',
            },
          ],
        },
        {
          title: 'Days of the Week',
          arabicTitle: 'أَسْمَاءُ أَيَّامِ الأُسْبُوعِ',
          explanation:
            'The seven days of the week in Arabic, starting with Saturday.',
          examples: [
            {
              arabic: 'يَوْمُ السَّبْتِ / يَوْمُ الأَحَدِ / يَوْمُ الاثْنَيْنِ',
              english: 'Saturday / Sunday / Monday',
            },
            {
              arabic: 'يَوْمُ الثُّلَاثَاءِ / يَوْمُ الأَرْبِعَاءِ',
              english: 'Tuesday / Wednesday',
            },
            {
              arabic: 'يَوْمُ الْخَمِيسِ / يَوْمُ الْجُمُعَةِ',
              english: 'Thursday / Friday',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'دَوَاءٌ', english: 'medicine', category: 'noun' },
        { arabic: 'جَارٌ', english: 'neighbour', category: 'noun' },
        { arabic: 'تِلْمِيذٌ', english: 'pupil (m.)', category: 'noun' },
        { arabic: 'تِلْمِيذَةٌ', english: 'pupil (f.)', category: 'noun' },
        { arabic: 'رَقْمٌ', english: 'number', category: 'noun' },
        { arabic: 'هَاتِفٌ', english: 'telephone', category: 'noun' },
        { arabic: 'وَقْتٌ', english: 'time', category: 'noun' },
        { arabic: 'عَمَلٌ', english: 'work', category: 'noun' },
        { arabic: 'وَاجِبَاتٌ', english: 'homework', category: 'noun' },
        { arabic: 'صَفٌّ', english: 'row, class', category: 'noun' },
        { arabic: 'سَيَّارَةُ الأُجْرَةِ', english: 'taxi', category: 'noun' },
        { arabic: 'أَخِيرٌ', english: 'last', category: 'adjective' },
        { arabic: 'شَهِدَ / يَشْهَدُ', english: 'to bear witness', category: 'verb' },
        { arabic: 'ضَحِكَ / يَضْحَكُ', english: 'to laugh', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'حَامِد',
          arabic: 'كَيْفَ حَالُكِ الْيَوْمَ؟ لَعَلَّكِ الْيَوْمَ أَحْسَنُ',
          english: 'How are you today? Perhaps you are better today',
        },
        {
          speaker: 'أُمُّ أَحْمَد',
          arabic: 'أَنَا الْيَوْمَ أَحْسَنُ، وَالْحَمْدُ لِلّهِ',
          english: 'I am better today, praise be to God',
        },
        {
          speaker: 'الأَبْنَاء',
          arabic:
            'أَمَّا أَنَا فَأَحْفَظُ سُورَةَ الْمُلْكِ. وَأَمَّا هَؤُلَاءِ فَيَحْفَظُونَ سُورَةَ الْقَلَمِ',
          english:
            'As for me, I am memorizing Surah al-Mulk. As for these, they are memorizing Surah al-Qalam.',
        },
      ],
      culturalNotes: [
        'Addressing women: the feminine "you" forms are practiced through a husband speaking to his wife using the kunya naming convention (Umm Ahmad)',
        'Children memorize specific surahs (al-Mulk, al-Qalam) reflecting the central role of Quran education',
        'Visiting a sick relative (khalah, maternal aunt) reflects the Islamic emphasis on maintaining family ties',
        'The Arabic week begins with Saturday and Friday (yawm al-jumu\'ah) is the most important day',
      ],
    },

    // =========================================================
    // LESSON 3
    // =========================================================
    {
      number: 3,
      title: 'Lesson 3',
      arabicTitle: 'الدَّرْسُ الثَّالِثُ',
      theme:
        'Complete present tense conjugation, morphological breakdown, gender and number agreement',
      grammar: [
        {
          title: 'Complete Present Tense Conjugation',
          arabicTitle: 'إِسْنَاد الْمُضَارِع الْكَامِل',
          explanation:
            'The full conjugation of the present tense for all pronouns (except dual), including the morphological breakdown showing the prefix letter, root, subject marker, and sign of the indicative mood.',
          examples: [
            {
              arabic: 'يَذْهَبُونَ = يـ + ذهب + و (فَاعِل) + نَ (عَلَامَةُ الرَّفْعِ)',
              english:
                'They go = ya (prefix) + dh-h-b (root) + waaw (subject) + na (sign of indicative)',
            },
            {
              arabic: 'تَذْهَبِينَ = تـ + ذهب + ي (فَاعِل) + نَ (عَلَامَةُ الرَّفْعِ)',
              english:
                'You (f.) go = ta (prefix) + dh-h-b (root) + ya (subject) + na (sign of indicative)',
            },
            {
              arabic: 'أَيْنَ تَذْهَبِينَ يَا آمِنَةُ؟',
              english: 'Where are you going, Aminah?',
            },
          ],
          rules: [
            'Masculine plural -uuna ending: yadhhab-uuna, tadhhab-uuna',
            'Feminine plural -na ending: yadhhab-na, tadhhab-na',
            'Feminine singular -iina ending: tadhhab-iina',
            'Singular forms: yadhhabu, tadhhabu, adhhabu, nadhhabu',
          ],
        },
        {
          title: 'Gender Agreement: Changing Subject to Feminine',
          arabicTitle: 'تَأْنِيث الْفَاعِل',
          explanation:
            'Converting masculine sentences to feminine equivalents requires changing verbs, pronouns, and forms of address.',
          examples: [
            {
              arabic: 'أَيْنَ تَذْهَبُونَ يَا إِخْوَانُ؟ → أَيْنَ تَذْهَبْنَ يَا أَخَوَاتُ؟',
              english:
                'Where are you going, brothers? → Where are you going, sisters?',
            },
            {
              arabic: 'يَا أَبْنَائِي → يَا بَنَاتِي',
              english: 'O my sons → O my daughters',
            },
          ],
        },
      ],
      vocabulary: [],
      dialogues: [
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'أَتَفْهَمْنَ الْفَرَنْسِيَّةَ يَا أَخَوَاتُ؟',
          english: 'Do you understand French, sisters?',
        },
        {
          speaker: 'الطَّالِبَات',
          arabic: 'نَكْتُبُ الْوَاجِبَاتِ',
          english: 'We are writing the homework',
        },
      ],
      culturalNotes: [
        'Exercises consistently distinguish between addressing males (ya ikhwaan) and females (ya akhaawaat)',
        'Practical daily vocabulary includes references to the hospital, market, library, airport, and factory',
      ],
    },

    // =========================================================
    // LESSON 4
    // =========================================================
    {
      number: 4,
      title: 'Lesson 4',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme:
        'The imperative verb (fi\'l al-amr), classroom commands, and Quranic imperatives',
      grammar: [
        {
          title: 'The Imperative (fi\'l al-amr)',
          arabicTitle: 'فِعْلُ الأَمْرِ',
          explanation:
            'The imperative is derived from the mudaari\' of the second person by: (1) removing the initial ta- prefix, (2) removing the final dammah (making it saakin), (3) adding hamzat al-wasl at the beginning. The hamzah takes dammah if the second radical has dammah, otherwise kasrah.',
          examples: [
            {
              arabic: 'تَكْتُبُ → اُكْتُبْ',
              english: 'You write → Write! (dammah on hamzah because second radical has dammah)',
            },
            {
              arabic: 'تَجْلِسُ → اِجْلِسْ',
              english: 'You sit → Sit! (kasrah on hamzah)',
            },
            {
              arabic: 'تَفْتَحُ → اِفْتَحْ',
              english: 'You open → Open! (kasrah on hamzah)',
            },
          ],
          rules: [
            'The hamzah is hamzat al-wasl: pronounced only at the start of speech, dropped in connected speech',
            'Conjugation: uktub (m.s.), uktubii (f.s.), uktubuu (m.pl.), uktubna (f.pl.)',
            'Irregular: ta\'kulu → kul (eat!), ta\'khudhu → khudh (take!) — first radical hamzah is dropped',
            'When imperative ends in sukuun and next word begins with hamzat al-wasl, kasrah resolves the two sukuuns',
          ],
        },
        {
          title: 'Three Divisions of the Verb',
          arabicTitle: 'أَقْسَامُ الْفِعْلِ ثَلَاثَة',
          explanation:
            'The Arabic verb has three divisions: past (maadin), present (mudaari\'un), and imperative (amrun).',
          examples: [
            {
              arabic: 'ذَهَبَ (مَاضٍ) — يَذْهَبُ (مُضَارِع) — اِذْهَبْ (أَمْر)',
              english: 'He went (past) — He goes (present) — Go! (imperative)',
            },
          ],
        },
        {
          title: 'Indefinite Subject',
          arabicTitle: 'الْمُبْتَدَأ النَّكِرَة',
          explanation:
            'The mubtada\' (subject) is normally definite, but it may be indefinite when preceded by an interrogative particle.',
          examples: [
            {
              arabic: 'أَعَقْرَبٌ فِي الْفَصْلِ؟',
              english: 'Is there a scorpion in the classroom?',
            },
            {
              arabic: 'أَإِلَهٌ مَعَ اللهِ؟',
              english: 'Is there a god with Allah? (Quran 27:60)',
            },
          ],
        },
        {
          title: 'fa-inna: Because',
          arabicTitle: 'فَإِنَّ',
          explanation:
            'The construction fa-inna is used to give a reason or explanation.',
          examples: [
            {
              arabic: 'كُلْ هَذَا فَإِنَّكَ جَوْعَانُ',
              english: 'Eat this, for you are hungry',
            },
            {
              arabic: 'اُدْخُلْ فَإِنَّ الدَّرْسَ قَدْ بَدَأَ',
              english: 'Come in, for the lesson has already started',
            },
            {
              arabic: 'اِغْسِلِ الْقَمِيصَ فَإِنَّهُ وَسِخٌ',
              english: 'Wash the shirt, for it is dirty',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'عَقْرَبٌ', english: 'scorpion', category: 'noun' },
        { arabic: 'حِذَاءٌ', english: 'shoe', category: 'noun' },
        { arabic: 'يَدٌ', english: 'hand', category: 'noun' },
        { arabic: 'كُوبٌ', english: 'glass, cup', category: 'noun' },
        { arabic: 'وَرَقَةٌ', english: 'piece of paper', category: 'noun' },
        { arabic: 'مُوسَى', english: 'razor', category: 'noun' },
        { arabic: 'تِينٌ', english: 'fig', category: 'noun' },
        { arabic: 'زَوْجٌ', english: 'spouse', category: 'noun' },
        { arabic: 'مِذْيَاعٌ', english: 'radio set', category: 'noun' },
        { arabic: 'صَوْتٌ', english: 'voice, sound', category: 'noun' },
        { arabic: 'غَرِيبٌ', english: 'stranger', category: 'noun' },
        { arabic: 'جَوٌّ', english: 'weather', category: 'noun' },
        { arabic: 'قُوَّةٌ', english: 'strength', category: 'noun' },
        { arabic: 'عَلَقٌ', english: 'clot of blood', category: 'noun' },
        { arabic: 'الْجَنَّةُ', english: 'paradise', category: 'noun' },
        { arabic: 'نَعْسَانُ', english: 'sleepy', category: 'adjective' },
        { arabic: 'مُظْلِمٌ', english: 'dark', category: 'adjective' },
        { arabic: 'جَمَعَ / يَجْمَعُ', english: 'to gather, collect', category: 'verb' },
        { arabic: 'قَطَعَ / يَقْطَعُ', english: 'to cut', category: 'verb' },
        { arabic: 'مَنَعَ / يَمْنَعُ', english: 'to prevent', category: 'verb' },
        { arabic: 'سَكَتَ / يَسْكُتُ', english: 'to keep quiet', category: 'verb' },
        { arabic: 'طَبَخَ / يَطْبُخُ', english: 'to cook', category: 'verb' },
        { arabic: 'كَنَسَ / يَكْنُسُ', english: 'to sweep', category: 'verb' },
        { arabic: 'نَظَرَ / يَنْظُرُ', english: 'to look at', category: 'verb' },
        { arabic: 'عَبَدَ / يَعْبُدُ', english: 'to worship', category: 'verb' },
        { arabic: 'حَلَقَ / يَحْلِقُ', english: 'to shave', category: 'verb' },
        { arabic: 'عَلِمَ / يَعْلَمُ', english: 'to know', category: 'verb' },
        { arabic: 'لَا أَدْرِي', english: "I don't know", category: 'expression' },
      ],
      dialogues: [
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'اُقْتُلُوهَا يَا إِخْوَانُ',
          english: 'Kill it (the scorpion), brothers!',
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'اِقْرَأْ يَا عَلِيُّ',
          english: 'Read, Ali!',
        },
        {
          speaker: 'عَلِيّ',
          arabic: 'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ. خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ',
          english:
            'Read in the name of your Lord who created. Created man from a clot of blood. (Quran 96:1-2)',
        },
      ],
      culturalNotes: [
        'Students begin Quran recitation with a\'udhu billaahi min ash-shaytaan ar-rajiim and bismillaah ar-rahmaan ar-rahiim',
        'Multiple Quranic verses illustrate the imperative: from Surah Al-Alaq, Taha, Al-Baqarah, Maryam, and Al-Hajj',
        'The classroom depicts a traditional Islamic school environment where students memorize Quran surahs',
        'References to Saudi cities like Riyadh and Taif, and the Islamic University of Madinah',
      ],
    },

    // =========================================================
    // LESSON 5
    // =========================================================
    {
      number: 5,
      title: 'Lesson 5',
      arabicTitle: 'الدَّرْسُ الْخَامِسُ',
      theme:
        'Prohibitive commands (la an-naahiya), the verb of near-occurrence (kaada), and the exclamatory verb',
      grammar: [
        {
          title: 'The Prohibitive la (Don\'t...!)',
          arabicTitle: 'لَا النَّاهِيَة',
          explanation:
            'The prohibitive la is used with the mudaari\' to form negative commands. The final radical of the verb loses its dammah and takes sukuun. This is distinct from la an-naafiya (negating la) where the verb retains its normal ending.',
          examples: [
            {
              arabic: 'لَا تَذْهَبْ',
              english: "Don't go! (sukuun on final radical)",
            },
            {
              arabic: 'لَا تَكْتُبْ بِالْقَلَمِ الْأَحْمَرِ',
              english: "Don't write with the red pen!",
            },
            {
              arabic: 'لَا تَخْرُجْ مِنَ الْفَصْلِ',
              english: "Don't go out of the class!",
            },
          ],
          rules: [
            'With la an-naahiya, the verb takes sukuun: la tadhhab (don\'t go)',
            'With la an-naafiya, the verb keeps dammah: la adhhabu (I don\'t go)',
            'Conjugation: la tadhhab (m.s.), la tadhhabi (f.s.), la taddhabuu (m.pl.), la tadhhab-na (f.pl.)',
          ],
        },
        {
          title: 'The Verb of Near-Occurrence (almost)',
          arabicTitle: 'كَادَ / يَكَادُ',
          explanation:
            'Kaada (past) / yakaadu (present) expresses that an action was about to happen but did not. It is followed by a marfu\' noun and a verb in the mudaari\'.',
          examples: [
            {
              arabic: 'كَادَ الْوَلَدُ يَضْحَكُ',
              english: 'The boy almost laughed',
            },
            {
              arabic: 'يَكَادُ الْجَرَسُ يَرِنُّ',
              english: 'The bell is about to ring',
            },
            {
              arabic: 'انْقَلَبَتْ سَيَّارَةُ حَامِدٍ وَكَادَ يَمُوتُ',
              english: "Hamid's car overturned and he almost died",
            },
          ],
        },
        {
          title: 'Present Time Restriction with ma',
          arabicTitle: 'مَا + الْمُضَارِع',
          explanation:
            'When ma is used with the mudaari\', the verb is restricted to the present moment only, unlike la which is general/habitual.',
          examples: [
            {
              arabic: 'أَنَا لَا أَشْرَبُ الْقَهْوَةَ',
              english: "I don't drink coffee (habitual, with la)",
            },
            {
              arabic: 'أَنَا مَا أَشْرَبُ الْقَهْوَةَ الْآنَ',
              english: 'I am not drinking coffee now (right now, with ma)',
            },
          ],
        },
        {
          title: 'The Exclamatory Verb (How...!)',
          arabicTitle: 'فِعْلُ التَّعَجُّبِ',
          explanation:
            'The pattern ma af\'ala is used to express admiration or wonder.',
          examples: [
            {
              arabic: 'مَا أَطْوَلَ حَامِدًا!',
              english: 'How tall Hamid is!',
            },
            {
              arabic: 'مَا أَجْمَلَ هَذِهِ السَّيَّارَةَ!',
              english: 'How beautiful this car is!',
            },
            {
              arabic: 'مَا أَصْغَرَكَ!',
              english: 'How small you are!',
            },
          ],
        },
        {
          title: 'The Restrictive Particle innama (only)',
          arabicTitle: 'إِنَّمَا',
          explanation:
            'Innama means "only" or "nothing but."',
          examples: [
            {
              arabic: 'إِنَّمَا أَنْظُرُ إِلَى الصُّوَرِ',
              english: 'I am only looking at the pictures',
            },
            {
              arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
              english: 'Actions are judged only by intentions (famous hadith)',
            },
          ],
        },
        {
          title: 'Hamza Merging Rule',
          arabicTitle: 'أَأَ → آ',
          explanation:
            'When the first-person ana form of a hamza-initial verb produces two hamzas, they merge into a madd.',
          examples: [
            {
              arabic: 'أَنَا أَأْكُلُ → آكُلُ',
              english: 'I eat (two hamzas merge into madd)',
            },
            {
              arabic: 'أَنَا أَأْخُذُ → آخُذُ',
              english: 'I take',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مَقْعَدٌ', english: 'seat', category: 'noun' },
        { arabic: 'الطَّرِيقُ', english: 'the way, road', category: 'noun' },
        { arabic: 'كَذَبَ / يَكْذِبُ', english: 'to tell a lie', category: 'verb' },
        { arabic: 'انْقَلَبَ / يَنْقَلِبُ', english: 'to overturn', category: 'verb' },
        { arabic: 'بَكَى / يَبْكِي', english: 'to cry, to weep', category: 'verb' },
        { arabic: 'يَا أَبَتِ', english: 'O my father!', category: 'expression' },
        { arabic: 'فِي أَثْنَاءِ', english: 'during', category: 'preposition' },
      ],
      dialogues: [
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'لَا تَخْرُجْ مِنَ الْفَصْلِ يَا أَبَا بَكْرٍ',
          english: "Don't leave the classroom, Abu Bakr",
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'لَا تَجْلِسْ هُنَا يَا هُمَايُونُ',
          english: "Don't sit here, Humayun",
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'لَا تَقْرَأْ مَجَلَّةً فِي الْفَصْلِ',
          english: "Don't read a magazine in class",
        },
      ],
      culturalNotes: [
        'The famous hadith innama al-a\'maalu bin-niyyaat (Actions are judged only by intentions) is cited',
        'The Quranic verse la ta\'bud ash-shaytaan (Don\'t worship Satan) demonstrates the prohibitive la',
        'Classroom conduct is enforced through prohibitive commands, reflecting structured Islamic education',
      ],
    },

    // =========================================================
    // LESSON 6
    // =========================================================
    {
      number: 6,
      title: 'Lesson 6',
      arabicTitle: 'الدَّرْسُ السَّادِسُ',
      theme:
        'The verb "to want" (yuriidu), relative ma, color adjectives, diptotes, and apposition',
      grammar: [
        {
          title: 'The Verb yuriidu (to want)',
          arabicTitle: 'يُرِيدُ',
          explanation:
            'The verb araada/yuriidu (to want) is conjugated with all pronouns. The initial prefix letters take dammah because this verb has four letters in the past tense (araada).',
          examples: [
            {
              arabic: 'مَاذَا تُرِيدُ يَا بِلَالُ؟ — أُرِيدُ مَاءً',
              english: 'What do you want, Bilal? — I want water',
            },
            {
              arabic: 'مَاذَا تُرِيدِينَ يَا لَيْلَى؟',
              english: 'What do you (f.) want, Laila?',
            },
            {
              arabic: 'نُرِيدُ أَقْلَامًا',
              english: 'We want pens',
            },
          ],
        },
        {
          title: 'The Relative ma (what / that which)',
          arabicTitle: 'مَا الْمَوْصُولَة',
          explanation:
            'There are three types of ma: negative (ma an-naafiya), interrogative (ma al-istifhaamiyya), and relative (ma al-mawsuula, meaning "what / that which").',
          examples: [
            {
              arabic: 'آكُلُ مَا تَأْكُلُ',
              english: 'I eat what you eat',
            },
            {
              arabic: 'سَأَشْتَرِي مَا تُرِيدُ',
              english: 'I will buy what you want',
            },
            {
              arabic: 'نَسِيتُ مَا قَالَ لِي الْمُدَرِّسُ أَمْسِ',
              english: 'I forgot what the teacher told me yesterday',
            },
          ],
        },
        {
          title: 'Color Adjectives',
          arabicTitle: 'أَلْوَان',
          explanation:
            'Color words follow special patterns: masculine af\'alu and feminine fa\'laa\'u. Both forms are diptotes (no tanwin). The plural is on the pattern fu\'lun.',
          examples: [
            {
              arabic: 'أُرِيدُ قَلَمًا أَحْمَرَ',
              english: 'I want a red pen',
            },
            {
              arabic: 'هَذِهِ الشَّجَرَةُ خَضْرَاءُ',
              english: 'This tree is green',
            },
            {
              arabic: 'السَّمَاءُ زَرْقَاءُ',
              english: 'The sky is blue',
            },
          ],
          rules: [
            'ahmar/hamraa\' (red), aswad/sawdaa\' (black), abyad/baydaa\' (white)',
            'asfar/safraa\' (yellow), akhdar/khadraa\' (green), azraq/zarqaa\' (blue)',
            'asmar/samraa\' (brown)',
            'Plural: humr, suud, biid, sufr, khudr, zurq, sumr',
          ],
        },
        {
          title: 'Apposition (al-Badal)',
          arabicTitle: 'الْبَدَل',
          explanation:
            'Al-badal is a noun that renames or further identifies a preceding noun. It takes the same grammatical case as the noun it substitutes for.',
          examples: [
            {
              arabic: 'بِنْتُهُ زَيْنَبُ طَبِيبَةٌ',
              english: 'His daughter, Zainab, is a doctor',
            },
            {
              arabic: 'رَأَيْتُ زَمِيلَكَ عَبَّاسًا',
              english: 'I saw your classmate, Abbas',
            },
            {
              arabic: 'أَيْنَ أَخُوكَ الْحُسَيْنُ؟',
              english: 'Where is your brother, al-Husain?',
            },
          ],
        },
        {
          title: 'Dhu / Dhaa in Nominative and Accusative',
          arabicTitle: 'ذُو / ذَا',
          explanation:
            'Dhu is used in the nominative (marfu\') and becomes dha in the accusative (mansub).',
          examples: [
            {
              arabic: 'عِنْدِي دَفْتَرٌ ذُو وَرَقٍ مُسَطَّرٍ',
              english: 'I have a notebook with lined paper (nominative)',
            },
            {
              arabic: 'أُرِيدُ مُصْحَفًا ذَا حَرْفٍ كَبِيرٍ',
              english: 'I want a Mushaf with large letters (accusative)',
            },
          ],
        },
        {
          title: 'aakhar / ukhraa: Another',
          arabicTitle: 'آخَرُ / أُخْرَى',
          explanation:
            'Aakhar (masculine) and ukhraa (feminine) mean "another." Both are diptotes.',
          examples: [
            {
              arabic: 'عِنْدِي قَلَمٌ آخَرُ',
              english: 'I have another pen',
            },
            {
              arabic: 'حَفِظْتُ سُورَةَ الرَّحْمَنِ وَسُورَةً أُخْرَى',
              english: 'I memorized Surah ar-Rahman and another surah',
            },
          ],
        },
        {
          title: 'ghayr: Other than / Not',
          arabicTitle: 'غَيْرُ',
          explanation:
            'Ghayr is used to negate or express the opposite in an idaafa construction.',
          examples: [
            {
              arabic: 'هَذَا الْوَرَقُ مُسَطَّرٌ، وَهَذَا الْوَرَقُ غَيْرُ مُسَطَّرٍ',
              english: 'This paper is lined, and this paper is not lined',
            },
            {
              arabic: 'هَذَا الْخَبَرُ غَيْرُ صَحِيحٍ',
              english: 'This news is not correct',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُصْحَفٌ', english: 'copy of the Quran', category: 'noun' },
        { arabic: 'حَلْوَى', english: 'sweets, candy', category: 'noun' },
        { arabic: 'قُمَاشٌ', english: 'fabric, cloth', category: 'noun' },
        { arabic: 'صُورَةٌ', english: 'picture, image', category: 'noun' },
        { arabic: 'نَمُوذَجٌ', english: 'model, sample', category: 'noun' },
        { arabic: 'شَيْءٌ', english: 'thing', category: 'noun' },
        { arabic: 'ضَيِّقٌ', english: 'narrow, tight', category: 'adjective' },
        { arabic: 'مُسَطَّرٌ', english: 'lined (paper)', category: 'adjective' },
        { arabic: 'آخَرُ / أُخْرَى', english: 'another (m./f.)', category: 'adjective' },
        { arabic: 'أَسْمَرُ / سَمْرَاءُ', english: 'brown-skinned (m./f.)', category: 'adjective' },
        { arabic: 'غَابَ / يَغِيبُ', english: 'to be absent', category: 'verb' },
        { arabic: 'اشْتَرَى / يَشْتَرِي', english: 'to buy, purchase', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'الأَب',
          arabic: 'أَتُرِيدُونَ شَيْئًا مِنَ السُّوقِ يَا أَبْنَائِي؟',
          english: 'Do you want anything from the market, my children?',
        },
        {
          speaker: 'عُمَر',
          arabic: 'أُرِيدُ قَلَمًا أَحْمَرَ',
          english: 'I want a red pen',
        },
        {
          speaker: 'الأَب',
          arabic: 'سَأَشْتَرِي لَكُمْ مَا تُرِيدُونَ إِنْ شَاءَ اللهُ',
          english: 'I will buy for you what you want, God willing',
        },
      ],
      culturalNotes: [
        'The distinction between al-Qur\'an (the holy text) and al-Mushaf (the physical copy/book) is culturally significant',
        'A father shopping for his children after going to the mosque reflects family dynamics',
        'Children address their father with ya abati (O my father) — a respectful Quranic form',
        'Quranic verses from Surah as-Saff and al-Kafirun illustrate relative ma',
      ],
    },

    // =========================================================
    // LESSON 7
    // =========================================================
    {
      number: 7,
      title: 'Lesson 7',
      arabicTitle: 'الدَّرْسُ السَّابِعُ',
      theme:
        'Expressing desire with an, purpose with laam at-ta\'liil, possibility with yumkinu, and since with mundhu',
      grammar: [
        {
          title: 'Expressing Desire with an + Subjunctive',
          arabicTitle: 'أَنْ + الْمُضَارِع الْمَنْصُوب',
          explanation:
            'The particle an is used after verbs of wanting, forgetting, and ability to introduce a subordinate verb. The verb after an is mansub (subjunctive).',
          examples: [
            {
              arabic: 'أُرِيدُ أَنْ أَذْهَبَ',
              english: 'I want to go',
            },
            {
              arabic: 'نَسِيتُ أَنْ أَكْتُبَ الدَّرْسَ',
              english: 'I forgot to write the lesson',
            },
            {
              arabic: 'أُرِيدُ أَنْ أَحْفَظَ الْقُرْآنَ الْكَرِيمَ',
              english: 'I want to memorize the Noble Quran',
            },
          ],
        },
        {
          title: 'Laam of Purpose (in order to)',
          arabicTitle: 'لَامُ التَّعْلِيلِ',
          explanation:
            'This laam is placed before a mudaari\' verb to express purpose ("in order to", "so that"). The verb after it is also mansub.',
          examples: [
            {
              arabic: 'نَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ لِنَفْهَمَ الْقُرْآنَ الْكَرِيمَ',
              english: 'We study Arabic to understand the Noble Quran',
            },
            {
              arabic: 'خَرَجْتُ مِنَ الْفَصْلِ لِأَشْرَبَ الْمَاءَ',
              english: 'I left the classroom to drink water',
            },
            {
              arabic: 'خَلَقَنَا اللهُ تَعَالَى لِنَعْبُدَهُ',
              english: 'Allah created us so that we may worship Him',
            },
          ],
        },
        {
          title: 'Expressing Possibility (yumkinu)',
          arabicTitle: 'يُمْكِنُ',
          explanation:
            'The verb yumkinu (it is possible) is used with pronoun suffixes and followed by an + subjunctive.',
          examples: [
            {
              arabic: 'أَيُمْكِنُنِي أَنْ أَجْلِسَ هُنَا؟',
              english: 'May I sit here?',
            },
            {
              arabic: 'نَعَمْ، يُمْكِنُكَ أَنْ تَجْلِسَ',
              english: 'Yes, you may sit',
            },
            {
              arabic: 'لَا يُمْكِنُهُ أَنْ يَخْرُجَ الْآنَ',
              english: 'He cannot go out now',
            },
          ],
        },
        {
          title: 'Since (mundhu)',
          arabicTitle: 'مُنْذُ',
          explanation:
            'The preposition mundhu means "since" and is followed by a majrur noun.',
          examples: [
            {
              arabic: 'مَا رَأَيْتُهُ مُنْذُ يَوْمِ السَّبْتِ',
              english: 'I have not seen him since Saturday',
            },
            {
              arabic: 'بِلَالٌ غَائِبٌ مُنْذُ أُسْبُوعٍ',
              english: 'Bilal has been absent for a week',
            },
            {
              arabic: 'أَعْرِفُ هَذَا الشَّيْخَ مُنْذُ خَمْسِ سَنَوَاتٍ',
              english: 'I have known this sheikh for five years',
            },
          ],
        },
        {
          title: 'Verb-Subject Gender Agreement',
          arabicTitle: 'مُطَابَقَة الْفِعْل وَالْفَاعِل',
          explanation:
            'If the subject is a feminine human or animal, the verb must be feminine. If the subject is a non-human feminine noun, the verb may be masculine or feminine.',
          examples: [
            {
              arabic: 'دَخَلَتْ آمِنَةُ',
              english: 'Aminah entered (must be feminine — human)',
            },
            {
              arabic: 'خَرَجَتِ الْبَقَرَةُ',
              english: 'The cow went out (must be feminine — animal)',
            },
            {
              arabic: 'خَرَجَ السَّيَّارَةُ / خَرَجَتِ السَّيَّارَةُ',
              english: 'The car went out (either is acceptable — non-living)',
            },
          ],
        },
        {
          title: 'To Permit (samaha)',
          arabicTitle: 'سَمَحَ',
          explanation:
            'The verb samaha (to permit) takes la- for the person and bi- for the action.',
          examples: [
            {
              arabic: 'سَمَحَ لَهُ بِالْخُرُوجِ',
              english: 'He permitted him to leave',
            },
            {
              arabic: 'اسْمَحْ لِي بِالْجُلُوسِ هُنَا',
              english: 'Permit me to sit here',
            },
          ],
        },
        {
          title: 'Seasons of the Year',
          arabicTitle: 'أَسْمَاءُ فُصُولِ السَّنَةِ',
          explanation: 'The four seasons of the year in Arabic.',
          examples: [
            {
              arabic: 'الشِّتَاءُ / الرَّبِيعُ / الصَّيْفُ / الْخَرِيفُ',
              english: 'Winter / Spring / Summer / Autumn',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'عُطْلَةٌ', english: 'holiday', category: 'noun' },
        { arabic: 'الْعَامُ الْمُقْبِلُ', english: 'next year', category: 'noun' },
        { arabic: 'الذُّبَابُ', english: 'flies', category: 'noun' },
        { arabic: 'مِصْرُ', english: 'Egypt', category: 'noun' },
        { arabic: 'إِعْلَانٌ', english: 'public announcement', category: 'noun' },
        { arabic: 'أَهْلٌ', english: 'people, family', category: 'noun' },
        { arabic: 'ظَرْفٌ', english: 'envelope', category: 'noun' },
        { arabic: 'ضَوْضَاءُ', english: 'noise', category: 'noun' },
        { arabic: 'عَشَاءٌ', english: 'supper', category: 'noun' },
        { arabic: 'عِلَاجٌ', english: 'treatment', category: 'noun' },
        { arabic: 'هُدُوءٌ', english: 'calmness', category: 'noun' },
        { arabic: 'أَرْجُو', english: 'I request, I hope', category: 'verb' },
        { arabic: 'بَصَقَ / يَبْصُقُ', english: 'to spit', category: 'verb' },
        { arabic: 'سَمَحَ / يَسْمَحُ', english: 'to permit', category: 'verb' },
        { arabic: 'بَدَأَ / يَبْدَأُ', english: 'to commence', category: 'verb' },
        { arabic: 'أَمْكَنَ / يُمْكِنُ', english: 'to be able', category: 'verb' },
        { arabic: 'بَقِيَ / يَبْقَى', english: 'to remain', category: 'verb' },
        { arabic: 'رَجَا / يَرْجُو', english: 'to request', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'عَمَّار',
          arabic: 'أُرِيدُ أَنْ أَذْهَبَ إِلَى مِصْرَ',
          english: 'I want to go to Egypt',
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'نَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ لِنَفْهَمَ الْقُرْآنَ الْكَرِيمَ وَالْحَدِيثَ النَّبَوِيَّ',
          english:
            'We study Arabic to understand the Noble Quran and the Prophetic Hadith',
        },
        {
          speaker: 'مُوسَى',
          arabic: 'أُرِيدُ أَنْ أَذْهَبَ إِلَى الْوِلَايَاتِ الْمُتَّحِدَةِ لِلْعِلَاجِ',
          english:
            'I want to go to the United States for treatment',
        },
      ],
      culturalNotes: [
        'Students learn Arabic to understand the Quran — the religious purpose of language study is repeatedly emphasized',
        'Summer holiday plans include visiting family across countries: Egypt, India, Pakistan',
        'The expression shafaaka Allah (May Allah cure you) is said when a student mentions illness',
        'Students come from many countries to study at the Islamic University of Madinah',
      ],
    },

    // =========================================================
    // LESSON 8
    // =========================================================
    {
      number: 8,
      title: 'Lesson 8',
      arabicTitle: 'الدَّرْسُ الثَّامِنُ',
      theme:
        'Full mudaari\' mansub conjugation, alla (contracted negation), the preposition ka, emphasis with kull, and the vocative ya',
      grammar: [
        {
          title: 'Full Conjugation of the Mudaari\' Mansub',
          arabicTitle: 'الْمُضَارِعُ الْمَنْصُوب',
          explanation:
            'After an, the mudaari\' verb enters the mansub (subjunctive) state. For singular forms, dammah changes to fathah. For plural forms ending in nuun, the nuun is dropped. Feminine plural forms (tadhhab-na, yadhhab-na) remain unchanged (mabniyy).',
          examples: [
            {
              arabic: 'يَذْهَبُ → أَنْ يَذْهَبَ',
              english: 'He goes → that he go (dammah to fathah)',
            },
            {
              arabic: 'يَذْهَبُونَ → أَنْ يَذْهَبُوا',
              english: 'They go → that they go (nuun dropped)',
            },
            {
              arabic: 'تَذْهَبِينَ → أَنْ تَذْهَبِي',
              english: 'You (f.) go → that you go (nuun dropped)',
            },
          ],
          rules: [
            'Singular forms: dammah changes to fathah (yadhhabu → yadhhaba)',
            'Masculine plurals and feminine singular: nuun is dropped (yadhhab-uuna → yadhhab-uu)',
            'Feminine plurals: no change (tadhhab-na stays tadhhab-na)',
          ],
        },
        {
          title: 'Contracted Negation: alla',
          arabicTitle: 'أَلَّا = أَنْ لَا',
          explanation:
            'The combination of an + la contracts to alla (that ... not).',
          examples: [
            {
              arabic: 'أَرْجُو أَنْ تَدْخُلَ / أَرْجُو أَلَّا تَدْخُلَ',
              english: 'I request you to enter / I request you not to enter',
            },
            {
              arabic: 'أَرْجُو أَلَّا تَجْلِسَ هُنَا',
              english: 'I request you not to sit here',
            },
          ],
        },
        {
          title: 'The Preposition ka (like)',
          arabicTitle: 'كَ',
          explanation:
            'Ka is a preposition meaning "like." The noun following it is majrur. With pronouns, the word mithlu is inserted.',
          examples: [
            {
              arabic: 'هَذِهِ الْمَدْرَسَةُ كَالْمَسْجِدِ',
              english: 'This school is like a mosque',
            },
            {
              arabic: 'أَنْتَ كَأَخِي',
              english: 'You are like my brother',
            },
            {
              arabic: 'أَنَا كَمِثْلِهِ',
              english: 'I am like him (with mithlu for pronouns)',
            },
          ],
        },
        {
          title: 'Emphasis with kull (all)',
          arabicTitle: 'التَّوْكِيد بِـ كُلّ',
          explanation:
            'Kull is used for emphasis (all, entire). It attaches to a pronoun suffix and agrees in case with the word it emphasizes.',
          examples: [
            {
              arabic: 'حَضَرَ الطُّلَّابُ كُلُّهُمْ',
              english: 'All the students attended (marfu\')',
            },
            {
              arabic: 'قَرَأْتُ الْكِتَابَ كُلَّهُ',
              english: 'I read the entire book (mansub)',
            },
            {
              arabic: 'بَحَثْتُ عَنْهُ فِي الْمَدْرَسَةِ كُلِّهَا',
              english: 'I looked for him in the whole school (majrur)',
            },
          ],
        },
        {
          title: 'The Vocative ya with Definite Nouns',
          arabicTitle: 'يَا أَيُّهَا',
          explanation:
            'When calling a definite noun (with al-), the word ayyuhaa is inserted between ya and the noun.',
          examples: [
            {
              arabic: 'يَا بِلَالُ! / يَا رَجُلُ!',
              english: 'O Bilal! / O man! (no al-, direct)',
            },
            {
              arabic: 'يَا أَيُّهَا النَّاسُ!',
              english: 'O people! (with al-, ayyuhaa inserted)',
            },
            {
              arabic: 'يَا أَيُّهَا الرَّجُلُ!',
              english: 'O man! (with al-)',
            },
          ],
        },
        {
          title: 'Verbal Nouns (ism al-fi\'l)',
          arabicTitle: 'اسْمُ الْفِعْلِ',
          explanation:
            'Nouns that carry the force of verbs.',
          examples: [
            {
              arabic: 'هَيَّا بِنَا',
              english: 'Come along',
            },
            {
              arabic: 'آمِينَ',
              english: 'Accept my prayer (Amen)',
            },
            {
              arabic: 'أُفٍّ',
              english: 'I am bored / disgusted',
            },
          ],
        },
        {
          title: 'Demonstrative haadhaa with Idaafa',
          arabicTitle: 'هَذَا مَعَ الإِضَافَة',
          explanation:
            'When a noun is in an idaafa (possessive construction), haadhaa comes at the end because the mudaf cannot take al-.',
          examples: [
            {
              arabic: 'كِتَابُ التَّارِيخِ هَذَا',
              english: 'This book of history (haadhaa at the end)',
            },
            {
              arabic: 'غُرْفَةُ النَّوْمِ هَذِهِ',
              english: 'This bedroom',
            },
            {
              arabic: 'خُذْ كِتَابِي هَذَا',
              english: 'Take this book of mine',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'عَادَةٌ', english: 'habit', category: 'noun' },
        { arabic: 'مُتْحَفٌ', english: 'museum', category: 'noun' },
        { arabic: 'عُلْبَةٌ', english: 'packet, tin', category: 'noun' },
        { arabic: 'مَلَابِسُ', english: 'clothes', category: 'noun' },
        { arabic: 'سَيِّدٌ', english: 'gentleman', category: 'noun' },
        { arabic: 'عُنْوَانٌ', english: 'address', category: 'noun' },
        { arabic: 'حَدِيقَةُ الْحَيَوَانَاتِ', english: 'zoo', category: 'noun' },
        { arabic: 'عُطْلَةُ الصَّيْفِ', english: 'summer holidays', category: 'noun' },
      ],
      dialogues: [
        {
          speaker: 'حَامِد',
          arabic: 'اِرْجِعِي قَبْلَ صَلَاةِ الْمَغْرِبِ',
          english: 'Return before Maghrib prayer',
        },
        {
          speaker: 'آمِنَة',
          arabic: 'إِنْ شَاءَ اللهُ',
          english: 'God willing',
        },
        {
          speaker: 'الأَبْنَاء',
          arabic: 'نُرِيدُ أَنْ نَذْهَبَ إِلَى الْمَسْجِدِ ثُمَّ إِلَى السُّوقِ',
          english: 'We want to go to the mosque then to the market',
        },
      ],
      culturalNotes: [
        'Daily life is structured around the five prayers: Hamid tells Aminah to return before Maghrib prayer',
        'The sons plan to go to the mosque before shopping, showing the priority of worship',
        'In sha Allah (God willing) is used naturally when agreeing to tasks',
        'Hospital etiquette: hospitals don\'t allow bringing many items for patients',
      ],
    },

    // =========================================================
    // LESSON 9
    // =========================================================
    {
      number: 9,
      title: 'Lesson 9',
      arabicTitle: 'الدَّرْسُ التَّاسِعُ',
      theme:
        'The negative future particle lan, emphasis words abadan and qattu, and Quranic/hadith references',
      grammar: [
        {
          title: 'The Negative Particle lan (will not)',
          arabicTitle: 'لَنْ',
          explanation:
            'Lan is used to negate the future tense. Like an, the verb following it is mansub (subjunctive). When lan is used, the particle of futurity (sa-/sawfa) is dropped. The nuun is dropped from plural/feminine forms just as with an.',
          examples: [
            {
              arabic: 'لَنْ أَذْهَبَ إِلَى الرِّيَاضِ غَدًا',
              english: 'I will not go to Riyadh tomorrow',
            },
            {
              arabic: 'لَنْ أَشْرَبَ الْخَمْرَ أَبَدًا',
              english: 'I will never drink wine',
            },
            {
              arabic: 'لَنْ يَذْهَبُوا إِلَى الْهِنْدِ هَذَا الْعَامَ',
              english: 'They will not go to India this year (nuun dropped: yaddhabuu)',
            },
          ],
          rules: [
            'Past negation: ma + past verb (ma dhahabtu)',
            'Present negation: la + present verb (la adhhabu)',
            'Future negation: lan + mansub present verb (lan adhhaba)',
            'The sa-/sawfa prefix is dropped when lan is used',
            'Nuun dropped from yadhhab-uuna → yadhhab-uu, tadhhab-iina → tadhhab-ii after lan',
            'Feminine plural forms remain unchanged: tadhhab-na stays tadhhab-na',
          ],
        },
        {
          title: 'Emphasis Words: abadan and qattu',
          arabicTitle: 'أَبَدًا وَ قَطُّ',
          explanation:
            'Abadan (never/ever) is used to emphasize a negative verb in the future. Qattu (never) is used to emphasize a negative verb in the past.',
          examples: [
            {
              arabic: 'لَنْ أَكْتُبَ إِلَيْهِ أَبَدًا',
              english: 'I will never write to him (abadan with future)',
            },
            {
              arabic: 'مَا رَأَيْتُهُ قَطُّ',
              english: 'I never saw him (qattu with past)',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'آسِفٌ', english: 'sorry', category: 'adjective' },
        { arabic: 'سِفَارَةٌ', english: 'embassy', category: 'noun' },
        { arabic: 'مَصْرِفٌ', english: 'bank', category: 'noun' },
        { arabic: 'هِنْدِيٌّ', english: 'Indian', category: 'adjective' },
        { arabic: 'مُتْعَبٌ', english: 'tired', category: 'adjective' },
        { arabic: 'خَمْرٌ', english: 'wine', category: 'noun' },
        { arabic: 'حَرِيرٌ', english: 'silk', category: 'noun' },
        { arabic: 'مَوْجُودٌ', english: 'present, available', category: 'adjective' },
        { arabic: 'الدُّنْيَا', english: 'the world (this life)', category: 'noun' },
        { arabic: 'الْآخِرَةُ', english: 'the Hereafter', category: 'noun' },
        { arabic: 'مُسْتَقْبَلٌ', english: 'future', category: 'noun' },
        { arabic: 'أَبَدًا', english: 'never (future)', category: 'adverb' },
        { arabic: 'أَحَدٌ', english: 'one, anybody', category: 'noun' },
        { arabic: 'عَامٌ', english: 'year', category: 'noun' },
        { arabic: 'عُمْرَةٌ', english: 'Umrah (minor pilgrimage)', category: 'noun' },
        { arabic: 'صَبَرَ / يَصْبِرُ', english: 'to have patience', category: 'verb' },
        { arabic: 'تَرَكَ / يَتْرُكُ', english: 'to leave, to neglect', category: 'verb' },
        { arabic: 'اعْتَمَرَ / يَعْتَمِرُ', english: 'to perform Umrah', category: 'verb' },
        { arabic: 'لَبِسَ / يَلْبَسُ', english: 'to wear', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'عَمْرو',
          arabic: 'أُرِيدُ أَنْ تَشْتَرِيَ لِي كِتَابًا بِالأُرْدِيَّةِ مِنَ الْهِنْدِ',
          english: 'I want you to buy me a book in Urdu from India',
        },
        {
          speaker: 'أَيُّوب',
          arabic: 'آسِفٌ. لَنْ أَذْهَبَ إِلَى الْهِنْدِ هَذَا الصَّيْفَ',
          english: "Sorry. I won't be going to India this summer.",
        },
        {
          speaker: 'عَمْرو',
          arabic: 'جَزَاكَ اللهُ خَيْرًا',
          english: 'May Allah reward you with good',
        },
      ],
      culturalNotes: [
        'Quranic verse from Surah al-Baqarah (2:61): ya Muusa lan nasbira ala ta\'aamin waahidin (O Musa, we will never be patient with one food)',
        'Hadith from Sahih al-Bukhari about silk: whoever wears silk in this world will not wear it in the Hereafter',
        'Students plan visits to Makkah for Umrah and to relatives across Baghdad, Riyadh, and Madinah',
        'Jazaaka Allahu khayran (May Allah reward you with good) is a common expression of gratitude',
        'The prohibition of wine and silk reflects Islamic values taught alongside grammar',
      ],
    },

    // =========================================================
    // LESSON 10
    // =========================================================
    {
      number: 10,
      title: 'Lesson 10',
      arabicTitle: 'الدَّرْسُ الْعَاشِرُ',
      theme: 'The dual form (al-muthanna) in all grammatical cases',
      grammar: [
        {
          title: 'The Dual (al-Muthanna)',
          arabicTitle: 'الْمُثَنَّى',
          explanation:
            'Dual nouns use the ending -aani for the nominative and -ayni for both the accusative and genitive. The dual has only two distinct forms.',
          examples: [
            {
              arabic: 'هٰذَانِ رِيَالَانِ',
              english: 'These are two riyals (nominative: -aani)',
            },
            {
              arabic: 'أُرِيدُ رِيَالَيْنِ',
              english: 'I want two riyals (accusative: -ayni)',
            },
            {
              arabic: 'اشْتَرَيْتُهُ بِرِيَالَيْنِ',
              english: 'I bought it for two riyals (genitive: -ayni)',
            },
          ],
          rules: [
            'Nominative (marfu\'): -aani (mudaris-aani, riyal-aani)',
            'Accusative (mansub): -ayni (mudaris-ayni, riyal-ayni)',
            'Genitive (majrur): -ayni (mudaris-ayni, riyal-ayni)',
            'The dual has only two distinct forms: -aani for nominative, -ayni for accusative and genitive',
          ],
        },
        {
          title: 'One of them... and the other',
          arabicTitle: 'أَحَدُهُمَا ... وَالْآخَرُ / إِحْدَاهُمَا ... وَالْأُخْرَى',
          explanation:
            'Used with dual nouns to distinguish between two items. Ahaduhuma...wa-l-aakharu for masculine, and ihdaahuma...wa-l-ukhraa for feminine.',
          examples: [
            {
              arabic: 'لِي أَخَوَانِ، أَحَدُهُمَا طَبِيبٌ وَالْآخَرُ مُهَنْدِسٌ',
              english:
                'I have two brothers: one is a doctor and the other is an engineer',
            },
            {
              arabic: 'لِي أُخْتَانِ، إِحْدَاهُمَا مُدَرِّسَةٌ وَالْأُخْرَى مُمَرِّضَةٌ',
              english:
                'I have two sisters: one is a teacher and the other is a nurse',
            },
            {
              arabic: 'عِنْدِي قَلَمَانِ، أَحَدُهُمَا أَزْرَقُ وَالْآخَرُ أَحْمَرُ',
              english:
                'I have two pens: one is blue and the other is red',
            },
          ],
        },
        {
          title: 'Dhu / Dhaat with Dual',
          arabicTitle: 'ذُو / ذَات مَعَ الْمُثَنَّى',
          explanation:
            'The possessive word dhu/dhaat is used in dual contexts to describe nouns with two features.',
          examples: [
            {
              arabic: 'هٰذَا الْقَلَمُ ذُو اللَّوْنَيْنِ مُفِيدٌ جِدًّا',
              english: 'This two-coloured pen is very useful',
            },
            {
              arabic: 'ذٰلِكَ الْمَسْجِدُ ذُو الْمَنَارَتَيْنِ جَمِيلٌ جِدًّا',
              english: 'That mosque with the two minarets is very beautiful',
            },
            {
              arabic: 'أَنَا لَا أُحِبُّ ذَاكَ الرَّجُلَ فَإِنَّهُ ذُو وَجْهَيْنِ',
              english:
                "I don't like that man because he is two-faced (a hypocrite)",
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُفِيدٌ', english: 'useful', category: 'adjective' },
        { arabic: 'مِخَدَّةٌ', english: 'pillow', category: 'noun' },
        { arabic: 'مُشْطٌ', english: 'comb', category: 'noun' },
        { arabic: 'مِرْآةٌ', english: 'mirror', category: 'noun' },
        { arabic: 'تَفْسِيرٌ', english: 'commentary of the Quran', category: 'noun' },
        { arabic: 'السِّيرَةُ', english: "the Prophet's biography", category: 'noun' },
        { arabic: 'ذُو وَجْهَيْنِ', english: 'hypocrite (lit. two-faced)', category: 'expression' },
        { arabic: 'لِصٌّ', english: 'thief', category: 'noun' },
        { arabic: 'زِرٌّ', english: 'button', category: 'noun' },
        { arabic: 'جُنَيْهٌ', english: 'pound (monetary unit)', category: 'noun' },
        { arabic: 'ذَبَحَ / يَذْبَحُ', english: 'to slaughter', category: 'verb' },
        { arabic: 'شَرَحَ / يَشْرَحُ', english: 'to explain', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'الأَب',
          arabic: 'كَمْ سُورَةً حَفِظْتَ يَا بَشِيرُ؟',
          english: 'How many surahs have you memorized, Bashir?',
        },
        {
          speaker: 'عُمَر',
          arabic: 'أَنَا حَفِظْتُ سُورَتَيْنِ',
          english: 'I memorized two surahs (dual form)',
        },
        {
          speaker: 'مُعَاوِيَة',
          arabic: 'جَاءَ الْيَوْمَ مُدَرِّسَانِ جَدِيدَانِ، أَحَدُهُمَا لِلْفِقْهِ وَالْآخَرُ لِلْحَدِيثِ',
          english:
            'Two new teachers came today: one for Fiqh and the other for Hadith',
        },
      ],
      culturalNotes: [
        'Islamic life in Madinah: students memorize the Quran, study Fiqh and Hadith',
        'Family ties across cities: visiting relatives in Baghdad, Riyadh, and Makkah for Umrah',
        'The idiom dhu wajhayni (two-faced / hypocrite) demonstrates cultural and moral significance of the dual form',
        'Monetary units referenced: riyal, dollar, rupee, and junaih (pound) reflect the diverse international student body',
        'The expression jazaaka Allahu khayran is a standard Islamic expression of gratitude',
      ],
    },
  ],
}
