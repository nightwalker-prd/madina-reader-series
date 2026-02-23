import type { Book } from './types'

export const book1: Book = {
  id: 1,
  title: 'Madinah Arabic Reader Book 1',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الأول',
  description:
    'An introductory Arabic course for beginners, covering demonstrative pronouns, the definite article, basic prepositions, noun cases, possessive constructions, adjective agreement, and conversational Arabic with family vocabulary. Designed by Dr. V. Abdur Rahim as taught at the Islamic University of Madinah.',
  level: 'beginner',
  totalLessons: 10,
  lessons: [
    // =====================
    // LESSON 1
    // =====================
    {
      number: 1,
      title: 'The Demonstrative Pronoun هَذَا (This)',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme: 'Near demonstrative, simple nominal sentences, yes/no questions',
      grammar: [
        {
          title: 'The Near Demonstrative هَذَا',
          arabicTitle: 'هَذَا',
          explanation:
            'هَذَا (haadhaa) means "this" for masculine singular nouns. It is used to point to near objects and people. Written without the first alif (pronounced haadhaa but written هذا).',
          examples: [
            { arabic: 'هَذَا كِتَابٌ', english: 'This is a book' },
            { arabic: 'هَذَا بَيْتٌ', english: 'This is a house' },
            { arabic: 'هَذَا مُدَرِّسٌ', english: 'This is a teacher' },
          ],
        },
        {
          title: 'No Copula in Arabic',
          explanation:
            'Arabic has no equivalent of the English verb "is." The sentence هَذَا كِتَابٌ literally translates to "This — book" but means "This is a book."',
          examples: [
            { arabic: 'هَذَا مَسْجِدٌ', english: 'This is a mosque' },
            { arabic: 'هَذَا طَبِيبٌ', english: 'This is a doctor' },
          ],
        },
        {
          title: 'Tanwin as Indefinite Marker',
          arabicTitle: 'تَنْوِين',
          explanation:
            'There is no Arabic equivalent of English "a/an." Instead, the tanwin (the -n sound at the end of a noun, e.g., كِتَابٌ) serves as the indefinite marker.',
          examples: [
            { arabic: 'كِتَابٌ', english: 'a book' },
            { arabic: 'بَيْتٌ', english: 'a house' },
            { arabic: 'قَلَمٌ', english: 'a pen' },
          ],
        },
        {
          title: 'Yes/No Questions with أ',
          explanation:
            'The interrogative particle أ (hamzah) placed at the beginning of a statement converts it into a yes/no question.',
          examples: [
            { arabic: 'أَهَذَا بَيْتٌ؟', english: 'Is this a house?' },
            {
              arabic: 'نَعَمْ، هَذَا بَيْتٌ',
              english: 'Yes, this is a house',
            },
            {
              arabic: 'لَا، هَذَا مَسْجِدٌ',
              english: 'No, this is a mosque',
            },
          ],
        },
        {
          title: 'Question Words: مَا vs مَنْ',
          explanation:
            'مَا هَذَا؟ means "What is this?" (for objects and animals). مَنْ هَذَا؟ means "Who is this?" (for people).',
          examples: [
            { arabic: 'مَا هَذَا؟', english: 'What is this?' },
            { arabic: 'مَنْ هَذَا؟', english: 'Who is this?' },
          ],
        },
      ],
      vocabulary: [
        // Objects & Places
        { arabic: 'بَيْتٌ', english: 'house', category: 'objects' },
        { arabic: 'مَسْجِدٌ', english: 'mosque', category: 'places' },
        { arabic: 'بَابٌ', english: 'door', category: 'objects' },
        { arabic: 'كِتَابٌ', english: 'book', category: 'objects' },
        { arabic: 'قَلَمٌ', english: 'pen', category: 'objects' },
        { arabic: 'مِفْتَاحٌ', english: 'key', category: 'objects' },
        { arabic: 'مَكْتَبٌ', english: 'desk / writing table', category: 'objects' },
        { arabic: 'سَرِيرٌ', english: 'bed', category: 'objects' },
        { arabic: 'كُرْسِيٌّ', english: 'chair', category: 'objects' },
        { arabic: 'نَجْمٌ', english: 'star', category: 'objects' },
        { arabic: 'قَمِيصٌ', english: 'shirt', category: 'objects' },
        { arabic: 'مِنْدِيلٌ', english: 'kerchief', category: 'objects' },
        // People
        { arabic: 'وَلَدٌ', english: 'boy', category: 'people' },
        { arabic: 'طَالِبٌ', english: 'student', category: 'people' },
        { arabic: 'رَجُلٌ', english: 'man', category: 'people' },
        { arabic: 'تَاجِرٌ', english: 'merchant', category: 'people' },
        { arabic: 'طَبِيبٌ', english: 'doctor', category: 'people' },
        { arabic: 'مُدَرِّسٌ', english: 'teacher', category: 'people' },
        // Animals
        { arabic: 'كَلْبٌ', english: 'dog', category: 'animals' },
        { arabic: 'قِطٌّ', english: 'cat', category: 'animals' },
        { arabic: 'حِمَارٌ', english: 'donkey', category: 'animals' },
        { arabic: 'حِصَانٌ', english: 'horse', category: 'animals' },
        { arabic: 'جَمَلٌ', english: 'camel', category: 'animals' },
        { arabic: 'دِيكٌ', english: 'rooster', category: 'animals' },
        // Expressions
        { arabic: 'نَعَمْ', english: 'yes', category: 'expressions' },
        { arabic: 'لَا', english: 'no', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'Student A',
          arabic: 'مَا هَذَا؟',
          english: 'What is this?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذَا كِتَابٌ',
          english: 'This is a book',
        },
        {
          speaker: 'Student A',
          arabic: 'أَهَذَا بَيْتٌ؟',
          english: 'Is this a house?',
        },
        {
          speaker: 'Student B',
          arabic: 'لَا، هَذَا مَسْجِدٌ',
          english: 'No, this is a mosque',
        },
        {
          speaker: 'Student A',
          arabic: 'مَنْ هَذَا؟',
          english: 'Who is this?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذَا مُدَرِّسٌ',
          english: 'This is a teacher',
        },
      ],
      culturalNotes: [
        'The book is designed for Islamic schools and reflects an Islamic educational environment. The mosque and imam appear naturally alongside everyday vocabulary.',
        'Vocabulary draws from classical, Quranic, and modern Arabic, giving students early exposure to the language of religious texts.',
        'Lessons 1-2 use exclusively masculine demonstratives (هَذَا and ذَلِكَ). The feminine equivalents appear in later lessons.',
      ],
    },

    // =====================
    // LESSON 2
    // =====================
    {
      number: 2,
      title: 'The Far Demonstrative ذَلِكَ (That) and وَ (And)',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme: 'Far demonstrative pronoun, conjunction وَ',
      grammar: [
        {
          title: 'The Far Demonstrative ذَلِكَ',
          arabicTitle: 'ذَلِكَ',
          explanation:
            'ذَلِكَ (dhaalika) means "that" for masculine singular nouns. Used for pointing to distant objects. Pronounced dhaalika but written without alif after the dhaal.',
          examples: [
            { arabic: 'ذَلِكَ نَجْمٌ', english: 'That is a star' },
            { arabic: 'مَا ذَلِكَ؟', english: 'What is that?' },
            { arabic: 'أَذَلِكَ كَلْبٌ؟', english: 'Is that a dog?' },
          ],
        },
        {
          title: 'The Conjunction وَ (And)',
          arabicTitle: 'وَ',
          explanation:
            'The conjunction وَ means "and" and is written attached to the following word (no space). It is used to join two nominal sentences.',
          examples: [
            {
              arabic: 'هَذَا مَسْجِدٌ وَذَلِكَ بَيْتٌ',
              english: 'This is a mosque and that is a house',
            },
            {
              arabic: 'هَذَا حِصَانٌ وَذَلِكَ حِمَارٌ',
              english: 'This is a horse and that is a donkey',
            },
            {
              arabic: 'هَذَا سُكَّرٌ وَذَلِكَ لَبَنٌ',
              english: 'This is sugar and that is milk',
            },
          ],
        },
        {
          title: 'Contrast between هَذَا and ذَلِكَ',
          explanation:
            'هَذَا is used for near objects ("this") while ذَلِكَ is used for far objects ("that"). Both are masculine singular demonstratives.',
          examples: [
            {
              arabic: 'هَذَا مُدَرِّسٌ وَذَلِكَ إِمَامٌ',
              english: 'This is a teacher and that is an imam',
            },
            {
              arabic: 'مَنْ هَذَا وَمَنْ ذَلِكَ؟',
              english: 'Who is this and who is that?',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'إِمَامٌ', english: 'imam (prayer leader)', category: 'people' },
        { arabic: 'حَجَرٌ', english: 'stone', category: 'objects' },
        { arabic: 'سُكَّرٌ', english: 'sugar', category: 'food' },
        { arabic: 'لَبَنٌ', english: 'milk', category: 'food' },
      ],
      dialogues: [
        {
          speaker: 'Student A',
          arabic: 'مَا ذَلِكَ؟',
          english: 'What is that?',
        },
        {
          speaker: 'Student B',
          arabic: 'ذَلِكَ نَجْمٌ',
          english: 'That is a star',
        },
        {
          speaker: 'Student A',
          arabic: 'أَذَلِكَ كَلْبٌ؟',
          english: 'Is that a dog?',
        },
        {
          speaker: 'Student B',
          arabic: 'لَا، ذَلِكَ قِطٌّ',
          english: 'No, that is a cat',
        },
      ],
      culturalNotes: [
        'The illustrations feature culturally relevant items such as mosques, camels, donkeys, and horses, reflecting the Arabian/Middle Eastern setting.',
        'The teaching methodology follows the Madinah University method: patterns are demonstrated through illustrated examples first, with grammatical rules summarized afterward.',
      ],
    },

    // =====================
    // LESSON 3
    // =====================
    {
      number: 3,
      title: 'The Definite Article ال and Descriptive Adjectives',
      arabicTitle: 'الدَّرْسُ الثَّالِثُ',
      theme: 'Definite article, sun/moon letters, adjectives',
      grammar: [
        {
          title: 'The Definite Article ال',
          arabicTitle: 'ال',
          explanation:
            'The Arabic definite article ال (al) is equivalent to English "the." When ال is prefixed to a noun, the indefinite tanwin ending (-n) is dropped.',
          examples: [
            {
              arabic: 'بَيْتٌ → الْبَيْتُ',
              english: 'a house → the house',
            },
            {
              arabic: 'كِتَابٌ → الْكِتَابُ',
              english: 'a book → the book',
            },
            {
              arabic: 'قَلَمٌ → الْقَلَمُ',
              english: 'a pen → the pen',
            },
          ],
        },
        {
          title: 'Descriptive Sentences (Noun + Adjective)',
          explanation:
            'Simple descriptive sentences use the pattern definite noun + indefinite adjective. The adjective serves as the predicate.',
          examples: [
            {
              arabic: 'الْبَابُ مَفْتُوحٌ',
              english: 'The door is open',
            },
            {
              arabic: 'الْقَمَرُ جَمِيلٌ',
              english: 'The moon is beautiful',
            },
            {
              arabic: 'الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ',
              english: 'The book is new and the pen is old',
            },
          ],
        },
        {
          title: 'Sun Letters and Moon Letters',
          arabicTitle: 'الحُرُوفُ الشَّمْسِيَّةُ وَالْحُرُوفُ الْقَمَرِيَّةُ',
          explanation:
            'Arabic has 14 Sun Letters and 14 Moon Letters. With Sun Letters, the ل of ال is assimilated (not pronounced, first letter doubled with shaddah). With Moon Letters, the ل is clearly pronounced.',
          examples: [
            {
              arabic: 'الشَّمْسُ',
              english: 'the sun (ash-shamsu — Sun Letter)',
            },
            {
              arabic: 'الْقَمَرُ',
              english: 'the moon (al-qamaru — Moon Letter)',
            },
            {
              arabic: 'التَّاجِرُ',
              english: 'the merchant (at-taajiru — Sun Letter)',
            },
          ],
          rules: [
            'Sun Letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن — the lam is assimilated',
            'Moon Letters: أ ب ج ح خ ع غ ف ق ك م و هـ ي — the lam is pronounced',
          ],
        },
        {
          title: 'Hamzatu l-Wasl',
          arabicTitle: 'هَمْزَةُ الوَصْلِ',
          explanation:
            'The initial vowel of ال is pronounced only at the beginning of speech. When preceded by another word, the "a" is dropped in pronunciation but remains in writing.',
          examples: [
            {
              arabic: 'وَالْبَيْتُ',
              english: '"wa-l-baitu" (not "wa al-baitu")',
            },
          ],
        },
      ],
      vocabulary: [
        // Adjectives
        { arabic: 'جَدِيدٌ', english: 'new', category: 'adjectives' },
        { arabic: 'قَدِيمٌ', english: 'old', category: 'adjectives' },
        { arabic: 'كَبِيرٌ', english: 'big', category: 'adjectives' },
        { arabic: 'صَغِيرٌ', english: 'small', category: 'adjectives' },
        { arabic: 'طَوِيلٌ', english: 'tall / long', category: 'adjectives' },
        { arabic: 'قَصِيرٌ', english: 'short', category: 'adjectives' },
        { arabic: 'قَرِيبٌ', english: 'near', category: 'adjectives' },
        { arabic: 'بَعِيدٌ', english: 'far', category: 'adjectives' },
        { arabic: 'حَارٌّ', english: 'hot', category: 'adjectives' },
        { arabic: 'بَارِدٌ', english: 'cold', category: 'adjectives' },
        { arabic: 'ثَقِيلٌ', english: 'heavy', category: 'adjectives' },
        { arabic: 'خَفِيفٌ', english: 'light (weight)', category: 'adjectives' },
        { arabic: 'نَظِيفٌ', english: 'clean', category: 'adjectives' },
        { arabic: 'وَسِخٌ', english: 'dirty', category: 'adjectives' },
        { arabic: 'مَفْتُوحٌ', english: 'open', category: 'adjectives' },
        { arabic: 'مَكْسُورٌ', english: 'broken', category: 'adjectives' },
        { arabic: 'جَمِيلٌ', english: 'beautiful', category: 'adjectives' },
        { arabic: 'وَاقِفٌ', english: 'standing', category: 'adjectives' },
        { arabic: 'جَالِسٌ', english: 'sitting', category: 'adjectives' },
        { arabic: 'غَنِيٌّ', english: 'rich', category: 'adjectives' },
        { arabic: 'فَقِيرٌ', english: 'poor', category: 'adjectives' },
        { arabic: 'مَرِيضٌ', english: 'sick', category: 'adjectives' },
        { arabic: 'حُلْوٌ', english: 'sweet', category: 'adjectives' },
        { arabic: 'لَذِيذٌ', english: 'delicious', category: 'adjectives' },
        // Nouns
        { arabic: 'الْقَمَرُ', english: 'the moon', category: 'objects' },
        { arabic: 'الْوَرَقُ', english: 'paper', category: 'objects' },
        { arabic: 'التُّفَّاحُ', english: 'apple', category: 'food' },
        { arabic: 'الدُّكَّانُ', english: 'shop', category: 'places' },
        { arabic: 'الْمَاءُ', english: 'water', category: 'food' },
        { arabic: 'الدَّفْتَرُ', english: 'notebook', category: 'objects' },
      ],
      dialogues: [
        {
          speaker: 'Teacher',
          arabic: 'الْبَابُ مَفْتُوحٌ أَمْ مُغْلَقٌ؟',
          english: 'Is the door open or closed?',
        },
        {
          speaker: 'Student',
          arabic: 'الْبَابُ مَفْتُوحٌ',
          english: 'The door is open',
        },
        {
          speaker: 'Teacher',
          arabic: 'الْحِمَارُ صَغِيرٌ وَالْحِصَانُ كَبِيرٌ',
          english: 'The donkey is small and the horse is big',
        },
      ],
      culturalNotes: [
        'Adjectives are consistently taught in antonym pairs (big/small, hot/cold, near/far, clean/dirty, new/old, heavy/light, rich/poor, tall/short), reinforcing both words simultaneously.',
        'Islamic context permeates the lesson with references to the mosque, prayer, and the Quran.',
      ],
    },

    // =====================
    // LESSON 4
    // =====================
    {
      number: 4,
      title: 'Prepositions, Pronouns, and Noun Cases',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme: 'Prepositions, nominative/genitive cases, هُوَ/هِيَ, question words',
      grammar: [
        {
          title: 'Prepositions (حُرُوفُ الْجَرِّ)',
          arabicTitle: 'حُرُوفُ الْجَرِّ',
          explanation:
            'Four essential prepositions are introduced: فِي (in), عَلَى (on), مِنْ (from), إِلَى (to). The noun following a preposition takes the genitive case (-i ending).',
          examples: [
            { arabic: 'فِي الْبَيْتِ', english: 'in the house' },
            { arabic: 'عَلَى الْمَكْتَبِ', english: 'on the desk' },
            { arabic: 'مِنَ الْمَسْجِدِ', english: 'from the mosque' },
            { arabic: 'إِلَى الْمَدْرَسَةِ', english: 'to the school' },
          ],
          rules: [
            'فِي = in',
            'عَلَى = on',
            'مِنْ = from',
            'إِلَى = to',
          ],
        },
        {
          title: 'Noun Cases',
          arabicTitle: 'الإعراب',
          explanation:
            'Arabic nouns change their endings based on grammatical function. The nominative case (مَرْفُوعٌ) ends in -u and is used for subjects. The genitive case (مَجْرُورٌ) ends in -i and is used after prepositions.',
          examples: [
            {
              arabic: 'الْبَيْتُ جَدِيدٌ',
              english: 'The house is new (nominative -u)',
            },
            {
              arabic: 'فِي الْبَيْتِ',
              english: 'in the house (genitive -i)',
            },
          ],
        },
        {
          title: 'Pronouns هُوَ and هِيَ',
          explanation:
            'هُوَ means "he/it" (masculine) and هِيَ means "she/it" (feminine). In Arabic, ALL nouns are either masculine or feminine, so these pronouns refer to people, animals, AND things.',
          examples: [
            {
              arabic: 'أَيْنَ الْوَلَدُ؟ هُوَ فِي الْمَسْجِدِ',
              english: 'Where is the boy? He is in the mosque',
            },
            {
              arabic: 'أَيْنَ الْكِتَابُ؟ هُوَ عَلَى الْمَكْتَبِ',
              english: 'Where is the book? It is on the desk',
            },
            {
              arabic: 'أَيْنَ آمِنَةُ؟ هِيَ فِي الْبَيْتِ',
              english: 'Where is Aminah? She is in the house',
            },
          ],
        },
        {
          title: 'Question Words',
          explanation:
            'New question words: أَيْنَ (where), مِنْ أَيْنَ (from where).',
          examples: [
            { arabic: 'أَيْنَ الْوَلَدُ؟', english: 'Where is the boy?' },
            {
              arabic: 'مِنْ أَيْنَ أَنْتَ؟',
              english: 'Where are you from?',
            },
            {
              arabic: 'أَنَا مِنَ الْيَابَانِ',
              english: 'I am from Japan',
            },
          ],
        },
        {
          title: 'Gender and Proper Nouns',
          explanation:
            'Masculine names carry tanwin (e.g., مُحَمَّدٌ). Feminine names do NOT carry tanwin and most end with taa marbuta ة (e.g., آمِنَةُ). Tanwin on proper nouns does not indicate indefiniteness.',
          examples: [
            { arabic: 'مُحَمَّدٌ', english: 'Muhammad (masc., with tanwin)' },
            { arabic: 'آمِنَةُ', english: 'Aminah (fem., no tanwin)' },
            { arabic: 'فَاطِمَةُ', english: 'Fatimah (fem., no tanwin)' },
          ],
        },
        {
          title: 'First Past-Tense Verbs',
          explanation:
            'Two past-tense verbs are introduced for the first time: ذَهَبَ (he went) and خَرَجَ (he went out / he left).',
          examples: [
            {
              arabic: 'خَرَجَ الْمُدَرِّسُ مِنَ الْفَصْلِ',
              english: 'The teacher left the classroom',
            },
            {
              arabic: 'ذَهَبَ إِلَى الْمُدِيرِ',
              english: 'He went to the principal',
            },
          ],
        },
      ],
      vocabulary: [
        // Prepositions
        { arabic: 'فِي', english: 'in', category: 'prepositions' },
        { arabic: 'عَلَى', english: 'on', category: 'prepositions' },
        { arabic: 'مِنْ', english: 'from', category: 'prepositions' },
        { arabic: 'إِلَى', english: 'to', category: 'prepositions' },
        // Question words
        { arabic: 'أَيْنَ', english: 'where', category: 'question words' },
        { arabic: 'مِنْ أَيْنَ', english: 'from where', category: 'question words' },
        // Pronouns
        { arabic: 'هُوَ', english: 'he / it (masculine)', category: 'pronouns' },
        { arabic: 'هِيَ', english: 'she / it (feminine)', category: 'pronouns' },
        { arabic: 'أَنْتَ', english: 'you (masculine)', category: 'pronouns' },
        { arabic: 'أَنَا', english: 'I', category: 'pronouns' },
        // Places
        { arabic: 'الْمَدْرَسَةُ', english: 'school', category: 'places' },
        { arabic: 'الْفَصْلُ', english: 'classroom', category: 'places' },
        { arabic: 'الْمَطْبَخُ', english: 'kitchen', category: 'places' },
        { arabic: 'الْغُرْفَةُ', english: 'room', category: 'places' },
        { arabic: 'الْحَمَّامُ', english: 'bathroom', category: 'places' },
        { arabic: 'الْمِرْحَاضُ', english: 'toilet', category: 'places' },
        { arabic: 'الْجَامِعَةُ', english: 'university', category: 'places' },
        { arabic: 'السُّوقُ', english: 'market', category: 'places' },
        // People
        { arabic: 'الْمُدِيرُ', english: 'principal / director', category: 'people' },
        // Other
        { arabic: 'السَّمَاءُ', english: 'sky', category: 'objects' },
        // Verbs
        { arabic: 'ذَهَبَ', english: 'he went', category: 'verbs' },
        { arabic: 'خَرَجَ', english: 'he went out / he left', category: 'verbs' },
        // Countries
        { arabic: 'الْيَابَانُ', english: 'Japan', category: 'countries' },
        { arabic: 'الصِّينُ', english: 'China', category: 'countries' },
        { arabic: 'الْهِنْدُ', english: 'India', category: 'countries' },
        { arabic: 'الْفِلِبِّينُ', english: 'Philippines', category: 'countries' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مِنْ أَيْنَ أَنْتَ؟',
          english: 'Where are you from?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'أَنَا مِنَ الْيَابَانِ',
          english: 'I am from Japan',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَيْنَ عَبَّاسٌ؟',
          english: 'Where is Abbas?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'خَرَجَ. ذَهَبَ إِلَى الْمُدِيرِ',
          english: 'He went out. He went to the principal',
        },
      ],
      culturalNotes: [
        'The dialogues depict a classroom where students come from Japan, China, India, and the Philippines, reflecting the Madinah University context with international students.',
        'Proper names reflect Islamic culture: male names include Muhammad, Ali, Abbas, Khalid; female names include Aminah, Fatimah, Khadijah, Aishah.',
        'The five daily prayer times are referenced: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), Isha (evening).',
      ],
    },

    // =====================
    // LESSON 5
    // =====================
    {
      number: 5,
      title: 'The Possessive Construction (Idaafa)',
      arabicTitle: 'الدَّرْسُ الخَامِسُ',
      theme: 'Idaafa (possessive construction), vocative يَا, hamzat al-wasl',
      grammar: [
        {
          title: 'The Idaafa Construction (الإضافة)',
          arabicTitle: 'المُضَاف والمُضَاف إِلَيْهِ',
          explanation:
            'The idaafa is a two-noun possessive phrase. The first word (mudaf) is the thing possessed. The second word (mudaf ilaihi) is the possessor. The mudaf never takes ال or tanwin. The mudaf ilaihi is always in the genitive case.',
          examples: [
            {
              arabic: 'كِتَابُ بِلَالٍ',
              english: "Bilal's book",
            },
            {
              arabic: 'بَيْتُ الإِمَامِ',
              english: "the imam's house",
            },
            {
              arabic: 'مَكْتَبُ المُدَرِّسِ',
              english: "the teacher's desk",
            },
          ],
          rules: [
            'The mudaf never takes ال or tanwin',
            'The mudaf ilaihi is always in the genitive case (majroor)',
            'كِتَابُ مَنْ؟ means "Whose book?"',
          ],
        },
        {
          title: 'The Vocative Particle يَا',
          arabicTitle: 'يَا',
          explanation:
            'يَا is used to call or address someone (vocative particle). A noun following يَا has only one dammah (no tanwin).',
          examples: [
            { arabic: 'يَا مُحَمَّدُ', english: 'O Muhammad!' },
            { arabic: 'يَا أُسْتَاذُ', english: 'O Professor!' },
          ],
        },
        {
          title: 'Hamzat al-Wasl',
          arabicTitle: 'هَمْزَةُ الوَصْل',
          explanation:
            'The words اِسْمٌ (name) and اِبْنٌ (son) begin with hamzat al-wasl. When preceded by another word, the initial vowel is dropped in pronunciation.',
          examples: [
            {
              arabic: 'اِسْمُ الوَلَدِ بِلَالٌ',
              english: "The boy's name is Bilal",
            },
            {
              arabic: 'اِبْنُ المُدَرِّسِ طَبِيبٌ',
              english: "The teacher's son is a doctor",
            },
          ],
        },
        {
          title: 'The Preposition تَحْتَ (Under)',
          arabicTitle: 'تَحْتَ',
          explanation:
            'تَحْتَ means "under/beneath." The noun following it is in the genitive case because it functions as mudaf ilaihi.',
          examples: [
            {
              arabic: 'تَحْتَ المَكْتَبِ',
              english: 'under the desk',
            },
            {
              arabic: 'هُوَ تَحْتَ الكِتَابِ',
              english: 'It is under the book',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الرَّسُولُ', english: 'the messenger', category: 'people' },
        { arabic: 'تَحْتَ', english: 'under / beneath', category: 'prepositions' },
        { arabic: 'العَمُّ', english: 'paternal uncle', category: 'family' },
        { arabic: 'الاِبْنُ', english: 'son', category: 'family' },
        { arabic: 'الشَّارِعُ', english: 'street', category: 'places' },
        { arabic: 'السَّيَّارَةُ', english: 'car', category: 'objects' },
        { arabic: 'الكَعْبَةُ', english: 'the Kaabah', category: 'places' },
        { arabic: 'هُنَا', english: 'here', category: 'adverbs' },
        { arabic: 'الخَالُ', english: 'maternal uncle', category: 'family' },
        { arabic: 'هُنَاكَ', english: 'there', category: 'adverbs' },
        { arabic: 'مُغْلَقٌ', english: 'closed / shut', category: 'adjectives' },
        { arabic: 'البِنْتُ', english: 'daughter / girl', category: 'family' },
        { arabic: 'الاِسْمُ', english: 'name', category: 'objects' },
        { arabic: 'الطَّبِيبُ', english: 'doctor', category: 'people' },
        { arabic: 'الحَقِيبَةُ', english: 'bag / case', category: 'objects' },
      ],
      dialogues: [
        {
          speaker: 'سَعِيدٌ',
          arabic: 'أَكِتَابُ مُحَمَّدٍ هَذَا يَا يَاسِرُ؟',
          english: "Is this Muhammad's book, Yasir?",
        },
        {
          speaker: 'يَاسِرٌ',
          arabic: 'لَا، هَذَا كِتَابُ حَامِدٍ',
          english: "No, this is Hamid's book",
        },
        {
          speaker: 'سَعِيدٌ',
          arabic: 'قَلَمُ مَنْ هَذَا يَا عَلِيُّ؟',
          english: "Whose pen is this, Ali?",
        },
        {
          speaker: 'عَلِيٌّ',
          arabic: 'هَذَا قَلَمُ المُدَرِّسِ',
          english: "This is the teacher's pen",
        },
      ],
      culturalNotes: [
        'References to the Quran as the Book of Allah, the Kaabah as the House of Allah, and Prophet Muhammad (peace be upon him) as the Messenger of Allah introduce core Islamic concepts.',
        'Family vocabulary such as paternal uncle (amm), maternal uncle (khaal), and son (ibn) reflects the importance of extended family in Arab culture.',
      ],
    },

    // =====================
    // LESSON 6
    // =====================
    {
      number: 6,
      title: 'The Feminine Demonstrative هَذِهِ',
      arabicTitle: 'الدَّرْسُ السَّادِسُ',
      theme: 'Feminine "this," feminine nouns/adjectives, body parts, preposition لِ',
      grammar: [
        {
          title: 'The Feminine Demonstrative هَذِهِ',
          arabicTitle: 'هَذِهِ',
          explanation:
            'هَذِهِ (haadhihi) means "this" for feminine nouns. It is the feminine counterpart of هَذَا.',
          examples: [
            {
              arabic: 'هَذِهِ أُخْتُ المُهَنْدِسِ',
              english: "This is the engineer's sister",
            },
            { arabic: 'مَا هَذِهِ؟ هَذِهِ مِكْوَاةٌ', english: 'What is this? This is an iron' },
            {
              arabic: 'هَذِهِ سَاعَةُ عَلِيٍّ. هِيَ جَمِيلَةٌ جِدًّا',
              english: "This is Ali's watch. It is very beautiful",
            },
          ],
        },
        {
          title: 'Feminine Nouns and Adjectives',
          explanation:
            'Nouns and adjectives are made feminine by adding ة (taa marbuuta) at the end. Some nouns have entirely separate masculine/feminine forms (e.g., اِبْنٌ/بِنْتٌ, أَخٌ/أُخْتٌ).',
          examples: [
            {
              arabic: 'مُدَرِّسٌ → مُدَرِّسَةٌ',
              english: 'teacher (m.) → teacher (f.)',
            },
            {
              arabic: 'طَبِيبٌ → طَبِيبَةٌ',
              english: 'doctor (m.) → doctor (f.)',
            },
            {
              arabic: 'جَمِيلٌ → جَمِيلَةٌ',
              english: 'beautiful (m.) → beautiful (f.)',
            },
          ],
        },
        {
          title: 'Gender of Body Parts',
          explanation:
            'Double (paired) body parts are usually feminine, while single body parts are masculine.',
          examples: [
            { arabic: 'يَدٌ', english: 'hand (feminine — paired)' },
            { arabic: 'عَيْنٌ', english: 'eye (feminine — paired)' },
            { arabic: 'رَأْسٌ', english: 'head (masculine — single)' },
          ],
          rules: [
            'Feminine (paired): يَدٌ (hand), رِجْلٌ (leg), عَيْنٌ (eye), أُذُنٌ (ear)',
            'Masculine (single): رَأْسٌ (head), أَنْفٌ (nose), فَمٌ (mouth), وَجْهٌ (face)',
          ],
        },
        {
          title: 'The Preposition لِ (Belonging to)',
          arabicTitle: 'لِ',
          explanation:
            'لِ is a preposition meaning "belongs to" or "for." لِمَنْ means "whose?" or "belonging to whom?"',
          examples: [
            {
              arabic: 'هَذَا لِبِلَالٍ',
              english: 'This belongs to Bilal',
            },
            {
              arabic: 'لِمَنْ هَذَا؟',
              english: 'Whose is this?',
            },
            {
              arabic: 'الحَمْدُ لِلَّهِ',
              english: 'Praise belongs to Allah',
            },
          ],
        },
        {
          title: 'أَيْضًا (Also) and جِدًّا (Very)',
          explanation:
            'أَيْضًا means "also" and جِدًّا means "very." Both are commonly used adverbs.',
          examples: [
            {
              arabic: 'هَذَا جَمِيلٌ، وَذَلِكَ أَيْضًا جَمِيلٌ',
              english: 'This is beautiful, and that is also beautiful',
            },
            {
              arabic: 'هَذَا كَبِيرٌ جِدًّا',
              english: 'This is very big',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'المِكْوَاةُ', english: 'iron (appliance)', category: 'objects' },
        { arabic: 'الدَّرَّاجَةُ', english: 'bicycle', category: 'objects' },
        { arabic: 'البَقَرَةُ', english: 'cow', category: 'animals' },
        { arabic: 'الفَلَّاحُ', english: 'farmer', category: 'people' },
        { arabic: 'الأُذُنُ', english: 'ear', category: 'body parts' },
        { arabic: 'اليَدُ', english: 'hand', category: 'body parts' },
        { arabic: 'الأُمُّ', english: 'mother', category: 'family' },
        { arabic: 'الثَّلَّاجَةُ', english: 'refrigerator', category: 'objects' },
        { arabic: 'النَّافِذَةُ', english: 'window', category: 'objects' },
        { arabic: 'جِدًّا', english: 'very', category: 'adverbs' },
        { arabic: 'المِلْعَقَةُ', english: 'spoon', category: 'objects' },
        { arabic: 'القِدْرُ', english: 'pot', category: 'objects' },
        { arabic: 'الفَمُ', english: 'mouth', category: 'body parts' },
        { arabic: 'الأَنْفُ', english: 'nose', category: 'body parts' },
        { arabic: 'الشَّايُ', english: 'tea', category: 'food' },
        { arabic: 'الرِّجْلُ', english: 'leg / foot', category: 'body parts' },
        { arabic: 'القَهْوَةُ', english: 'coffee', category: 'food' },
        { arabic: 'سَرِيعٌ', english: 'fast', category: 'adjectives' },
        { arabic: 'أَيْضًا', english: 'also', category: 'adverbs' },
        { arabic: 'المُهَنْدِسُ', english: 'engineer', category: 'people' },
        { arabic: 'أُخْتٌ', english: 'sister', category: 'family' },
        { arabic: 'أَخٌ', english: 'brother', category: 'family' },
      ],
      dialogues: [
        {
          speaker: 'Student A',
          arabic: 'مَنْ هَذِهِ؟',
          english: 'Who is this?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذِهِ أُخْتُ المُهَنْدِسِ',
          english: "This is the engineer's sister",
        },
        {
          speaker: 'Student A',
          arabic: 'لِمَنْ هَذِهِ السَّيَّارَةُ؟',
          english: 'Whose car is this?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذِهِ سَيَّارَةُ المُدِيرِ',
          english: "This is the director's car",
        },
      ],
      culturalNotes: [
        'The family structure vocabulary (paternal uncle, maternal uncle, son, daughter, sister, mother) reflects the centrality of extended family in Arab society.',
        'Country names like Japan, India, Iraq, and America introduce geographical vocabulary and international awareness.',
      ],
    },

    // =====================
    // LESSON 7
    // =====================
    {
      number: 7,
      title: 'Far Demonstratives: ذَلِكَ and تِلْكَ',
      arabicTitle: 'الدَّرْسُ السَّابِعُ',
      theme: 'Complete demonstrative pronoun system (near and far, masculine and feminine)',
      grammar: [
        {
          title: 'Complete Demonstrative Pronoun Chart',
          explanation:
            'Arabic has four demonstrative pronouns for singular nouns: هَذَا (this, masc.), هَذِهِ (this, fem.), ذَلِكَ (that, masc.), تِلْكَ (that, fem.).',
          examples: [
            { arabic: 'هَذَا مُحَمَّدٌ', english: 'This is Muhammad' },
            { arabic: 'هَذِهِ آمِنَةُ', english: 'This is Aminah' },
            { arabic: 'ذَلِكَ حَامِدٌ', english: 'That is Hamid' },
            { arabic: 'تِلْكَ زَيْنَبُ', english: 'That is Zainab' },
          ],
          rules: [
            'Near masculine: هَذَا',
            'Near feminine: هَذِهِ',
            'Far masculine: ذَلِكَ',
            'Far feminine: تِلْكَ',
          ],
        },
        {
          title: 'The Feminine Far Demonstrative تِلْكَ',
          arabicTitle: 'تِلْكَ',
          explanation:
            'تِلْكَ (tilka) means "that" for feminine nouns. It is the feminine counterpart of ذَلِكَ.',
          examples: [
            {
              arabic: 'مَنْ تِلْكَ؟ تِلْكَ فَاطِمَةُ',
              english: 'Who is that? That is Fatimah',
            },
            {
              arabic: 'هَذِهِ طَبِيبَةٌ وَتِلْكَ مُمَرِّضَةٌ',
              english: 'This is a doctor and that is a nurse',
            },
            {
              arabic: 'أَتِلْكَ دَجَاجَةٌ؟ لَا، تِلْكَ بَطَّةٌ',
              english: 'Is that a hen? No, that is a duck',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'البَيْضَةُ', english: 'egg', category: 'food' },
        { arabic: 'المُؤَذِّنُ', english: 'muadhdhin (caller to prayer)', category: 'people' },
        { arabic: 'الدَّجَاجَةُ', english: 'hen', category: 'animals' },
        { arabic: 'المُمَرِّضَةُ', english: 'nurse', category: 'people' },
        { arabic: 'النَّاقَةُ', english: 'she-camel', category: 'animals' },
        { arabic: 'الحَدِيقَةُ', english: 'garden', category: 'places' },
        { arabic: 'البَطَّةُ', english: 'duck', category: 'animals' },
      ],
      dialogues: [
        {
          speaker: 'Student A',
          arabic: 'مَنْ هَذِهِ؟',
          english: 'Who is this?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذِهِ آمِنَةُ',
          english: 'This is Aminah',
        },
        {
          speaker: 'Student A',
          arabic: 'وَمَنْ تِلْكَ؟',
          english: 'And who is that?',
        },
        {
          speaker: 'Student B',
          arabic: 'تِلْكَ فَاطِمَةُ',
          english: 'That is Fatimah',
        },
        {
          speaker: 'Student A',
          arabic: 'مَا تِلْكَ؟',
          english: 'What is that?',
        },
        {
          speaker: 'Student B',
          arabic: 'تِلْكَ بَيْضَةٌ',
          english: 'That is an egg',
        },
      ],
      culturalNotes: [
        'The muadhdhin (the one who calls the adhan/call to prayer) is introduced as an important role in Islamic practice.',
      ],
    },

    // =====================
    // LESSON 8
    // =====================
    {
      number: 8,
      title: 'Combining Demonstratives with Possession and Location',
      arabicTitle: 'الدَّرْسُ الثَّامِنُ',
      theme: 'Demonstratives with definite nouns, prepositions of place, لِ for possession',
      grammar: [
        {
          title: 'Demonstrative + Definite Noun',
          explanation:
            'Adding ال to the noun after a demonstrative changes meaning: هَذَا كِتَابٌ = "This is a book" (sentence), but هَذَا الكِتَابُ = "This book" (phrase, not a sentence). To make it a sentence, add a predicate: هَذَا الكِتَابُ جَدِيدٌ = "This book is new."',
          examples: [
            { arabic: 'هَذَا كِتَابٌ', english: 'This is a book (sentence)' },
            { arabic: 'هَذَا الكِتَابُ', english: 'This book (phrase)' },
            {
              arabic: 'هَذَا الكِتَابُ جَدِيدٌ',
              english: 'This book is new (sentence)',
            },
          ],
        },
        {
          title: 'Prepositions of Place: أَمَامَ and خَلْفَ',
          explanation:
            'أَمَامَ means "in front of" and خَلْفَ means "behind." Both function as mudaf, so the noun that follows is in the genitive case.',
          examples: [
            {
              arabic: 'بَيْتُ التَّاجِرِ أَمَامَ المَسْجِدِ',
              english: "The merchant's house is in front of the mosque",
            },
            {
              arabic: 'بَيْتُ الطَّبِيبِ خَلْفَ المَدْرَسَةِ',
              english: "The doctor's house is behind the school",
            },
          ],
        },
        {
          title: 'The Verb جَلَسَ (He Sat)',
          explanation:
            'A new past-tense verb is introduced: جَلَسَ (he sat/he sat down).',
          examples: [
            {
              arabic: 'أَيْنَ جَلَسَ حَامِدٌ؟ جَلَسَ خَلْفَ مَحْمُودٍ',
              english: 'Where did Hamid sit? He sat behind Mahmoud',
            },
          ],
        },
        {
          title: 'Indeclinable Nouns',
          explanation:
            'Nouns ending in long alif (-aa) do not change their endings regardless of grammatical position. Examples include country names like أَمْرِيكَا.',
          examples: [
            { arabic: 'هَذِهِ أَمْرِيكَا', english: 'This is America' },
            { arabic: 'أَنَا مِنْ أَمْرِيكَا', english: 'I am from America' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'أَمَامَ', english: 'in front of', category: 'prepositions' },
        { arabic: 'خَلْفَ', english: 'behind', category: 'prepositions' },
        { arabic: 'جَلَسَ', english: 'he sat', category: 'verbs' },
        { arabic: 'السِّكِّينُ', english: 'knife', category: 'objects' },
        { arabic: 'أَمْرِيكَا', english: 'America', category: 'countries' },
        { arabic: 'أَلْمَانِيَا', english: 'Germany', category: 'countries' },
        { arabic: 'إِنْكِلْتَرَا', english: 'England', category: 'countries' },
        { arabic: 'المُسْتَشْفَى', english: 'hospital', category: 'places' },
        { arabic: 'العِرَاقُ', english: 'Iraq', category: 'countries' },
        { arabic: 'سُوَيْسْرَا', english: 'Switzerland', category: 'countries' },
        { arabic: 'السَّبُّورَةُ', english: 'blackboard', category: 'objects' },
      ],
      dialogues: [
        {
          speaker: 'Narrator',
          arabic: 'هَذَا الرَّجُلُ تَاجِرٌ وَذَلِكَ الرَّجُلُ طَبِيبٌ',
          english: 'This man is a merchant and that man is a doctor',
        },
        {
          speaker: 'Narrator',
          arabic: 'هَذَا البَيْتُ لِلتَّاجِرِ وَذَلِكَ البَيْتُ لِلطَّبِيبِ',
          english: 'This house belongs to the merchant and that house belongs to the doctor',
        },
        {
          speaker: 'Student A',
          arabic: 'لِمَنْ هَذِهِ السَّيَّارَةُ؟',
          english: 'Whose is this car?',
        },
        {
          speaker: 'Student B',
          arabic: 'هَذِهِ السَّيَّارَةُ لِلطَّبِيبِ، وَتِلْكَ لِلتَّاجِرِ',
          english: 'This car belongs to the doctor, and that one belongs to the merchant',
        },
      ],
      culturalNotes: [
        'Country names from around the world are introduced, reflecting the diverse international student body at the Islamic University of Madinah.',
      ],
    },

    // =====================
    // LESSON 9
    // =====================
    {
      number: 9,
      title: 'Adjective-Noun Agreement and the Relative Pronoun الَّذِي',
      arabicTitle: 'الدَّرْسُ التَّاسِعُ',
      theme: 'Adjective placement and agreement, fa\'laan adjectives, relative pronoun',
      grammar: [
        {
          title: 'Adjectives Follow the Noun',
          arabicTitle: 'النَّعْتُ',
          explanation:
            'Unlike English, Arabic adjectives come AFTER the noun: بَيْتٌ جَدِيدٌ (a new house, literally "a house new").',
          examples: [
            { arabic: 'بَيْتٌ جَدِيدٌ', english: 'a new house' },
            { arabic: 'سَيَّارَةٌ جَدِيدَةٌ', english: 'a new car' },
            { arabic: 'وَلَدٌ صَغِيرٌ', english: 'a small boy' },
          ],
        },
        {
          title: 'Adjective-Noun Agreement',
          explanation:
            'The adjective must agree with the noun in three ways: gender (masculine/feminine), definiteness (with/without ال), and case (nominative/genitive).',
          examples: [
            {
              arabic: 'بِنْتٌ صَغِيرَةٌ',
              english: 'a small girl (fem. adj. matches fem. noun)',
            },
            {
              arabic: 'المُدَرِّسُ الجَدِيدُ',
              english: 'the new teacher (both definite)',
            },
            {
              arabic: 'فِي بَيْتٍ جَدِيدٍ',
              english: 'in a new house (both genitive)',
            },
          ],
          rules: [
            'Gender: masculine noun → masculine adjective; feminine noun → feminine adjective',
            'Definiteness: definite noun (with ال) → definite adjective (with ال)',
            'Case: the adjective takes the same case ending as the noun',
          ],
        },
        {
          title: 'Adjectives of the Pattern فَعْلَان (No Tanwin)',
          explanation:
            'Adjectives with the pattern fa\'laan do not take tanwin. Examples include كَسْلَانُ (lazy), جَوْعَانُ (hungry), عَطْشَانُ (thirsty), غَضْبَانُ (angry), مَلْآنُ (full).',
          examples: [
            {
              arabic: 'مَحْمُودٌ طَالِبٌ كَسْلَانُ',
              english: 'Mahmoud is a lazy student',
            },
            {
              arabic: 'أَأَنْتَ جَوْعَانُ؟ لَا، أَنَا عَطْشَانُ',
              english: 'Are you hungry? No, I am thirsty',
            },
          ],
        },
        {
          title: 'The Relative Pronoun الَّذِي',
          arabicTitle: 'الَّذِي',
          explanation:
            'الَّذِي means "who" (for people) or "which" (for things) when referring to masculine singular nouns.',
          examples: [
            {
              arabic: 'الرَّجُلُ الَّذِي خَرَجَ مِنَ المَسْجِدِ تَاجِرٌ شَهِيرٌ',
              english: 'The man who went out of the mosque is a famous merchant',
            },
            {
              arabic: 'البَيْتُ الَّذِي أَمَامَ المَسْجِدِ لِلإِمَامِ',
              english: 'The house which is in front of the mosque belongs to the imam',
            },
          ],
        },
        {
          title: 'The Preposition عِنْدَ (With / At)',
          arabicTitle: 'عِنْدَ',
          explanation:
            'عِنْدَ means "with" or "at (someone\'s place)." The noun after it takes the genitive case ending (-i).',
          examples: [
            {
              arabic: 'المُدَرِّسُ عِنْدَ المُدِيرِ',
              english: 'The teacher is with the headmaster',
            },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'اللُّغَةُ', english: 'language', category: 'objects' },
        { arabic: 'الإِنْكِلِيزِيَّةُ', english: 'English (language)', category: 'objects' },
        { arabic: 'الطَّائِرُ', english: 'bird', category: 'animals' },
        { arabic: 'صَعْبٌ', english: 'difficult', category: 'adjectives' },
        { arabic: 'العُصْفُورُ', english: 'sparrow', category: 'animals' },
        { arabic: 'المَدِينَةُ', english: 'city', category: 'places' },
        { arabic: 'العَرَبِيَّةُ', english: 'Arabic (language)', category: 'objects' },
        { arabic: 'القَاهِرَةُ', english: 'Cairo', category: 'places' },
        { arabic: 'الفَاكِهَةُ', english: 'fruit', category: 'food' },
        { arabic: 'اليَوْمَ', english: 'today', category: 'adverbs' },
        { arabic: 'سَهْلٌ', english: 'easy', category: 'adjectives' },
        { arabic: 'لِمَاذَا', english: 'why', category: 'question words' },
        { arabic: 'مُجْتَهِدٌ', english: 'hardworking', category: 'adjectives' },
        { arabic: 'الكُوبُ', english: 'cup', category: 'objects' },
        { arabic: 'شَهِيرٌ', english: 'famous', category: 'adjectives' },
        { arabic: 'كَسْلَانُ', english: 'lazy', category: 'adjectives' },
        { arabic: 'جَوْعَانُ', english: 'hungry', category: 'adjectives' },
        { arabic: 'عَطْشَانُ', english: 'thirsty', category: 'adjectives' },
        { arabic: 'غَضْبَانُ', english: 'angry', category: 'adjectives' },
        { arabic: 'مَلْآنُ', english: 'full', category: 'adjectives' },
        { arabic: 'المُسْتَوْصَفُ', english: 'clinic / small hospital', category: 'places' },
        { arabic: 'المَكْتَبَةُ', english: 'library', category: 'places' },
        { arabic: 'الآنَ', english: 'now', category: 'adverbs' },
        { arabic: 'المَرْوَحَةُ', english: 'fan', category: 'objects' },
        { arabic: 'الوَزِيرُ', english: 'minister', category: 'people' },
        { arabic: 'حَادٌّ', english: 'sharp', category: 'adjectives' },
        { arabic: 'إِنْدُونِيسِيَا', english: 'Indonesia', category: 'countries' },
        { arabic: 'الكُوَيْتُ', english: 'Kuwait', category: 'countries' },
        { arabic: 'عِنْدَ', english: 'with / at', category: 'prepositions' },
      ],
      dialogues: [
        {
          speaker: 'Narrator',
          arabic: 'العَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ',
          english: 'Arabic is a beautiful language',
        },
        {
          speaker: 'Narrator',
          arabic: 'القَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ',
          english: 'Cairo is a big city',
        },
        {
          speaker: 'Student A',
          arabic: 'أَيْنَ المُدَرِّسُ الجَدِيدُ؟',
          english: 'Where is the new teacher?',
        },
        {
          speaker: 'Student B',
          arabic: 'هُوَ عِنْدَ المُدِيرِ',
          english: 'He is with the headmaster',
        },
      ],
      culturalNotes: [
        'Descriptive sentences introduce cultural vocabulary: "Arabic is a beautiful language," "Cairo is a big city," "English is a difficult language."',
        'The secondary school, library, clinic, and market are introduced as common community locations.',
      ],
    },

    // =====================
    // LESSON 10
    // =====================
    {
      number: 10,
      title: 'Conversational Arabic: Possessive Pronouns and Family',
      arabicTitle: 'الدَّرْسُ العَاشِرُ',
      theme: 'Possessive pronouns, عِنْدِي vs لِي, family vocabulary, مَعَ, verb conjugation',
      grammar: [
        {
          title: 'Possessive Pronoun Suffixes',
          explanation:
            'Four possessive suffixes attach directly to nouns: ـي (my), ـكَ (your, masc.), ـهُ (his), ـها (her). With ـي, the noun takes kasrah instead of dammah.',
          examples: [
            { arabic: 'كِتَابِي', english: 'my book' },
            { arabic: 'كِتَابُكَ', english: 'your book' },
            { arabic: 'كِتَابُهُ', english: 'his book' },
            { arabic: 'كِتَابُهَا', english: 'her book' },
          ],
          rules: [
            'ـي = my (noun takes kasrah)',
            'ـكَ = your (masculine)',
            'ـهُ = his',
            'ـها = her',
          ],
        },
        {
          title: 'Irregular Nouns: أَبٌ (Father) and أَخٌ (Brother)',
          explanation:
            'When أَبٌ and أَخٌ are in a possessive construction, an extra waaw (و) is inserted before the pronoun suffix (except for the 1st person ـي).',
          examples: [
            { arabic: 'أَبُوكَ', english: 'your father' },
            { arabic: 'أَخُوهُ', english: 'his brother' },
            { arabic: 'أَبِي', english: 'my father (no extra waaw)' },
            { arabic: 'أَخِي', english: 'my brother (no extra waaw)' },
          ],
        },
        {
          title: 'Expressing "I Have": عِنْدِي vs لِي',
          explanation:
            'عِنْدِي is used for separable possessions (things you own). لِي is used for inseparable relations (family members, body parts). Do NOT use عِنْدِي for relatives.',
          examples: [
            { arabic: 'عِنْدِي كِتَابٌ', english: 'I have a book (possession)' },
            { arabic: 'لِي أَخٌ', english: 'I have a brother (relation)' },
            { arabic: 'لِي فَمٌ', english: 'I have a mouth (body part)' },
          ],
          rules: [
            'عِنْدِي = I have (for possessions/separable things)',
            'لِي = I have (for relatives/inseparable things)',
            'Same pattern: لَكَ (you have), لَهُ (he has), لَهَا (she has)',
          ],
        },
        {
          title: 'The Preposition مَعَ (With)',
          arabicTitle: 'مَعَ',
          explanation:
            'مَعَ means "with" (accompaniment). The noun after مَعَ takes the kasrah ending.',
          examples: [
            {
              arabic: 'خَرَجَ حَامِدٌ مَعَ خَالِدٍ',
              english: 'Hamid went out with Khalid',
            },
            {
              arabic: 'هُوَ مَعِي هُنَا',
              english: 'He is with me here',
            },
          ],
        },
        {
          title: 'Negation with مَا',
          explanation:
            'مَا (previously learned as "what?") is also used as a negative particle meaning "not" or "no."',
          examples: [
            {
              arabic: 'مَا عِنْدِي سَيَّارَةٌ',
              english: "I don't have a car",
            },
            {
              arabic: 'مَا لِي أَخٌ',
              english: "I don't have a brother",
            },
          ],
        },
        {
          title: 'Verb Conjugation: ذَهَبَ',
          explanation:
            'New conjugations of ذَهَبَ are introduced for 2nd and 1st person: ذَهَبْتَ (you went, masc.) and ذَهَبْتُ (I went).',
          examples: [
            { arabic: 'ذَهَبَ', english: 'he went' },
            { arabic: 'ذَهَبْتَ', english: 'you went (masc.)' },
            { arabic: 'ذَهَبْتُ', english: 'I went' },
          ],
        },
      ],
      vocabulary: [
        // Family and personal
        { arabic: 'أَبٌ', english: 'father', category: 'family' },
        { arabic: 'أُمٌّ', english: 'mother', category: 'family' },
        { arabic: 'زَوْجٌ', english: 'husband', category: 'family' },
        { arabic: 'زَمِيلٌ', english: 'colleague / classmate', category: 'people' },
        { arabic: 'طِفْلٌ', english: 'child', category: 'family' },
        { arabic: 'فَتًى', english: 'young man', category: 'people' },
        { arabic: 'وَاحِدٌ', english: 'one', category: 'numbers' },
        // Prepositions/expressions
        { arabic: 'مَعَ', english: 'with (accompaniment)', category: 'prepositions' },
        { arabic: 'عِنْدَ', english: 'with / at / to have', category: 'prepositions' },
        // Language
        { arabic: 'الأُرْدِيَّةُ', english: 'Urdu', category: 'objects' },
        { arabic: 'اليَابَانِيَّةُ', english: 'Japanese (language)', category: 'objects' },
        // Places
        { arabic: 'المَدِينَةُ المُنَوَّرَةُ', english: 'Madinah al-Munawwarah', category: 'places' },
      ],
      dialogues: [
        {
          speaker: 'حَامِدٌ',
          arabic: 'مَنْ أَنْتَ؟',
          english: 'Who are you?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'أَنَا طَالِبٌ بِالجَامِعَةِ',
          english: 'I am a student at the university',
        },
        {
          speaker: 'حَامِدٌ',
          arabic: 'مَا اسْمُكَ؟',
          english: 'What is your name?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'اسْمِي مُحَمَّدٌ',
          english: 'My name is Muhammad',
        },
        {
          speaker: 'حَامِدٌ',
          arabic: 'مِنْ أَيْنَ أَنْتَ؟',
          english: 'Where are you from?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'أَنَا مِنَ الهِنْدِ',
          english: 'I am from India',
        },
        {
          speaker: 'حَامِدٌ',
          arabic: 'أَيْنَ أَبُوكَ يَا مُحَمَّدُ؟',
          english: 'Where is your father, Muhammad?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'أَبِي فِي الكُوَيْتِ. هُوَ طَبِيبٌ شَهِيرٌ',
          english: 'My father is in Kuwait. He is a famous doctor',
        },
      ],
      culturalNotes: [
        'The distinction between لِ and عِنْدَ for possession reflects an important Arabic worldview: inseparable things (body parts, family) "belong to" a person (لِي), while separable possessions are "with" a person (عِنْدِي).',
        'The conversation takes place at the Islamic University of Madinah, with students from India, Japan, Kuwait, Iraq, and other countries.',
        'Proper names like Hamzah, Talhah, Usamah, and Mu\'awiyah are names of notable companions of the Prophet Muhammad (peace be upon him).',
        'The Islamic University at Madinah al-Munawwarah (الجَامِعَةُ الإِسْلَامِيَّةُ بِالمَدِينَةِ المُنَوَّرَةِ) is directly referenced as the setting.',
      ],
    },
  ],
}
