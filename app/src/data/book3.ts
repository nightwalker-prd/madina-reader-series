import type { Book } from './types'

export const book3: Book = {
  id: 3,
  title: 'Madinah Arabic Reader Book 3',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الثالث',
  description:
    'Book 3 introduces emphatic particles (inna and its sisters), negation with laysa, comparative and superlative adjectives, numbers 11-30, past tense verb conjugation, the subject and object in verbal sentences, the verb kaana, fractions, present tense formation, and telling time. Lessons are taught through conversation-based dialogues set in an Islamic university context.',
  level: 'beginner',
  totalLessons: 10,
  lessons: [
    // =========================================================
    // LESSON 1
    // =========================================================
    {
      number: 1,
      title: 'Lesson 1',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme: 'Introductions, family, and the emphatic particle inna',
      grammar: [
        {
          title: 'The Emphatic Particle inna',
          arabicTitle: 'إِنَّ',
          explanation:
            'Inna is placed at the beginning of a nominal sentence to add emphasis (indeed, surely, verily). It makes the mubtada (subject) accusative (mansub). The subject is then called ismu inna and the predicate is called khabaru inna.',
          examples: [
            {
              arabic: 'الْمُدَرِّسُ جَدِيدٌ → إِنَّ الْمُدَرِّسَ جَدِيدٌ',
              english:
                'The teacher is new → Indeed the teacher is new (mubtada changes from damma to fatha)',
            },
            {
              arabic: 'أَنْتَ غَنِيٌّ → إِنَّكَ غَنِيٌّ',
              english:
                'You are rich → Indeed you are rich (pronoun takes its mansub form)',
            },
            {
              arabic: 'إِنَّهُنَّ مُدَرِّسَاتٌ بِالْمَدْرَسَةِ الثَّانَوِيَّةِ',
              english:
                'Indeed they (f.) are teachers at the secondary school',
            },
          ],
          rules: [
            'Single damma on mubtada changes to single fatha',
            'Double dammas (tanwin) change to double fathas',
            'Pronoun subjects change to their mansub (attached) forms: innahu, innaha, innahum, innahunna, innaka, innaki, innakum, innakunna, innani/inni, innana/inna',
          ],
        },
        {
          title: 'The Particle of Hope/Fear',
          arabicTitle: 'لَعَلَّ',
          explanation:
            'La\'alla is one of the "sisters of inna" (akhawaat inna). It functions identically to inna grammatically (makes the mubtada accusative) and expresses hope or fear.',
          examples: [
            {
              arabic: 'لَعَلَّ الْجَوَّ جَمِيلٌ',
              english: 'I hope the weather is fine',
            },
            {
              arabic: 'لَعَلَّ الْمُدَرِّسَ مَرِيضٌ',
              english: "I'm afraid the teacher is sick",
            },
            {
              arabic: 'لَعَلَّكَ بِخَيْرٍ',
              english: 'I hope you are well',
            },
          ],
        },
        {
          title: 'Possessor of a Quality',
          arabicTitle: 'ذُو',
          explanation:
            'Dhu expresses possession of a quality or attribute. It is always in a mudaf construction, so the following word is majrur. It has gender and number forms: dhu (m.sg.), dhaat (f.sg.), dhawuu (m.pl.), dhawaatu (f.pl.).',
          examples: [
            {
              arabic: 'إِنَّكَ طَالِبٌ ذَكِيٌّ وَمُجْتَهِدٌ وَذُو خُلُقٍ',
              english:
                'Indeed you are an intelligent, hardworking, and well-mannered student',
            },
            {
              arabic: 'هَذِهِ الطَّالِبَةُ ذَاتُ خُلُقٍ',
              english: 'This female student is well-mannered',
            },
            {
              arabic: 'بِلَالٌ ذُو عِلْمٍ، وَأُخْتُهُ ذَاتُ خُلُقٍ',
              english:
                'Bilal is learned, and his sister is well-mannered',
            },
          ],
        },
        {
          title: 'Or in Questions vs. Statements',
          arabicTitle: 'أَمْ و أَوْ',
          explanation:
            'Am is used only in interrogative sentences (questions with hamza), while aw is used in non-interrogative (declarative) sentences.',
          examples: [
            {
              arabic: 'أَطَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟',
              english: 'Are you a doctor or an engineer?',
            },
            {
              arabic: 'خُذْ هَذَا أَوْ ذَاكَ',
              english: 'Take this or that',
            },
          ],
        },
        {
          title: 'Hundred and Thousand',
          arabicTitle: 'مِائَة وَ أَلْف',
          explanation:
            'After mi\'ah (hundred) and alf (thousand), the counted noun (ma\'dud) is singular and majrur.',
          examples: [
            {
              arabic: 'مِائَةُ كِتَابٍ',
              english: 'One hundred books',
            },
            {
              arabic: 'أَلْفُ رِيَالٍ',
              english: 'One thousand riyals',
            },
            {
              arabic: 'أَلْفُ مُسْلِمَةٍ وَمِائَةُ طَالِبَةٍ',
              english:
                'A thousand Muslim women and a hundred female students',
            },
          ],
        },
        {
          title: 'Defective Nouns',
          arabicTitle: 'الاسْم المَنْقُوص',
          explanation:
            'Words like ghalin (expensive) have their original form ghaliyyun. The ya and its damma are omitted, and the nun of tanwin transfers to the preceding letter. The feminine form retains the full ending.',
          examples: [
            {
              arabic: 'هَذَا الْكِتَابُ غَالٍ',
              english: 'This book is expensive',
            },
            {
              arabic: 'أَبِي قَاضٍ',
              english: 'My father is a judge',
            },
            {
              arabic: 'هَذِهِ السَّاعَةُ غَالِيَةٌ',
              english: 'This watch is expensive (feminine retains full ending)',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'ذَكِيٌّ', english: 'intelligent', category: 'adjective' },
        { arabic: 'غَبِيٌّ', english: 'stupid', category: 'adjective' },
        {
          arabic: 'خُلُقٌ',
          english: 'manners, character',
          category: 'noun',
        },
        { arabic: 'مِائَةٌ', english: 'hundred', category: 'number' },
        { arabic: 'أَلْفٌ', english: 'thousand', category: 'number' },
        { arabic: 'رُوبِيَّةٌ', english: 'rupee', category: 'noun' },
        { arabic: 'مُتَزَوِّجٌ', english: 'married', category: 'adjective' },
        { arabic: 'عَزَبٌ', english: 'unmarried', category: 'adjective' },
        {
          arabic: 'يَهُودِيٌّ',
          english: 'a Jew / Jewish',
          category: 'noun',
        },
        { arabic: 'مُعْجَمٌ', english: 'dictionary', category: 'noun' },
        { arabic: 'صَفْحَةٌ', english: 'page', category: 'noun' },
        { arabic: 'دُولَارٌ', english: 'dollar', category: 'noun' },
        {
          arabic: 'نَاجِحٌ',
          english: 'one who has passed (an exam)',
          category: 'adjective',
        },
        { arabic: 'كُمٌّ', english: 'sleeve', category: 'noun' },
        { arabic: 'غَالٍ', english: 'expensive', category: 'adjective' },
      ],
      dialogues: [
        {
          speaker: 'هَاشِم',
          arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
          english: 'Peace be upon you, and the mercy of Allah and His blessings',
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
          english:
            'And upon you peace, and the mercy of Allah and His blessings',
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'إِنَّكَ طَالِبٌ ذَكِيٌّ وَمُجْتَهِدٌ وَذُو خُلُقٍ',
          english:
            'Indeed you are an intelligent, hardworking, and well-mannered student',
        },
      ],
      culturalNotes: [
        'Islamic greetings are used throughout: the full form as-salaamu alaykum wa rahmatullaahi wa barakaatuh',
        'The dialogues reflect an international Islamic university setting with students from India, Pakistan, the United States, Japan, and other countries',
        'Currency references include rupees, riyals, and dollars, reflecting the multicultural context',
        'Family structure and relationships (brothers, sisters, sons, daughters) are central conversational topics',
      ],
    },

    // =========================================================
    // LESSON 2
    // =========================================================
    {
      number: 2,
      title: 'Lesson 2',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme: 'Negation with laysa and the particle inna in context',
      grammar: [
        {
          title: 'Negation with laysa (is not)',
          arabicTitle: 'لَيْسَ',
          explanation:
            'Laysa means "is not" and is used in nominal sentences. The subject is called ismu laysa and the predicate takes the preposition bi and becomes majrur. The feminine form is laysat. When the predicate is already a prepositional phrase, bi is NOT added.',
          examples: [
            {
              arabic: 'هُوَ لَيْسَ بِمُسْلِمٍ',
              english: 'He is not a Muslim',
            },
            {
              arabic: 'لَيْسَتْ زَيْنَبُ بِمَرِيضَةٍ',
              english: 'Zainab is not sick',
            },
            {
              arabic: 'لَيْسَ لِي إِخْوَةٌ',
              english: 'I have no brothers',
            },
          ],
          rules: [
            'Conjugation: laysa (he), laysat (she), laysuu (they m.), lasna (they f.), lasta (you m.s.), lasti (you f.s.), lastum (you m.pl.), lastunna (you f.pl.), lastu (I), lasna (we)',
            'The predicate takes bi + majrur case',
            'When predicate is already prepositional (e.g. min al-hind), bi is not added',
          ],
        },
        {
          title: 'The Particle some',
          arabicTitle: 'بَعْض',
          explanation:
            'Ba\'d (some) is used with pronoun suffixes to express "some of them."',
          examples: [
            {
              arabic:
                'بَعْضُهُنَّ فِي الْمَدْرَسَةِ الابْتِدَائِيَّةِ وَبَعْضُهُنَّ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ',
              english:
                'Some of them are in elementary school and some of them are in middle school',
            },
            {
              arabic: 'إِنَّ بَعْضَهُمْ تُجَّارٌ وَبَعْضَهُمْ مُهَنْدِسُونَ',
              english:
                'Some of them are merchants and some are engineers',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'لِقَاءٌ', english: 'meeting', category: 'noun' },
        { arabic: 'جَيِّدٌ', english: 'good', category: 'adjective' },
        { arabic: 'جَيْبٌ', english: 'pocket', category: 'noun' },
        { arabic: 'نَهْرٌ', english: 'river', category: 'noun' },
        { arabic: 'بَرْقِيَّةٌ', english: 'telegram', category: 'noun' },
        { arabic: 'مَصْرِفٌ', english: 'bank', category: 'noun' },
        {
          arabic: 'مَكْتَبُ الْبَرِيدِ',
          english: 'post office',
          category: 'noun',
        },
      ],
      dialogues: [
        {
          speaker: 'هِشَام',
          arabic:
            'أَنَا مُدَرِّسٌ جَدِيدٌ بِالْجَامِعَةِ. اسْمِي هِشَامٌ. أَنَا مِنَ الْوِلَايَاتِ الْمُتَّحِدَةِ',
          english:
            'I am a new teacher at the university. My name is Hisham. I am from the United States.',
        },
        {
          speaker: 'بِلَال',
          arabic:
            'أَهْلًا وَسَهْلًا وَمَرْحَبًا بِكَ يَا أَخِي. أَنَا مَسْرُورٌ بِلِقَائِكَ',
          english: 'Welcome, my brother. I am pleased to meet you.',
        },
        {
          speaker: 'هِشَام',
          arabic: 'هُنَّ لَسْنَ بِمُتَزَوِّجَاتٍ. إِنَّهُنَّ صِغَارٌ',
          english: 'They are not married. They are young.',
        },
      ],
      culturalNotes: [
        'In the patronymic construction with ibn, the alif of ibn is omitted in writing',
        'Man al-akh (Who is the brother?) is a polite way of asking a stranger who he is',
        'School types mentioned: al-madrasa al-ibtidaa\'iyya (elementary), al-madrasa al-mutawassita (middle), al-madrasa ath-thaanawiyya (secondary)',
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
        'Comparative and superlative adjectives, compound numbers 11-20, ordinal numbers',
      grammar: [
        {
          title: 'Comparative and Superlative (ism at-tafdiil)',
          arabicTitle: 'اسْمُ التَّفْضِيلِ',
          explanation:
            'Both the comparative and superlative in Arabic use the pattern af\'alu. For comparative, it is followed by min (more ... than). For superlative, it is followed by an indefinite majrur noun. The same form is used for masculine, feminine, singular, and plural. Words on the af\'alu pattern are diptotes (no tanwin).',
          examples: [
            {
              arabic: 'حَامِدٌ أَطْوَلُ مِنْ بِلَالٍ',
              english: 'Hamid is taller than Bilal',
            },
            {
              arabic: 'إِبْرَاهِيمُ أَحْسَنُ طَالِبٍ فِي الْمَدْرَسَةِ',
              english: 'Ibrahim is the best student in the school',
            },
            {
              arabic: 'الْأَزْهَرُ أَقْدَمُ جَامِعَةٍ فِي الْعَالَمِ',
              english: 'Al-Azhar is the oldest university in the world',
            },
          ],
          rules: [
            'Comparative: af\'alu + min (ajmalu, ahsanu, asghar, akbar, aqdam, atwalu, as-halu, andhaf, arkhas, ab\'ad, aqsar)',
            'Superlative: af\'alu + indefinite majrur noun',
            'Same form for all genders and numbers',
            'When min is followed by a pronoun: minni has shadda on nun, but minhu, minha, minka, minkum do not',
          ],
        },
        {
          title: 'But (contrastive conjunction)',
          arabicTitle: 'لٰكِنَّ',
          explanation:
            'Laakinna is one of the sisters of inna. It means "but" and follows the same grammatical rules: the noun after it is mansub.',
          examples: [
            {
              arabic: 'حَامِدٌ مُجْتَهِدٌ لٰكِنَّ صَدِيقَهُ كَسْلَانُ',
              english: 'Hamid is hardworking, but his friend is lazy',
            },
            {
              arabic: 'سَيَّارَتِي قَدِيمَةٌ وَلٰكِنَّهَا قَوِيَّةٌ',
              english: 'My car is old, but it is strong',
            },
          ],
        },
        {
          title: 'As if / It looks as if',
          arabicTitle: 'كَأَنَّ',
          explanation:
            'Ka\'anna is another sister of inna. It means "as if" or "it seems that." The noun following it is mansub.',
          examples: [
            {
              arabic: 'كَأَنَّ الْإِمَامَ مَرِيضٌ',
              english: 'It looks as if the imam is sick',
            },
            {
              arabic: 'كَأَنَّكَ مِنَ الْهِنْدِ',
              english: 'You seem to be from India',
            },
          ],
        },
        {
          title: 'Compound Numbers 11-20',
          arabicTitle: 'الأَعْدَاد الْمُرَكَّبَة',
          explanation:
            'Compound numbers from 11 to 20 with a masculine counted noun. The counted noun is singular and mansub. For 11 and 12, both parts agree with the ma\'dud in gender. For 13-19, the second part agrees with the ma\'dud while the first part does not (polarity rule). Numbers 13-19 are indeclinable (mabniyy). Twenty (ishruuna) has the same form for both masculine and feminine.',
          examples: [
            {
              arabic: 'فِي فَصْلِنَا أَرْبَعَةَ عَشَرَ طَالِبًا',
              english: 'In our class there are fourteen students',
            },
            {
              arabic: 'ثَلَاثَةَ عَشَرَ رِيَالًا',
              english: 'Thirteen riyals',
            },
            {
              arabic: 'عِشْرُونَ طَالِبًا',
              english: 'Twenty students',
            },
          ],
        },
        {
          title: 'Ordinal Numbers 1st to 10th',
          arabicTitle: 'الأَعْدَاد التَّرْتِيبِيَّة',
          explanation:
            'Ordinal numbers from 1st to 10th follow the pattern faa\'ilun. They are used as adjectives following the counted noun.',
          examples: [
            {
              arabic: 'الدَّرْسُ الْأَوَّلُ',
              english: 'The first lesson',
            },
            {
              arabic: 'الْمَهْجَعُ الْخَامِسُ',
              english: 'The fifth dormitory',
            },
            {
              arabic: 'الدَّرْسُ الْعَاشِرُ',
              english: 'The tenth lesson',
            },
          ],
        },
        {
          title: 'Tag Question and Affirmative Reply',
          arabicTitle: 'أَلَيْسَ كَذٰلِكَ؟ وَ بَلَى',
          explanation:
            'Alaysa kadhalika means "isn\'t it so?" as a tag question seeking confirmation. The answer bala (yes) affirms a negative question.',
          examples: [
            {
              arabic: 'هَذَا جَمِيلٌ، أَلَيْسَ كَذٰلِكَ؟ — بَلَى',
              english: "This is beautiful, isn't it so? — Yes (it is)",
            },
          ],
        },
        {
          title: 'Which of the Two?',
          arabicTitle: 'أَيُّهُمَا',
          explanation:
            'Ayyuhuma is used to ask about a choice between two items or people.',
          examples: [
            {
              arabic: 'أَيُّهُمَا أَحْسَنُ؟',
              english: 'Which of the two is better?',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مَهْجَعٌ', english: 'hostel, dormitory', category: 'noun' },
        { arabic: 'كَوْكَبٌ', english: 'star, planet', category: 'noun' },
        { arabic: 'فَرِيقٌ', english: 'team', category: 'noun' },
        { arabic: 'شَقِيقٌ', english: 'full brother', category: 'noun' },
        { arabic: 'لَاعِبٌ', english: 'player', category: 'noun' },
        { arabic: 'شَهْرٌ', english: 'month', category: 'noun' },
        { arabic: 'وَاسِعٌ', english: 'spacious, large', category: 'adjective' },
        { arabic: 'شَهِيرٌ', english: 'famous', category: 'adjective' },
        { arabic: 'ثَمَنٌ', english: 'price', category: 'noun' },
        { arabic: 'كَسْلَى', english: 'lazy (feminine)', category: 'adjective' },
        { arabic: 'نَافِذَةٌ', english: 'window', category: 'noun' },
        { arabic: 'سِنٌّ', english: 'age, tooth', category: 'noun' },
        { arabic: 'عَالَمٌ', english: 'world', category: 'noun' },
        { arabic: 'الْأَزْهَرُ', english: 'Al-Azhar (university)', category: 'noun' },
      ],
      dialogues: [
        {
          speaker: 'عَلِيّ',
          arabic: 'كَمْ طَالِبًا فِي فَصْلِكُمْ يَا عَلِيُّ؟',
          english: 'How many students are in your class, Ali?',
        },
        {
          speaker: 'أَحْمَد',
          arabic: 'فِي فَصْلِنَا أَرْبَعَةَ عَشَرَ طَالِبًا',
          english: 'In our class there are fourteen students',
        },
        {
          speaker: 'أَحْمَد',
          arabic: 'هُوَ أَصْغَرُ مِنِّي',
          english: 'He is younger than me',
        },
      ],
      culturalNotes: [
        'Bala is used to affirm a negative question (similar to French si or German doch)',
        'Al-Azhar is referenced as the oldest university in the world',
        'The concept of shaqiiq (full brother, sharing both parents) is culturally important in Arabic',
      ],
    },

    // =========================================================
    // LESSON 4
    // =========================================================
    {
      number: 4,
      title: 'Lesson 4',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme: 'Past tense verb conjugation, negation with ma, and because (li-anna)',
      grammar: [
        {
          title: 'The Past Tense Verb',
          arabicTitle: 'الْفِعْل الْمَاضِي',
          explanation:
            'Most Arabic verbs have three root letters called radicals. The basic form is the maadi (past tense). When followed by an explicit subject, the pronoun is dropped. The hidden pronoun is called damiir mustatir. The process of attaching pronouns to the verb is called isnaad.',
          examples: [
            {
              arabic: 'ذَهَبَ بِلَالٌ',
              english: 'Bilal went (he went is understood from the verb form)',
            },
            {
              arabic: 'ذَهَبَتْ آمِنَةُ',
              english: 'Aminah went (she went)',
            },
            {
              arabic: 'ذَهَبْتُ إِلَى السُّوقِ',
              english: 'I went to the market',
            },
          ],
          rules: [
            'dhahaba (he went) - hidden pronoun',
            'dhahabat (she went) - ta is femininity marker',
            'dhahabuu (they m. went) - waw is subject',
            'dhahabna (they f. went) - nun is subject',
            'dhahabta (you m.s. went), dhahabti (you f.s. went), dhahabtu (I went)',
          ],
        },
        {
          title: 'Negation in the Past Tense',
          arabicTitle: 'مَا + الْفِعْل الْمَاضِي',
          explanation:
            'The particle ma is placed before the past tense verb to negate it.',
          examples: [
            {
              arabic: 'مَا ذَهَبْتُ إِلَى السُّوقِ',
              english: 'I did not go to the market',
            },
            {
              arabic: 'مَا خَرَجَ الْإِمَامُ مِنَ الْمَسْجِدِ',
              english: 'The imam did not go out of the mosque',
            },
            {
              arabic: 'دَخَلَ بِلَالٌ وَلَكِنَّهُ مَا جَلَسَ',
              english: 'Bilal entered but he did not sit',
            },
          ],
        },
        {
          title: 'Answering Negative Questions: na\'am vs bala',
          arabicTitle: 'نَعَمْ وَ بَلَى',
          explanation:
            'Na\'am is used to answer affirmative questions (yes). Bala is used to answer negative questions affirmatively. In reply to a negative question: na\'am confirms the negative, while bala contradicts the negative.',
          examples: [
            {
              arabic: 'أَلَسْتَ بِمُسْلِمٍ؟ — بَلَى، أَنَا مُسْلِمٌ',
              english: 'Are you not a Muslim? — Yes (I am), I am a Muslim',
            },
            {
              arabic: 'أَلَسْتَ بِمُسْلِمٍ؟ — نَعَمْ، لَسْتُ بِمُسْلِمٍ',
              english: 'Are you not a Muslim? — No, I am not a Muslim',
            },
          ],
        },
        {
          title: 'Because',
          arabicTitle: 'لِأَنَّ',
          explanation:
            'Li-anna is composed of li (for) + anna (which is a sister of inna). The noun following it takes mansub (accusative) case.',
          examples: [
            {
              arabic: 'مَا خَرَجْتُ مِنَ الْبَيْتِ لِأَنَّ الْجَوَّ بَارِدٌ',
              english: 'I did not go out of the house because the weather is cold',
            },
            {
              arabic: 'ذَهَبَ إِبْرَاهِيمُ إِلَى الْمُسْتَشْفَى لِأَنَّهُ مَرِيضٌ',
              english: 'Ibrahim went to the hospital because he is sick',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'لَا بَأْسَ', english: 'no harm (said to someone sick)', category: 'expression' },
        { arabic: 'شَايٌ', english: 'tea', category: 'noun' },
        { arabic: 'ذَهَبَ', english: 'he went', category: 'verb' },
        { arabic: 'رَجَعَ', english: 'he returned', category: 'verb' },
        { arabic: 'خَرَجَ', english: 'he went out', category: 'verb' },
        { arabic: 'دَخَلَ', english: 'he entered', category: 'verb' },
        { arabic: 'جَلَسَ', english: 'he sat', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'يُوسُف',
          arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
          english: 'Peace be upon you and the mercy of Allah and His blessings',
        },
        {
          speaker: 'إِبْرَاهِيم',
          arabic: 'أَهْلًا وَسَهْلًا وَمَرْحَبًا بِكَ يَا خَالِي',
          english: 'Welcome, my maternal uncle',
        },
        {
          speaker: 'يُوسُف',
          arabic: 'أَيْنَ أَبُوكَ؟ — ذَهَبَ إِلَى السُّوقِ',
          english: 'Where is your father? — He went to the market',
        },
      ],
      culturalNotes: [
        'Ya khaali (O my maternal uncle) is a sign of respect and family warmth',
        'Al-hamdu lillah is the standard response to "how are you?"',
        'La ba\'sa (no harm) is a standard phrase said when visiting the sick',
        'Li-annani mariid (because I am sick) shows the use of li-anna for giving reasons',
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
        'The subject (faa\'il) and object (maf\'uul bihi) in verbal sentences, verb radicals, and object pronouns',
      grammar: [
        {
          title: 'The Subject (al-Faa\'il)',
          arabicTitle: 'الْفَاعِل',
          explanation:
            'The subject of a verbal sentence is called al-faa\'il. It is always marfu\' (nominative). When a verb precedes a plural subject, the verb remains singular (there cannot be two subjects for one verb).',
          examples: [
            {
              arabic: 'ذَهَبَ بِلَالٌ',
              english: 'Bilal went (bilaalun is the faa\'il, marfu\')',
            },
            {
              arabic: 'ذَهَبَ الطُّلَّابُ',
              english:
                'The students went (verb stays singular before plural subject)',
            },
            {
              arabic: 'الطُّلَّابُ ذَهَبُوا',
              english:
                'The students went (nominal sentence: subject comes first, verb carries plural)',
            },
          ],
          rules: [
            'The faa\'il is always marfu\' (nominative)',
            'Verb before plural noun stays SINGULAR: dhahaba at-tullaab (not dhahabuu at-tullaab)',
            'In nominal sentences, the subject comes first and the verb carries plural markers',
          ],
        },
        {
          title: 'The Object (al-Maf\'uul bihi)',
          arabicTitle: 'الْمَفْعُول بِهِ',
          explanation:
            'The object is always mansub (accusative). It can be a noun or a pronoun suffix attached to the verb.',
          examples: [
            {
              arabic: 'فَتَحَ الْوَلَدُ الْبَابَ',
              english: 'The boy opened the door (al-baaba is maf\'uul bihi)',
            },
            {
              arabic: 'رَأَيْتُ حَامِدًا وَسَأَلْتُهُ',
              english: 'I saw Hamid and asked him',
            },
            {
              arabic: 'سَأَلَتِ الْمُدِيرَةُ زَيْنَبَ',
              english: 'The headmistress asked Zainab',
            },
          ],
        },
        {
          title: 'Verb Radicals',
          arabicTitle: 'حُرُوف الْفِعْل',
          explanation:
            'Most Arabic verbs have three root letters (radicals). In the maadi, the first and third radicals always have fathah. The second radical may have fathah, kasrah, or dammah.',
          examples: [
            {
              arabic: 'كَتَبَ (فَعَلَ)',
              english: 'He wrote — pattern fa\'ala (all fathahs)',
            },
            {
              arabic: 'شَرِبَ (فَعِلَ)',
              english: 'He drank — pattern fa\'ila (kasrah on second radical)',
            },
            {
              arabic: 'كَبُرَ (فَعُلَ)',
              english: 'He became big — pattern fa\'ula (dammah on second radical)',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'عِنَبٌ', english: 'grapes', category: 'noun' },
        { arabic: 'مَوْزٌ', english: 'banana', category: 'noun' },
        { arabic: 'تِينٌ', english: 'fig', category: 'noun' },
        { arabic: 'فَجْرٌ', english: 'dawn', category: 'noun' },
        { arabic: 'جَوَابٌ', english: 'answer', category: 'noun' },
        { arabic: 'سُؤَالٌ', english: 'question', category: 'noun' },
        { arabic: 'حَيَّةٌ', english: 'snake', category: 'noun' },
        { arabic: 'بَقَّالٌ', english: 'grocer', category: 'noun' },
        { arabic: 'عَصَا', english: 'stick', category: 'noun' },
        { arabic: 'قَهْوَةٌ', english: 'coffee', category: 'noun' },
        { arabic: 'دُكَّانٌ', english: 'shop', category: 'noun' },
        { arabic: 'سَبُّورَةٌ', english: 'writing board, blackboard', category: 'noun' },
        { arabic: 'خُبْزٌ', english: 'bread', category: 'noun' },
        { arabic: 'كَسَرَ', english: 'he broke', category: 'verb' },
        { arabic: 'سَمِعَ', english: 'he heard', category: 'verb' },
        { arabic: 'فَهِمَ', english: 'he understood', category: 'verb' },
        { arabic: 'شَرِبَ', english: 'he drank', category: 'verb' },
        { arabic: 'حَفِظَ', english: 'he memorized', category: 'verb' },
        { arabic: 'ضَرَبَ', english: 'he beat/hit', category: 'verb' },
        { arabic: 'أَكَلَ', english: 'he ate', category: 'verb' },
        { arabic: 'غَسَلَ', english: 'he washed', category: 'verb' },
        { arabic: 'قَتَلَ', english: 'he killed', category: 'verb' },
        { arabic: 'فَتَحَ', english: 'he opened', category: 'verb' },
        { arabic: 'جَيِّدًا', english: 'well (adverb)', category: 'adverb' },
      ],
      dialogues: [
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'مَنْ فَتَحَ بَابَ الْفَصْلِ؟',
          english: 'Who opened the classroom door?',
        },
        {
          speaker: 'حَامِد',
          arabic: 'أَنَا فَتَحْتُهُ',
          english: 'I opened it',
        },
        {
          speaker: 'طَلْحَة',
          arabic: 'نَعَمْ، فَهِمْتُهُ جَيِّدًا',
          english: 'Yes, I understood it well',
        },
      ],
      culturalNotes: [
        'Quran memorization is central to education: surahs mentioned include at-Tiin and al-Fajr',
        'The classroom dialogue demonstrates teacher-student interactions in an Islamic school setting',
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
        'Past tense ta forms, using anna with verbs of thinking, object pronouns, and feminine numbers 11-20',
      grammar: [
        {
          title: 'Distinguishing ta/tu/ti/at in Past Tense Verbs',
          arabicTitle: 'تْ / تَ / تُ / تِ فِي الْفِعْل الْمَاضِي',
          explanation:
            'The letter ta at the end of a past tense verb changes its voweling based on the subject: dammah (tu) for "I", fathah (ta) for "you m.s.", sukuun (t) for "she", kasrah (ti) for "you f.s."',
          examples: [
            {
              arabic: 'أَنَا ذَهَبْتُ إِلَى الْمَطَارِ',
              english: 'I went to the airport (dhahabtu)',
            },
            {
              arabic: 'أَذَهَبْتَ إِلَى الْمَلْعَبِ يَا يُوسُفُ؟',
              english: 'Did you (m.) go to the playground, Yusuf? (dhahabta)',
            },
            {
              arabic: 'أَذَهَبْتِ إِلَى الْمَكْتَبَةِ يَا فَاطِمَةُ؟',
              english: 'Did you (f.) go to the library, Fatimah? (dhahabti)',
            },
          ],
        },
        {
          title: 'Using anna with Verbs of Thinking',
          arabicTitle: 'أَظُنُّ أَنَّ',
          explanation:
            'Anna is a sister of inna and is used after verbs like adhunnu (I think). Its ism is mansub and its khabar is marfu\'. After qaala (he said), inna is used (not anna).',
          examples: [
            {
              arabic: 'أَظُنُّ أَنَّهُ مَرِيضٌ',
              english: 'I think that he is sick',
            },
            {
              arabic: 'أَظُنُّ أَنَّ الْمُدَرِّسَ مَا جَاءَ',
              english: 'I think that the teacher did not come',
            },
            {
              arabic: 'قَالَ: إِنَّكَ أَحْسَنُ طَالِبٍ فِي الْفَصْلِ',
              english:
                'He said: "You are the best student in the class" (inna after qaala)',
            },
          ],
        },
        {
          title: 'Answering with Appropriate Object Pronouns',
          arabicTitle: 'ضَمَائِر الْمَفْعُول بِهِ',
          explanation:
            'When answering questions, the correct pronoun suffix must match the gender and number of the object: hu (m.s.), hum (m.pl.), ha (f.s.), hunna (f.pl.).',
          examples: [
            {
              arabic: 'أَرَأَيْتَ حَامِدًا؟ — نَعَمْ، رَأَيْتُهُ',
              english: 'Did you see Hamid? — Yes, I saw him',
            },
            {
              arabic: 'أَرَأَيْتَ زَيْنَبَ؟ — نَعَمْ، رَأَيْتُهَا',
              english: 'Did you see Zainab? — Yes, I saw her',
            },
          ],
        },
        {
          title: 'Numbers 11-20 with Feminine Counted Nouns',
          arabicTitle: 'الأَعْدَاد ١١-٢٠ مَعَ الْمَعْدُود الْمُؤَنَّث',
          explanation:
            'For 11 and 12, both parts agree with the feminine counted noun. For 13-19, the second part agrees but the first part does not (polarity rule). The shin in ashar has fathah for masculine and sukuun in ashrata for feminine.',
          examples: [
            {
              arabic: 'إِحْدَى عَشْرَةَ طَالِبَةً',
              english: '11 female students',
            },
            {
              arabic: 'ثَلَاثَ عَشْرَةَ طَالِبَةً',
              english: '13 female students',
            },
            {
              arabic: 'عِشْرُونَ طَالِبَةً',
              english: '20 female students',
            },
          ],
        },
        {
          title: 'The Interrogative ayy (which?)',
          arabicTitle: 'أَيّ',
          explanation:
            'Ayy (which?) is always mudaf, and the noun following it is majrur. Ayy itself changes case depending on its grammatical role in the sentence.',
          examples: [
            {
              arabic: 'أَيُّ طَالِبٍ خَرَجَ؟',
              english: 'Which student went out? (ayy is marfu\')',
            },
            {
              arabic: 'أَيَّ كِتَابٍ قَرَأْتَ؟',
              english: 'Which book did you read? (ayy is mansub)',
            },
            {
              arabic: 'بِأَيِّ قَلَمٍ كَتَبْتَ؟',
              english: 'Which pen did you write with? (ayy is majrur)',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مَجَلَّةٌ', english: 'magazine', category: 'noun' },
        { arabic: 'عِمَارَةٌ', english: 'building', category: 'noun' },
        { arabic: 'سُورَةٌ', english: 'surah (Quran chapter)', category: 'noun' },
        { arabic: 'شَقَّةٌ', english: 'flat, apartment', category: 'noun' },
        { arabic: 'كَلِمَةٌ', english: 'word', category: 'noun' },
        { arabic: 'رَاكِبٌ', english: 'passenger', category: 'noun' },
        { arabic: 'خَادِمٌ', english: 'servant', category: 'noun' },
        { arabic: 'مَسْرُورٌ', english: 'pleased, happy', category: 'adjective' },
        { arabic: 'فَقَطْ', english: 'only', category: 'adverb' },
        { arabic: 'جَاءَ', english: 'he came', category: 'verb' },
        { arabic: 'كَوَى', english: 'he ironed', category: 'verb' },
        { arabic: 'فَرِحَ', english: 'he was pleased', category: 'verb' },
        { arabic: 'يَا بُنَيَّ', english: 'O my little son!', category: 'expression' },
        {
          arabic: 'مَا شَاءَ اللهُ',
          english: 'What Allah wills (expression of appreciation)',
          category: 'expression',
        },
        {
          arabic: 'زَادَكَ اللهُ عِلْمًا',
          english: 'May Allah increase your knowledge!',
          category: 'expression',
        },
      ],
      dialogues: [
        {
          speaker: 'سَعِيد',
          arabic: 'قَرَأْتُ الْيَوْمَ دَرْسًا جَدِيدًا فِي الْفِقْهِ',
          english: 'I read a new lesson in fiqh (Islamic jurisprudence) today',
        },
        {
          speaker: 'مَرْيَم',
          arabic:
            'أَنَا حَفِظْتُ سُورَةَ الْحَدِيدِ، وَهِيَ أَطْوَلُ مِنْ سُورَةِ الرَّحْمَنِ',
          english:
            'I memorized Surah al-Hadid, and it is longer than Surah ar-Rahman',
        },
        {
          speaker: 'الأُمّ',
          arabic: 'مَا شَاءَ اللهُ! إِنَّكَ أَحْسَنُ طَالِبٍ فِي الْفَصْلِ',
          english:
            'Ma sha Allah! You are the best student in the class',
        },
      ],
      culturalNotes: [
        'Quran memorization is central: Surahs ar-Rahman, at-Tiin, al-Fajr, al-Hadiid, and an-Naba are mentioned',
        'The expression ma shaa Allah is used for praise',
        'Zaadaka Allahu ilman (May Allah increase you in knowledge) is a mother\'s supplication',
        'Gender-separated education is reflected in the dialogues',
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
        'Plural past tense conjugations, object pronouns, the verb kaana, dhu/dhaat, and fractions',
      grammar: [
        {
          title: 'Second Person Masculine Plural Past Tense (-tum)',
          arabicTitle: 'ذَهَبْتُمْ',
          explanation:
            'The suffix -tum marks the second person masculine plural past tense.',
          examples: [
            {
              arabic: 'مَاذَا أَكَلْتُمْ يَا إِخْوَانُ؟',
              english: 'What did you eat, brothers?',
            },
            {
              arabic: 'أَقَرَأْتُمُ الْقُرْآنَ؟',
              english: 'Did you (m.pl.) read the Quran?',
            },
          ],
        },
        {
          title: 'Second Person Feminine Plural Past Tense (-tunna)',
          arabicTitle: 'ذَهَبْتُنَّ',
          explanation:
            'The suffix -tunna marks the second person feminine plural past tense.',
          examples: [
            {
              arabic: 'أَقَرَأْتُنَّ هَذِهِ الْمَجَلَّةَ يَا أَخَوَاتُ؟',
              english: 'Did you (f.pl.) read this magazine, sisters?',
            },
          ],
        },
        {
          title: 'First Person Plural Past Tense (-naa)',
          arabicTitle: 'ذَهَبْنَا',
          explanation:
            'The suffix -naa marks the first person plural past tense.',
          examples: [
            {
              arabic: 'مَا سَمِعْنَا الْأَذَانَ',
              english: 'We did not hear the adhan',
            },
          ],
        },
        {
          title: 'Object Pronouns Attached to Verbs',
          arabicTitle: 'ضَمَائِر الْمَفْعُول بِهِ الْمُتَّصِلَة',
          explanation:
            'Object pronouns are added directly to the verb. After kasrah (i-vowel), hu changes to hi. For 2nd person masculine plural, a waaw is inserted between the verb and the pronoun.',
          examples: [
            {
              arabic: 'رَأَيْتُهُ',
              english: 'I saw him',
            },
            {
              arabic: 'رَأَيْتِهِ',
              english: 'You (f.) saw him (hu becomes hi after kasrah)',
            },
            {
              arabic: 'رَأَيْتُمُوهُ',
              english: 'You (m.pl.) saw him (waaw inserted)',
            },
          ],
        },
        {
          title: 'The Verb kaana (was)',
          arabicTitle: 'كَانَ',
          explanation:
            'Kaana is used to shift nominal sentences to past tense. The ism of kaana remains marfu\'. If the khabar is a clause (prepositional phrase), no change occurs. If the khabar is a noun, it becomes mansub. For feminine subjects, kaana becomes kaanat.',
          examples: [
            {
              arabic: 'كَانَ بِلَالٌ فِي الْفَصْلِ',
              english: 'Bilal was in the class',
            },
            {
              arabic: 'كَانَ بِلَالٌ مَرِيضًا',
              english: 'Bilal was sick (khabar becomes mansub)',
            },
            {
              arabic: 'كَانَتْ زَيْنَبُ فِي الْمَطْبَخِ',
              english: 'Zainab was in the kitchen',
            },
          ],
        },
        {
          title: 'Fractions',
          arabicTitle: 'الْكُسُور',
          explanation:
            'Fractions from 1/3 to 1/10 follow the pattern fu\'l. The dammah on the second radical is usually dropped, except in thuluth (1/3) and sudus (1/6).',
          examples: [
            {
              arabic: 'ثُلُثُ سَاعَةٍ',
              english: 'A third of an hour',
            },
            {
              arabic: 'نِصْفُ سَاعَةٍ',
              english: 'Half an hour',
            },
            {
              arabic: 'رُبْعُ سَاعَةٍ',
              english: 'A quarter of an hour',
            },
          ],
          rules: [
            'nisf (1/2), thuluth (1/3), rub\' (1/4), khums (1/5), sudus (1/6), sub\' (1/7), thumun (1/8), tus\' (1/9), ushr (1/10)',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مِكْنَسَةٌ', english: 'broom', category: 'noun' },
        { arabic: 'نَظَّارَةٌ', english: 'spectacles', category: 'noun' },
        { arabic: 'صُورَةٌ', english: 'picture', category: 'noun' },
        { arabic: 'صَابُونٌ', english: 'soap', category: 'noun' },
        { arabic: 'عَصِيرٌ', english: 'juice', category: 'noun' },
        { arabic: 'كُرَةُ الْقَدَمِ', english: 'football', category: 'noun' },
        { arabic: 'سُلَّمٌ', english: 'staircase', category: 'noun' },
        { arabic: 'عَجَلَةٌ', english: 'wheel', category: 'noun' },
        { arabic: 'إِذَاعَةٌ', english: 'broadcasting, radio', category: 'noun' },
        { arabic: 'الْبَارِحَةَ', english: 'last night', category: 'adverb' },
        { arabic: 'بُرْتُقَالٌ', english: 'orange', category: 'noun' },
        { arabic: 'كُرَةُ السَّلَّةِ', english: 'basketball', category: 'noun' },
        { arabic: 'مَنَارَةٌ', english: 'minaret', category: 'noun' },
        { arabic: 'لِحْيَةٌ', english: 'beard', category: 'noun' },
        { arabic: 'عَالٍ', english: 'high, loud', category: 'adjective' },
        { arabic: 'مُلَوَّنٌ', english: 'coloured', category: 'adjective' },
        { arabic: 'صَبَاحٌ', english: 'morning', category: 'noun' },
        { arabic: 'نِصْفٌ', english: 'half', category: 'noun' },
        { arabic: 'مَشَى', english: 'he walked', category: 'verb' },
        { arabic: 'أَخَذَ', english: 'he took', category: 'verb' },
        { arabic: 'وَضَعَ', english: 'he placed', category: 'verb' },
        { arabic: 'وَجَدَ', english: 'he found', category: 'verb' },
        { arabic: 'بَحَثَ عَنْ', english: 'he looked for', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'الأَب',
          arabic: 'أَيْنَ الْكِتَابُ ذُو الْغِلَافِ الْأَحْمَرِ؟',
          english: 'Where is the book with the red cover?',
        },
        {
          speaker: 'الْبَنَات',
          arabic:
            'ذَهَبْنَا لِزِيَارَةِ الْمُدِيرَةِ. مَشَيْنَا لِأَنَّ بَيْتَهَا بَيْنَ الْمَسْجِدِ وَالْمَدْرَسَةِ',
          english:
            'We went to visit the director (f.). We walked because her house is between the mosque and the school.',
        },
        {
          speaker: 'الأُمّ',
          arabic: 'أَبْشِرْ. فِي الثَّلَّاجَةِ مَاءٌ بَارِدٌ وَعَصِيرُ بُرْتُقَالٍ',
          english:
            "Don't worry. In the fridge there is cold water and orange juice.",
        },
      ],
      culturalNotes: [
        'The Islamic full greeting is used when daughters arrive home',
        'Shafaahu Allah (May Allah heal him) is used when discussing someone\'s illness',
        'Abshir (rejoice/don\'t worry) is used as a reply to a request, implying the request will be fulfilled',
        'Family dynamics show father engaging with sons and daughters separately, reflecting cultural norms',
      ],
    },

    // =========================================================
    // LESSON 8
    // =========================================================
    {
      number: 8,
      title: 'Lesson 8',
      arabicTitle: 'الدَّرْسُ الثَّامِنُ',
      theme: 'Revision: Full past tense verb conjugation with all pronouns',
      grammar: [
        {
          title: 'Full Conjugation of the Past Tense with All Pronouns',
          arabicTitle: 'إِسْنَاد الْفِعْل الْمَاضِي',
          explanation:
            'A revision lesson reviewing the maadi (past tense) verb with isnaad (attribution) to all pronouns except the dual. The verb dhahaba is used as the model verb.',
          examples: [
            {
              arabic: 'ذَهَبَ / ذَهَبَتْ / ذَهَبُوا / ذَهَبْنَ',
              english:
                'He went / She went / They (m.) went / They (f.) went',
            },
            {
              arabic: 'ذَهَبْتَ / ذَهَبْتِ / ذَهَبْتُ',
              english: 'You (m.) went / You (f.) went / I went',
            },
            {
              arabic: 'ذَهَبْتُمْ / ذَهَبْتُنَّ / ذَهَبْنَا',
              english: 'You (m.pl.) went / You (f.pl.) went / We went',
            },
          ],
          rules: [
            'dhahaba: verb + hidden pronoun (he)',
            'dhahabat: verb + ta (femininity marker) + hidden pronoun (she)',
            'dhahabuu: verb + waaw (subject marker)',
            'dhahabna: verb + nun (subject marker)',
            'dhahabta/ti/tu: verb + ta/ti/tu (subject marker)',
            'dhahabtum: verb + tu (subject) + mim (plural marker)',
            'dhahabnaa: verb + naa (subject marker)',
          ],
        },
      ],
      vocabulary: [],
      dialogues: [],
      culturalNotes: [
        'This is a revision lesson consolidating all past tense conjugation patterns learned so far',
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
        'Creation passage, sound feminine plural nasb, nun of protection, verb of wonder, relative pronouns, and vocative with mudaf',
      grammar: [
        {
          title: 'Nasb of Sound Feminine Plural',
          arabicTitle: 'نَصْب جَمْع الْمُؤَنَّث السَّالِم',
          explanation:
            'The sound feminine plural (ending in -aat) takes kasrah as its nasb ending instead of the regular fathah. The nasb and jarr endings are the same (-i) in the sound feminine plural.',
          examples: [
            {
              arabic: 'رَأَيْتُ الْأَبْنَاءَ وَالْبَنَاتِ',
              english:
                'I saw the sons and the daughters (al-abnaa\'a with fathah, al-banaati with kasrah)',
            },
            {
              arabic: 'خَلَقَ اللهُ السَّمَوَاتِ وَالْأَرْضَ',
              english: 'Allah created the heavens and the earth',
            },
            {
              arabic: 'إِنَّ الْإِخْوَةَ وَالْأَخَوَاتِ فِي الْبَيْتِ',
              english: 'Indeed the brothers and sisters are at home',
            },
          ],
        },
        {
          title: 'The Nun of Protection',
          arabicTitle: 'نُونُ الْوِقَايَةِ',
          explanation:
            'When the first person pronoun ya (me) is attached to a verb as object, a nun is inserted between the verb and the pronoun to protect the verb\'s final vowel.',
          examples: [
            {
              arabic: 'خَلَقَنِي اللهُ',
              english: 'Allah created me (khalaqanii)',
            },
            {
              arabic: 'سَأَلَنِي الْمُدَرِّسُ',
              english: 'The teacher asked me',
            },
            {
              arabic: 'رَأَيْتَنِي',
              english: 'You saw me',
            },
          ],
        },
        {
          title: 'The Verb of Wonder (Exclamatory Form)',
          arabicTitle: 'فِعْلُ التَّعَجُّبِ',
          explanation:
            'To express exclamation (How ... is ...!), Arabic uses the pattern maa af\'alahu.',
          examples: [
            {
              arabic: 'مَا أَطْوَلَ هَذَا الرَّجُلَ!',
              english: 'How tall this man is!',
            },
            {
              arabic: 'مَا أَجْمَلَ هَذِهِ السَّيَّارَةَ!',
              english: 'How beautiful this car is!',
            },
            {
              arabic: 'مَا أَسْهَلَ هَذَا الدَّرْسَ!',
              english: 'How easy this lesson is!',
            },
          ],
        },
        {
          title: 'The Vocative with Mudaf',
          arabicTitle: 'يَا + مُضَاف',
          explanation:
            'When the noun after ya is mudaf (in a possessive construction), it takes the mansub (accusative) ending. When it is a simple noun, it takes only one dammah.',
          examples: [
            {
              arabic: 'يَا عَبْدَ اللهِ!',
              english: 'O servant of Allah! (mansub because mudaf)',
            },
            {
              arabic: 'يَا أَبَا بَكْرٍ!',
              english: 'O Abu Bakr! (mansub form of abu is aba)',
            },
            {
              arabic: 'يَا بِلَالُ!',
              english: 'O Bilal! (simple noun, one dammah)',
            },
          ],
        },
        {
          title: 'Plural of Relative Pronouns',
          arabicTitle: 'الْأَسْمَاءُ الْمَوْصُولَةُ',
          explanation:
            'The relative pronoun alladhi (m.s.) becomes alladhiina (m.pl.), and allati (f.s.) becomes allaati (f.pl.).',
          examples: [
            {
              arabic: 'الرِّجَالُ الَّذِينَ خَرَجُوا مِنْ مَكْتَبِ الْمُدِيرِ مُدَرِّسُونَ جُدُدٌ',
              english:
                'The men who left the headmaster\'s office are new teachers',
            },
            {
              arabic: 'الطَّالِبَاتُ اللَّاتِي جَلَسْنَ أَمَامَ الْمُدَرِّسَةِ بَنَاتُ الْمُدِيرَةِ',
              english:
                'The female students who sat in front of the teacher are the headmistress\'s daughters',
            },
          ],
        },
        {
          title: 'Interrogative ma After a Preposition',
          arabicTitle: 'مَا الاسْتِفْهَامِيَّة بَعْدَ حَرْف الْجَرّ',
          explanation:
            'When interrogative ma is preceded by a preposition, its alif is dropped: bi + ma = bima, li + ma = lima, min + ma = mimma, an + ma = amma.',
          examples: [
            {
              arabic: 'مِمَّ خَلَقَ اللهُ الْإِنْسَانَ؟ — مِنْ طِينٍ',
              english: 'From what did Allah create man? — From clay',
            },
            {
              arabic: 'بِمَ قَتَلْتِ الْحَيَّةَ؟ — بِالْحَجَرِ',
              english: 'With what did you kill the snake? — With the stone',
            },
            {
              arabic: 'لِمَ خَرَجْتِ مِنَ الْفَصْلِ؟',
              english: 'Why did you leave the class?',
            },
          ],
        },
        {
          title: 'Interrogative Hamza with al-',
          arabicTitle: 'هَمْزَةُ الاسْتِفْهَامِ مَعَ الـ',
          explanation:
            'When the interrogative hamza (a) is followed by a noun with al-, the combination becomes aal- (with madd).',
          examples: [
            {
              arabic: 'آلْمُدَرِّسُ قَالَ لَكَ؟',
              english: 'Did the teacher tell you?',
            },
            {
              arabic: 'آلْيَوْمَ رَأَيْتَهُ؟',
              english: 'Did you see him today?',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'قَائِمَةٌ', english: 'list', category: 'noun' },
        { arabic: 'عَلَاقَةٌ', english: 'connection, relation', category: 'noun' },
        { arabic: 'مَعْنَى', english: 'meaning', category: 'noun' },
        { arabic: 'لَحْظَةٌ', english: 'moment', category: 'noun' },
        { arabic: 'نَارٌ', english: 'fire', category: 'noun' },
        { arabic: 'عَاصِمَةٌ', english: 'capital city', category: 'noun' },
        { arabic: 'جَانٌّ', english: 'jinn', category: 'noun' },
        { arabic: 'حَدِيدٌ', english: 'iron (metal)', category: 'noun' },
        { arabic: 'طِينٌ', english: 'mud, clay', category: 'noun' },
        { arabic: 'جَرَسٌ', english: 'bell', category: 'noun' },
        { arabic: 'خَلَقَ', english: 'he created', category: 'verb' },
        { arabic: 'رَفَعَ', english: 'he raised', category: 'verb' },
        { arabic: 'حَضَرَ', english: 'he attended', category: 'verb' },
        { arabic: 'رَنَّ', english: 'it rang', category: 'verb' },
        { arabic: 'أَحْسَنْتَ', english: 'well done!', category: 'expression' },
        { arabic: 'هَكَذَا', english: 'like this, so', category: 'adverb' },
        { arabic: 'كَذَلِكَ', english: 'like that', category: 'adverb' },
        { arabic: 'مُخْتَلِطٌ', english: 'mixed', category: 'adjective' },
      ],
      dialogues: [
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'مَنْ خَلَقَكَ يَا إِبْرَاهِيمُ؟',
          english: 'Who created you, Ibrahim?',
        },
        {
          speaker: 'إِبْرَاهِيم',
          arabic: 'خَلَقَنِي اللهُ',
          english: 'Allah created me',
        },
        {
          speaker: 'الْمُدَرِّس',
          arabic: 'مِمَّ خَلَقَ اللهُ الْإِنْسَانَ؟',
          english: 'From what did Allah create man?',
        },
      ],
      culturalNotes: [
        'Creation theology is taught through Quranic references from Surah Al-A\'raf, At-Talaq, and Al-Hadid',
        'Students are expected to know Quranic stories and verses about creation',
        'The teacher praises correct answers with ahsanta (well done)',
        'Students raise their hands (rafa\'a yadahu) to ask questions',
        'Al-Khurtuun is identified as the capital of Sudan, expanding geographic knowledge',
      ],
    },

    // =========================================================
    // LESSON 10
    // =========================================================
    {
      number: 10,
      title: 'Lesson 10',
      arabicTitle: 'الدَّرْسُ الْعَاشِرُ',
      theme:
        'Daily routine, present tense (mudaari\'), numbers 21-30, telling time, and the preposition bayna',
      grammar: [
        {
          title: 'The Three Forms of the Arabic Verb',
          arabicTitle: 'أَقْسَامُ الْفِعْلِ',
          explanation:
            'The Arabic verb has only three forms: past tense (al-maadi), present-future tense (al-mudaari\'), and imperative (al-amr).',
          examples: [
            {
              arabic: 'كَتَبَ (مَاضٍ) — يَكْتُبُ (مُضَارِع) — اُكْتُبْ (أَمْر)',
              english: 'He wrote — He writes — Write!',
            },
          ],
        },
        {
          title: 'Forming the Mudaari\' (Present/Future Tense)',
          arabicTitle: 'الْمُضَارِع',
          explanation:
            'The mudaari\' is formed by adding one of four prefix letters (ya, a, ta, na) to the verb root. The first radical gets sukuun, the third gets dammah. The second radical can have any vowel. There are four verb groups based on the second radical vowel pattern.',
          examples: [
            {
              arabic: 'كَتَبَ → يَكْتُبُ (a-u)',
              english: 'He wrote → He writes (fathah to dammah)',
            },
            {
              arabic: 'جَلَسَ → يَجْلِسُ (a-i)',
              english: 'He sat → He sits (fathah to kasrah)',
            },
            {
              arabic: 'ذَهَبَ → يَذْهَبُ (a-a)',
              english: 'He went → He goes (fathah to fathah)',
            },
          ],
          rules: [
            'Group a-u (fathah in maadi, dammah in mudaari\'): kataba/yaktubu, qatala/yaqtulu, sajada/yasjudu',
            'Group a-i (fathah in maadi, kasrah in mudaari\'): jalasa/yajlisu, daraba/yadribu, ghasala/yaghsilu',
            'Group a-a (fathah in both): dhahaba/yadhhabu, fataha/yaftahu, qara\'a/yaqra\'u',
            'Group i-a (kasrah in maadi, fathah in mudaari\'): fahima/yafhamu, shariba/yashrabu, hafidha/yahfadhu',
            'There is no rule to predict which group a verb belongs to; both forms must be learned',
          ],
        },
        {
          title: 'Numbers 21-30',
          arabicTitle: 'الأَعْدَاد ٢١-٣٠',
          explanation:
            'The two parts of numbers 21-30 are joined by wa (and). The first part (units) takes tanwin except ithnaan. Waahid and ithnaan are masculine with masculine counted nouns. Numbers 3-9 are feminine with masculine counted nouns (reverse gender agreement). The counted noun is singular and mansub.',
          examples: [
            {
              arabic: 'وَاحِدٌ وَعِشْرُونَ طَالِبًا',
              english: 'Twenty-one students',
            },
            {
              arabic: 'ثَلَاثَةٌ وَعِشْرُونَ طَالِبًا',
              english: 'Twenty-three students',
            },
            {
              arabic: 'ثَلَاثُونَ طَالِبًا',
              english: 'Thirty students',
            },
          ],
        },
        {
          title: 'Telling Time with illa',
          arabicTitle: 'السَّاعَة إِلَّا',
          explanation:
            'Illa literally means "except" and is used to express "to" (as in "quarter to nine"). The noun after illa is mansub.',
          examples: [
            {
              arabic: 'التَّاسِعَةُ إِلَّا رُبْعًا',
              english: 'Quarter to nine',
            },
            {
              arabic: 'السَّاعَةُ الْوَاحِدَةُ إِلَّا عَشْرَ دَقَائِقَ',
              english: 'Ten minutes to one',
            },
          ],
        },
        {
          title: 'The Preposition bayna (between)',
          arabicTitle: 'بَيْنَ',
          explanation:
            'Bayna means "between." The noun following it is majrur because it is mudaf ilaihi. When used with pronouns, bayna must be repeated.',
          examples: [
            {
              arabic: 'جَلَسَ حَامِدٌ بَيْنَ بِلَالٍ وَفَيْصَلٍ',
              english: 'Hamid sat between Bilal and Faisal',
            },
            {
              arabic: 'هٰذَا بَيْنِي وَبَيْنَكَ',
              english: 'This is between you and me',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'دَائِمًا', english: 'always', category: 'adverb' },
        { arabic: 'أَحْيَانًا', english: 'sometimes', category: 'adverb' },
        { arabic: 'مَرَّةً أُخْرَى', english: 'once again, another time', category: 'adverb' },
        { arabic: 'مُبَكِّرًا', english: 'early', category: 'adverb' },
        { arabic: 'مُتَأَخِّرًا', english: 'late', category: 'adverb' },
        { arabic: 'مَكْتَبٌ', english: 'office', category: 'noun' },
        { arabic: 'عَامِلٌ', english: 'labourer, worker', category: 'noun' },
        { arabic: 'طُولٌ', english: 'length', category: 'noun' },
        { arabic: 'عَرْضٌ', english: 'width', category: 'noun' },
        { arabic: 'مَسَافَةٌ', english: 'distance', category: 'noun' },
        { arabic: 'كِيلُومِتْرٌ', english: 'kilometre', category: 'noun' },
        { arabic: 'سَنْتِيمِتْرٌ', english: 'centimetre', category: 'noun' },
        { arabic: 'مِتْرٌ', english: 'metre', category: 'noun' },
        { arabic: 'بَيْنَ', english: 'between', category: 'preposition' },
        { arabic: 'سَجَدَ / يَسْجُدُ', english: 'to perform sajdah (prostration)', category: 'verb' },
        { arabic: 'فَعَلَ / يَفْعَلُ', english: 'to do', category: 'verb' },
        { arabic: 'رَكِبَ / يَرْكَبُ', english: 'to ride', category: 'verb' },
        { arabic: 'عَمِلَ / يَعْمَلُ', english: 'to work', category: 'verb' },
        { arabic: 'رَكَعَ / يَرْكَعُ', english: 'to bow (in prayer)', category: 'verb' },
      ],
      dialogues: [
        {
          speaker: 'مُوسَى',
          arabic: 'يَذْهَبُ أَبِي إِلَى السُّوقِ كُلَّ يَوْمٍ بَعْدَ صَلَاةِ الْفَجْرِ',
          english:
            'My father goes to the market every day after Fajr prayer',
        },
        {
          speaker: 'مُوسَى',
          arabic: 'يَرْجِعُ فِي السَّاعَةِ السَّابِعَةِ وَأَحْيَانًا فِي الثَّامِنَةِ',
          english: 'He returns at 7:00 and sometimes at 8:00',
        },
        {
          speaker: 'مُوسَى',
          arabic: 'فِي الْمَصْنَعِ مِائَةٌ وَخَمْسَةٌ وَعِشْرُونَ عَامِلًا وَمُهَنْدِسَانِ',
          english:
            'In the factory there are 125 workers and 2 engineers',
        },
      ],
      culturalNotes: [
        'Daily activities are structured around the five Islamic prayers: Fajr (dawn), Dhuhr (noon), and Asr (afternoon)',
        'Prayer vocabulary is introduced: sajada/yasjudu (to prostrate) and raka\'a/yarka\'u (to bow)',
        'Students are advised to learn both the maadi and mudaari\' forms of every new verb',
        'Measurement vocabulary (kilometre, metre, centimetre) reflects modern practical usage',
      ],
    },
  ],
}
