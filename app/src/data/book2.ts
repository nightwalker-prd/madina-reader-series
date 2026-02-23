import type { Book } from './types'

export const book2: Book = {
  id: 2,
  title: 'Madinah Arabic Reader Book 2',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الثاني',
  description:
    'The second book in the Madinah Arabic Reader Series by Dr. V. Abdur Rahim. Builds on Book 1 with feminine pronouns and verbs, plural forms (sound and broken), the dual, numbers 1-10, rational vs. irrational noun agreement, diptotes, and colours. Features longer dialogues and reading passages set in the Islamic University of Madinah.',
  level: 'beginner',
  totalLessons: 13,
  lessons: [
    // =====================
    // LESSON 1
    // =====================
    {
      number: 1,
      title: 'My House (بَيْتِي)',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme: 'Describing home and family, revision of Book 1 vocabulary',
      grammar: [
        {
          title: 'فِيهِ / فِيهَا — "In It"',
          explanation:
            'The masculine form فِيهِ is used for masculine nouns and the feminine form فِيهَا for feminine nouns. These combine the preposition فِي with a pronoun suffix.',
          examples: [
            {
              arabic: 'مَنْ فِي الْبَيْتِ؟ فِيهِ أَبِي وَأُمِّي',
              english: 'Who is in the house? In it are my father and mother',
            },
            {
              arabic: 'مَنْ فِي الْغُرْفَةِ؟ فِيهَا أَخِي',
              english: 'Who is in the room? In it is my brother',
            },
          ],
          rules: [
            'فِيهِ = in it (masculine noun)',
            'فِيهَا = in it (feminine noun)',
          ],
        },
        {
          title: 'The Verb أُحِبُّ (I Love)',
          explanation:
            'The verb أُحِبُّ is introduced in the first person ("I love"), along with the second person masculine تُحِبُّ ("you love").',
          examples: [
            {
              arabic: 'أُحِبُّ أَبِي وَأُمِّي وَأَخِي وَأُخْتِي',
              english: 'I love my father, my mother, my brother, and my sister',
            },
          ],
          rules: [
            'أُحِبُّ = I love / I like',
            'تُحِبُّ = you love / you like (masculine)',
            'In Arabic, وَ ("and") must be repeated before each item in a list',
          ],
        },
        {
          title: 'The Accusative Case (مَنْصُوب)',
          explanation:
            'The object of a verb takes the accusative case ending -a (fathah). However, this ending does not appear on a noun that has the first-person possessive pronoun (ي) attached.',
          examples: [
            { arabic: 'أُحِبُّ اللهَ', english: 'I love Allah' },
            { arabic: 'أُحِبُّ الرَّسُولَ', english: 'I love the Messenger' },
            {
              arabic: 'أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ',
              english: 'I love the Arabic language',
            },
          ],
          rules: [
            'The object of a verb takes the accusative case (-a / fathah)',
            'The accusative ending does not appear on nouns with ـي attached',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'بَيْتِي', english: 'my house', category: 'nouns' },
        { arabic: 'أُحِبُّ', english: 'I love / I like', category: 'verbs' },
        { arabic: 'تُحِبُّ', english: 'you love / you like', category: 'verbs' },
        { arabic: 'فِيهِ', english: 'in it (masculine)', category: 'expressions' },
        { arabic: 'فِيهَا', english: 'in it (feminine)', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'Narrator',
          arabic: 'هٰذَا بَيْتِي. بَيْتِي أَمَامَ الْمَسْجِدِ. بَيْتِي جَمِيلٌ. فِيهِ حَدِيقَةٌ صَغِيرَةٌ',
          english: 'This is my house. My house is in front of the mosque. My house is beautiful. It has a small garden',
        },
        {
          speaker: 'Narrator',
          arabic: 'أَنَا أُحِبُّ أَبِي وَأُمِّي. وَأُحِبُّ أَخِي وَأُخْتِي',
          english: 'I love my father and my mother. And I love my brother and my sister',
        },
      ],
      culturalNotes: [
        'This is a revision lesson that reviews vocabulary from Book 1 while introducing two new concepts.',
        'The house is described as being in front of the mosque, reflecting the centrality of the mosque in Muslim community life.',
        'Love of Allah, the Prophet, and the Arabic language are expressed naturally through grammar examples.',
      ],
    },

    // =====================
    // LESSON 2
    // =====================
    {
      number: 2,
      title: 'Conversation: Greetings, Family, and Professions',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme: 'Feminine pronouns, feminine past tense, feminine relative pronoun, greetings',
      grammar: [
        {
          title: 'Feminine "You" — أَنْتِ',
          explanation:
            'Book 1 taught the masculine أَنْتَ (anta). Now the feminine singular is introduced: أَنْتِ (anti). The possessive suffix changes from ـكَ (-ka) to ـكِ (-ki).',
          examples: [
            {
              arabic: 'مِنْ أَيْنَ أَنْتِ يَا آمِنَةُ؟',
              english: 'Where are you from, Aminah?',
            },
            {
              arabic: 'أَيْنَ بَيْتُكِ يَا مَرْيَمُ؟',
              english: 'Where is your house, Maryam?',
            },
          ],
          rules: [
            'أَنْتَ (anta) = you (masculine)',
            'أَنْتِ (anti) = you (feminine)',
            'Possessive: ـكَ (-ka, masculine) → ـكِ (-ki, feminine)',
          ],
        },
        {
          title: 'Feminine Past Tense — ذَهَبَتْ (She Went)',
          explanation:
            'The feminine form of the past tense verb is formed by adding تْ to the masculine form. When followed by ال (alif-lam), the sukun changes to kasrah.',
          examples: [
            { arabic: 'ذَهَبَتْ', english: 'she went' },
            {
              arabic: 'ذَهَبَتْ مَرْيَمُ إِلَى الْمَدْرَسَةِ',
              english: 'Maryam went to school',
            },
            { arabic: 'ذَهَبَتِ الْبِنْتُ', english: 'The girl went' },
          ],
          rules: [
            'ذَهَبَتْ = she went (adds تْ to masculine form)',
            'When followed by الـ, the sukun on تْ changes to kasrah: ذَهَبَتِ الْبِنْتُ',
          ],
        },
        {
          title: 'Feminine Relative Pronoun — الَّتِي',
          explanation:
            'Book 1 introduced الَّذِي for masculine. The feminine counterpart is الَّتِي, used for feminine singular nouns.',
          examples: [
            {
              arabic: 'الطَّالِبَةُ الَّتِي جَلَسَتْ أَمَامَ الْمُدَرِّسَةِ مِنْ أَلْمَانِيَا',
              english: 'The student who sat in front of the teacher is from Germany',
            },
            {
              arabic: 'السَّاعَةُ الَّتِي عَلَى الْمَكْتَبِ لِلْمُدَرِّسِ',
              english: 'The watch which is on the desk belongs to the teacher',
            },
          ],
          rules: [
            'الَّذِي = who/which (masculine)',
            'الَّتِي = who/which (feminine)',
          ],
        },
        {
          title: 'Emphatic Pronoun Usage',
          explanation:
            'The independent pronoun can be added after a possessive for emphasis or in cases of doubt.',
          examples: [
            {
              arabic: 'هٰذَا كِتَابُكَ أَنْتَ',
              english: 'This is YOUR book (emphatic)',
            },
            {
              arabic: 'هٰذَا بَيْتُهُ هُوَ',
              english: 'This is HIS house (emphatic)',
            },
          ],
          rules: ['Adding the independent pronoun after a possessive creates emphasis'],
        },
      ],
      vocabulary: [
        { arabic: 'الْعَمَّةُ', english: 'paternal aunt', category: 'family' },
        { arabic: 'الْخَالَةُ', english: 'maternal aunt', category: 'family' },
        { arabic: 'الشَّجَرَةُ', english: 'tree', category: 'nouns' },
        { arabic: 'سُورِيَا', english: 'Syria', category: 'countries' },
        { arabic: 'الْمَدْرَسَةُ الْمُتَوَسِّطَةُ', english: 'middle school', category: 'places' },
        { arabic: 'الْمُفَتِّشُ', english: 'inspector', category: 'people' },
        { arabic: 'الْفَتَاةُ', english: 'young lady', category: 'people' },
        { arabic: 'الدَّفْتَرُ', english: 'notebook', category: 'nouns' },
        { arabic: 'مَالِيزِيَا', english: 'Malaysia', category: 'countries' },
        { arabic: 'مُسْتَشْفَى الْوِلَادَةِ', english: 'maternity hospital', category: 'places' },
        { arabic: 'يَا سَيِّدِي', english: 'Sir!', category: 'expressions' },
        { arabic: 'يَا سَيِّدَتِي', english: 'Madam!', category: 'expressions' },
        { arabic: 'كَيْفَ حَالُكَ؟', english: 'How are you?', category: 'expressions' },
        { arabic: 'أَنَا بِخَيْرٍ', english: 'I am fine', category: 'expressions' },
        { arabic: 'بَعْدَ', english: 'after', category: 'prepositions' },
        { arabic: 'الْمَمْلَكَةُ الْعَرَبِيَّةُ السَّعُودِيَّةُ', english: 'Kingdom of Saudi Arabia', category: 'places' },
      ],
      dialogues: [
        {
          speaker: 'Speaker',
          arabic: 'كَيْفَ حَالُكِ يَا بِنْتُ؟',
          english: 'How are you, girl?',
        },
        {
          speaker: 'آمِنَةُ',
          arabic: 'أَنَا بِخَيْرٍ وَالْحَمْدُ لِلّٰهِ',
          english: 'I am fine, praise be to Allah',
        },
        {
          speaker: 'Speaker',
          arabic: 'مَا اسْمُكِ؟',
          english: 'What is your name?',
        },
        {
          speaker: 'آمِنَةُ',
          arabic: 'اسْمِي آمِنَةُ',
          english: 'My name is Aminah',
        },
        {
          speaker: 'Speaker',
          arabic: 'مِنْ أَيْنَ أَنْتِ؟',
          english: 'Where are you from?',
        },
        {
          speaker: 'آمِنَةُ',
          arabic: 'أَنَا مِنْ سُورِيَا',
          english: 'I am from Syria',
        },
      ],
      culturalNotes: [
        'The greeting كَيْفَ حَالُكَ؟ and response أَنَا بِخَيْرٍ وَالْحَمْدُ لِلّٰهِ reflect standard Muslim etiquette.',
        'Gender distinction is taught systematically: pronouns (أَنْتِ), verbs (ذَهَبَتْ), relative pronouns (الَّتِي), and possessives (ـكِ).',
        'Family relationships are presented with Islamic terminology: بِنْتُ عَمِّي (paternal cousin), ابْنُ أَخِي (nephew).',
      ],
    },

    // =====================
    // LESSON 3
    // =====================
    {
      number: 3,
      title: 'Plural Demonstratives and Broken Plurals',
      arabicTitle: 'الدَّرْسُ الثَّالِثُ',
      theme: 'Plural demonstrative pronouns, broken plurals, sound plurals, plural personal pronouns',
      grammar: [
        {
          title: 'Near Plural Demonstrative: هَؤُلَاءِ (These)',
          explanation:
            'هَؤُلَاءِ means "these" and is used for both masculine and feminine plurals, mostly for human beings.',
          examples: [
            {
              arabic: 'هَذَا تَاجِرٌ → هَؤُلَاءِ تُجَّارٌ',
              english: 'This is a merchant → These are merchants',
            },
            {
              arabic: 'هَذِهِ مُدَرِّسَةٌ → هَؤُلَاءِ مُدَرِّسَاتٌ',
              english: 'This is a lady teacher → These are lady teachers',
            },
          ],
          rules: [
            'هَؤُلَاءِ is used for both masculine and feminine plurals',
            'Mostly used for human beings',
          ],
        },
        {
          title: 'Far Plural Demonstrative: أُولَئِكَ (Those)',
          explanation:
            'أُولَئِكَ means "those" and is used for both masculine and feminine plurals. The waaw is not pronounced.',
          examples: [
            {
              arabic: 'ذَلِكَ طَالِبٌ → أُولَئِكَ طُلَّابٌ',
              english: 'That is a student → Those are students',
            },
            {
              arabic: 'تِلْكَ طَالِبَةٌ → أُولَئِكَ طَالِبَاتٌ',
              english: 'That is a female student → Those are female students',
            },
          ],
          rules: [
            'أُولَئِكَ is used for both genders in the plural',
            'The واو in أُولَئِكَ is not pronounced (read as ulaaika)',
          ],
        },
        {
          title: 'Broken Plurals (جَمْع التَّكْسِير)',
          arabicTitle: 'جَمْع التَّكْسِير',
          explanation:
            'Arabic forms many plurals by changing the internal structure of the word. There are more than twenty patterns of broken plural.',
          examples: [
            { arabic: 'طَالِبٌ → طُلَّابٌ', english: 'student → students (fuaal pattern)' },
            { arabic: 'تَاجِرٌ → تُجَّارٌ', english: 'merchant → merchants (fuaal pattern)' },
            { arabic: 'رَجُلٌ → رِجَالٌ', english: 'man → men (fiaal pattern)' },
            { arabic: 'كَبِيرٌ → كِبَارٌ', english: 'big → big (pl.) (fiaal pattern)' },
            { arabic: 'وَلَدٌ → أَوْلَادٌ', english: 'boy → boys (afaal pattern)' },
            { arabic: 'صَدِيقٌ → أَصْدِقَاءُ', english: 'friend → friends (afilaa pattern)' },
            { arabic: 'أَخٌ → إِخْوَةٌ', english: 'brother → brothers (ifila pattern)' },
            { arabic: 'جَدِيدٌ → جُدُدٌ', english: 'new → new (pl.) (fuul pattern)' },
          ],
          rules: [
            'Broken plurals change the internal structure of the word',
            'There are over twenty different patterns',
            'Broken plurals must be memorized with each noun',
          ],
        },
        {
          title: 'Sound Masculine Plural (جَمْع مُذَكَّر سَالِم)',
          arabicTitle: 'جَمْع مُذَكَّر سَالِم',
          explanation:
            'Formed by adding -ونَ (-uuna) to the singular. The word retains its original form.',
          examples: [
            { arabic: 'مُسْلِمٌ → مُسْلِمُونَ', english: 'Muslim → Muslims' },
            { arabic: 'مُدَرِّسٌ → مُدَرِّسُونَ', english: 'teacher → teachers' },
            { arabic: 'مُهَنْدِسٌ → مُهَنْدِسُونَ', english: 'engineer → engineers' },
            { arabic: 'مُجْتَهِدٌ → مُجْتَهِدُونَ', english: 'hardworking → hardworking (pl.)' },
          ],
          rules: ['Add -ونَ (-uuna) to the singular form'],
        },
        {
          title: 'Sound Feminine Plural (جَمْع مُؤَنَّث سَالِم)',
          arabicTitle: 'جَمْع مُؤَنَّث سَالِم',
          explanation:
            'Formed by changing the ة (taa marbuta) to ـاتٌ (-aat).',
          examples: [
            { arabic: 'مُسْلِمَةٌ → مُسْلِمَاتٌ', english: 'Muslim (f.) → Muslims (f.)' },
            { arabic: 'طَالِبَةٌ → طَالِبَاتٌ', english: 'student (f.) → students (f.)' },
            { arabic: 'مُهَنْدِسَةٌ → مُهَنْدِسَاتٌ', english: 'engineer (f.) → engineers (f.)' },
          ],
          rules: [
            'Change ة to ـاتٌ',
            'Irregular: بِنْتٌ → بَنَاتٌ, أُخْتٌ → أَخَوَاتٌ',
          ],
        },
        {
          title: 'Plural Personal Pronouns',
          explanation:
            'Third person plural pronouns: هُمْ (they, masculine) and هُنَّ (they, feminine). هُمْ is used only for human beings.',
          examples: [
            { arabic: 'هُوَ → هُمْ', english: 'he → they (masculine)' },
            { arabic: 'هِيَ → هُنَّ', english: 'she → they (feminine)' },
          ],
          rules: [
            'هُمْ = they (masculine) — only for human beings',
            'هُنَّ = they (feminine) — only for human beings',
          ],
        },
        {
          title: 'Plural Possessive Suffixes',
          explanation: 'Possessive suffixes for plural persons.',
          examples: [
            { arabic: 'بَيْتُهُمْ', english: 'their (masculine) house' },
            { arabic: 'بَيْتُهُنَّ', english: 'their (feminine) house' },
            { arabic: 'بَيْتُنَا', english: 'our house' },
            { arabic: 'بَيْتُكُمْ', english: 'your (plural) house' },
          ],
          rules: [
            'ـهُمْ = their (masculine)',
            'ـهُنَّ = their (feminine)',
            'ـنَا = our',
            'ـكُمْ = your (plural)',
          ],
        },
        {
          title: 'Plural Past Tense Verb Conjugation',
          explanation: 'Past tense conjugation of ذَهَبَ in the plural.',
          examples: [
            { arabic: 'ذَهَبُوا', english: 'they (masculine) went' },
            { arabic: 'ذَهَبْنَ', english: 'they (feminine) went' },
            { arabic: 'ذَهَبْنَا', english: 'we went' },
            { arabic: 'ذَهَبْتُمْ', english: 'you (plural) went' },
          ],
          rules: [
            'ذَهَبُوا = they (masculine) went — silent alif at the end',
            'ذَهَبْنَ = they (feminine) went',
            'ذَهَبْنَا = we went',
            'ذَهَبْتُمْ = you (plural) went',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'اسْمٌ (ج: أَسْمَاءُ)', english: 'name (pl. names)', category: 'nouns' },
        { arabic: 'رَجُلٌ (ج: رِجَالٌ)', english: 'man (pl. men)', category: 'people' },
        { arabic: 'فَتًى (ج: فِتْيَةٌ)', english: 'young man (pl. young men)', category: 'people' },
        { arabic: 'طَالِبٌ (ج: طُلَّابٌ)', english: 'student (pl. students)', category: 'people' },
        { arabic: 'ضَيْفٌ (ج: ضُيُوفٌ)', english: 'guest (pl. guests)', category: 'people' },
        { arabic: 'حَاجٌّ (ج: حُجَّاجٌ)', english: 'pilgrim (pl. pilgrims)', category: 'people' },
        { arabic: 'صَدِيقٌ (ج: أَصْدِقَاءُ)', english: 'friend (pl. friends)', category: 'people' },
        { arabic: 'زَمِيلٌ (ج: زُمَلَاءُ)', english: 'classmate (pl. classmates)', category: 'people' },
        { arabic: 'شَيْخٌ (ج: شُيُوخٌ)', english: 'sheikh / old man (pl.)', category: 'people' },
        { arabic: 'الْحَقْلُ (ج: حُقُولٌ)', english: 'field (pl. fields)', category: 'nouns' },
        { arabic: 'النَّاسُ', english: 'people', category: 'people' },
        { arabic: 'الْقَرْيَةُ', english: 'village', category: 'places' },
        { arabic: 'الْمَطْعَمُ', english: 'restaurant', category: 'places' },
        { arabic: 'الْمَدْرَسَةُ الاِبْتِدَائِيَّةُ', english: 'primary school', category: 'places' },
        { arabic: 'النِّسَاءُ', english: 'women', category: 'people' },
        { arabic: 'الزَّوْجُ (ج: أَزْوَاجٌ)', english: 'husband (pl. husbands)', category: 'family' },
        { arabic: 'زَوْجَةٌ', english: 'wife', category: 'family' },
        { arabic: 'الْمَرْأَةُ (ج: نِسَاءٌ)', english: 'woman (pl. women)', category: 'people' },
        { arabic: 'أُسْتَاذَةٌ', english: 'lady professor', category: 'people' },
        { arabic: 'عَمَّةٌ', english: 'aunt (paternal)', category: 'family' },
        { arabic: 'ضَعِيفٌ (ج: ضِعَافٌ)', english: 'weak (pl.)', category: 'adjectives' },
        { arabic: 'قَوِيٌّ (ج: أَقْوِيَاءُ)', english: 'strong (pl.)', category: 'adjectives' },
        { arabic: 'عَالِمٌ (ج: عُلَمَاءُ)', english: 'scholar (pl. scholars)', category: 'people' },
        { arabic: 'وَزِيرٌ (ج: وُزَرَاءُ)', english: 'minister (pl. ministers)', category: 'people' },
        { arabic: 'بَعْضُ', english: 'some', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'Speaker',
          arabic: 'مَنْ هٰؤُلَاءِ الْفِتْيَةُ الطِّوَالُ يَا عَلِيُّ؟',
          english: 'Who are these tall young men, Ali?',
        },
        {
          speaker: 'عَلِيٌّ',
          arabic: 'هُمْ طُلَّابٌ جُدُدٌ',
          english: 'They are new students',
        },
        {
          speaker: 'Speaker',
          arabic: 'أَيْنَ الْمُصْطَفَى وَأَصْدِقَاؤُهُ؟',
          english: 'Where are Mustafa and his friends?',
        },
        {
          speaker: 'عَلِيٌّ',
          arabic: 'ذَهَبُوا إِلَى الْمَطْعَمِ',
          english: 'They went to the restaurant',
        },
        {
          speaker: 'Speaker',
          arabic: 'هَؤُلَاءِ إِخْوَتِي وَأُولَئِكَ أَصْدِقَائِي',
          english: 'These are my brothers and those are my friends',
        },
      ],
      culturalNotes: [
        'Pilgrims (حُجَّاج) feature in dialogues, reflecting the Madinah setting near the holy sites.',
        'The diverse student body is highlighted: students from America, China, and Japan.',
        'Broken plurals are a cornerstone of Arabic morphology with over twenty patterns.',
      ],
    },

    // =====================
    // LESSON 4
    // =====================
    {
      number: 4,
      title: 'First and Second Person Plural Pronouns',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme: 'Plural pronouns نَحْنُ and أَنْتُمْ, plural verb conjugation, the interrogative أَيّ',
      grammar: [
        {
          title: 'Plural of أَنْتَ → أَنْتُمْ',
          explanation:
            'أَنْتُمْ is the masculine plural "you." The possessive suffix changes from ـكَ to ـكُمْ.',
          examples: [
            { arabic: 'مَنْ أَنْتُمْ؟', english: 'Who are you (all)?' },
            {
              arabic: 'أَيْنَ بَيْتُكُمْ يَا إِخْوَانُ؟',
              english: 'Where is your house, brothers?',
            },
          ],
          rules: [
            'أَنْتُمْ = you (masculine plural)',
            'ـكُمْ = your (masculine plural possessive)',
          ],
        },
        {
          title: 'Plural of أَنَا → نَحْنُ',
          explanation:
            'نَحْنُ means "we" and covers both masculine and feminine. The possessive suffix changes from ـي to ـنَا.',
          examples: [
            { arabic: 'نَحْنُ مُسْلِمُونَ', english: 'We are Muslims (masculine)' },
            { arabic: 'نَحْنُ مُسْلِمَاتٌ', english: 'We are Muslims (feminine)' },
            { arabic: 'اللهُ رَبُّنَا', english: 'Allah is our Lord' },
            { arabic: 'الإِسْلاَمُ دِينُنَا', english: 'Islam is our faith' },
          ],
          rules: [
            'نَحْنُ = we (both masculine and feminine)',
            'ـنَا = our',
          ],
        },
        {
          title: 'Past Tense Plural Conjugation',
          explanation: 'Expanding verb conjugation to cover all plural persons.',
          examples: [
            { arabic: 'ذَهَبْتُمْ', english: 'you (masculine plural) went' },
            { arabic: 'ذَهَبْنَا', english: 'we went' },
          ],
          rules: [
            'ذَهَبْتُمْ = you (plural) went',
            'ذَهَبْنَا = we went',
            'ذَهَبْنَا (we went) vs. ذَهَبْنَ (they feminine went) — difference is the final alif',
          ],
        },
        {
          title: 'The Interrogative أَيّ (Which)',
          arabicTitle: 'أَيّ',
          explanation:
            'أَيّ means "which" and is used as a mudaf. The noun after it is in the genitive case.',
          examples: [
            { arabic: 'أَيُّ بَيْتٍ هَذَا؟', english: 'Which house is this?' },
            { arabic: 'مِنْ أَيِّ بَلَدٍ أَنْتَ؟', english: 'Which country are you from?' },
            { arabic: 'أَيَّ لُغَةٍ تُحِبُّ؟', english: 'Which language do you like?' },
          ],
          rules: [
            'أَيّ is always a mudaf — the following noun is in genitive case',
            'After a preposition, أَيّ takes the genitive case (أَيِّ)',
          ],
        },
        {
          title: 'Proper Nouns Without Tanwin',
          explanation:
            'Feminine proper nouns and non-Arabic proper nouns do not take tanwin. Exception: three-letter masculine non-Arabic names do take tanwin.',
          examples: [
            { arabic: 'آمِنَةُ، مَرْيَمُ، خَدِيجَةُ', english: 'Aminah, Maryam, Khadijah (feminine, no tanwin)' },
            { arabic: 'وِلْيَمُ، بَارِيسُ، لَنْدَنُ', english: 'William, Paris, London (non-Arabic, no tanwin)' },
            { arabic: 'نُوحٌ، لُوطٌ', english: 'Nuh, Lut (3-letter masculine, with tanwin)' },
          ],
          rules: [
            'Feminine proper nouns have no tanwin',
            'Non-Arabic proper nouns have no tanwin',
            'Exception: 3-letter masculine non-Arabic names take tanwin',
          ],
        },
        {
          title: 'Adjectives with Mudaf Constructions',
          explanation:
            'The mudaf is definite by position, so any adjective modifying it must also be definite (with ال).',
          examples: [
            {
              arabic: 'بَيْتُ الإِمَامِ الْجَدِيدُ',
              english: "The imam's new house (al-jadiidu modifies bayt)",
            },
            {
              arabic: 'بَيْتُ الإِمَامِ الْجَدِيدِ',
              english: "The new imam's house (al-jadiidi modifies al-imam)",
            },
          ],
          rules: [
            'Adjectives modifying a mudaf must be definite (with ال)',
            'Placement determines which noun the adjective modifies',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الدُّسْتُورُ', english: 'constitution / law', category: 'nouns' },
        { arabic: 'أَهْلاً وَسَهْلاً وَمَرْحَبًا', english: 'welcome', category: 'expressions' },
        { arabic: 'الْقِبْلَةُ', english: 'prayer direction (qiblah)', category: 'nouns' },
        { arabic: 'طِفْلَةٌ', english: 'child (feminine)', category: 'family' },
        { arabic: 'الْمَحْكَمَةُ', english: 'law court', category: 'places' },
        { arabic: 'الْمَطَارُ', english: 'airport', category: 'places' },
        { arabic: 'حَفِيدٌ (ج: حَفَدَةٌ)', english: 'grandson (pl. grandsons)', category: 'family' },
        { arabic: 'الْكُلِّيَّةُ (ج: كُلِّيَّاتٌ)', english: 'faculty / college', category: 'places' },
        { arabic: 'كُلِّيَّةُ الطِّبِّ', english: 'faculty of medicine', category: 'places' },
        { arabic: 'كُلِّيَّةُ الْهَنْدَسَةِ', english: 'faculty of engineering', category: 'places' },
        { arabic: 'كُلِّيَّةُ التِّجَارَةِ', english: 'faculty of commerce', category: 'places' },
        { arabic: 'كُلِّيَّةُ الشَّرِيعَةِ', english: 'faculty of Islamic law', category: 'places' },
        { arabic: 'الرَّبُّ', english: 'Lord', category: 'nouns' },
        { arabic: 'يَوْمُ السَّبْتِ', english: 'Saturday', category: 'nouns' },
        { arabic: 'الشَّهْرُ', english: 'month', category: 'nouns' },
        { arabic: 'رَجَبُ', english: 'Rajab (month)', category: 'nouns' },
        { arabic: 'الْيُونَانُ', english: 'Greece', category: 'countries' },
        { arabic: 'شَفَاهُ اللهُ', english: 'May Allah grant him health!', category: 'expressions' },
        { arabic: 'نَصْرَانِيٌّ (ج: نَصَارَى)', english: 'Christian', category: 'nouns' },
        { arabic: 'النَّبِيُّ', english: 'prophet', category: 'nouns' },
        { arabic: 'الدِّينُ', english: 'religion', category: 'nouns' },
      ],
      dialogues: [
        {
          speaker: 'حَامِدٌ',
          arabic: 'السَّلَامُ عَلَيْكُمْ',
          english: 'Peace be upon you (plural)',
        },
        {
          speaker: 'الفِتْيَة',
          arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
          english: 'And upon you peace, mercy of Allah, and His blessings',
        },
        {
          speaker: 'حَامِدٌ',
          arabic: 'مَنْ أَنْتُمْ؟',
          english: 'Who are you (all)?',
        },
        {
          speaker: 'الفِتْيَة',
          arabic: 'نَحْنُ أَبْنَاءُ الدُّكْتُورِ مُوسَى',
          english: 'We are the sons of Dr. Musa',
        },
        {
          speaker: 'حَامِدٌ',
          arabic: 'أَهْلًا وَسَهْلًا وَمَرْحَبًا',
          english: 'Welcome!',
        },
      ],
      culturalNotes: [
        'The full Islamic greeting السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ is taught in context.',
        'A key Islamic creed statement is used: "We are Muslims. Islam is our religion, Allah is our Lord, Muhammad is our prophet, the Quran is our constitution, the Kaaba is our qiblah, and Arabic is our language."',
        'University faculties (Medicine, Engineering, Islamic Law, Commerce) reflect the Saudi university setting.',
        'Prophets\' names (Ibrahim, Ismail, Ishaq, Yaqub, Ayub, Sulayman, Dawud, Yunus, Idris) are used as examples of diptote proper nouns.',
      ],
    },

    // =====================
    // LESSON 5
    // =====================
    {
      number: 5,
      title: 'Feminine Plural Pronouns',
      arabicTitle: 'الدَّرْسُ الْخَامِسُ',
      theme: 'Feminine plural pronouns أَنْتُنَّ, complete pronoun chart, time expressions قَبْلَ/بَعْدَ',
      grammar: [
        {
          title: 'Plural of أَنْتِ → أَنْتُنَّ',
          explanation:
            'أَنْتُنَّ is the feminine plural "you." The possessive suffix changes from ـكِ to ـكُنَّ.',
          examples: [
            {
              arabic: 'مَنْ أَنْتُنَّ يَا أَخَوَاتِي؟',
              english: 'Who are you, my sisters?',
            },
            {
              arabic: 'أَيْنَ بَيْتُكُنَّ يَا سَيِّدَاتُ؟',
              english: 'Where is your house, ladies?',
            },
          ],
          rules: [
            'أَنْتُنَّ = you (feminine plural)',
            'ـكُنَّ = your (feminine plural possessive)',
          ],
        },
        {
          title: 'Complete Detached Pronoun Chart',
          explanation: 'All detached pronouns learned across Books 1 and 2.',
          examples: [
            { arabic: 'هُوَ / هِيَ', english: 'he / she' },
            { arabic: 'هُمْ / هُنَّ', english: 'they (m.) / they (f.)' },
            { arabic: 'أَنْتَ / أَنْتِ', english: 'you (m.) / you (f.)' },
            { arabic: 'أَنْتُمْ / أَنْتُنَّ', english: 'you (m. pl.) / you (f. pl.)' },
            { arabic: 'أَنَا / نَحْنُ', english: 'I / we' },
          ],
          rules: [
            '3rd person: هُوَ/هِيَ (sg.), هُمْ/هُنَّ (pl.)',
            '2nd person: أَنْتَ/أَنْتِ (sg.), أَنْتُمْ/أَنْتُنَّ (pl.)',
            '1st person: أَنَا (sg.), نَحْنُ (pl.)',
          ],
        },
        {
          title: 'Time Expressions: قَبْلَ (Before) and بَعْدَ (After)',
          explanation:
            'Both are always mudaf. The noun following is in the genitive case.',
          examples: [
            { arabic: 'بَعْدَ الدَّرْسِ', english: 'after the lesson' },
            { arabic: 'قَبْلَ الصَّلاَةِ', english: 'before the prayer' },
            {
              arabic: 'ذَهَبْتُ إِلَى الْمَسْجِدِ قَبْلَ الأَذَانِ وَرَجَعْتُ بَعْدَ الصَّلاَةِ',
              english: 'I went to the mosque before the adhan and returned after the prayer',
            },
          ],
          rules: [
            'قَبْلَ = before (always mudaf, following noun in genitive)',
            'بَعْدَ = after (always mudaf, following noun in genitive)',
          ],
        },
        {
          title: 'The Verb رَجَعَ (He Returned)',
          explanation: 'A new past-tense verb meaning "he returned."',
          examples: [
            {
              arabic: 'أَرَجَعَ الإِمَامُ مِنَ الْمَسْجِدِ؟',
              english: 'Has the imam returned from the mosque?',
            },
          ],
          rules: ['رَجَعَ = he returned'],
        },
      ],
      vocabulary: [
        { arabic: 'قَبْلَ', english: 'before', category: 'prepositions' },
        { arabic: 'بَعْدَ', english: 'after', category: 'prepositions' },
        { arabic: 'كَيْفَ', english: 'how', category: 'question words' },
        { arabic: 'مَتَى', english: 'when', category: 'question words' },
        { arabic: 'الأُسْبُوعُ', english: 'week', category: 'nouns' },
        { arabic: 'الشَّهْرُ', english: 'month', category: 'nouns' },
        { arabic: 'الأَذَانُ', english: 'call to prayer', category: 'nouns' },
        { arabic: 'الصَّلاَةُ', english: 'prayer', category: 'nouns' },
        { arabic: 'رَجَعَ', english: 'he returned', category: 'verbs' },
        { arabic: 'الآنَ', english: 'now', category: 'adverbs' },
        { arabic: 'الاخْتِبَارُ', english: 'examination', category: 'nouns' },
        { arabic: 'الدَّرْسُ', english: 'lesson', category: 'nouns' },
        { arabic: 'الْقَاهِرَةُ', english: 'Cairo', category: 'places' },
      ],
      dialogues: [
        {
          speaker: 'الْفَتَيَاتُ',
          arabic: 'السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
          english: 'Peace be upon you, mercy of Allah, and His blessings',
        },
        {
          speaker: 'زَيْنَبُ',
          arabic: 'مَنْ أَنْتُنَّ يَا أَخَوَاتُ؟',
          english: 'Who are you, sisters?',
        },
        {
          speaker: 'الْفَتَيَاتُ',
          arabic: 'نَحْنُ بَنَاتُ الشَّيْخِ عَبَّاسٍ',
          english: 'We are the daughters of Sheikh Abbas',
        },
        {
          speaker: 'زَيْنَبُ',
          arabic: 'اخْتِبَارُنَا بَعْدَ شَهْرَيْنِ إِنْ شَاءَ اللهُ',
          english: 'Our exam is in two months, God willing',
        },
      ],
      culturalNotes: [
        'Lesson 5 features an all-female conversation between Zaynab and the sheikh\'s daughters, practicing feminine plural forms in a natural context.',
        'The expression إِنْ شَاءَ اللهُ (God willing) is used naturally in conversation.',
        'Geographic references include Riyadh and Cairo.',
      ],
    },

    // =====================
    // LESSON 6
    // =====================
    {
      number: 6,
      title: 'Rational vs. Irrational Noun Agreement',
      arabicTitle: 'الدَّرْسُ السَّادِسُ',
      theme: 'Rational (human) vs. irrational (non-human) plural agreement, new broken plural patterns',
      grammar: [
        {
          title: 'Rational (عَاقِل) vs. Irrational (غَيْرُ عَاقِل) Nouns',
          arabicTitle: 'عَاقِل وَغَيْرُ عَاقِل',
          explanation:
            'Rational nouns refer to human beings. Irrational nouns refer to things, animals, and concepts. In the plural, irrational nouns are treated as feminine singular for demonstratives, pronouns, adjectives, and verbs.',
          examples: [
            {
              arabic: 'هَؤُلاَءِ طُلاَّبٌ جُدُدٌ. هُمْ صِغَارٌ',
              english: 'These are new students. They are young (rational plural)',
            },
            {
              arabic: 'هَذِهِ كُتُبٌ جَدِيدَةٌ. هِيَ صَغِيرَةٌ',
              english: 'These are new books. They are small (irrational: fem. singular)',
            },
            {
              arabic: 'الطُّلاَّبُ خَرَجُوا',
              english: 'The students went out (rational → masculine plural verb)',
            },
            {
              arabic: 'الْكِلاَبُ خَرَجَتْ',
              english: 'The dogs went out (irrational → feminine singular verb)',
            },
          ],
          rules: [
            'Rational plural: treated as true plural (هُمْ, جُدُد, خَرَجُوا)',
            'Irrational plural: treated as feminine singular (هِيَ, جَدِيدَة, خَرَجَتْ)',
            'Irrational plurals use هَذِهِ/تِلْكَ, never هَؤُلاَءِ/أُولَئِكَ',
          ],
        },
        {
          title: 'New Broken Plural Pattern: مَفَاعِلُ',
          explanation:
            'The pattern مَفَاعِلُ is a diptote pattern (no tanwin).',
          examples: [
            { arabic: 'مَسْجِدٌ → مَسَاجِدُ', english: 'mosque → mosques' },
            { arabic: 'دَفْتَرٌ → دَفَاتِرُ', english: 'notebook → notebooks' },
          ],
          rules: [
            'مَفَاعِلُ pattern plurals do not take tanwin (diptote)',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الْفُنْدُقُ', english: 'hotel', category: 'places' },
        { arabic: 'الطَّائِرَةُ', english: 'airplane', category: 'nouns' },
        { arabic: 'النَّهْرُ', english: 'river', category: 'nouns' },
        { arabic: 'الْبَحْرُ', english: 'sea', category: 'nouns' },
      ],
      dialogues: [
        {
          speaker: 'الْمُدَرِّسُ',
          arabic: 'لِمَنْ هَذِهِ الأَقْلاَمُ يَا مُحَمَّدُ؟',
          english: 'Whose pens are these, Muhammad?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'هِيَ لِي يَا أُسْتَاذُ',
          english: 'They are mine, teacher',
        },
        {
          speaker: 'الْمُدَرِّسُ',
          arabic: 'هِيَ جَمِيلَةٌ جِدًّا',
          english: 'They are very beautiful',
        },
      ],
      culturalNotes: [
        'The rational vs. irrational distinction is one of the most important Arabic grammar rules.',
        'Inanimate plural objects (pens, books) are referred to with the feminine singular pronoun هِيَ, not هُمْ.',
      ],
    },

    // =====================
    // LESSON 7
    // =====================
    {
      number: 7,
      title: 'Broken Plurals in Context',
      arabicTitle: 'الدَّرْسُ السَّابِعُ',
      theme: 'Practicing broken plurals with irrational plural agreement rule',
      grammar: [
        {
          title: 'Irrational Plural Agreement in Practice',
          explanation:
            'All predicates for irrational plurals take the feminine singular form. This lesson extensively practices this rule.',
          examples: [
            { arabic: 'أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ', english: 'The doors of the mosque are open' },
            { arabic: 'النُّجُومُ جَمِيلَةٌ', english: 'The stars are beautiful' },
            { arabic: 'هَذِهِ الدُّرُوسُ سَهْلَةٌ', english: 'These lessons are easy' },
            { arabic: 'تِلْكَ السُّرُرُ مَكْسُورَةٌ', english: 'Those beds are broken' },
          ],
          rules: [
            'Irrational plural subjects take feminine singular predicates',
            'مَفْتُوحَةٌ (not مَفْتُوحُونَ) for irrational plurals',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الشَّرِكَةُ (ج: شَرِكَاتٌ)', english: 'firm / company', category: 'nouns' },
        { arabic: 'رَخِيصٌ', english: 'cheap', category: 'adjectives' },
        { arabic: 'الْقَمِيصُ (ج: قُمْصَانٌ)', english: 'shirt (pl. shirts)', category: 'nouns' },
        { arabic: 'يَابَانِيَّةٌ', english: 'Japanese', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'Narrator',
          arabic: 'أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ',
          english: 'The doors of the mosque are open',
        },
        {
          speaker: 'Narrator',
          arabic: 'السَّاعَةُ الْيَابَانِيَّةُ رَخِيصَةٌ',
          english: 'The Japanese watch is cheap',
        },
      ],
      culturalNotes: [
        'This lesson focuses on drilling the irrational plural agreement rule through extensive practice sentences.',
      ],
    },

    // =====================
    // LESSON 8
    // =====================
    {
      number: 8,
      title: 'The Dual Form (المُثَنَّى)',
      arabicTitle: 'الدَّرْسُ الثَّامِنُ',
      theme: 'The dual form, the interrogative كَمْ (how many)',
      grammar: [
        {
          title: 'The Dual Form (المُثَنَّى)',
          arabicTitle: 'المُثَنَّى',
          explanation:
            'Arabic has three grammatical numbers: singular, dual, and plural. The dual refers specifically to two of something. It is formed by adding ـَانِ (-aani) to the singular noun.',
          examples: [
            { arabic: 'بَيْتٌ → بَيْتَانِ', english: 'house → two houses' },
            { arabic: 'كِتَابٌ → كِتَابَانِ', english: 'book → two books' },
            { arabic: 'سَيَّارَةٌ → سَيَّارَتَانِ', english: 'car → two cars' },
            { arabic: 'يَدٌ → يَدَانِ', english: 'hand → two hands' },
          ],
          rules: [
            'Add ـَانِ (-aani) to the singular noun',
            'For feminine nouns ending in ة, change to تَانِ',
          ],
        },
        {
          title: 'Dual Demonstrative Pronouns',
          explanation:
            'Special dual forms exist for demonstrative and personal pronouns.',
          examples: [
            { arabic: 'هَذَانِ كِتَابَانِ', english: 'These are two books' },
            { arabic: 'هَاتَانِ سَيَّارَتَانِ', english: 'These are two cars' },
            { arabic: 'هُمَا طَالِبَانِ جَدِيدَانِ', english: 'They are two new students' },
          ],
          rules: [
            'هَذَانِ = dual of هَذَا (these two, masculine)',
            'هَاتَانِ = dual of هَذِهِ (these two, feminine)',
            'هُمَا = they two (dual of هُوَ/هِيَ)',
            'Adjectives qualifying a dual noun must also be in the dual form',
          ],
        },
        {
          title: 'The Interrogative كَمْ (How Many?)',
          arabicTitle: 'كَمْ',
          explanation:
            'The noun following كَمْ is always singular and in the accusative case.',
          examples: [
            { arabic: 'كَمْ كِتَابًا؟', english: 'How many books?' },
            { arabic: 'كَمْ سَيَّارَةً؟', english: 'How many cars?' },
            {
              arabic: 'كَمْ أَخًا لَكَ يَا مُحَمَّدُ؟',
              english: 'How many brothers do you have, Muhammad?',
            },
            {
              arabic: 'كَمْ عِيدًا فِي السَّنَةِ؟',
              english: 'How many festivals in the year?',
            },
          ],
          rules: [
            'The noun after كَمْ is always singular',
            'The noun after كَمْ is in the accusative case (mansoob)',
            'Nouns with tanwin in accusative take alif: كِتَابًا',
            'Nouns ending in ة do not take this alif: سَيَّارَةً',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'كَمْ', english: 'how many', category: 'question words' },
        { arabic: 'الْعِيدُ', english: 'festival', category: 'nouns' },
        { arabic: 'الْحَيُّ (ج: أَحْيَاءٌ)', english: 'neighborhood / city district', category: 'places' },
        { arabic: 'الرَّكْعَةُ (ج: رَكَعَاتٌ)', english: "rak'ah (unit of prayer)", category: 'nouns' },
        { arabic: 'الْعَجَلَةُ (ج: عَجَلَاتٌ)', english: 'wheel', category: 'nouns' },
        { arabic: 'الرِّيَالُ (ج: رِيَالَاتٌ)', english: 'riyal (currency)', category: 'nouns' },
        { arabic: 'الْمِسْطَرَةُ (ج: مَسَاطِرُ)', english: 'ruler (measuring tool)', category: 'nouns' },
        { arabic: 'السَّبُّورَةُ', english: 'writing board / blackboard', category: 'nouns' },
        { arabic: 'السَّنَةُ', english: 'year', category: 'nouns' },
        { arabic: 'النَّافِذَةُ', english: 'window', category: 'nouns' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَمْ أَخًا لَكَ يَا مُحَمَّدُ؟',
          english: 'How many brothers do you have, Muhammad?',
        },
        {
          speaker: 'مُحَمَّدٌ',
          arabic: 'لِي أَخٌ وَاحِدٌ',
          english: 'I have one brother',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَمْ عِيدًا فِي السَّنَةِ يَا زَكَرِيَّا؟',
          english: 'How many festivals in the year, Zakariyya?',
        },
        {
          speaker: 'زَكَرِيَّا',
          arabic: 'فِي السَّنَةِ عِيدَانِ. هُمَا عِيدُ الْفِطْرِ وَعِيدُ الأَضْحَى',
          english: 'In the year there are two festivals. They are Eid al-Fitr and Eid al-Adha',
        },
      ],
      culturalNotes: [
        'The two Eids (عِيدُ الْفِطْرِ and عِيدُ الأَضْحَى) are referenced as the two annual Islamic holidays.',
        'The rak\'ah (unit of Islamic prayer) is introduced as vocabulary.',
        'The Saudi currency riyal (رِيَال) and its subdivision qirsh are taught.',
      ],
    },

    // =====================
    // LESSON 9
    // =====================
    {
      number: 9,
      title: 'Numbers 1-10 with Masculine Nouns',
      arabicTitle: 'الدَّرْسُ التَّاسِعُ',
      theme: 'Cardinal numbers 1-10, gender polarity rule with masculine counted nouns',
      grammar: [
        {
          title: 'Numbers 1 and 2',
          explanation:
            'وَاحِدٌ (one) follows the noun as an adjective. اِثْنَانِ (two) also follows as an adjective but is usually omitted since the dual form already conveys "two."',
          examples: [
            { arabic: 'كِتَابٌ وَاحِدٌ', english: 'one book' },
            { arabic: 'كِتَابَانِ اثْنَانِ', english: 'two books (emphatic)' },
          ],
          rules: [
            'وَاحِدٌ follows the noun as an adjective',
            'اِثْنَانِ is usually omitted since the dual already means "two"',
          ],
        },
        {
          title: 'Numbers 3-10 with Masculine Nouns (Gender Polarity)',
          arabicTitle: 'العَدَد مع المذكر',
          explanation:
            'Numbers 3-10 are used as mudaf. The counted noun is plural and in the genitive case. Critical rule: with masculine counted nouns, the number takes the FEMININE form (ends in ة).',
          examples: [
            { arabic: 'ثَلَاثَةُ كُتُبٍ', english: 'three books' },
            { arabic: 'أَرْبَعَةُ بُيُوتٍ', english: 'four houses' },
            { arabic: 'خَمْسَةُ أَقْلَامٍ', english: 'five pens' },
            { arabic: 'سِتَّةُ رِجَالٍ', english: 'six men' },
            { arabic: 'سَبْعَةُ طُلَّابٍ', english: 'seven students' },
            { arabic: 'ثَمَانِيَةُ بُيُوتٍ', english: 'eight houses' },
            { arabic: 'تِسْعَةُ طُلَّابٍ', english: 'nine students' },
            { arabic: 'عَشَرَةُ رِجَالٍ', english: 'ten men' },
          ],
          rules: [
            'Numbers 3-10 are mudaf; counted noun is plural genitive',
            'Gender polarity: masculine noun → feminine number (with ة)',
            'The counted noun (ma\'dud) must be in the plural form',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الثَّمَنُ', english: 'price', category: 'nouns' },
        { arabic: 'الْقِرْشُ (ج: قُرُوشٌ)', english: 'piaster (1/10 of a riyal)', category: 'nouns' },
        { arabic: 'اليَوْمُ (ج: أَيَّامٌ)', english: 'day (pl. days)', category: 'nouns' },
        { arabic: 'الْحَافِلَةُ (ج: حَافِلَاتٌ)', english: 'bus (pl. buses)', category: 'nouns' },
        { arabic: 'السُّؤَالُ (ج: أَسْئِلَةٌ)', english: 'question (pl. questions)', category: 'nouns' },
        { arabic: 'الْبَلَدُ (ج: بِلَادٌ)', english: 'country (pl. countries)', category: 'nouns' },
        { arabic: 'الْجَيْبُ (ج: جُيُوبٌ)', english: 'pocket (pl. pockets)', category: 'nouns' },
        { arabic: 'رَاكِبٌ (ج: رُكَّابٌ)', english: 'passenger (pl. passengers)', category: 'people' },
        { arabic: 'مُخْتَلِفٌ', english: 'different', category: 'adjectives' },
        { arabic: 'كُلٌّ', english: 'all', category: 'expressions' },
        { arabic: 'كُلُّهُمْ', english: 'all of them', category: 'expressions' },
        { arabic: 'نِصْفٌ', english: 'half', category: 'nouns' },
        { arabic: 'شُكْرًا', english: 'thanks', category: 'expressions' },
        { arabic: 'أُورُبَّا', english: 'Europe', category: 'places' },
        { arabic: 'فَرَنْسَا', english: 'France', category: 'countries' },
        { arabic: 'هُولَنْدَا', english: 'Holland', category: 'countries' },
      ],
      dialogues: [
        {
          speaker: 'المُدِيرُ',
          arabic: 'كَمْ طَالِبًا جَدِيدًا فِي فَصْلِكَ يَا شَيْخُ؟',
          english: 'How many new students in your class, Sheikh?',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'فِيهِ عَشَرَةُ طُلَّابٍ جُدُدٌ',
          english: 'There are ten new students',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مِنْهُمْ ثَلَاثَةُ طُلَّابٍ مِنَ الْفِلِبِّينِ، وَأَرْبَعَةُ طُلَّابٍ مِنَ الْيَابَانِ',
          english: 'Among them are three students from the Philippines and four students from Japan',
        },
      ],
      culturalNotes: [
        'The gender polarity rule in Arabic numbers is one of the most distinctive features of the language: masculine nouns take numbers with feminine endings and vice versa.',
        'Country names from Europe (France, Germany, Holland) and Asia (Philippines, Japan, China, Malaysia) are used extensively.',
      ],
    },

    // =====================
    // LESSON 10
    // =====================
    {
      number: 10,
      title: 'Numbers 3-10 with Feminine Nouns',
      arabicTitle: 'الدَّرْسُ الْعَاشِرُ',
      theme: 'Numbers 3-10 with feminine counted nouns, gender polarity reversed',
      grammar: [
        {
          title: 'Numbers 3-10 with Feminine Nouns',
          arabicTitle: 'العَدَد مع المؤنث',
          explanation:
            'When the counted noun is feminine, the taa marbuta (ة) is DROPPED from the number. This is the opposite of the masculine rule.',
          examples: [
            { arabic: 'ثَلَاثُ بَنَاتٍ', english: 'three daughters' },
            { arabic: 'أَرْبَعُ أَخَوَاتٍ', english: 'four sisters' },
            { arabic: 'خَمْسُ أُمَّهَاتٍ', english: 'five mothers' },
            { arabic: 'سِتُّ نِسَاءٍ', english: 'six women' },
            { arabic: 'سَبْعُ طَالِبَاتٍ', english: 'seven (female) students' },
            { arabic: 'ثَمَانِي غُرَفٍ', english: 'eight rooms' },
            { arabic: 'عَشْرُ نِسَاءٍ', english: 'ten women' },
          ],
          rules: [
            'With feminine nouns, the ة is dropped from the number',
            'Masculine noun → number with ة (ثَلَاثَةُ كُتُبٍ)',
            'Feminine noun → number without ة (ثَلَاثُ بَنَاتٍ)',
            'ثَمَانِي (eight with feminine) has sukun on the final letter',
            'عَشْرَةُ (ten with masculine) vs. عَشْرُ (ten with feminine)',
          ],
        },
        {
          title: 'Feminine Forms of 1 and 2',
          explanation:
            'The feminine of وَاحِدٌ is وَاحِدَةٌ, and of اثْنَانِ is اثْنَتَانِ.',
          examples: [
            { arabic: 'لِي أُخْتٌ وَاحِدَةٌ', english: 'I have one sister' },
            { arabic: 'لِي أُخْتَانِ اثْنَتَانِ', english: 'I have two sisters' },
          ],
          rules: [
            'وَاحِدٌ → وَاحِدَةٌ (feminine)',
            'اثْنَانِ → اثْنَتَانِ (feminine)',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'الْمَجَلَّةُ (ج: مَجَلَّاتٌ)', english: 'magazine / journal', category: 'nouns' },
        { arabic: 'الْحَرْفُ (ج: أَحْرُفٌ / حُرُوفٌ)', english: 'letter (of the alphabet)', category: 'nouns' },
        { arabic: 'الْكَلِمَةُ (ج: كَلِمَاتٌ)', english: 'word', category: 'nouns' },
        { arabic: 'إِنْدُونِيسِيَا', english: 'Indonesia', category: 'countries' },
      ],
      dialogues: [
        {
          speaker: 'لَيْلَى',
          arabic: 'يَا سَلْمَى، أَفِي فَصْلِكِ طَالِبَاتٌ مِنَ الصِّينِ وَالْيَابَانِ؟',
          english: 'Salma, are there students from China and Japan in your class?',
        },
        {
          speaker: 'سَلْمَى',
          arabic: 'نَعَمْ. فِي فَصْلِنَا خَمْسُ طَالِبَاتٍ مِنَ الصِّينِ وَأَرْبَعُ طَالِبَاتٍ مِنَ الْيَابَانِ',
          english: 'Yes. In our class there are five students from China and four from Japan',
        },
      ],
      culturalNotes: [
        'The gender polarity in Arabic numbers is extensively drilled with both masculine and feminine nouns.',
        'The conversation between Layla and Salma practices feminine forms naturally.',
      ],
    },

    // =====================
    // LESSON 11
    // =====================
    {
      number: 11,
      title: 'My School (مَدْرَسَتِي)',
      arabicTitle: 'الدَّرْسُ الْحَادِي عَشَرَ',
      theme: 'Extended reading passage about school, diversity, and Islamic brotherhood',
      grammar: [
        {
          title: 'Connected Reading Passage',
          explanation:
            'This lesson features an extended reading passage that integrates all previously learned grammar concepts: possessives, numbers, broken plurals, adjective agreement, and irrational plural rules.',
          examples: [
            {
              arabic: 'هَذِهِ مَدْرَسَتِي. هِيَ قَرِيبَةٌ مِنَ الْمَسْجِدِ',
              english: 'This is my school. It is near the mosque',
            },
            {
              arabic: 'فِي فَصْلِنَا عَشَرَةُ طُلَّابٍ. وَهُمْ مِنْ بِلَادٍ مُخْتَلِفَةٍ',
              english: 'In our class there are ten students. They are from different countries',
            },
          ],
          rules: [
            'Extended reading passages integrate all previously learned grammar',
          ],
        },
        {
          title: 'The Conjunction وَلَكِنَّ (But)',
          explanation:
            'وَلَكِنَّ means "but" and is used to introduce a contrasting idea.',
          examples: [
            {
              arabic: 'لُغَاتُهُمْ مُخْتَلِفَةٌ وَأَلْوَانُهُمْ مُخْتَلِفَةٌ. وَلَكِنَّ دِينَهُمْ وَاحِدٌ',
              english: 'Their languages are different and their colors are different. But their religion is one',
            },
          ],
          rules: ['وَلَكِنَّ = but (introduces contrast)'],
        },
      ],
      vocabulary: [
        { arabic: 'لُغَاتٌ', english: 'languages', category: 'nouns' },
        { arabic: 'أَلْوَانٌ', english: 'colors', category: 'nouns' },
        { arabic: 'دِينٌ', english: 'religion', category: 'nouns' },
        { arabic: 'رَبٌّ', english: 'Lord', category: 'nouns' },
        { arabic: 'نَبِيٌّ', english: 'prophet', category: 'nouns' },
        { arabic: 'قِبْلَةٌ', english: 'qiblah (prayer direction)', category: 'nouns' },
        { arabic: 'صَالِحٌ', english: 'righteous', category: 'adjectives' },
        { arabic: 'نُحِبُّهُ', english: 'we love him', category: 'verbs' },
        { arabic: 'كَثِيرًا', english: 'very much', category: 'adverbs' },
      ],
      dialogues: [
        {
          speaker: 'Narrator',
          arabic: 'هَذَا مُدَرِّسُنَا. اسْمُهُ الشَّيْخُ بِلَالٌ. وَهُوَ مِنْ سُورِيَا. وَهُوَ رَجُلٌ صَالِحٌ. نَحْنُ نُحِبُّهُ كَثِيرًا',
          english: 'This is our teacher. His name is Sheikh Bilal. He is from Syria. He is a righteous man. We love him very much',
        },
        {
          speaker: 'Narrator',
          arabic: 'هُمْ مِنْ بِلَادٍ مُخْتَلِفَةٍ، وَلُغَاتُهُمْ مُخْتَلِفَةٌ وَأَلْوَانُهُمْ مُخْتَلِفَةٌ. وَلَكِنَّ دِينَهُمْ وَاحِدٌ',
          english: 'They are from different countries, their languages are different and their colors are different. But their religion is one',
        },
        {
          speaker: 'Narrator',
          arabic: 'هُمْ مُسْلِمُونَ وَالْمُسْلِمُونَ إِخْوَةٌ',
          english: 'They are Muslims, and Muslims are brothers',
        },
      ],
      culturalNotes: [
        'The passage emphasizes the diversity of the Muslim community: students from Japan, China, India, Ghana, Nigeria, England, Turkey, Malaysia, America, and Russia.',
        'The unifying message "Muslims are brothers" (الْمُسْلِمُونَ إِخْوَةٌ) is a key Islamic concept.',
        'The teacher is addressed as شَيْخ and described as صَالِحٌ (righteous), reflecting Islamic educational values.',
      ],
    },

    // =====================
    // LESSON 12
    // =====================
    {
      number: 12,
      title: 'Colours and Diptotes (الْمَمْنُوعُ مِنَ الصَّرْفِ)',
      arabicTitle: 'الدَّرْسُ الثَّانِي عَشَرَ',
      theme: 'Diptotes (nouns that never take tanwin), colours, possessions',
      grammar: [
        {
          title: 'Diptotes (الْمَمْنُوعُ مِنَ الصَّرْفِ)',
          arabicTitle: 'الْمَمْنُوعُ مِنَ الصَّرْفِ',
          explanation:
            'Diptotes are nouns and adjectives that NEVER take tanwin under any circumstances. There are eight categories of diptotes.',
          examples: [
            { arabic: 'آمِنَةُ', english: 'Aminah (feminine proper noun — diptote)' },
            { arabic: 'حَمْزَةُ', english: 'Hamzah (masculine name ending in ة — diptote)' },
            { arabic: 'عُثْمَانُ', english: 'Uthman (name ending in -aan — diptote)' },
            { arabic: 'كَسْلَانُ', english: 'lazy (fa\'laan adjective — diptote)' },
            { arabic: 'أَحْمَدُ', english: 'Ahmad (af\'al proper noun — diptote)' },
            { arabic: 'أَسْوَدُ', english: 'black (af\'al colour adjective — diptote)' },
            { arabic: 'وِلْيَمُ', english: 'William (non-Arabic name — diptote)' },
            { arabic: 'مَسَاجِدُ', english: 'mosques (mafaa\'il plural — diptote)' },
          ],
          rules: [
            '1. Feminine proper nouns (آمِنَةُ، زَيْنَبُ)',
            '2. Masculine proper nouns ending in ة (حَمْزَةُ، أُسَامَةُ)',
            '3. Masculine proper nouns ending in -ان (عُثْمَانُ، رَمَضَانُ)',
            '4. فَعْلَان adjectives (كَسْلَانُ، مَلْآنُ)',
            '5. أَفْعَل proper nouns (أَحْمَدُ، أَنْوَرُ)',
            '6. أَفْعَل colour/comparative adjectives (أَسْوَدُ، أَحْمَرُ)',
            '7. Non-Arabic proper nouns (وِلْيَمُ، لَنْدَنُ)',
            '8. Certain broken plural patterns (أَفْعِلَاءُ، فُعَلَاءُ، مَفَاعِلُ، مَفَاعِيلُ)',
          ],
        },
        {
          title: 'Colours (أَلْوَان)',
          explanation:
            'All colour adjectives in Arabic follow the أَفْعَل pattern and are diptotes (no tanwin).',
          examples: [
            { arabic: 'قَلَمٌ أَحْمَرُ', english: 'a red pen' },
            { arabic: 'قَلَمٌ أَزْرَقُ', english: 'a blue pen' },
            { arabic: 'قَلَمٌ أَخْضَرُ', english: 'a green pen' },
            { arabic: 'قَلَمٌ أَسْوَدُ', english: 'a black pen' },
            { arabic: 'قَلَمٌ أَصْفَرُ', english: 'a yellow pen' },
            { arabic: 'قَلَمٌ أَبْيَضُ', english: 'a white pen' },
          ],
          rules: [
            'Colours follow the أَفْعَل pattern',
            'All are diptotes — never take tanwin',
          ],
        },
      ],
      vocabulary: [
        // Colours
        { arabic: 'أَحْمَرُ', english: 'red', category: 'colours' },
        { arabic: 'أَزْرَقُ', english: 'blue', category: 'colours' },
        { arabic: 'أَخْضَرُ', english: 'green', category: 'colours' },
        { arabic: 'أَسْوَدُ', english: 'black', category: 'colours' },
        { arabic: 'أَصْفَرُ', english: 'yellow', category: 'colours' },
        { arabic: 'أَبْيَضُ', english: 'white', category: 'colours' },
        // Nouns with broken plurals
        { arabic: 'فِنْجَانٌ (ج: فَنَاجِينُ)', english: 'tea cup', category: 'nouns' },
        { arabic: 'دَقِيقَةٌ (ج: دَقَائِقُ)', english: 'minute', category: 'nouns' },
        { arabic: 'مِنْدِيلٌ (ج: مَنَادِيلُ)', english: 'handkerchief', category: 'nouns' },
        { arabic: 'مِفْتَاحٌ (ج: مَفَاتِيحُ)', english: 'key', category: 'nouns' },
        { arabic: 'مَدْرَسَةٌ (ج: مَدَارِسُ)', english: 'school', category: 'places' },
        { arabic: 'مَسْجِدٌ (ج: مَسَاجِدُ)', english: 'mosque', category: 'places' },
        { arabic: 'فُنْدُقٌ (ج: فَنَادِقُ)', english: 'hotel', category: 'places' },
        { arabic: 'مَكْتَبٌ (ج: مَكَاتِبُ)', english: 'desk / office', category: 'nouns' },
        { arabic: 'اللَّوْنُ (ج: أَلْوَانٌ)', english: 'colour', category: 'nouns' },
        { arabic: 'الْقَارَّةُ', english: 'continent', category: 'nouns' },
        { arabic: 'وَاسِعٌ', english: 'spacious', category: 'adjectives' },
        { arabic: 'قَلِيلٌ', english: 'few / little', category: 'adjectives' },
        { arabic: 'كَثِيرٌ', english: 'many / much', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'يُوسُفُ',
          arabic: 'عِنْدِي خَمْسَةُ أَقْلَامٍ: هَذَا قَلَمٌ أَحْمَرُ، وَهَذَا أَزْرَقُ، وَهَذَا أَخْضَرُ، وَهَذَا أَسْوَدُ، وَهَذَا أَصْفَرُ',
          english: 'I have five pens: this is a red pen, this is blue, this is green, this is black, and this is yellow',
        },
        {
          speaker: 'سُفْيَانُ',
          arabic: 'فِي بَلَدِنَا مَسَاجِدُ وَمَدَارِسُ كَثِيرَةٌ، وَفَنَادِقُ قَلِيلَةٌ',
          english: 'In our country there are many mosques and schools, and few hotels',
        },
      ],
      culturalNotes: [
        'The lesson introduces a family scenario (Hamid the doctor and his wife Aminah the teacher) that models common Arabic familial vocabulary.',
        'Students are encouraged to classify countries by continent (Asia, Africa, Europe).',
        'Many city names are introduced as examples of diptotes: Baghdad, Jeddah, Istanbul, Washington.',
      ],
    },

    // =====================
    // LESSON 13
    // =====================
    {
      number: 13,
      title: 'Diptotes in the Genitive Case',
      arabicTitle: 'الدَّرْسُ الثَّالِثَ عَشَرَ',
      theme: 'Diptotes with fathah instead of kasrah in the genitive, classroom dialogue',
      grammar: [
        {
          title: 'Diptotes in the Genitive Case',
          explanation:
            'Diptotes take fathah (-a) instead of kasrah (-i) in the genitive case. This is a critical rule that distinguishes them from regular (triptote) nouns.',
          examples: [
            {
              arabic: 'مِنْ بِلَالٍ (triptote) vs. مِنْ أَحْمَدَ (diptote)',
              english: 'from Bilal (with kasrah) vs. from Ahmad (with fathah)',
            },
            {
              arabic: 'كِتَابُ بِلَالٍ vs. كِتَابُ أَحْمَدَ',
              english: "Bilal's book (kasrah) vs. Ahmad's book (fathah)",
            },
            {
              arabic: 'مِنْ إِبْرَاهِيمَ',
              english: 'from Ibrahim (diptote — fathah)',
            },
            {
              arabic: 'ذَهَبَ أَبِي إِلَى مَكَّةَ وَذَهَبَ عَمِّي إِلَى جُدَّةَ',
              english: 'My father went to Makkah and my uncle went to Jeddah',
            },
          ],
          rules: [
            'Triptote nouns take kasrah (-i) in the genitive: مِنْ بِلَالٍ',
            'Diptote nouns take fathah (-a) in the genitive: مِنْ أَحْمَدَ',
            'This applies to all eight categories of diptotes',
          ],
        },
        {
          title: 'The Verb قَالَ (He Said)',
          explanation: 'Past-tense verbs for reported speech are introduced.',
          examples: [
            { arabic: 'قَالَ', english: 'he said' },
            { arabic: 'قَالَتْ', english: 'she said' },
          ],
          rules: [
            'قَالَ = he said',
            'قَالَتْ = she said',
          ],
        },
      ],
      vocabulary: [
        // Verbs
        { arabic: 'قَالَ', english: 'he said', category: 'verbs' },
        { arabic: 'قَالَتْ', english: 'she said', category: 'verbs' },
        // Place names
        { arabic: 'بَغْدَادُ', english: 'Baghdad', category: 'places' },
        { arabic: 'جُدَّةُ', english: 'Jeddah', category: 'places' },
        { arabic: 'إِصْطَنْبُولُ', english: 'Istanbul', category: 'places' },
        { arabic: 'وَاشِنْطُنُ', english: 'Washington', category: 'places' },
        { arabic: 'الطَّائِفُ', english: 'Taif', category: 'places' },
        { arabic: 'الرِّيَاضُ', english: 'Riyadh', category: 'places' },
        { arabic: 'مَكَّةُ', english: 'Makkah', category: 'places' },
        { arabic: 'بَاكِسْتَانُ', english: 'Pakistan', category: 'countries' },
        { arabic: 'بَارِيسُ', english: 'Paris', category: 'places' },
        { arabic: 'لَنْدَنُ', english: 'London', category: 'places' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مَنْ أَنْتَ يَا أَخِي؟',
          english: 'Who are you, brother?',
        },
        {
          speaker: 'أَحْمَدُ',
          arabic: 'أَنَا طَالِبٌ جَدِيدٌ',
          english: 'I am a new student',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مَا اسْمُكَ؟',
          english: 'What is your name?',
        },
        {
          speaker: 'أَحْمَدُ',
          arabic: 'اسْمِي أَحْمَدُ',
          english: 'My name is Ahmad',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مِنْ أَيْنَ أَنْتَ؟',
          english: 'Where are you from?',
        },
        {
          speaker: 'أَحْمَدُ',
          arabic: 'أَنَا مِنْ بَاكِسْتَانَ',
          english: 'I am from Pakistan',
        },
      ],
      culturalNotes: [
        'The dialogue uses يَا أَخِي ("O my brother") as a form of address, reflecting the respectful tone common in Islamic educational contexts.',
        'City names (Baghdad, Jeddah, Istanbul, Washington, Makkah) are used as practical examples of diptote grammar rules.',
        'The verb قَالَ/قَالَتْ ("he/she said") marks a shift toward more narrative-style Arabic.',
        'The "White House" (الْبَيْتُ الأَبْيَضُ) in Washington is used as a grammar example combining colour adjectives with place names.',
      ],
    },
  ],
}
