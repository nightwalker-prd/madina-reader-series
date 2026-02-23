import type { Book } from './types'

export const book8: Book = {
  id: 8,
  title: 'Madinah Arabic Reader Book 8',
  arabicTitle: 'سلسلة القراءة العربية - الكتاب الثامن',
  description:
    'Advanced Arabic grammar covering adverbs of time and place (zarf), conditional particles (law, idha, in), jussive particles, nisba adjectives, the diminutive, verb classification (triliteral/quadriliteral, bare/augmented), Form II and Form IV verb patterns, transitive/intransitive verbs, and warning expressions.',
  level: 'advanced',
  totalLessons: 7,
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────
    {
      number: 1,
      title: 'Adverbs of Time and Place & The Conditional Particle law',
      arabicTitle: 'الدَّرْسُ الأَوَّلُ',
      theme: 'First Day of the Academic Year',
      grammar: [
        {
          title: 'The Adverb of Time and Place (Zarf)',
          arabicTitle: 'المَفْعُولُ فِيهِ — الظَّرْف',
          explanation:
            'The maf\'ul fihi is a noun in the accusative case (mansub) indicating the time or place of an action. It is also called zarf. Some zuruf are indeclinable (mabni) but occupy the position of nasb.',
          examples: [
            { arabic: 'خَرَجْتُ لَيْلاً', english: 'I went out at night (zarf al-zaman).' },
            { arabic: 'جَلَسْتُ عِنْدَ المُدِيرِ', english: 'I sat at the headmaster\'s (zarf al-makan).' },
            { arabic: 'مَتَى خَرَجْتَ؟', english: 'When did you go out? (indeclinable zarf).' },
          ],
          rules: [
            'Zarf al-zaman (adverb of time): لَيْلاً, غَداً, بَعْدَ, أَمْسِ, قَطُّ, الآنَ',
            'Zarf al-makan (adverb of place): عِنْدَ, تَحْتَ, فَوْقَ, أَمَامَ, خَلْفَ, هُنَا, حَيْثُ',
            'Indeclinable zuruf: مَتَى (sukun), أَيْنَ (fathah), أَمْسِ (kasrah), قَطُّ (dammah), هُنَا (sukun), الآنَ (fathah), حَيْثُ (dammah)',
            'Words like كُلّ, بَعْض, نِصْف, رُبْع take nasb when their mudaf ilayhi is a time/place word',
          ],
        },
        {
          title: 'The Conditional Particle law',
          arabicTitle: 'لَوْ — حَرْفُ امْتِنَاعٍ لاِمْتِنَاعٍ',
          explanation:
            'The particle law expresses an unfulfilled past condition. It conveys conditionality, restriction to the past tense, and non-fulfillment. The affirmative jawab takes lam al-jawab; the negative jawab usually does not.',
          examples: [
            { arabic: 'لَوِ اجْتَهَدْتَ لَنَجَحْتَ', english: 'Had you worked hard, you would have passed.' },
            { arabic: 'لَوْ عَرَفْتُ أَنَّكَ مَرِيضٌ مَا تَأَخَّرْتُ', english: 'Had I known you are sick, I would not have been late.' },
            { arabic: 'لَوْ سَمِعْتَ قِصَّتَهُ لَبَكَيْتَ', english: 'Had you heard his story, you would have cried.' },
          ],
          rules: [
            'Affirmative jawab takes لام الجواب: لَوْ ... لَـ + past verb',
            'Negative jawab usually does not take لام: لَوْ ... مَا + past verb',
          ],
        },
        {
          title: 'Indeclinable qabl and ba\'d',
          arabicTitle: 'مِنْ قَبْلُ / مِنْ بَعْدُ',
          explanation:
            'When the mudaf ilayhi of qabl or ba\'d is omitted, they become indeclinable on dammah (mabni \'ala al-damm).',
          examples: [
            { arabic: 'وَكُنْتُ مُدِيراً مِنْ قَبْلُ', english: 'And I was a headmaster earlier.' },
            { arabic: 'لِلَّهِ الأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ', english: 'The decision before and after is Allah\'s (Quran 30:4).' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'وَصَلَ يَصِلُ', english: 'to arrive', category: 'verbs' },
        { arabic: 'سَافَرَ يُسَافِرُ', english: 'to travel', category: 'verbs' },
        { arabic: 'رَجَعَ يَرْجِعُ', english: 'to return', category: 'verbs' },
        { arabic: 'مَكَثَ يَمْكُثُ', english: 'to stay, remain', category: 'verbs' },
        { arabic: 'لَبِثَ يَلْبَثُ', english: 'to stay, linger', category: 'verbs' },
        { arabic: 'بَقِيَ يَبْقَى', english: 'to remain', category: 'verbs' },
        { arabic: 'اِسْتَقْبَلَ يَسْتَقْبِلُ', english: 'to receive, welcome', category: 'verbs' },
        { arabic: 'أَمْسِ', english: 'yesterday', category: 'time' },
        { arabic: 'البَارِحَة', english: 'last night', category: 'time' },
        { arabic: 'غَداً', english: 'tomorrow', category: 'time' },
        { arabic: 'الآنَ', english: 'now', category: 'time' },
        { arabic: 'قَطُّ', english: 'ever/never (with negation)', category: 'time' },
        { arabic: 'عُطْلَةُ الصَّيْفِ', english: 'summer holiday', category: 'time' },
        { arabic: 'العَامُ المَاضِي', english: 'last year', category: 'time' },
        { arabic: 'أَمَامَ', english: 'in front of', category: 'place' },
        { arabic: 'خَلْفَ', english: 'behind', category: 'place' },
        { arabic: 'تَحْتَ', english: 'under', category: 'place' },
        { arabic: 'فَوْقَ', english: 'above', category: 'place' },
        { arabic: 'عِنْدَ', english: 'at, near', category: 'place' },
        { arabic: 'هُنَا', english: 'here', category: 'place' },
        { arabic: 'ثَمَّ / ثَمَّةَ', english: 'there', category: 'place' },
        { arabic: 'حَيْثُ', english: 'where', category: 'place' },
        { arabic: 'الفَصْل', english: 'classroom', category: 'nouns' },
        { arabic: 'الدَّفْتَر', english: 'notebook', category: 'nouns' },
        { arabic: 'السَّبُّورَة', english: 'blackboard', category: 'nouns' },
        { arabic: 'المَقْعَد', english: 'seat', category: 'nouns' },
        { arabic: 'المِرْوَحَة', english: 'fan', category: 'nouns' },
        { arabic: 'التَّطْعِيم', english: 'vaccination', category: 'nouns' },
        { arabic: 'مُمَرِّض', english: 'nurse (male)', category: 'nouns' },
        { arabic: 'وَفْد', english: 'delegation', category: 'nouns' },
        { arabic: 'المَعْهَد', english: 'institute', category: 'nouns' },
        { arabic: 'أَهْلاً وَسَهْلاً', english: 'welcome', category: 'expressions' },
        { arabic: 'لا مَانِعَ لَدَيَّ', english: 'I have no objection', category: 'expressions' },
        { arabic: 'أَتَسْمَحُ لِي أَنْ...', english: 'Would you allow me to...', category: 'expressions' },
        { arabic: 'وَارَأْسَاهُ!', english: 'Oh, my head! (exclamation of pain)', category: 'expressions' },
        { arabic: 'مَا بِكَ؟', english: 'What\'s wrong with you?', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'أَهْلاً وَسَهْلاً بِكُمْ. مَتَى وَصَلْتُمْ مِنْ بُلْدَانِكُمْ؟',
          english: 'Welcome. When did you arrive from your countries?',
        },
        {
          speaker: 'أحمد',
          arabic: 'وَصَلْتُ قَبْلَ أُسْبُوعٍ',
          english: 'I arrived a week ago.',
        },
        {
          speaker: 'عَلِيّ',
          arabic: 'وَصَلْتُ يَوْمَ الثُّلاثَاءِ وَذَهَبْتُ إِلَى مَكَّةَ لِلْعُمْرَةِ',
          english: 'I arrived on Tuesday and went to Makkah for Umrah.',
        },
      ],
      culturalNotes: [
        'The lesson is set at the Islamic University of Madinah, reflecting the international student body with students from diverse countries.',
        'Ali\'s trip to Makkah for Umrah reflects the religious context of student life in Madinah.',
        'Students are asked to wear their national clothing for a Nigerian delegation visit, highlighting cultural diversity.',
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────
    {
      number: 2,
      title: 'Lam of Command, Prohibitive La, and Lamentation',
      arabicTitle: 'الدَّرْسُ الثَّانِي',
      theme: 'Classroom Discipline and Vaccination',
      grammar: [
        {
          title: 'The Lam of Command',
          arabicTitle: 'لامُ الأَمْرِ',
          explanation:
            'A particle that enters upon the mudari\' verb and causes it to become majzum (jussive). It conveys a command for the third person and first person. The lam has kasrah but becomes sakin after wa, fa, and thumma.',
          examples: [
            { arabic: 'لِيَدْخُلْ', english: 'Let him enter.' },
            { arabic: 'لِنَقْرَأِ الدَّرْسَ الآنَ', english: 'Let us read the lesson now.' },
            { arabic: 'فَلْيَذْهَبْ مَعِي عَدْنَانُ', english: 'So let Adnan go with me.' },
          ],
          rules: [
            'Formation: لِـ + mudari\' majzum',
            'The lam takes sukun after وَ, فَ, and ثُمَّ: فَلْنَخْرُجْ',
            'Full paradigm: لِيَكْتُبْ، لِيَكْتُبا، لِيَكْتُبوا — لِتَكْتُبْ، لِتَكْتُبا، لِيَكْتُبْنَ — لِأَكْتُبْ، لِنَكْتُبْ',
          ],
        },
        {
          title: 'The Prohibitive La',
          arabicTitle: 'لا النَّاهِيَة',
          explanation:
            'Enters upon the mudari\' verb and makes it majzum. With the second person it expresses direct prohibition; with the third person it expresses negative command. Distinct from la al-nafiya which does not affect verb endings.',
          examples: [
            { arabic: 'يَا أَحْمَدُ لا تَلْعَبْ فِي الفَصْلِ', english: 'O Ahmad, don\'t play in the classroom.' },
            { arabic: 'لا يَخْرُجْ أَحَدُكُمْ مِنَ الفَصْلِ', english: 'None of you should leave the classroom.' },
            { arabic: 'يَا أَخَوَاتُ لا تَفْتَحْنَ النَّوَافِذَ', english: 'O sisters, don\'t open the windows.' },
          ],
          rules: [
            'Key distinction: لا النَّاهِيَة causes jazm (لا تَدْخُلْ = should not enter), لا النَّافِيَة does not (لا تَدْخُلُ = does not enter)',
          ],
        },
        {
          title: 'Jazm Due to a Request',
          arabicTitle: 'الجزم بالطلب',
          explanation:
            'A mudari\' verb preceded by a command (amr) or prohibition (nahy) is put in jazm. The majzum verb that follows is called jawab al-talab.',
          examples: [
            { arabic: 'اِجْتَهِدْ تَنْجَحْ', english: 'Work hard — you will succeed.' },
            { arabic: 'لا تَكْسَلْ تَنْجَحْ', english: 'Don\'t be lazy — you will pass.' },
            { arabic: 'ادْعُونِي أَسْتَجِبْ لَكُمْ', english: 'Call upon Me; I will respond to you (Quran 40:60).' },
          ],
        },
        {
          title: 'Lamentation',
          arabicTitle: 'النُّدْبة',
          explanation:
            'A construction used to express pain or sorrow. The possessive ya is replaced with the ending -ah.',
          examples: [
            { arabic: 'وَارَأْسَاهُ!', english: 'Oh, my head! (from رأسي)' },
            { arabic: 'وَايَدَاهُ!', english: 'Oh, my hand! (from يدي)' },
            { arabic: 'وَا بِلَالَاهُ!', english: 'Alas for Bilal!' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُعْجَم', english: 'dictionary', category: 'nouns' },
        { arabic: 'مُرَاقِب', english: 'supervisor, monitor', category: 'nouns' },
        { arabic: 'لائِحة', english: 'regulation, list', category: 'nouns' },
        { arabic: 'عُذْر', english: 'excuse', category: 'nouns' },
        { arabic: 'بُرْقِيَّة', english: 'telegram', category: 'nouns' },
        { arabic: 'غِلاف', english: 'cover, envelope', category: 'nouns' },
        { arabic: 'وَفْد', english: 'delegation', category: 'nouns' },
        { arabic: 'شَفَة', english: 'lip', category: 'nouns' },
        { arabic: 'جِدار', english: 'wall', category: 'nouns' },
        { arabic: 'خَشَب', english: 'wood, timber', category: 'nouns' },
        { arabic: 'غَرَزَ يَغْرِزُ', english: 'to stick, insert', category: 'verbs' },
        { arabic: 'سَخِرَ مِنْ يَسْخَرُ', english: 'to mock, ridicule', category: 'verbs' },
        { arabic: 'كَسِلَ يَكْسَلُ', english: 'to be lazy', category: 'verbs' },
        { arabic: 'فَرَغَ يَفْرُغُ', english: 'to finish, become free', category: 'verbs' },
        { arabic: 'حَزِنَ يَحْزَنُ', english: 'to grieve, be sad', category: 'verbs' },
        { arabic: 'اِسْتَجابَ يَسْتَجيبُ', english: 'to respond, answer', category: 'verbs' },
        { arabic: 'عَطَسَ يَعْطِسُ', english: 'to sneeze', category: 'verbs' },
        { arabic: 'جَزَاكَ اللهُ', english: 'May Allah reward you', category: 'expressions' },
        { arabic: 'الحمدُ لله', english: 'Praise be to Allah', category: 'expressions' },
        { arabic: 'يَرْحَمُكَ الله', english: 'May Allah have mercy on you', category: 'expressions' },
        { arabic: 'يَهْديكُمُ اللهُ ويُصْلِحُ بالَكُمْ', english: 'May Allah guide you and set your affairs right', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'لِيَذْهَبِ الطُّلاَّبُ الجُدُدُ إلَى المُسْتَشْفَى وَلْيَرْجِعُوا بَعْدَ التَّطْعِيمِ',
          english: 'Let the new students go to the hospital and return after vaccination.',
        },
        {
          speaker: 'الزُّبَيْر',
          arabic: 'وَارَأْسَاهُ! إِنَّ بِي صُدَاعاً شَدِيداً',
          english: 'Oh, my head! I have a severe headache.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'فَلْيَذْهَبْ مَعَكَ عَدْنَانُ إلَى المُسْتَشْفَى',
          english: 'Let Adnan go with you to the hospital.',
        },
      ],
      culturalNotes: [
        'Sneezing etiquette is taught: the sneezer says الحمد لله, the listener responds يرحمك الله, and the sneezer replies يهديكم الله ويصلح بالكم.',
        'The hadith about not preventing a neighbour from inserting wooden beams into one\'s wall illustrates neighbourly cooperation in Islamic law.',
        'New students are taken for vaccination, reflecting institutional procedures at the Islamic University.',
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────
    {
      number: 3,
      title: 'The Conditional Particle idha and Nisba Adjectives',
      arabicTitle: 'الدَّرْسُ الثَّالِثُ',
      theme: 'School Dictionary and Sneezing Etiquette',
      grammar: [
        {
          title: 'The Conditional Particle idha',
          arabicTitle: 'إذا — ظرف شرطي',
          explanation:
            'idha is an adverb of time (zarf) carrying a conditional meaning. It is mostly used with a past-tense verb even though the meaning is future. It does NOT cause jazm. The jawab may require fa\' in certain cases: when it is a nominal sentence, a command (amr), a prohibition (nahy), or an interrogative.',
          examples: [
            { arabic: 'إذا جاءَ رمضانُ فُتِحَتْ أبوابُ الجنّةِ', english: 'When Ramadan comes, the gates of Paradise are opened.' },
            { arabic: 'إذا رأيتَ حامداً فَاسْأَلْهُ عن مَوْعِدِ السَّفَرِ', english: 'If you see Hamid, ask him about the travel appointment.' },
            { arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', english: 'And when My servants ask you about Me, indeed I am near (Quran 2:186).' },
          ],
          rules: [
            'idha does NOT cause jazm of the verb',
            'Used mostly with past-tense verb for future meaning',
            'Jawab requires fa\' when it is: a nominal sentence, an imperative, a prohibition, or an interrogative',
          ],
        },
        {
          title: 'Forming Relative Adjectives (Nisba)',
          arabicTitle: 'النَّسَب',
          explanation:
            'The nisba suffix ـِيّ is added to a noun to form an attributive adjective. When the base noun ends in ta\' marbuta, the ta\' is dropped before adding the suffix.',
          examples: [
            { arabic: 'مَدْرَسة → مَدْرَسِيّ', english: 'school → scholastic' },
            { arabic: 'مَكَّة → مَكِّيّ', english: 'Makkah → Makkan' },
            { arabic: 'السُّودان → سُودانِيّ', english: 'Sudan → Sudanese' },
          ],
          rules: [
            'Add ـِيّ to form the nisba adjective',
            'Drop ta\' marbuta (ة) before adding ـِيّ',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُعْجَم مَدْرَسِيّ', english: 'school dictionary', category: 'nouns' },
        { arabic: 'مَدْرَسِيّ', english: 'school-related, scholastic', category: 'adjectives' },
        { arabic: 'مُسابَقة', english: 'competition', category: 'nouns' },
        { arabic: 'جائِزة', english: 'prize', category: 'nouns' },
        { arabic: 'كُتَيِّبات', english: 'booklets (diminutive plural)', category: 'nouns' },
        { arabic: 'الحمدُ لله', english: 'Praise be to Allah', category: 'expressions' },
        { arabic: 'بِعَوْنِ اللهِ', english: 'With Allah\'s help', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'هِشَام',
          arabic: 'إذا عَطَسَ أحدُنا ماذا يقول؟',
          english: 'If one of us sneezes, what does he say?',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'إذا عَطَسَ أحدُكم فَلْيَقُلْ: الحمدُ لله',
          english: 'When one of you sneezes, let him say: Praise be to Allah.',
        },
        {
          speaker: 'عبد الهادي',
          arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
          english: 'And when My servants ask you about Me, indeed I am near (Quran 2:186).',
        },
      ],
      culturalNotes: [
        'The full sneezing exchange is taught as Islamic etiquette.',
        'Classroom discipline is emphasized: absence of more than two weeks leads to dismissal.',
        'The supervisor announces a reading contest with Islamic booklets, reflecting a culture of encouraging Islamic reading.',
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────
    {
      number: 4,
      title: 'The Conditional Particle in and Other Conditional Tools',
      arabicTitle: 'الدَّرْسُ الرَّابِعُ',
      theme: 'Student Discipline and Reading Competition',
      grammar: [
        {
          title: 'The Conditional Particle in',
          arabicTitle: 'إنْ — حرف شرط جازم',
          explanation:
            'Unlike idha, the particle in causes jazm of two verbs -- both the fi\'l al-shart (condition verb) and the jawab al-shart (response verb). The jawab requires fa\' when it contains a nominal sentence, an imperative, a frozen verb, or is preceded by qad, ma, lan, sa-, sawfa, or ka\'annama.',
          examples: [
            { arabic: 'إنْ تَجْتَهِدْ تَنْجَحْ', english: 'If you work hard, you will succeed.' },
            { arabic: 'إنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ', english: 'If you support Allah, He will support you (Quran 47:7).' },
            { arabic: 'وَإِنْ تَنْتَهُوا فَهُوَ خَيْرٌ لَكُمْ', english: 'And if you desist, that is better for you (Quran 8:19).' },
          ],
          rules: [
            'in causes jazm of TWO verbs: the condition verb and the response verb',
            'Shart and jawab can appear in four tense combinations: mudari\'/mudari\', madi/madi, madi/mudari\', mudari\'/madi',
            'إلّا is a contraction of إنْ + لا',
          ],
        },
        {
          title: 'Other Conditional Tools',
          arabicTitle: 'أدوات الشرط الجازمة',
          explanation:
            'In addition to the particle in, there are noun-based conditional tools that also cause jazm of two verbs: man (whoever), ma (whatever), mata (whenever), ayna (wherever), aynama (wherever, emphatic), ayy (whichever), mahma (whatever/no matter what).',
          examples: [
            { arabic: 'فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', english: 'Whoever does an atom\'s weight of good will see it (Quran 99:7).' },
            { arabic: 'أَيْنَمَا تَكُونُوا يُدْرِكْكُمُ الْمَوْتُ', english: 'Wherever you are, death will overtake you (Quran 4:78).' },
            { arabic: 'مَتى تُسافِرْ أُسافِرْ', english: 'Whenever you travel, I will travel.' },
          ],
          rules: [
            'مَنْ (whoever), ما (whatever), مَتَى (whenever), أَيْنَ (wherever), أَيْنَمَا (wherever, emphatic), أَيّ (whichever), مَهْمَا (no matter what)',
            'All cause jazm of two verbs like in',
          ],
        },
        {
          title: 'When the Response Clause Requires fa\'',
          arabicTitle: 'متى يحتاج جواب الشرط إلى الفاء',
          explanation:
            'The jawab al-shart must be preceded by fa\' in nine specific cases: nominal sentence, imperative, frozen verb, preceded by qad, preceded by ma al-nafiya, preceded by lan, preceded by sa-, preceded by sawfa, preceded by ka\'annama.',
          examples: [
            { arabic: 'فَمَنْ تَطَوَّعَ خَيْراً فَهُوَ خَيْرٌ لَهُ', english: 'Whoever volunteers good, it is better for him (Quran 2:184).' },
            { arabic: 'مَنْ غَشَّنا فَلَيْسَ مِنّا', english: 'Whoever deceives us is not one of us (Hadith).' },
            { arabic: 'إنْ تَسافِرْ فَسَأُسافِرُ', english: 'If you travel, I will also travel.' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُسابَقة', english: 'competition', category: 'nouns' },
        { arabic: 'جائِزة', english: 'prize', category: 'nouns' },
        { arabic: 'كُتَيِّبات', english: 'booklets', category: 'nouns' },
        { arabic: 'لائِحة', english: 'regulation, list', category: 'nouns' },
        { arabic: 'عُذْر', english: 'excuse', category: 'nouns' },
        { arabic: 'بُرْقِيَّة', english: 'telegram', category: 'nouns' },
        { arabic: 'فُصِلَ', english: 'to be dismissed/expelled (passive)', category: 'verbs' },
        { arabic: 'إنْ شاءَ اللهُ', english: 'God willing', category: 'expressions' },
        { arabic: 'ما شاءَ اللهُ', english: 'expression of admiration', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'إنْ غِبْتَ أَكْثَرَ مِنْ أُسْبُوعَيْنِ فُصِلْتَ',
          english: 'If you are absent for more than two weeks, you will be expelled.',
        },
        {
          speaker: 'ياسر',
          arabic: 'مَعْذِرَةً يَا أُسْتَاذُ. لَنْ أَتَغَيَّبَ بَعْدَ اليَوْمِ إنْ شَاءَ اللهُ',
          english: 'Excuse me, teacher. I will not be absent after today, God willing.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مَنْ يَقْرَأْ هَذِهِ الكُتَيِّبَاتِ وَيُجِبْ عَنِ الأَسْئِلَةِ يَفُزْ بِجَائِزَةٍ',
          english: 'Whoever reads these booklets and answers the questions will win a prize.',
        },
      ],
      culturalNotes: [
        'Strict attendance policies reflect Islamic educational discipline.',
        'Ramadan is referenced in multiple hadith used as grammar examples.',
        'The hadith about plague instructs not to enter afflicted lands and not to flee from them, reflecting Islamic public health guidance.',
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────
    {
      number: 5,
      title: 'kam, hatta, the Diminutive, and Verb Classification',
      arabicTitle: 'الدَّرْسُ الخَامِسُ',
      theme: 'University Dictionary and Verb Morphology',
      grammar: [
        {
          title: 'Interrogative vs. Predicative kam',
          arabicTitle: 'كَمْ الاستفهامية وكَمْ الخبرية',
          explanation:
            'Interrogative kam asks "how many?" with its tamyiz always singular and mansub. Predicative kam expresses wonder at a large number with its tamyiz singular or plural and majrur.',
          examples: [
            { arabic: 'كَمْ كِتاباً عِنْدَكَ؟', english: 'How many books do you have? (interrogative)' },
            { arabic: 'كَمْ نَجْمٍ في السَّماءِ!', english: 'How many stars in the sky! (predicative)' },
            { arabic: 'كَمْ مِنْ فِئةٍ قَليلةٍ غَلَبَتْ فِئَةً كَثيرَةً', english: 'How many a small group has overcome a large host (Quran 2:249).' },
          ],
          rules: [
            'Interrogative kam: tamyiz is singular and mansub (accusative)',
            'Predicative kam: tamyiz is singular or plural and majrur (genitive), may be preceded by min',
          ],
        },
        {
          title: 'The Particle hatta',
          arabicTitle: 'حتّى',
          explanation:
            'hatta has two meanings: "till/until" (equivalent to ila) and "so that/in order that" (equivalent to lam al-ta\'lil). The mudari\' verb after hatta is mansub because of a latent an.',
          examples: [
            { arabic: 'اِنْتَظِرْ حتّى أَلْبِسَ', english: 'Wait till I get dressed.' },
            { arabic: 'أدرُسُ اللغةَ العربيةَ حتّى أَفْهَمَ القرآنَ', english: 'I am studying Arabic so that I can understand the Quran.' },
            { arabic: 'لا يُؤْمِنُ أحَدُكُمْ حتّى يُحِبَّ لأخِيهِ ما يُحِبُّ لِنَفْسِهِ', english: 'None of you truly believes until he loves for his brother what he loves for himself.' },
          ],
        },
        {
          title: 'The Verb-Noun ha\' (Take!)',
          arabicTitle: 'هاءَ — اسم فعل',
          explanation:
            'ha\' is a verb-noun meaning "take" (khudh). It conjugates for the second person: ha\'a (masc. sg.), ha\'um (masc. pl.), ha\'i (fem. sg.), ha\'unna (fem. pl.).',
          examples: [
            { arabic: 'هاءَ الكِتَابَ يَا عَلِيُّ', english: 'Take the book, O Ali.' },
            { arabic: 'هاؤُمُ اقْرَءُوا كِتابِيَهْ', english: 'Take, read my book! (Quran 69:19)' },
          ],
        },
        {
          title: 'The Diminutive',
          arabicTitle: 'التصغير',
          explanation:
            'The diminutive has three patterns: fu\'ayl (first u, second ai), fu\'ay\'il (first u, second ai, third i), and fu\'ay\'il (with long i). The first letter takes dammah and the second takes fathah + ya.',
          examples: [
            { arabic: 'جَبَل → جُبَيْل', english: 'mountain → small mountain (jubail)' },
            { arabic: 'كِتاب → كُتَيِّب', english: 'book → booklet (kutayyib)' },
            { arabic: 'دِرْهَم → دُرَيْهِم', english: 'dirham → small coin (duraihim)' },
          ],
          rules: [
            'Pattern فُعَيْل: for triliteral nouns (جَبَل → جُبَيْل)',
            'Pattern فُعَيْعِل: for quadriliteral nouns (دِرْهَم → دُرَيْهِم)',
            'Pattern فُعَيْعِيل: for five-letter nouns (فِنْجان → فُنَيْجِين)',
          ],
        },
        {
          title: 'Verb Classification: Triliteral and Quadriliteral',
          arabicTitle: 'الفعل الثلاثي والرباعي، المجرّد والمزيد',
          explanation:
            'Arabic verbs are classified by root letters: triliteral (3 root letters) and quadriliteral (4). Each can be bare (mujarrad, all letters are root) or augmented (mazid, extra letters added). The triliteral mujarrad has six vowel pattern groups.',
          examples: [
            { arabic: 'كَتَبَ — ثلاثي مجرد', english: 'he wrote — triliteral bare verb' },
            { arabic: 'تَرْجَمَ — رباعي مجرد', english: 'he translated — quadriliteral bare verb' },
            { arabic: 'أَسْلَمَ — ثلاثي مزيد بالهمزة', english: 'he became Muslim — triliteral augmented with hamza' },
          ],
          rules: [
            'Six groups of triliteral mujarrad: فَعَلَ يَفْعُلُ (a-u), فَعَلَ يَفْعِلُ (a-i), فَعَلَ يَفْعَلُ (a-a), فَعِلَ يَفْعَلُ (i-a), فَعُلَ يَفْعُلُ (u-u), فَعِلَ يَفْعِلُ (i-i)',
            'Quadriliteral mujarrad examples: تَرْجَمَ (translated), هَرْوَلَ (walked fast), بَسْمَلَ (said bismillah)',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'مُسابَقة', english: 'competition', category: 'nouns' },
        { arabic: 'حِفْظ', english: 'memorization', category: 'nouns' },
        { arabic: 'تَجْويد', english: 'Quran recitation (tajweed)', category: 'nouns' },
        { arabic: 'مُعْجَم جامِعيّ', english: 'university dictionary', category: 'nouns' },
        { arabic: 'شَرْح وافٍ', english: 'comprehensive explanation', category: 'nouns' },
        { arabic: 'مَسائِل نَحْوِيَّة', english: 'grammatical issues', category: 'nouns' },
        { arabic: 'صُوَر مُلَوَّنة', english: 'colored pictures', category: 'nouns' },
        { arabic: 'مُجَلَّد', english: 'volume (of a book)', category: 'nouns' },
        { arabic: 'مُؤَلِّف', english: 'author', category: 'nouns' },
        { arabic: 'المسجِّل', english: 'tape recorder', category: 'nouns' },
        { arabic: 'الشريط', english: 'tape', category: 'nouns' },
        { arabic: 'الشَّفقة', english: 'compassion', category: 'nouns' },
        { arabic: 'الرَّحمة', english: 'mercy', category: 'nouns' },
        { arabic: 'مُتَّفَقٌ عليه', english: 'agreed upon (by Bukhari and Muslim)', category: 'hadith terms' },
        { arabic: 'الصلاة على الميّت', english: 'funeral prayer', category: 'nouns' },
        { arabic: 'التكبير', english: 'saying Allahu Akbar', category: 'nouns' },
        { arabic: 'التسليم', english: 'the closing salam of prayer', category: 'nouns' },
        { arabic: 'شَغَلَ يَشْغَلُ', english: 'to occupy, keep busy', category: 'verbs' },
        { arabic: 'رَحِمَ يَرْحَمُ', english: 'to have mercy', category: 'verbs' },
        { arabic: 'فَاتَ يَفُوتُ', english: 'to pass, miss', category: 'verbs' },
        { arabic: 'نَجَا يَنْجُو', english: 'to be saved', category: 'verbs' },
        { arabic: 'غَشَّ يَغُشُّ', english: 'to cheat', category: 'verbs' },
        { arabic: 'فَازَ يَفُوزُ', english: 'to win', category: 'verbs' },
        { arabic: 'حَصَدَ يَحْصِدُ', english: 'to harvest', category: 'verbs' },
        { arabic: 'غَلَبَ يَغْلِبُ', english: 'to overcome, defeat', category: 'verbs' },
        { arabic: 'صَمَتَ يَصْمُتُ', english: 'to be silent', category: 'verbs' },
        { arabic: 'سَجَّلَ يُسَجِّلُ', english: 'to record, register', category: 'verbs' },
        { arabic: 'أَدْرَكَ يُدْرِكُ', english: 'to perceive, catch up', category: 'verbs' },
        { arabic: 'أَطاعَ يُطِيعُ', english: 'to obey', category: 'verbs' },
        { arabic: 'آمَنَ يُؤْمِنُ', english: 'to believe', category: 'verbs' },
        { arabic: 'اِتَّقَى يَتَّقِي', english: 'to fear Allah, be pious', category: 'verbs' },
        { arabic: 'اِسْتَغْفَرَ يَسْتَغْفِرُ', english: 'to seek forgiveness', category: 'verbs' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'يا عبدَ السلام، أُهَنِّئُكَ بِفَوْزِكَ في مُسابَقَةِ حِفْظِ القرآنِ الكريمِ',
          english: 'O Abd al-Salam, I congratulate you on your victory in the Quran memorization competition.',
        },
        {
          speaker: 'أسامة',
          arabic: 'فهمتُ منه أنّ تقبيلَ الأطفالِ أمرٌ حسنٌ وأنه يدلُّ على الشَّفقةِ والرَّحمةِ',
          english: 'I understood from it that kissing children is good and indicates compassion and mercy.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'مَنْ لا يَرحَمْ لا يُرحَمْ',
          english: 'He who does not show mercy will not be shown mercy.',
        },
      ],
      culturalNotes: [
        'The hadith about the Prophet kissing his grandson al-Hasan teaches that showing affection to children indicates mercy.',
        'A new Muslim named Muhammad asks about the funeral prayer, and the teacher explains the four takbirat procedure.',
        'The term muttafaq alayhi is explained as a hadith narrated by both Imam al-Bukhari and Imam Muslim.',
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────
    {
      number: 6,
      title: 'Form II (fa\'\'ala) and Form IV (af\'ala) Verb Patterns',
      arabicTitle: 'الدَّرْسُ السَّادِسُ',
      theme: 'New Muslim Student from Canada',
      grammar: [
        {
          title: 'Form II Verb Pattern (bab fa\'\'ala)',
          arabicTitle: 'باب فَعَّلَ',
          explanation:
            'The first augmented form where the second radical is doubled. The mudari\' prefix takes dammah. The masdar follows تَفْعِيل except for naqis verbs and verbs with hamzah as third radical which use تَفْعِلَة.',
          examples: [
            { arabic: 'سَجَّلَ يُسَجِّلُ تَسْجِيل — سَجِّلْ', english: 'to record — sajjala yusajjilu tasjil' },
            { arabic: 'سَمَّى يُسَمِّي تَسْمِيَة — سَمِّ', english: 'to name — samma yusammi tasmiya' },
            { arabic: 'كَبَّرَ يُكَبِّرُ تَكْبِير', english: 'to say Allahu Akbar — kabbara yukabbiru takbir' },
          ],
          rules: [
            'Past: فَعَّلَ, Present: يُفَعِّلُ (prefix takes dammah), Imperative: drop prefix and ending',
            'Masdar: تَفْعِيل (normally), تَفْعِلَة for naqis/hamzated verbs (سَمَّى → تَسْمِيَة, هَنَّأَ → تَهْنِئَة)',
            'Active participle: مُفَعِّل (replace mudari\' prefix with مُـ, kasrah before last letter)',
            'Passive participle: مُفَعَّل (like active but fathah before last letter)',
          ],
        },
        {
          title: 'Form IV Verb Pattern (bab af\'ala)',
          arabicTitle: 'باب أَفْعَلَ',
          explanation:
            'A hamzah is added before the first radical. The mudari\' prefix takes dammah and the hamzah with its vowel is dropped. The masdar follows إِفْعَال.',
          examples: [
            { arabic: 'أَرْسَلَ يُرْسِلُ إِرْسَال', english: 'to send — arsala yursilu irsal' },
            { arabic: 'أَسْلَمَ يُسْلِمُ إِسْلَام', english: 'to become Muslim — aslama yuslimu islam' },
            { arabic: 'أَغْلَقَ يُغْلِقُ إِغْلَاق', english: 'to close — aghlaqa yughliqu ighlaq' },
          ],
          rules: [
            'Past: أَفْعَلَ, Present: يُفْعِلُ (hamzah dropped), Masdar: إِفْعَال',
            'Imperative: from original form (تُأَفْعِلُ → drop prefix → أَفْعِلْ)',
            'Active participle: مُفْعِل, Passive participle: مُفْعَل',
            'Non-sound verbs: أَقَامَ/يُقِيمُ/إِقَامَة, آمَنَ/يُؤْمِنُ/إِيمَان, أَتَمَّ/يُتِمُّ/إِتْمَام',
          ],
        },
      ],
      vocabulary: [
        { arabic: 'حَدِيث عَهْد بالإسلام', english: 'new to Islam (recent convert)', category: 'nouns' },
        { arabic: 'مُسْتَحِيل', english: 'impossible', category: 'adjectives' },
        { arabic: 'فَرِيدة', english: 'unique', category: 'adjectives' },
        { arabic: 'بَرْقِيَّة', english: 'telegram', category: 'nouns' },
        { arabic: 'مَكْتَب البريد', english: 'post office', category: 'nouns' },
        { arabic: 'المُصَلَّى', english: 'prayer area', category: 'nouns' },
        { arabic: 'المُؤذِّن', english: 'the one who calls to prayer', category: 'nouns' },
        { arabic: 'مُخَيَّم الشباب', english: 'youth camp', category: 'nouns' },
        { arabic: 'وَرَقة الغياب', english: 'absence sheet', category: 'nouns' },
        { arabic: 'مُتْحَف', english: 'museum', category: 'nouns' },
        { arabic: 'أَرْسَلَ يُرْسِلُ إِرْسَال', english: 'to send', category: 'verbs' },
        { arabic: 'أَسْلَمَ يُسْلِمُ إِسْلَام', english: 'to become Muslim', category: 'verbs' },
        { arabic: 'أَغْلَقَ يُغْلِقُ إِغْلَاق', english: 'to close', category: 'verbs' },
        { arabic: 'أَخْبَرَ يُخْبِرُ إِخْبَار', english: 'to inform', category: 'verbs' },
        { arabic: 'أَطْفَأَ يُطْفِئُ إِطْفَاء', english: 'to extinguish, turn off', category: 'verbs' },
        { arabic: 'أَجَابَ يُجِيبُ إِجَابَة', english: 'to answer', category: 'verbs' },
        { arabic: 'أَتَمَّ يُتِمُّ إِتْمَام', english: 'to complete', category: 'verbs' },
        { arabic: 'أَقَامَ يُقِيمُ إِقَامَة', english: 'to reside, establish', category: 'verbs' },
        { arabic: 'آمَنَ يُؤْمِنُ إِيمَان', english: 'to believe', category: 'verbs' },
        { arabic: 'أَلْقَى يُلْقِي إِلْقَاء', english: 'to throw, deliver', category: 'verbs' },
        { arabic: 'أَوْجَبَ يُوجِبُ إِيجَاب', english: 'to obligate', category: 'verbs' },
        { arabic: 'سَلَّمَ يُسَلِّمُ تَسْلِيم', english: 'to greet, hand over', category: 'verbs' },
        { arabic: 'قَبَّلَ يُقَبِّلُ تَقْبِيل', english: 'to kiss', category: 'verbs' },
        { arabic: 'كَبَّرَ يُكَبِّرُ تَكْبِير', english: 'to say Allahu Akbar', category: 'verbs' },
        { arabic: 'دَرَّسَ يُدَرِّسُ تَدْرِيس', english: 'to teach', category: 'verbs' },
        { arabic: 'صَوَّرَ يُصَوِّرُ تَصْوِير', english: 'to photograph', category: 'verbs' },
        { arabic: 'سَمَّى يُسَمِّي تَسْمِيَة', english: 'to name', category: 'verbs' },
        { arabic: 'رَبَّى يُرَبِّي تَرْبِيَة', english: 'to educate, raise', category: 'verbs' },
        { arabic: 'هَنَّأَ يُهَنِّئُ تَهْنِئَة', english: 'to congratulate', category: 'verbs' },
        { arabic: 'أَهْلاً وَسَهْلاً وَمَرْحَباً', english: 'welcome (triple welcome formula)', category: 'expressions' },
        { arabic: 'شَفَاهُ اللهُ', english: 'may Allah cure him', category: 'expressions' },
        { arabic: 'هَدَاهُ اللهُ', english: 'may Allah guide him', category: 'expressions' },
        { arabic: 'مِنْ مَشَارِقِ الأَرْضِ وَمَغَارِبِها', english: 'from the east and west of the earth', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'مُحَمَّد بن وليم',
          arabic: 'أَسْلَمْتُ عَامَ ١٩٨١. لَمّا يُسْلِمْ أَبِي. هَدَاهُ اللهُ. أَمَّا أُمِّي فَأَسْلَمَتْ والحمدُ للهِ',
          english: 'I became Muslim in 1981. My father has not yet accepted Islam. May Allah guide him. As for my mother, she became Muslim, praise be to Allah.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'إنها جامعةٌ فريدةٌ يدرسُ فيها أبناءُ المسلمينَ من مشارقِ الأرضِ ومغاربِها',
          english: 'It is a unique university where Muslim students from the east and west of the earth study.',
        },
        {
          speaker: 'شُعَيْب',
          arabic: 'وَاللهُ مُتِمُّ نُورِهِ وَلَوْ كَرِهَ الكَافِرُونَ',
          english: 'And Allah will perfect His light even though the disbelievers hate it (Quran 61:8).',
        },
      ],
      culturalNotes: [
        'Muhammad ibn William from Canada represents the experience of Western converts studying in Madinah.',
        'The Islamic University of Madinah is portrayed as a global institution drawing students from all corners of the Muslim world.',
        'The lesson references a tape recorder for playing hadith recordings and telegrams for family communication, placing the text in a pre-digital era.',
      ],
    },

    // ── Lesson 7 ──────────────────────────────────────────────
    {
      number: 7,
      title: 'Transitive and Intransitive Verbs, Warning, and Restriction',
      arabicTitle: 'الدَّرْسُ السَّابِعُ',
      theme: 'After Asr Prayer — Poetry and Pronunciation',
      grammar: [
        {
          title: 'Transitive and Intransitive Verbs',
          arabicTitle: 'المُتَعَدِّي وَاللاَّزِمُ',
          explanation:
            'A transitive verb\'s action passes beyond the doer to an object. An intransitive verb\'s action is confined to the subject. Test: a transitive verb accepts a pronoun referring to the object. An intransitive verb can reach a noun indirectly via a preposition (indirect object).',
          examples: [
            { arabic: 'بَنَى إِبْرَاهِيمُ الكَعْبَةَ', english: 'Ibrahim built the Kaaba (transitive).' },
            { arabic: 'خَرَجَ الطُّلاَّبُ', english: 'The students went out (intransitive).' },
            { arabic: 'نَظَرْتُ إِلَى الجَبَلِ', english: 'I looked at the mountain (indirect object via preposition).' },
          ],
          rules: [
            'Transitive verbs take a direct object (مَفْعُول بِهِ)',
            'Intransitive verbs need only a subject; they can reach nouns via prepositions (مَفْعُول بِهِ غَيْر صَرِيح)',
          ],
        },
        {
          title: 'Making Intransitive Verbs Transitive',
          arabicTitle: 'التعدية بِبَابِ أَفْعَلَ وَفَعَّلَ',
          explanation:
            'An intransitive verb can be made transitive by transferring it to Form IV (af\'ala) or Form II (fa\'\'ala). The hamzah in Form IV is called hamzat al-ta\'diya (the transitive hamzah). When a verb already transitive to one object is transferred, it becomes doubly transitive.',
          examples: [
            { arabic: 'خَرَجَ حَامِدٌ → أَخْرَجَ المُدَرِّسُ حَامِداً', english: 'Hamid went out → The teacher took Hamid out (Form IV).' },
            { arabic: 'نَامَ المَرِيضُ → نَوَّمَ الدَّوَاءُ المَرِيضَ', english: 'The patient slept → The medicine put the patient to sleep (Form II).' },
            { arabic: 'سَمِعَ المُدَرِّسُ القُرْآنَ → أَسْمَعَ الطُّلاَّبُ المُدَرِّسَ القُرْآنَ', english: 'The teacher heard the Quran → The students made the teacher hear the Quran (doubly transitive).' },
          ],
          rules: [
            'Form IV (أَفْعَلَ): adds hamzat al-ta\'diya to make intransitive → transitive',
            'Form II (فَعَّلَ): doubles the middle radical to make intransitive → transitive',
            'Form II also conveys intensification or repetition: قَتَّلَ (massacred), كَسَّرَ (smashed)',
          ],
        },
        {
          title: 'The Verb a\'ta (to give) — Two Objects',
          arabicTitle: 'الفعل أَعْطَى — يَنْصِبُ مَفْعُولَيْنِ',
          explanation:
            'The verb a\'ta governs two direct objects: the recipient and the thing given. Both can be replaced by pronouns.',
          examples: [
            { arabic: 'أَعْطَيْتُ حَامِداً كِتَاباً', english: 'I gave Hamid a book.' },
            { arabic: 'إِنَّا أَعْطَيْنَاكَ الكَوْثَرَ', english: 'We have indeed given you abundance (Quran, al-Kawthar).' },
            { arabic: 'أَعْطَانِيهِ المُدَرِّسُ', english: 'The teacher gave it to me.' },
          ],
        },
        {
          title: 'Warning Expressions with iyyaka',
          arabicTitle: 'التَّحْذِير — إِيَّاكَ',
          explanation:
            'Warning (tahdhir) alerts the listener to something disliked. The structure uses iyya + pronoun suffix + wa + the thing warned against. The noun after wa is mansub.',
          examples: [
            { arabic: 'إِيَّاكَ وَالكِلاَبَ يَا بُنَيَّ', english: 'Beware of dogs, my son.' },
            { arabic: 'إِيَّاكُمْ وَالحَسَدَ', english: 'Beware of envy.' },
            { arabic: 'إِيَّاكُمْ وَالجُلُوسَ بِالطُّرُقَاتِ', english: 'Beware of sitting in the roads (Hadith).' },
          ],
          rules: [
            'Forms: إِيَّاكَ (masc. sg.), إِيَّاكِ (fem. sg.), إِيَّاكُمْ (masc. pl.), إِيَّاكُنَّ (fem. pl.)',
            'The noun after واو is mansub (accusative)',
          ],
        },
        {
          title: 'The Restrictive Particle innama',
          arabicTitle: 'إِنَّمَا — التعيين',
          explanation:
            'innama is composed of inna + ma al-kaffa (the preventive ma). It prevents inna from governing the noun as mansub. It conveys restriction: affirming the ruling for what is mentioned and negating it for everything else.',
          examples: [
            { arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', english: 'Actions are only by intentions (Hadith).' },
            { arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ', english: 'Charity is only for the poor (Quran 9:60).' },
            { arabic: 'إِنَّمَا هُوَ مُهَنْدِسٌ', english: 'He is only an engineer.' },
          ],
        },
        {
          title: 'The Particle wa-law (Even If)',
          arabicTitle: 'وَلَوْ',
          explanation:
            'wa-law means "even if" and is followed by a past-tense verb.',
          examples: [
            { arabic: 'اِشْتَرِ هذا المُعْجَمَ وَلَوْ كَانَ غَالِياً', english: 'Buy this dictionary even if it is expensive.' },
            { arabic: 'وَاللَّهُ مُتِمُّ نُورِهِ وَلَوْ كَرِهَ الكَافِرُونَ', english: 'And Allah will perfect His light even though the disbelievers hate it.' },
          ],
        },
        {
          title: 'The Verb amsa (Sister of kana)',
          arabicTitle: 'أَمْسَى — أخوات كان',
          explanation:
            'amsa is a sister of kana meaning "to become in the evening." Its ism is marfu\' and its khabar is mansub. Also asbaha (to become in the morning) and awshaka (to be about to).',
          examples: [
            { arabic: 'كَيْفَ أَمْسَيْتُمْ؟ — أَمْسَيْنَا بِخَيْرٍ', english: 'How are you this evening? — We are well.' },
            { arabic: 'أَصْبَحَ حَامِدٌ مَرِيضاً', english: 'Hamid fell ill in the morning.' },
            { arabic: 'أَوْشَكَ الدَّرْسُ أَنْ يَنْتَهِيَ', english: 'The lesson is about to end.' },
          ],
        },
        {
          title: 'Response to an Oath',
          arabicTitle: 'جَوَابُ القَسَمِ',
          explanation:
            'When the response to an oath is an affirmative verbal sentence with a past-tense verb, it is introduced with lam and qad.',
          examples: [
            { arabic: 'وَاللَّهِ لَقَدْ فَرِحْتُ كَثِيراً', english: 'By Allah, I was truly very happy.' },
            { arabic: 'لَقَدْ خَلَقْنَا الإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ', english: 'We have created man in the best stature (Quran, al-Tin).' },
          ],
        },
      ],
      vocabulary: [
        { arabic: 'أَعْطَى يُعْطِي إِعْطَاء', english: 'to give', category: 'verbs' },
        { arabic: 'أَصْبَحَ يُصْبِحُ', english: 'to become (in the morning)', category: 'verbs' },
        { arabic: 'أَمْسَى يُمْسِي', english: 'to become (in the evening)', category: 'verbs' },
        { arabic: 'أَوْشَكَ يُوشِكُ', english: 'to be about to', category: 'verbs' },
        { arabic: 'أَرَى يُرِي', english: 'to show', category: 'verbs' },
        { arabic: 'أَنْزَلَ يُنْزِلُ', english: 'to send down', category: 'verbs' },
        { arabic: 'أَخْرَجَ يُخْرِجُ', english: 'to bring out', category: 'verbs' },
        { arabic: 'أَجْلَسَ يُجْلِسُ', english: 'to seat (someone)', category: 'verbs' },
        { arabic: 'نَزَّلَ يُنَزِّلُ', english: 'to send down (Form II)', category: 'verbs' },
        { arabic: 'نَوَّمَ يُنَوِّمُ', english: 'to put to sleep', category: 'verbs' },
        { arabic: 'جَوَّلَ يُجَوِّلُ', english: 'to roam extensively', category: 'verbs' },
        { arabic: 'كَسَّرَ يُكَسِّرُ', english: 'to smash to pieces', category: 'verbs' },
        { arabic: 'قَتَّلَ يُقَتِّلُ', english: 'to massacre', category: 'verbs' },
        { arabic: 'قَطَّعَ يُقَطِّعُ', english: 'to cut into pieces', category: 'verbs' },
        { arabic: 'أَدْرَى يُدْرِي', english: 'to inform, make know', category: 'verbs' },
        { arabic: 'مُتَعَدٍّ', english: 'transitive (verb)', category: 'grammar terms' },
        { arabic: 'لاَزِم', english: 'intransitive (verb)', category: 'grammar terms' },
        { arabic: 'مَفْعُول بِهِ غَيْر صَرِيح', english: 'indirect object', category: 'grammar terms' },
        { arabic: 'هَمْزَة التَّعْدِيَة', english: 'the transitive hamzah', category: 'grammar terms' },
        { arabic: 'التَّحْذِير', english: 'warning', category: 'grammar terms' },
        { arabic: 'جَوَاب القَسَم', english: 'response to an oath', category: 'grammar terms' },
        { arabic: 'جَمْع الجَمْع', english: 'plural of plurals', category: 'grammar terms' },
        { arabic: 'النَّتِيجَة', english: 'result', category: 'nouns' },
        { arabic: 'نِسْبَة النَّجَاح', english: 'pass rate', category: 'nouns' },
        { arabic: 'الامْتِحَان النِّصْفِيّ', english: 'midterm exam', category: 'nouns' },
        { arabic: 'سَيَّارَة الإِسْعَاف', english: 'ambulance', category: 'nouns' },
        { arabic: 'المُسْتَشْفَى', english: 'hospital', category: 'nouns' },
        { arabic: 'صُدَاع', english: 'headache', category: 'nouns' },
        { arabic: 'زُكَام', english: 'cold (illness)', category: 'nouns' },
        { arabic: 'سُعَال', english: 'cough', category: 'nouns' },
        { arabic: 'مَغْص', english: 'stomach ache', category: 'nouns' },
        { arabic: 'إِسْهَال', english: 'diarrhea', category: 'nouns' },
        { arabic: 'دُوَار', english: 'dizziness', category: 'nouns' },
        { arabic: 'حَشَرَة سَامَّة', english: 'poisonous insect', category: 'nouns' },
        { arabic: 'إِنَّمَا', english: 'only, indeed (restriction)', category: 'particles' },
        { arabic: 'وَلَوْ', english: 'even if', category: 'particles' },
        { arabic: 'إِيَّاكَ وَ...', english: 'beware of...', category: 'expressions' },
        { arabic: 'جَزَاكَ اللَّهُ خَيْراً', english: 'May Allah reward you with good', category: 'expressions' },
        { arabic: 'فَرَّحَكَ اللَّهُ دَائِماً', english: 'May Allah always make you happy', category: 'expressions' },
        { arabic: 'شَفَاكَ اللَّهُ', english: 'May Allah cure you', category: 'expressions' },
      ],
      dialogues: [
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'كَيْفَ أَمْسَيْتُمْ يَا إِخْوَانُ؟',
          english: 'How are you this evening, brothers?',
        },
        {
          speaker: 'الطلاب',
          arabic: 'أَمْسَيْنَا بِخَيْرٍ وَالحَمْدُ لِلَّهِ',
          english: 'We are well, praise be to Allah.',
        },
        {
          speaker: 'المُدَرِّسُ',
          arabic: 'إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الحَدِيثِ',
          english: 'Beware of suspicion, for suspicion is the most lying of speech.',
        },
      ],
      culturalNotes: [
        'Al-Mutanabbi\'s verse about grammatical gender demonstrates how classical Arabic poetry is used in language teaching.',
        'The teacher stresses correct pronunciation of ث, ذ, and ظ -- letters whose pronunciation has weakened in many Arabic dialects but remains essential in Quranic recitation.',
        'Many disease words follow the pattern fu\'al: صُدَاع (headache), زُكَام (cold), دُوَار (dizziness), سُعَال (cough).',
        'The dialogue takes place after Asr prayer, reflecting the Islamic educational environment of Madinah University.',
      ],
    },
  ],
}
