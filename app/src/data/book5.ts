import type { Book } from './types'

export const book5: Book = {
  id: 5,
  title: 'Madinah Arabic Reader Book 5',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الخامس',
  description:
    'Book 5 builds on intermediate Arabic with comprehensive coverage of verb moods, Arabic numbers, weak verb conjugations (hollow, defective, doubled), the dual form, and adjective agreement. Lessons are set in Islamic school dialogues covering daily life, Hajj, and classroom interactions.',
  level: 'intermediate',
  totalLessons: 11,
  lessons: [
    // ===================== LESSON 1 =====================
    {
      number: 1,
      title: 'Lesson 1',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme: 'Parts of Speech, Nominal vs. Verbal Sentences, Negation',
      grammar: [
        {
          title: 'The Three Parts of Speech',
          arabicTitle: 'أَقْسَامُ الكَلِمَة',
          explanation:
            'Arabic words are divided into three categories: noun (الاسم), verb (الفعل), and particle (الحرف). Every Arabic word must belong to one of these three categories.',
          examples: [
            { arabic: 'كِتَابٌ، قَلَمٌ، طَالِبٌ', english: 'Book, pen, student (nouns)' },
            { arabic: 'خَرَجَ، يَجْلِسُ، اكْتُبْ', english: 'Went out, sits, write! (verbs)' },
            { arabic: 'فِي، إِلَى، مِنْ، لَنْ، لَمْ', english: 'In, to, from, will not, did not (particles)' },
          ],
        },
        {
          title: 'Nominal vs. Verbal Sentences',
          arabicTitle: 'الجُمْلَةُ الاسْمِيَّةُ والجُمْلَةُ الفِعْلِيَّةُ',
          explanation:
            'A nominal sentence (الجملة الاسمية) begins with a noun and has a subject (المبتدأ) and predicate (الخبر), both nominative. A verbal sentence (الجملة الفعلية) begins with a verb, and its doer (الفاعل) is also nominative.',
          examples: [
            { arabic: 'السَّيَّارَةُ جَمِيلَةٌ', english: 'The car is beautiful (nominal sentence)' },
            { arabic: 'دَخَلَ المُدَرِّسُ', english: 'The teacher entered (verbal sentence)' },
            { arabic: 'يَكْتُبُ الطَّالِبُ', english: 'The student writes (verbal sentence)' },
          ],
        },
        {
          title: 'Negation with lam',
          arabicTitle: 'النَّفْيُ بِـ لَمْ',
          explanation:
            'The particle lam (لَمْ) negates the mudari\' verb and gives it past meaning. It also changes the verb from indicative (marfu\') to jussive (majzum). The sign of jazm is sukun for singular forms, dropping the nun for plural/feminine forms.',
          examples: [
            { arabic: 'لَمْ يَذْهَبْ إِلَى السُّوقِ', english: 'He did not go to the market' },
            { arabic: 'لَمْ نَفْهَمْ هَذَا الدَّرْسَ', english: 'We did not understand this lesson' },
            { arabic: 'لَمْ يَفْتَحِ البَقَّالُ دُكَّانَهُ', english: 'The grocer did not open his shop' },
          ],
        },
        {
          title: 'Negation with lamma (Not Yet)',
          arabicTitle: 'النَّفْيُ بِـ لَمَّا',
          explanation:
            'The particle lamma (لَمَّا) works like lam but carries the meaning of "not yet." It can be used alone as a short answer meaning "not yet."',
          examples: [
            { arabic: 'لَمَّا أَكْتُبْ', english: 'I have not yet written' },
            { arabic: 'ذَهَبَ أَبِي إِلَى مَكَّةَ وَلَمَّا يَرْجِعْ', english: 'My father went to Makkah and has not yet returned' },
            { arabic: 'وَلَمَّا يَدْخُلِ الإِيمَانُ فِي قُلُوبِكُمْ', english: 'Faith has not yet entered your hearts (Quran 49:14)' },
          ],
        },
        {
          title: 'Neither... Nor (with ma and la)',
          arabicTitle: 'مَا ... وَلَا ...',
          explanation:
            'The pattern "ma ... wa la ..." expresses "neither... nor..." with nouns or noun phrases.',
          examples: [
            { arabic: 'مَا عِنْدِي قَلَمٌ وَلَا كِتَابٌ', english: 'I have neither pen nor book' },
            { arabic: 'مَا فِي الثَّلَّاجَةِ مَاءٌ وَلَا عَصِيرٌ', english: 'There is neither water nor juice in the fridge' },
          ],
        },
        {
          title: 'Conjugation of Hollow Verbs (Past Tense)',
          arabicTitle: 'تَصْرِيفُ الأَفْعَالِ الجَوْفَاء',
          explanation:
            'Hollow verbs (verbs with a weak middle radical) change their middle vowel when conjugated with pronoun suffixes. For example, qala becomes qultu in the first person.',
          examples: [
            { arabic: 'قَالَ — قُلْتُ — قُلْنَا', english: 'He said — I said — We said' },
            { arabic: 'قَامَ — قُمْتَ — قُمْنَا', english: 'He stood — You stood — We stood' },
          ],
        },
        {
          title: 'The Relative Pronoun al-la\'i',
          arabicTitle: 'اللَّائِي = اللَّاتِي',
          explanation:
            'Al-la\'i (اللَّائِي) is an alternate form of al-lati (اللَّاتِي), the feminine plural relative pronoun meaning "who/that."',
          examples: [
            { arabic: 'الطَّالِبَاتُ اللَّاتِي خَرَجْنَ مِنَ الفَصْلِ', english: 'The female students who left the classroom' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'اسْتِقْبَالٌ', english: 'reception' },
        { arabic: 'رَئِيسٌ', english: 'president, leader', category: 'nouns' },
        { arabic: 'فَرْقٌ', english: 'difference', category: 'nouns' },
        { arabic: 'قِسْمٌ', english: 'section, division', category: 'nouns' },
        { arabic: 'مِثَالٌ', english: 'example', category: 'nouns' },
        { arabic: 'مَهْلًا', english: 'slowly, please don\'t hurry', category: 'expressions' },
        { arabic: 'مَمْنُوعٌ', english: 'forbidden', category: 'adjectives' },
        { arabic: 'الضَّمَّةُ', english: 'dammah (vowel mark)', category: 'grammar terms' },
        { arabic: 'الفَتْحَةُ', english: 'fathah (vowel mark)', category: 'grammar terms' },
        { arabic: 'الكَسْرَةُ', english: 'kasrah (vowel mark)', category: 'grammar terms' },
        { arabic: 'حَضَرَ يَحْضُرُ', english: 'to attend', category: 'verbs' },
        { arabic: 'أَتَى يَأْتِي', english: 'to come', category: 'verbs' },
        { arabic: 'اسْتَرِحْ', english: 'take rest! (imperative)', category: 'verbs' },
        { arabic: 'الاسْمُ', english: 'noun', category: 'grammar terms' },
        { arabic: 'الفِعْلُ', english: 'verb', category: 'grammar terms' },
        { arabic: 'الحَرْفُ', english: 'particle', category: 'grammar terms' },
        { arabic: 'المُبْتَدَأُ', english: 'subject (of nominal sentence)', category: 'grammar terms' },
        { arabic: 'الخَبَرُ', english: 'predicate', category: 'grammar terms' },
        { arabic: 'الفَاعِلُ', english: 'doer/subject (of verbal sentence)', category: 'grammar terms' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَيْنَ هَارُونُ وَأَصْحَابُهُ؟',
          english: 'Where is Harun and his friends?',
        },
        {
          speaker: 'طَالِبٌ',
          arabic: 'ذَهَبُوا إِلَى المَطَارِ لاِسْتِقْبَالِ رَئِيسِهِمْ',
          english: 'They went to the airport to receive their president',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'هَلْ كَتَبْتُمُ الوَاجِبَ؟',
          english: 'Did you write the homework?',
        },
      ],
      culturalNotes: [
        'The series is set in an Islamic school with conversations between a teacher and students.',
        'Madinah al-Munawwarah is referenced as a destination for visiting the Prophet\'s Mosque.',
        'The full Islamic greeting (al-salamu alaykum wa rahmatullahi wa barakatuh) is modeled in dialogue.',
        'Quranic Arabic is integrated into grammar teaching, such as Surah Al-Hujurat 49:14 for lamma usage.',
      ],
    },

    // ===================== LESSON 2 =====================
    {
      number: 2,
      title: 'Lesson 2 (Revision)',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme: 'The Three Moods of the Mudari\' Verb',
      grammar: [
        {
          title: 'The Three Moods of the Mudari\'',
          arabicTitle: 'حَالَاتُ المُضَارِعِ الثَّلَاث',
          explanation:
            'The mudari\' (imperfect) verb has three moods: indicative (marfu\' - default), subjunctive (mansub - after lan), and jussive (majzum - after lam). Each mood has distinct endings across all pronoun forms.',
          examples: [
            { arabic: 'حَامِدٌ يَذْهَبُ', english: 'Hamid goes (indicative/marfu\')' },
            { arabic: 'لَنْ يَذْهَبَ', english: 'He will not go (subjunctive/mansub)' },
            { arabic: 'لَمْ يَذْهَبْ', english: 'He did not go (jussive/majzum)' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'المُضَارِعُ المَرْفُوعُ', english: 'indicative mood (default)', category: 'grammar terms' },
        { arabic: 'المُضَارِعُ المَنْصُوبُ', english: 'subjunctive mood (after lan)', category: 'grammar terms' },
        { arabic: 'المُضَارِعُ المَجْزُومُ', english: 'jussive mood (after lam)', category: 'grammar terms' },
      ],
      dialogues: [],
      culturalNotes: [
        'This is a revision lesson consolidating verb mood concepts from earlier books.',
      ],
    },

    // ===================== LESSON 3 =====================
    {
      number: 3,
      title: 'Lesson 3',
      arabicTitle: 'الدَّرْسُ الثَّالِثُ',
      theme: 'Sound Masculine Plural, Numbers 20-90, Negation with la in Past Tense',
      grammar: [
        {
          title: 'Sound Masculine Plural',
          arabicTitle: 'جَمْعُ المُذَكَّرِ السَّالِمُ',
          explanation:
            'The sound masculine plural is formed by adding -una in the nominative and -ina in the accusative and genitive. The accusative and genitive forms are identical.',
          examples: [
            { arabic: 'دَخَلَ المُدَرِّسُونَ', english: 'The teachers entered (nominative: -una)' },
            { arabic: 'سَأَلْتُ المُدَرِّسِينَ', english: 'I asked the teachers (accusative: -ina)' },
            { arabic: 'قُلْتُ لِلْمُدَرِّسِينَ', english: 'I said to the teachers (genitive: -ina)' },
          ],
        },
        {
          title: 'The Tens (20-90)',
          arabicTitle: 'العُقُودُ',
          explanation:
            'Numbers 20-90 (the tens) follow the same declension pattern as the sound masculine plural. They are used with a singular accusative counted noun (tamyiz) and do not change for gender.',
          examples: [
            { arabic: 'عِشْرُونَ طَالِبًا', english: 'Twenty male students' },
            { arabic: 'أَرْبَعُونَ طَالِبَةً', english: 'Forty female students' },
            { arabic: 'خَمْسُونَ مُسْلِمًا', english: 'Fifty Muslims' },
          ],
        },
        {
          title: 'Negation with la in Past Tense',
          arabicTitle: 'النَّفْيُ بِـ لا فِي المَاضِي',
          explanation:
            'When the negative particle la is used with the past tense, it must be repeated with each verb to express "neither... nor..."',
          examples: [
            { arabic: 'لَا أَكَلْتُ وَلَا شَرِبْتُ', english: 'I neither ate nor drank' },
            { arabic: 'لَا ضَرَبَنِي وَلَا ضَرَبْتُهُ', english: 'He neither hit me, nor did I hit him' },
          ],
        },
        {
          title: 'The Preposition li for Authorship',
          arabicTitle: 'حَرْفُ الجَرِّ لِـ لِلتَّأْلِيفِ',
          explanation:
            'The preposition li is used to indicate the author of a book, translated as "by."',
          examples: [
            { arabic: 'المُوَطَّأُ لِلْإِمَامِ مَالِكٍ', english: 'Al-Muwatta by Imam Malik' },
            { arabic: 'لِسَانُ العَرَبِ لِابْنِ مَنْظُورٍ', english: 'Lisan al-Arab by Ibn Manzur' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'اجْتِمَاعٌ', english: 'meeting', category: 'nouns' },
        { arabic: 'قِصَّةٌ', english: 'story', category: 'nouns' },
        { arabic: 'نَبِيٌّ', english: 'prophet', category: 'nouns' },
        { arabic: 'ثَانِيَةٌ', english: 'second (time unit)', category: 'nouns' },
        { arabic: 'أُسْرَةٌ', english: 'family', category: 'nouns' },
        { arabic: 'جَائِزَةٌ', english: 'prize', category: 'nouns' },
        { arabic: 'قَاعَةٌ', english: 'hall', category: 'nouns' },
        { arabic: 'نَجَحَ يَنْجَحُ', english: 'to pass (an exam)', category: 'verbs' },
        { arabic: 'رَسَبَ يَرْسُبُ', english: 'to fail (an exam)', category: 'verbs' },
        { arabic: 'مُدَرِّسٌ', english: 'teacher', category: 'nouns' },
        { arabic: 'مُهَنْدِسٌ', english: 'engineer', category: 'nouns' },
        { arabic: 'مُسْلِمٌ', english: 'Muslim', category: 'nouns' },
        { arabic: 'مُؤْمِنٌ', english: 'believer', category: 'nouns' },
        { arabic: 'صَالِحٌ', english: 'righteous', category: 'adjectives' },
        { arabic: 'غَائِبٌ', english: 'absent', category: 'adjectives' },
        { arabic: 'مُجْتَهِدٌ', english: 'diligent', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَيَّ كِتَابٍ تَقْرَؤُونَ؟',
          english: 'Which book are you reading?',
        },
        {
          speaker: 'عَدْنَانُ',
          arabic: 'نَقْرَأُ هَذَا الكِتَابَ. اسْمُهُ قِصَصُ النَّبِيِّينَ',
          english: 'We are reading this book. Its name is Stories of the Prophets.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَمْ طَالِبًا فِي الفَصْلِ؟',
          english: 'How many students are in the class?',
        },
      ],
      culturalNotes: [
        'References to classical Islamic works like Stories of the Prophets by Shaykh Abul Hasan Ali Nadwi.',
        'Students address the teacher as "ya fadilat al-shaykh" (O esteemed Shaykh), reflecting traditional Islamic etiquette.',
        'Currency references include riyal (Saudi), rupee (South Asian), and dollar.',
      ],
    },

    // ===================== LESSON 4 =====================
    {
      number: 4,
      title: 'Lesson 4',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme: 'Arabic Numbers (1-1000+)',
      grammar: [
        {
          title: 'Numbers 1-2',
          arabicTitle: 'العَدَدُ: وَاحِدٌ وَاثْنَانِ',
          explanation:
            'Numbers 1-2 agree with the counted noun in gender and follow it as adjectives.',
          examples: [
            { arabic: 'طَالِبٌ وَاحِدٌ', english: 'One male student' },
            { arabic: 'طَالِبَةٌ وَاحِدَةٌ', english: 'One female student' },
            { arabic: 'طَالِبَانِ اثْنَانِ', english: 'Two male students' },
          ],
        },
        {
          title: 'Numbers 3-10',
          arabicTitle: 'العَدَدُ: ثَلَاثَة إِلَى عَشَرَة',
          explanation:
            'Numbers 3-10 take the OPPOSITE gender of the counted noun. The counted noun is a genitive plural.',
          examples: [
            { arabic: 'ثَلَاثَةُ طُلَّابٍ', english: 'Three male students (number is feminine)' },
            { arabic: 'ثَلَاثُ طَالِبَاتٍ', english: 'Three female students (number is masculine form)' },
            { arabic: 'عَشَرَةُ كُتُبٍ', english: 'Ten books' },
          ],
        },
        {
          title: 'Numbers 11-19',
          arabicTitle: 'العَدَدُ: أَحَدَ عَشَرَ إِلَى تِسْعَةَ عَشَرَ',
          explanation:
            'For 11-12, both parts agree with the counted noun. For 13-19, the first part disagrees and the second part agrees. The counted noun is a singular accusative.',
          examples: [
            { arabic: 'أَحَدَ عَشَرَ طَالِبًا', english: 'Eleven male students' },
            { arabic: 'ثَلَاثَةَ عَشَرَ طَالِبًا', english: 'Thirteen male students' },
          ],
        },
        {
          title: 'Numbers 100 and 1000',
          arabicTitle: 'المِائَةُ وَالأَلْفُ',
          explanation:
            'The counted noun after 100 and 1000 is a singular genitive. These numbers do not change for gender.',
          examples: [
            { arabic: 'مِائَةُ طَالِبٍ', english: 'One hundred students' },
            { arabic: 'أَلْفُ طَالِبٍ', english: 'One thousand students' },
            { arabic: 'ثَلَاثَةُ آلَافٍ', english: 'Three thousand' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'عِشْرُونَ', english: 'twenty', category: 'numbers' },
        { arabic: 'ثَلَاثُونَ', english: 'thirty', category: 'numbers' },
        { arabic: 'أَرْبَعُونَ', english: 'forty', category: 'numbers' },
        { arabic: 'خَمْسُونَ', english: 'fifty', category: 'numbers' },
        { arabic: 'سِتُّونَ', english: 'sixty', category: 'numbers' },
        { arabic: 'سَبْعُونَ', english: 'seventy', category: 'numbers' },
        { arabic: 'ثَمَانُونَ', english: 'eighty', category: 'numbers' },
        { arabic: 'تِسْعُونَ', english: 'ninety', category: 'numbers' },
        { arabic: 'مِائَةٌ', english: 'one hundred', category: 'numbers' },
        { arabic: 'أَلْفٌ', english: 'one thousand', category: 'numbers' },
        { arabic: 'مِائَتَانِ', english: 'two hundred', category: 'numbers' },
        { arabic: 'أَلْفَانِ', english: 'two thousand', category: 'numbers' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَمْ رِيَالًا عِنْدَكَ؟',
          english: 'How many riyals do you have?',
        },
        {
          speaker: 'طَالِبٌ',
          arabic: 'عِنْدِي عَشَرَةُ رِيَالَاتٍ',
          english: 'I have ten riyals.',
        },
      ],
      culturalNotes: [
        'The number-gender disagreement rule (3-10 take opposite gender) is a fundamental Arabic grammar concept with no parallel in English.',
        'Large numbers are read from units to tens to hundreds to thousands in Arabic.',
      ],
    },

    // ===================== LESSON 5 =====================
    {
      number: 5,
      title: 'Lesson 5',
      arabicTitle: 'الدَّرْسُ الخَامِسُ',
      theme: 'Kana and Its Sisters, The Five Nouns',
      grammar: [
        {
          title: 'Kana (Was)',
          arabicTitle: 'كَانَ وَأَخَوَاتُهَا',
          explanation:
            'Kana enters upon a nominal sentence. Its subject (ism) remains nominative (marfu\'), but the predicate (khabar) becomes accusative (mansub). If the khabar is a prepositional phrase, it stays unchanged.',
          examples: [
            { arabic: 'كَانَ حَامِدٌ مَرِيضًا أَمْسِ', english: 'Hamid was sick yesterday' },
            { arabic: 'كَانَتْ زَيْنَبُ طَالِبَةً', english: 'Zainab was a student' },
            { arabic: 'كَانَ الجَوُّ جَمِيلًا', english: 'The weather was beautiful' },
          ],
        },
        {
          title: 'La yazalu (Still)',
          arabicTitle: 'لَا يَزَالُ',
          explanation:
            'La yazalu is one of the "sisters of kana" and means "still is" or "continues to be." It works identically to kana grammatically.',
          examples: [
            { arabic: 'لَا يَزَالُ بِلَالٌ مَرِيضًا', english: 'Bilal is still sick' },
            { arabic: 'لَا تَزَالُ مَرْيَمُ طَالِبَةً', english: 'Maryam is still a student' },
            { arabic: 'لَا يَزَالُ إِبْرَاهِيمُ فِي المُسْتَشْفَى', english: 'Ibrahim is still in the hospital' },
          ],
        },
        {
          title: 'The Five Nouns',
          arabicTitle: 'الأَسْمَاءُ الخَمْسَةُ',
          explanation:
            'The "five nouns" (ab, akh, hamu, fu, dhu) use special long vowel case endings when in construct state (mudaf): waw for nominative, alif for accusative, and ya for genitive.',
          examples: [
            { arabic: 'جَاءَ أَبُوكَ', english: 'Your father came (nominative: -u with waw)' },
            { arabic: 'رَأَيْتُ أَبَاكَ', english: 'I saw your father (accusative: -a with alif)' },
            { arabic: 'قُلْتُ لِأَبِيكَ', english: 'I said to your father (genitive: -i with ya)' },
          ],
        },
        {
          title: 'Min qablu / Min ba\'du',
          arabicTitle: 'مِنْ قَبْلُ / مِنْ بَعْدُ',
          explanation:
            'When the mudaf ilaihi of qabla and ba\'da is omitted, they become indeclinable (mabni) and always carry dammah.',
          examples: [
            { arabic: 'كَانَ مِنْ قَبْلُ مُدَرِّسًا', english: 'Before that he was a teacher' },
            { arabic: 'سَأَذْهَبُ إِلَى المَسْجِدِ مِنْ بَعْدُ', english: 'I shall go to the mosque after that' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'وَزِيرٌ', english: 'minister', category: 'professions' },
        { arabic: 'سَفِيرٌ', english: 'ambassador', category: 'professions' },
        { arabic: 'مُفَتِّشٌ', english: 'inspector', category: 'professions' },
        { arabic: 'شُرْطِيٌّ', english: 'policeman', category: 'professions' },
        { arabic: 'مُتَقَاعِدٌ', english: 'retired', category: 'adjectives' },
        { arabic: 'عَمِيدٌ', english: 'dean', category: 'professions' },
        { arabic: 'طَبِيبٌ شَهِيرٌ', english: 'famous doctor', category: 'professions' },
        { arabic: 'مَرِيضٌ', english: 'sick / patient', category: 'adjectives' },
        { arabic: 'مُعْجَمٌ', english: 'dictionary', category: 'nouns' },
        { arabic: 'جُزْءٌ', english: 'volume / part', category: 'nouns' },
        { arabic: 'مَكْتَبَةٌ', english: 'library', category: 'nouns' },
        { arabic: 'تَرَكَ يَتْرُكُ', english: 'to leave', category: 'verbs' },
        { arabic: 'أَلَّفَ يُؤَلِّفُ', english: 'to write / compose (a book)', category: 'verbs' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَيْفَ حَالُ عَمَّارٍ الآنَ؟ كَانَ مَرِيضًا مُنْذُ أُسْبُوعٍ',
          english: 'How is Ammar now? He was sick for a week.',
        },
        {
          speaker: 'سَعْدُ',
          arabic: 'لَا يَزَالُ مَرِيضًا يَا فَضِيلَةَ الشَّيْخِ',
          english: 'He is still sick, O esteemed Shaykh.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مَاذَا كَانَ أَبُو إِبْرَاهِيمَ؟',
          english: 'What was Ibrahim\'s father?',
        },
      ],
      culturalNotes: [
        'The dialogue covers fathers\' professions (minister, ambassador, dean, doctor), providing practical vocabulary for Muslim societies.',
        'Lisan al-Arab by Ibn Manzur is referenced as a major Arabic dictionary in 20 volumes.',
        'Quranic example from Surat al-Rum (30:4) illustrates the usage of min qablu and min ba\'du.',
      ],
    },

    // ===================== LESSON 6 =====================
    {
      number: 6,
      title: 'Lesson 6',
      arabicTitle: 'الدَّرْسُ السَّادِسُ',
      theme: 'Weak Verbs (Mithal), Diminutive, Comparative, Obligation',
      grammar: [
        {
          title: 'Mithal Verbs (Assimilated Verbs)',
          arabicTitle: 'المُعْتَلُّ الفَاءِ (المِثَالُ)',
          explanation:
            'Mithal verbs have waw as their first radical. In the mudari\', the waw is dropped. In the imperative, no hamzat al-wasl is needed because the remaining verb starts with a voweled consonant.',
          examples: [
            { arabic: 'وَجَدَ → يَجِدُ', english: 'He found -> He finds (waw dropped)' },
            { arabic: 'وَقَفَ → يَقِفُ → قِفْ!', english: 'He stopped -> He stops -> Stop!' },
            { arabic: 'وَضَعَ → يَضَعُ → ضَعْ!', english: 'He placed -> He places -> Place!' },
          ],
        },
        {
          title: 'The Diminutive',
          arabicTitle: 'الاِسْمُ المُصَغَّرُ',
          explanation:
            'The diminutive form indicates smaller size or endearment. It follows the pattern fu\'ayl.',
          examples: [
            { arabic: 'وَلَدٌ → وُلَيْدٌ', english: 'Boy -> Little boy' },
            { arabic: 'نَهْرٌ → نُهَيْرٌ', english: 'River -> Small river' },
            { arabic: 'حَسَنٌ → حُسَيْنٌ', english: 'Hasan -> Husayn (endearment)' },
          ],
        },
        {
          title: 'Yajibu \'ala (It Is Necessary / Must)',
          arabicTitle: 'يَجِبُ عَلَى',
          explanation:
            'Yajibu expresses obligation and is followed by an + subjunctive verb. Negation is placed with the second verb. La yajibu means "need not" (not "must not").',
          examples: [
            { arabic: 'يَجِبُ عَلَيْنَا أَنْ نَفْهَمَ القُرْآنَ', english: 'We must understand the Quran' },
            { arabic: 'يَجِبُ عَلَيْهِ أَنْ لَا يَخْرُجَ', english: 'He should not leave' },
            { arabic: 'لَا يَجِبُ عَلَيْنَا أَنْ نَحْضُرَ', english: 'We need not attend' },
          ],
        },
        {
          title: 'Comparative/Superlative (Ism al-Tafdil)',
          arabicTitle: 'اسْمُ التَّفْضِيلِ',
          explanation:
            'The comparative follows the pattern af\'al. When the second and third radicals are identical, they assimilate.',
          examples: [
            { arabic: 'أَقَلُّ', english: 'Less, fewer (from qalil)' },
            { arabic: 'أَشَدُّ', english: 'More severe (from shadid)' },
            { arabic: 'أَحَبُّ الدُّرُوسِ إِلَيَّ القُرْآنُ', english: 'The dearest of lessons to me is the Quran' },
          ],
        },
        {
          title: 'Presentative Expressions',
          arabicTitle: 'هَا هُوَ ذَا',
          explanation:
            'An exclamatory expression used when a lost person or thing suddenly appears.',
          examples: [
            { arabic: 'هَا هُوَ ذَا', english: 'Here it is! (masculine)' },
            { arabic: 'هَا هِيَ ذِي', english: 'Here it is! (feminine)' },
            { arabic: 'هَأَنَذَا', english: 'Here I am!' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'أَجْنَبِيٌّ', english: 'foreigner, stranger', category: 'nouns' },
        { arabic: 'نَقْدٌ', english: 'money, cash', category: 'nouns' },
        { arabic: 'مَحْفَظَةٌ', english: 'purse, wallet', category: 'nouns' },
        { arabic: 'قُرْصٌ', english: 'tablet, pill', category: 'nouns' },
        { arabic: 'كِيلُوغْرَامٌ', english: 'kilogram', category: 'nouns' },
        { arabic: 'تَذْكِرَةٌ', english: 'ticket', category: 'nouns' },
        { arabic: 'ذَهَابٌ', english: 'going', category: 'nouns' },
        { arabic: 'إِيَابٌ', english: 'return', category: 'nouns' },
        { arabic: 'خَطَأٌ', english: 'mistake', category: 'nouns' },
        { arabic: 'ذَكَرٌ', english: 'male', category: 'nouns' },
        { arabic: 'أُنْثَى', english: 'female', category: 'nouns' },
        { arabic: 'بِانْتِظَامٍ', english: 'regularly', category: 'adverbs' },
        { arabic: 'شَدِيدٌ', english: 'severe, intense', category: 'adjectives' },
        { arabic: 'حَبِيبٌ', english: 'dear, beloved', category: 'adjectives' },
        { arabic: 'وَزَنَ يَزِنُ', english: 'to weigh', category: 'verbs' },
        { arabic: 'وَعَدَ يَعِدُ', english: 'to promise', category: 'verbs' },
        { arabic: 'وَقَفَ يَقِفُ', english: 'to stop, stand', category: 'verbs' },
        { arabic: 'وَصَلَ يَصِلُ', english: 'to arrive', category: 'verbs' },
        { arabic: 'وَجَدَ يَجِدُ', english: 'to find', category: 'verbs' },
        { arabic: 'وَجَبَ يَجِبُ', english: 'to be necessary', category: 'verbs' },
        { arabic: 'وَضَعَ يَضَعُ', english: 'to place', category: 'verbs' },
        { arabic: 'وَهَبَ يَهَبُ', english: 'to grant, bestow', category: 'verbs' },
      ],
      dialogues: [
        {
          speaker: 'بَشِيرُ',
          arabic: 'أَيْنَ أَجِدُ مُعْجَمًا عَرَبِيًّا يَا فَضِيلَةَ الشَّيْخِ؟',
          english: 'Where can I find an Arabic dictionary, O esteemed Shaykh?',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'فِي المَكْتَبَةِ الكَبِيرَةِ الَّتِي أَمَامَ المَسْجِدِ',
          english: 'In the large library in front of the mosque.',
        },
        {
          speaker: 'يَحْيَى',
          arabic: 'إِنْ شَاءَ اللهُ سَآتِيكَ بِهِ غَدًا بَعْدَ صَلَاةِ العَصْرِ',
          english: 'God willing, I will come to you with him tomorrow after Asr prayer.',
        },
      ],
      culturalNotes: [
        'Time is frequently referenced via prayers: salat al-Asr, salat al-Isha, adhan al-Fajr.',
        'Saudi Arabian context with locations like Madinah, Jeddah, and Riyadh.',
        'Quranic verses from Surat Saba (34:2) and Surat al-Shura (42:49) are incorporated into exercises.',
      ],
    },

    // ===================== LESSON 7 =====================
    {
      number: 7,
      title: 'Lesson 7',
      arabicTitle: 'الدَّرْسُ السَّابِعُ',
      theme: 'Hollow Verbs (Ajwaf)',
      grammar: [
        {
          title: 'Hollow Verbs (Al-Ajwaf)',
          arabicTitle: 'الفِعْلُ الأَجْوَفُ',
          explanation:
            'Hollow verbs have waw or ya as their second radical. They fall into three groups based on their mudari\' vowel: (a) u-group with waw, (b) i-group with ya, and (c) a-group. The weak middle letter drops when two consecutive sukun letters would meet.',
          examples: [
            { arabic: 'قَالَ يَقُولُ — لَمْ يَقُلْ — قُلْ', english: 'To say (u-group): say! (middle letter drops)' },
            { arabic: 'بَاعَ يَبِيعُ — لَمْ يَبِعْ — بِعْ', english: 'To sell (i-group): sell!' },
            { arabic: 'نَامَ يَنَامُ — لَمْ يَنَمْ — نَمْ', english: 'To sleep (a-group): sleep!' },
          ],
        },
        {
          title: 'Prohibition with La al-Nahiyah',
          arabicTitle: 'لَا النَّاهِيَة',
          explanation:
            'La al-nahiyah is added to the mudari\' verb to form a prohibition (negative command). The verb becomes majzum. For hollow verbs, the weak letter drops.',
          examples: [
            { arabic: 'لَا تَقُلْ هَكَذَا', english: 'Don\'t say like this' },
            { arabic: 'لَا تَصُمْ يَوْمَ العِيدِ', english: 'Don\'t fast on the day of Eid' },
            { arabic: 'لَا تَكُنْ كَسْلَانَ', english: 'Don\'t be lazy' },
          ],
        },
        {
          title: 'Oath and Emphasis',
          arabicTitle: 'القَسَمُ وَالتَّوْكِيدُ',
          explanation:
            'After an oath (qasam), an affirmative past-tense statement must be emphasized with laqad. A negative statement needs no emphasis.',
          examples: [
            { arabic: 'وَاللهِ لَقَدْ رَأَيْتُهُ فِي السُّوقِ', english: 'By Allah! I saw him in the market' },
            { arabic: 'وَاللهِ مَا أَكَلْتُ شَيْئًا', english: 'By Allah! I ate nothing' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'قَالَ يَقُولُ', english: 'to say', category: 'verbs' },
        { arabic: 'كَانَ يَكُونُ', english: 'to be', category: 'verbs' },
        { arabic: 'زَارَ يَزُورُ', english: 'to visit', category: 'verbs' },
        { arabic: 'قَامَ يَقُومُ', english: 'to stand, get up', category: 'verbs' },
        { arabic: 'ذَاقَ يَذُوقُ', english: 'to taste', category: 'verbs' },
        { arabic: 'طَافَ يَطُوفُ', english: 'to circumambulate', category: 'verbs' },
        { arabic: 'صَامَ يَصُومُ', english: 'to fast', category: 'verbs' },
        { arabic: 'دَارَ يَدُورُ', english: 'to revolve, turn', category: 'verbs' },
        { arabic: 'تَابَ يَتُوبُ', english: 'to repent', category: 'verbs' },
        { arabic: 'جَاءَ يَجِيءُ', english: 'to come', category: 'verbs' },
        { arabic: 'بَاعَ يَبِيعُ', english: 'to sell', category: 'verbs' },
        { arabic: 'سَارَ يَسِيرُ', english: 'to walk, travel', category: 'verbs' },
        { arabic: 'عَاشَ يَعِيشُ', english: 'to live', category: 'verbs' },
        { arabic: 'نَامَ يَنَامُ', english: 'to sleep', category: 'verbs' },
        { arabic: 'خَافَ يَخَافُ', english: 'to fear', category: 'verbs' },
        { arabic: 'كَادَ يَكَادُ', english: 'to almost, be about to', category: 'verbs' },
        { arabic: 'صُدَاعٌ', english: 'headache', category: 'nouns' },
        { arabic: 'مَشْغُولٌ', english: 'busy', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'عَدْنَانُ',
          arabic: 'كُنْتُ مَرِيضًا جِدًّا. وَاللهِ لَقَدْ كِدْتُ أَمُوتُ',
          english: 'I was very sick. By Allah, I almost died.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'شَفَاكَ اللهُ شِفَاءً كَامِلًا',
          english: 'May Allah grant you complete healing.',
        },
        {
          speaker: 'عُثْمَانُ',
          arabic: 'لَنْ أَغِيبَ فِي المُسْتَقْبَلِ إِنْ شَاءَ اللهُ',
          english: 'I will not be absent in the future, God willing.',
        },
      ],
      culturalNotes: [
        'Islamic practices like fasting, circumambulating the Ka\'bah, and repentance are woven into vocabulary.',
        'The expression shafaka Allah shifa\'an kamilan (May Allah grant you complete healing) is a common supplication.',
        'A student should not be absent frequently (la yanbaghi li-talibin an yaghiba kathiran).',
      ],
    },

    // ===================== LESSON 8 =====================
    {
      number: 8,
      title: 'Lesson 8',
      arabicTitle: 'الدَّرْسُ الثَّامِنُ',
      theme: 'Defective Verbs (Naqis)',
      grammar: [
        {
          title: 'Defective Verbs (Al-Naqis)',
          arabicTitle: 'المُعْتَلُّ اللَّامِ (النَّاقِصُ)',
          explanation:
            'Defective verbs have waw or ya as their third radical. In the jussive (majzum) and imperative (amr), the third radical is dropped. Two groups: (a) third radical ya -> verbs like masha/yabki, and (b) third radical waw -> verbs like da\'a/yashku.',
          examples: [
            { arabic: 'مَشَى يَمْشِي — لَمْ يَمْشِ — اِمْشِ', english: 'To walk: he didn\'t walk, walk!' },
            { arabic: 'دَعَا يَدْعُو — لَمْ يَدْعُ — اُدْعُ', english: 'To call: he didn\'t call, call!' },
            { arabic: 'نَسِيَ يَنْسَى — لَمْ يَنْسَ — اِنْسَ', english: 'To forget: he didn\'t forget, forget!' },
          ],
        },
        {
          title: 'The Verb zanna (To Think)',
          arabicTitle: 'الفِعْلُ ظَنَّ',
          explanation:
            'The verb zanna takes two objects, both in the accusative (mansub). It can also be followed by anna.',
          examples: [
            { arabic: 'أَظُنُّ الجَوَّ جَمِيلًا', english: 'I think the weather is fine' },
            { arabic: 'أَظُنُّكَ طَبِيبًا', english: 'I think you are a doctor' },
          ],
        },
        {
          title: 'La yanbaghi (It Is Not Proper)',
          arabicTitle: 'لَا يَنْبَغِي',
          explanation:
            'La yanbaghi expresses that something is not proper or becoming. It is followed by li + noun + an + subjunctive verb.',
          examples: [
            { arabic: 'لَا يَنْبَغِي لِلطَّالِبِ أَنْ يَغِيبَ', english: 'It is not proper for a student to be absent' },
            { arabic: 'لَا يَنْبَغِي لَكَ أَنْ تَقُولَ هَذَا', english: 'It is not becoming of you to say this' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'كَوَى يَكْوِي', english: 'to iron', category: 'verbs' },
        { arabic: 'مَشَى يَمْشِي', english: 'to walk', category: 'verbs' },
        { arabic: 'جَرَى يَجْرِي', english: 'to run', category: 'verbs' },
        { arabic: 'رَمَى يَرْمِي', english: 'to throw', category: 'verbs' },
        { arabic: 'بَكَى يَبْكِي', english: 'to cry, weep', category: 'verbs' },
        { arabic: 'دَعَا يَدْعُو', english: 'to call, invite', category: 'verbs' },
        { arabic: 'شَكَا يَشْكُو', english: 'to complain', category: 'verbs' },
        { arabic: 'تَلَا يَتْلُو', english: 'to recite', category: 'verbs' },
        { arabic: 'مَحَا يَمْحُو', english: 'to erase', category: 'verbs' },
        { arabic: 'عَفَا يَعْفُو', english: 'to forgive', category: 'verbs' },
        { arabic: 'نَسِيَ يَنْسَى', english: 'to forget', category: 'verbs' },
        { arabic: 'خَشِيَ يَخْشَى', english: 'to fear, be in awe', category: 'verbs' },
        { arabic: 'بَقِيَ يَبْقَى', english: 'to remain', category: 'verbs' },
        { arabic: 'بَنَى يَبْنِي', english: 'to build', category: 'verbs' },
        { arabic: 'هَدَى يَهْدِي', english: 'to guide', category: 'verbs' },
        { arabic: 'طَوَى يَطْوِي', english: 'to fold', category: 'verbs' },
        { arabic: 'سَقَى يَسْقِي', english: 'to water, give drink', category: 'verbs' },
        { arabic: 'عَشَاءٌ', english: 'dinner', category: 'nouns' },
        { arabic: 'تَحْقِيقٌ', english: 'investigation', category: 'nouns' },
        { arabic: 'قُمَامَةٌ', english: 'garbage', category: 'nouns' },
        { arabic: 'يَمِينٌ', english: 'right hand', category: 'nouns' },
        { arabic: 'يَسَارٌ', english: 'left hand', category: 'nouns' },
        { arabic: 'إِلَهٌ', english: 'god', category: 'nouns' },
        { arabic: 'هَدِيَّةٌ', english: 'present, gift', category: 'nouns' },
        { arabic: 'صَاحِبٌ', english: 'companion, owner', category: 'nouns' },
        { arabic: 'مُمَزَّقٌ', english: 'torn', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'إِبْرَاهِيمُ',
          arabic: 'هَلْ كَوَيْتِ مَلَابِسِي يَا آمِنَةُ؟',
          english: 'Did you iron my clothes, Aminah?',
        },
        {
          speaker: 'آمِنَةُ',
          arabic: 'لَمْ أَكْوِهِ بَعْدُ',
          english: 'I have not yet ironed it.',
        },
        {
          speaker: 'سُعَادُ',
          arabic: 'أُرِيدُ أَنْ أَذْهَبَ إِلَى صَدِيقَتِي بَعْدَ صَلَاةِ العَصْرِ',
          english: 'I want to go to my friend after Asr prayer.',
        },
      ],
      culturalNotes: [
        'Family dialogue features Ibrahim, his wife Aminah, daughter Su\'ad, and son Mahmud in everyday situations.',
        'Prayer times structure daily life: Asr prayer, Maghrib prayer.',
        'The Islamic calendar month Dhul-Qa\'dah is referenced.',
      ],
    },

    // ===================== LESSON 9 =====================
    {
      number: 9,
      title: 'Lesson 9',
      arabicTitle: 'الدَّرْسُ التَّاسِعُ',
      theme: 'Doubled Verbs, Verb Classification, Hajj',
      grammar: [
        {
          title: 'Doubled Verbs (Al-Muda\'\'af)',
          arabicTitle: 'الفِعْلُ المُضَعَّفُ',
          explanation:
            'Doubled verbs have identical second and third radicals. When conjugated with saakin pronouns, the two identical letters assimilate (merge with shaddah). With mutaharrik pronouns, the letters separate.',
          examples: [
            { arabic: 'حَجَّ يَحُجُّ — حُجَّ — حَجَجْتُ', english: 'To perform Hajj (doubled letters separate with -tu)' },
            { arabic: 'عَدَّ يَعُدُّ — عَدَدْتُ', english: 'To count — I counted (letters separate)' },
            { arabic: 'شَمَّ يَشُمُّ — شَمِمْتُ', english: 'To smell — I smelled' },
          ],
        },
        {
          title: 'Qattu and Abadan (Never)',
          arabicTitle: 'قَطُّ وَأَبَدًا',
          explanation:
            'Both words mean "never." Qattu is used with the past tense only, while abadan is used with the future tense only.',
          examples: [
            { arabic: 'مَا فَعَلْتُ هَذَا قَطُّ', english: 'I have never done this (past)' },
            { arabic: 'لَنْ أَتْرُكَهَا أَبَدًا', english: 'I will never abandon it (future)' },
            { arabic: 'لَمْ أَتْرُكِ الصَّلَاةَ قَطُّ', english: 'I have never abandoned prayer' },
          ],
        },
        {
          title: 'Lamma (When) with Past Tense',
          arabicTitle: 'لَمَّا الظَّرْفِيَّةُ',
          explanation:
            'Lamma meaning "when" is used only with the past tense. With the mudari\', \'indama is used instead.',
          examples: [
            { arabic: 'لَمَّا سَمِعْتُ الجَرَسَ دَخَلْتُ الفَصْلَ', english: 'When I heard the bell, I entered the class' },
            { arabic: 'عِنْدَمَا أَذْهَبُ إِلَى المَسْجِدِ أَجْلِسُ فِي الصَّفِّ الأَوَّلِ', english: 'When I go to the mosque, I sit in the first row' },
          ],
        },
        {
          title: 'The Seven Verb Classifications',
          arabicTitle: 'أَقْسَامُ الفِعْلِ السَّبْعَةُ',
          explanation:
            'Arabic verbs are classified into seven types: (1) Salim (sound), (2) Mahmuz (hamzated), (3) Muda\'\'af (doubled), (4) Mithal (assimilated - first radical w/y), (5) Ajwaf (hollow - second radical w/y), (6) Naqis (defective - third radical w/y), (7) Lafif (two weak radicals).',
          examples: [
            { arabic: 'كَتَبَ (سَالِمٌ)، أَكَلَ (مَهْمُوزٌ)، حَجَّ (مُضَعَّفٌ)', english: 'Sound, hamzated, doubled verbs' },
            { arabic: 'وَقَفَ (مِثَالٌ)، قَالَ (أَجْوَفُ)، دَعَا (نَاقِصٌ)', english: 'Assimilated, hollow, defective verbs' },
            { arabic: 'كَوَى (لَفِيفٌ مَقْرُونٌ)، وَقَى (لَفِيفٌ مَفْرُوقٌ)', english: 'Joined and separated lafif verbs' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'حَجَّ يَحُجُّ', english: 'to perform Hajj', category: 'verbs' },
        { arabic: 'ظَنَّ يَظُنُّ', english: 'to think', category: 'verbs' },
        { arabic: 'جَرَّ يَجُرُّ', english: 'to drag, pull', category: 'verbs' },
        { arabic: 'مَرَّ يَمُرُّ', english: 'to pass', category: 'verbs' },
        { arabic: 'عَدَّ يَعُدُّ', english: 'to count', category: 'verbs' },
        { arabic: 'سَبَّ يَسُبُّ', english: 'to abuse', category: 'verbs' },
        { arabic: 'رَدَّ يَرُدُّ', english: 'to reply', category: 'verbs' },
        { arabic: 'صَبَّ يَصُبُّ', english: 'to pour', category: 'verbs' },
        { arabic: 'سَدَّ يَسُدُّ', english: 'to block', category: 'verbs' },
        { arabic: 'شَمَّ يَشُمُّ', english: 'to smell', category: 'verbs' },
        { arabic: 'مَسَّ يَمَسُّ', english: 'to touch', category: 'verbs' },
        { arabic: 'حَزِنَ يَحْزَنُ', english: 'to be sorrowful', category: 'verbs' },
        { arabic: 'مَرِضَ يَمْرَضُ', english: 'to fall sick', category: 'verbs' },
        { arabic: 'دَفَعَ يَدْفَعُ', english: 'to push', category: 'verbs' },
        { arabic: 'مَرَّةٌ', english: 'once, time', category: 'nouns' },
        { arabic: 'كَفٌّ', english: 'palm (of hand)', category: 'nouns' },
        { arabic: 'دِيبَاجٌ', english: 'brocade (a type of silk)', category: 'nouns' },
        { arabic: 'رَائِحَةٌ', english: 'smell, scent', category: 'nouns' },
        { arabic: 'كَرِيهَةٌ', english: 'unpleasant', category: 'adjectives' },
        { arabic: 'لَيِّنٌ', english: 'soft', category: 'adjectives' },
        { arabic: 'نُسْخَةٌ', english: 'copy', category: 'nouns' },
        { arabic: 'بَالُوعَةٌ', english: 'drain, sewer', category: 'nouns' },
        { arabic: 'غَافِلٌ', english: 'unmindful, heedless', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'لَا تَحْزَنْ. سَتَحُجُّ فِي العَامِ المُقْبِلِ إِنْ شَاءَ اللهُ',
          english: 'Don\'t be sad. You will perform Hajj next year, God willing.',
        },
        {
          speaker: 'مَسْعُودُ',
          arabic: 'كُنْتُ مَرِيضًا فِي أَيَّامِ الحَجِّ',
          english: 'I was sick during the Hajj days.',
        },
        {
          speaker: 'عَلِيٌّ',
          arabic: 'عَفْوًا يَا أُسْتَاذُ. لَنْ أَفْعَلَ ذَلِكَ مَرَّةً أُخْرَى',
          english: 'I\'m sorry, teacher. I will not do that again.',
        },
      ],
      culturalNotes: [
        'The dialogue revolves around Hajj (pilgrimage to Makkah), a central Islamic obligation.',
        'A hadith from Anas about the softness of the Prophet\'s palm and the pleasantness of his scent is studied.',
        'Polite refusal: la wa shukran (no, and thanks) with the waw is the correct form.',
      ],
    },

    // ===================== LESSON 10 =====================
    {
      number: 10,
      title: 'Lesson 10',
      arabicTitle: 'الدَّرْسُ العَاشِرُ',
      theme: 'The Dual Form (Al-Muthanna)',
      grammar: [
        {
          title: 'The Dual Form',
          arabicTitle: 'المُثَنَّى',
          explanation:
            'Arabic has a dual form for nouns, pronouns, and verbs referring to exactly two. Nouns take -ani (nominative) or -ayni (accusative/genitive). The dual pronoun is antuma/huma.',
          examples: [
            { arabic: 'طَالِبَانِ جَدِيدَانِ', english: 'Two new students (nominative)' },
            { arabic: 'رَأَيْتُ طَالِبَيْنِ', english: 'I saw two students (accusative)' },
            { arabic: 'هُمَا تَوْأَمَانِ', english: 'They are twins' },
          ],
        },
        {
          title: 'The Five Verb Forms (Al-Af\'al al-Khamsah)',
          arabicTitle: 'الأَفْعَالُ الخَمْسَةُ',
          explanation:
            'Five special mudari\' forms that end in nun: they two (m/f), they (m.pl), you (m.pl), you (f.s). They are marfu\' by retaining the nun, and mansub/majzum by dropping it.',
          examples: [
            { arabic: 'يَذْهَبَانِ — لَنْ يَذْهَبَا — لَمْ يَذْهَبَا', english: 'They two go — will not go — did not go' },
            { arabic: 'يَذْهَبُونَ — لَنْ يَذْهَبُوا — لَمْ يَذْهَبُوا', english: 'They go — will not go — did not go' },
            { arabic: 'تَذْهَبِينَ — لَنْ تَذْهَبِي — لَمْ تَذْهَبِي', english: 'You (f) go — will not go — did not go' },
          ],
        },
        {
          title: 'Dual Pronouns',
          arabicTitle: 'ضَمَائِرُ المُثَنَّى',
          explanation:
            'Dual pronouns include huma (3rd person), antuma (2nd person), and nahnu (1st person, shared with plural). Attached pronouns include -huma (their), -kuma (your two).',
          examples: [
            { arabic: 'أَبُوهُمَا', english: 'Their (two) father' },
            { arabic: 'رَأَيْتُهُمَا', english: 'I saw them both' },
            { arabic: 'ذَهَبْتُمَا', english: 'You two went' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'تَوْأَمَانِ', english: 'twins', category: 'nouns' },
        { arabic: 'شَبَهٌ', english: 'similarity, resemblance', category: 'nouns' },
        { arabic: 'صِغَرٌ', english: 'childhood', category: 'nouns' },
        { arabic: 'حِصَّةٌ', english: 'period, class session', category: 'nouns' },
        { arabic: 'كُتُبٌ مُقَرَّرَةٌ', english: 'prescribed textbooks', category: 'nouns' },
        { arabic: 'عِيَادَةٌ', english: 'visiting the sick', category: 'nouns' },
        { arabic: 'خُطُوطٌ جَوِّيَّةٌ', english: 'airlines', category: 'nouns' },
        { arabic: 'مَعْهَدٌ', english: 'institute', category: 'nouns' },
        { arabic: 'وَفَّقَكَ اللهُ', english: 'May Allah grant you success', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'اُدْخُلَا. مَنْ أَنْتُمَا؟',
          english: 'Come in. Who are you two?',
        },
        {
          speaker: 'أَحَدُهُمَا',
          arabic: 'نَحْنُ طَالِبَانِ جَدِيدَانِ مِنَ الصِّينِ',
          english: 'We are two new students from China.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَتُرِيدَانِ أَنْ تَدْرُسَا فِي كُلِّيَّةِ الشَّرِيعَةِ؟',
          english: 'Do you two want to study at the College of Islamic Law?',
        },
      ],
      culturalNotes: [
        'Chinese Muslim students reflect the international student body at the Islamic University of Madinah.',
        'Islamic academic faculties include the College of Sharia and the College of the Noble Quran.',
        'When two people each have one of something, Arabic uses the plural instead of the dual for the possessed item.',
      ],
    },

    // ===================== LESSON 11 =====================
    {
      number: 11,
      title: 'Lesson 11',
      arabicTitle: 'الدَّرْسُ الحَادِي عَشَرَ',
      theme: 'The Arabic Adjective (Al-Na\'t)',
      grammar: [
        {
          title: 'The Adjective (Al-Na\'t)',
          arabicTitle: 'النَّعْتُ وَالمَنْعُوتُ',
          explanation:
            'The adjective (al-na\'t) must agree with the noun it describes (al-man\'ut) in four things: (1) definiteness, (2) case, (3) number, and (4) gender.',
          examples: [
            { arabic: 'هَذَا كِتَابٌ جَدِيدٌ / الكِتَابُ الجَدِيدُ', english: 'A new book / The new book (definiteness agreement)' },
            { arabic: 'المُدَرِّسُ الجَدِيدُ / سَأَلْتُ المُدَرِّسَ الجَدِيدَ', english: 'The new teacher (nominative) / I asked the new teacher (accusative)' },
            { arabic: 'لِي أَخٌ كَبِيرٌ وَأُخْتٌ صَغِيرَةٌ', english: 'I have an older brother and a younger sister (gender agreement)' },
          ],
        },
        {
          title: 'Adjective Agreement in Definiteness',
          arabicTitle: 'التَّعْرِيفُ وَالتَّنْكِيرُ فِي النَّعْتِ',
          explanation:
            'The adjective must match whether the noun is definite or indefinite.',
          examples: [
            { arabic: 'عِنْدِي سَيَّارَةٌ جَدِيدَةٌ', english: 'I have a new car (both indefinite)' },
            { arabic: 'السَّيَّارَةُ الجَدِيدَةُ غَالِيَةٌ', english: 'The new car is expensive (both definite)' },
          ],
        },
        {
          title: 'Adjective Agreement in Number',
          arabicTitle: 'الإِفْرَادُ وَالتَّثْنِيَةُ وَالجَمْعُ فِي النَّعْتِ',
          explanation:
            'The adjective must match in singular, dual, or plural.',
          examples: [
            { arabic: 'لِي أَخٌ كَبِيرٌ', english: 'I have an older brother (singular)' },
            { arabic: 'بِلَالٌ لَهُ أَخَوَانِ كَبِيرَانِ', english: 'Bilal has two older brothers (dual)' },
            { arabic: 'حَامِدٌ لَهُ إِخْوَةٌ كِبَارٌ', english: 'Hamid has older brothers (plural)' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'دَلَّ يَدُلُّ', english: 'to show, to advise', category: 'verbs' },
        { arabic: 'بَدَأَ يَبْدَأُ', english: 'to begin', category: 'verbs' },
        { arabic: 'اِنْتَهَى يَنْتَهِي', english: 'to end, come to an end', category: 'verbs' },
        { arabic: 'المُعْجَمُ الوَسِيطُ', english: 'Al-Mu\'jam al-Wasit (famous Arabic dictionary)', category: 'nouns' },
        { arabic: 'وَسِيطٌ', english: 'medium, intermediate', category: 'adjectives' },
        { arabic: 'جَيِّدٌ', english: 'good', category: 'adjectives' },
        { arabic: 'حَيٌّ', english: 'city district, neighborhood', category: 'nouns' },
        { arabic: 'كَبِيرٌ', english: 'big, older', category: 'adjectives' },
        { arabic: 'صَغِيرَةٌ', english: 'small, younger', category: 'adjectives' },
        { arabic: 'جَدِيدٌ', english: 'new', category: 'adjectives' },
        { arabic: 'غَالِيَةٌ', english: 'expensive', category: 'adjectives' },
      ],
      dialogues: [
        {
          speaker: 'عَلِيٌّ',
          arabic: 'دُلَّنِي عَلَى مُعْجَمٍ عَرَبِيٍّ جَيِّدٍ يَا أُسْتَاذُ',
          english: 'Direct me to a good Arabic dictionary, teacher.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَنْصَحُكَ بِالمُعْجَمِ الوَسِيطِ',
          english: 'I advise you to get Al-Mu\'jam al-Wasit.',
        },
        {
          speaker: 'أَحْمَدُ',
          arabic: 'مَتَى يَبْدَأُ الجُزْءُ الثَّالِثُ؟',
          english: 'When does Part Three begin?',
        },
      ],
      culturalNotes: [
        'Al-Mu\'jam al-Wasit is published by the Arabic Language Academy in Cairo and is one of the most widely used Arabic-Arabic dictionaries.',
        'The dialogues depict a realistic Islamic university setting with students collecting textbooks from the library.',
        'In shaa Allah (God willing) is used naturally when speaking about future plans.',
      ],
    },
  ],
}
