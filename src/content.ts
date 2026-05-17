/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lesson {
  id: string;
  titleAr: string;
  titleEn: string;
  content: string;
  code?: string;
  algorithmAr?: string;
  lineByLineAr?: { line: string; explanation: string }[];
}

export interface Problem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  explanation: string;
  code: string;
  algorithmAr?: string;
  flowchartData: string;
  lineByLineAr?: { line: string; explanation: string }[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
  problems: Problem[];
}

export const SECTIONS: Section[] = [
  {
    id: "sec1",
    title: "Section 1: Python Basics",
    lessons: [
      {
        id: "intro",
        titleAr: "مقدمة عن لغة بايثون",
        titleEn: "Introduction to Python",
        content:
          "بايثون هي لغة برمجة عالية المستوى (High-level)، تتميز بأنها سهلة التعلم (Easy) ومفتوحة المصدر (Free). تعتمد بايثون على نظام 'Interpreted' مما يعني أن الكود يُنفذ سطراً بسطر.\n\nمن مميزاتها:\n- سهولة الكتابة والقراءة مقارنة بـ C++ و Java.\n- لغة مفسرة (Interpreted) تجعل التطوير أسرع.\n- سهولة التحويل من لغات أخرى مثل Java و C++ إليها.",
        code: "# هذه دالة الطباعة الخاصة بإظهار النصوص على الشاشة\nprint('Hello World') # ستظهر الكلمة Hello World كالتالي",
        algorithmAr:
          "1. بداية البرنامج.\n2. استدعاء الدالة المدمجة print.\n3. تمرير النص المراد طباعته (Hello World).\n4. نهاية البرنامج.",
        lineByLineAr: [
          {
            line: "print('Hello World')",
            explanation:
              "دالة الطباعة تقوم بإظهار النص 'Hello World' على الشاشة.",
          },
        ],
      },
      {
        id: "comments",
        titleAr: "التعليقات (Comments)",
        titleEn: "Comments",
        content:
          'تُستخدم التعليقات لشرح الكود ولا يتم تنفيذها من قبل المترجم.\n\n1. **تعليق سطر واحد (Single line):** يبدأ بعلامة الهاشتاج (#).\n2. **تعليق متعدد الأسطر (Multi-line):** يُوضع بين ثلاث علامات تنصيص (""" كود هنا """).',
        code: '# تعليق سطر واحد: لن يتم تنفيذه من قبل النظام\nprint("Hello") # هذا السطر سيتم تنفيذه لطباعة الكلمة\n\n"""\nهذا تعليق متعدد الأسطر\nيمكنك كتابة شروحات طويلة هنا بحرية تامة\nلن يقرؤه البرنامج أبداً\n"""\nprint("Hello")',
        algorithmAr:
          '1. يبدأ البرنامج بتخطي السطر الأول لأنه تعليق (يبدأ بـ #).\n2. يُنفذ السطر الثاني لطباعة كلمة Hello.\n3. يتخطى المفسر الفقرة المحاطة بـ """ لأنها تعليق طويل.\n4. يُنفذ السطر الأخير ويطبع جملة Hello مرة أخرى.',
        lineByLineAr: [
          {
            line: "# Single line...",
            explanation:
              "تعليق يتم تجاهله من قبل بايثون، يُستخدم لتوضيح الغرض من السطر التالي.",
          },
          {
            line: 'print("Hello")',
            explanation: "طباعة كلمة 'Hello' البسيطة.",
          },
          {
            line: '""" ... """',
            explanation:
              "تعليق متعدد الأسطر يُستخدم لكتابة فقرات شرح طويلة داخل الكود.",
          },
        ],
      },
      {
        id: "variables",
        titleAr: "المتغيرات (Variables)",
        titleEn: "Variables",
        content:
          "المتغير هو مكان في الذاكرة لتخزين القيمة (Variable = Value). بايثون هي لغة 'Loosely Typed' مما يعني أنك لا تحتاج لتحديد نوع المتغير يدوياً، بايثون تفهم النوع تلقائياً من القيمة المسندة.",
        code: 'x = 10      # تعريف متغير يحتوي على رقم صحيح\ny = "Python" # تعريف متغير يحتوي على قيمة نصية\nz = 10.2    # تعريف متغير يحتوي على رقم عشري (بالفاصلة)',
        algorithmAr:
          "1. حجز مكان في الذاكرة للمتغير x ووضع القيمة 10 بداخله (نوعه صحيح).\n2. حجز مكان آخر للمتغير y وتخزين النص 'Python' بداخله.\n3. حجز مكان للمتغير z وتخزين الرقم الكسري 10.2.\n4. في بايثون، لا نحتاج للتصريح المسبق عن نوع المتغير.",
        lineByLineAr: [
          {
            line: "x = 10",
            explanation: "تخزين الرقم الصحيح 10 في متغير اسمه x.",
          },
          {
            line: 'y = "Python"',
            explanation: "تخزين النص 'Python' في متغير اسمه y.",
          },
          {
            line: "z = 10.2",
            explanation: "تخزين رقم عشري (Float) 10.2 في متغير اسمه z.",
          },
        ],
      },
      {
        id: "casting",
        titleAr: "تحويل الأنواع (Casting)",
        titleEn: "Type Casting",
        content:
          "يمكننا تحويل قيمة من نوع لآخر يدوياً باستخدام دوال التحويل مثل int(), float(), str().\nمثلاً تحويل رقم عشري لرقم صحيح يتجاهل الكسر.",
        code: "x = int(10)\n# التحويل لرقم صحيح يحذف الأجزاء العشرية تماما\ny = int(10.2)\nprint(y) # Output: 10",
        algorithmAr:
          "1. أخذ الرقم 10 وتمريره لدالة int للحفاظ عليه كـ رقم صحيح (x).\n2. تمرير الرقم العشري 10.2 لدالة int() والتي تقوم باقتطاع الجزء العشري.\n3. تخزين النتيجة الصحيحة في المتغير y.\n4. طباعة النتيجة النهائية التي ستكون 10.",
        lineByLineAr: [
          {
            line: "x = int(10)",
            explanation:
              "بما أن القيمة 10 هي صحيح فسيظل المتغير x من النوع int.",
          },
          {
            line: "y = int(10.2)",
            explanation:
              "تحويل الرقم 10.2 لعنصر صحيح، مما يعني حذف الرقم العشري ليصبح 10.",
          },
          { line: "print(y)", explanation: "عرض النتيجة المحولة (10)." },
        ],
      },
      {
        id: "advanced-assignment",
        titleAr: "إسناد القيم المتعددة",
        titleEn: "Multi-Variable Assignment",
        content:
          "بايثون تسمح بإسناد قيم لعدة متغيرات في سطر واحد بطريقتين:\n\n1. **Multi-Multi:** إسناد عدة قيم لعدة متغيرات بالترتيب.\n2. **Multi-Single:** إسناد نفس القيمة لكل المتغيرات.",
        code: "# الطريقة الأولى: إسناد عدة قيم لعدة متغيرات تباعا بالترتيب الصحيح\nx, y, z = 10, 20, 30\n\n# الطريقة الثانية: إسناد نفس القيمة (50) للجميع في نفس السطر\na = b = c = 50",
        algorithmAr:
          "1. يقوم بايثون بترتيب المتغيرات x, y, z بالقيم المقابلة 10, 20, 30 على التوالي في خطوة واحدة.\n2. في السطر الثاني، يقوم بأخذ القيمة 50 وإسنادها إلى c.\n3. ومن ثم يقوم بإسناد قيمة c إلى b.\n4. ثم ينسخ قيمة b إلى a، ليصبح للثلاثة نفس القيمة 50.",
        lineByLineAr: [
          {
            line: "x, y, z = 10, 20, 30",
            explanation: "إسناد 10 لـ x، و 20 لـ y، و 30 لـ z في سطر واحد.",
          },
          {
            line: "a = b = c = 50",
            explanation:
              "إسناد القيمة 50 دفعة واحدة لجميع المتغيرات a و b و c.",
          },
        ],
      },
      {
        id: "functions",
        titleAr: "الدوال والعمليات (Functions & Ops)",
        titleEn: "Functions & Operations",
        content:
          "أهم الدوال الأساسية للتعامل مع البيانات والمدخلات:\n- `print()`: لعرض المخرجات.\n- `input()`: لاستلام بيانات نصية من المستخدم.\n- `type()`: للتحقق من نوع البيانات المخزنة.",
        code: '# إعطاء المتغيرات قيم ثابتة لعمل اختبار الجمع\nx = 10\ny = 20\nprint("the Sum =", x + y) # نقوم بالجمع مباشرة داخل دالة الطباعة لتوفير سطر جديد\n\n# دالة الإدخال تقوم بإيقاف البرنامج حتى يكتب المستخدم البيانات\nz = input("Enter: ")\n# التحقق من النوع وطباعته لمعرفة نوع متغير x\nprint(type(x))',
        algorithmAr:
          "1. تخزين القيم 10 و 20 في المتغيرات x و y.\n2. استخدام دالة print لعرض النص 'the Sum =' متبوعاً بنتيجة جمع المتغيرين.\n3. إظهار رسالة الإدخال للمستخدم والانتظار حتى يعطي إجابة.\n4. استقبال النص المُدخل وتخزينه في z.\n5. سؤال النظام عن نوع متغير x (وهو صحيح int) وإرسال النتيجة إلى الشاشة للطباعة.",
        lineByLineAr: [
          {
            line: 'print("the Sum =", x + y)',
            explanation: "طباعة نص ثابت بجانبه ناتج عملية الجمع (10+20 = 30).",
          },
          {
            line: 'input("Enter: ")',
            explanation: "تنتظر هذه الدالة من المستخدم كتابة شيء وتخزنه كنص.",
          },
          {
            line: "type(x)",
            explanation: "تُرجع نوع بيانات المتغير x (مثلاً <class 'int'>).",
          },
        ],
      },
    ],
    problems: [
      {
        id: "p1",
        titleAr: "طباعة الاسم والعمر",
        titleEn: "Print Name & Age",
        descriptionAr:
          "اكتب برنامجاً يقوم بطباعة اسمك وعمرك بطريقتين: مباشرة أو بالمدخلات.",
        descriptionEn: "Print your name and age directly or via user input.",
        explanation:
          "نستخدم print للثوابت و input للحصول على بيانات ديناميكية من المستخدم.",
        code: '# الطريقة الأولى: الطباعة المباشرة من البرنامج\nprint("Doha Elsharkawy")\nprint("22")\n\n# الطريقة الثانية: طلب بيانات حقيقية من المستخدِم وتخزينها\nname = input("the name: ")\nage = input("the age: ")\n# طباعتها بعد الاستقبال بجانب بعضهما للفصل بينهما بمسافة تلقائية\nprint(name, age)',
        algorithmAr:
          "1. بداية البرنامج.\n2. طباعة نص مباشر يحتوي على الاسم.\n3. طباعة العمر كرقم أو نص بشكل مباشر.\n4. عرض رسالة تطالب المستخدم بكتابة الاسم وحفظ المدخل بالمتغير name.\n5. عرض رسالة أخرى لطلب العمر وحفظه في age.\n6. دمج الاسم والعمر معاً داخل print للظهور على سطر واحد.\n7. نهاية البرنامج.",
        flowchartData: "Start -> Input Name -> Input Age -> Print Both -> End",
        lineByLineAr: [
          {
            line: 'print("Doha Elsharkawy")',
            explanation: "طباعة الاسم مباشرة كنص ثابت.",
          },
          {
            line: 'name = input("the name: ")',
            explanation:
              "يطلب البرنامج من المستخدم ادخال الاسم ويخزنه في name.",
          },
          {
            line: "print(name, age)",
            explanation: "طباعة المتغيرين name و age معاً.",
          },
        ],
      },
      {
        id: "p2",
        titleAr: "مساحة المستطيل",
        titleEn: "Area of Rectangle",
        descriptionAr:
          "احسب مساحة المستطيل بمعلومية الطول (L=30) والعرض (W=40).",
        descriptionEn: "Calculate rectangle area using L=30 and W=40.",
        explanation: "القانون: المساحة = الطول × العرض.",
        code: '# إعداد الطول والعرض الخاص بالمستطيل لحساب المساحة\nl = 30\nw = 40\n# تطبيق القانون الرياضي في متغير لحفظ الناتج\nArea = l * w\n# طباعة المساحة لكي تظهر على الشاشة\nprint("the Area =", Area)',
        algorithmAr:
          "1. ابدأ البرنامج بتعريف الطول L وإعطائه القيمة الثابتة 30.\n2. ثم عَرّف متغير العرض W واعطه القيمة 40.\n3. قم بضرب المتغيرين وتخزين ناتجهما في مكان جديد يسمى Area.\n4. استخدم دالة الطباعة لعرض النتيجة النهائية للمستخدم مصحوبة بنص توضيحي.\n5. انتهاء التشغيل.",
        flowchartData:
          "Start -> Set L=30, W=40 -> Area = L * W -> Print Area -> End",
        lineByLineAr: [
          { line: "l = 30", explanation: "تحديد قيمة الطول بـ 30." },
          { line: "w = 40", explanation: "تحديد قيمة العرض بـ 40." },
          {
            line: "Area = l * w",
            explanation: "حساب المساحة بضرب الطول في العرض.",
          },
          {
            line: 'print("the Area =", Area)',
            explanation: "طباعة الرقم النهائي للمساحة.",
          },
        ],
      },
      {
        id: "p3",
        titleAr: "متوسط 3 أرقام",
        titleEn: "Average of 3 Numbers",
        descriptionAr: "احسب المتوسط الحسابي لثلاثة أرقام مدخلة من المستخدم.",
        descriptionEn: "Calculate the average of 3 numbers from input.",
        explanation: "المتوسط = (مجموع الأرقام) / 3.",
        code: '# قراءة الأرقام من واجهة التشغيل وتحويلها على الفور لأرقام صحيحة لإجراء عمليات حسابية لاحقا\nx = int(input("first number: "))\ny = int(input("sec. number: "))\nz = int(input("third number: "))\n# استخدام الأقواس لإجبار بايثون على حساب الجمع قبل قسمته على العدد الكلي 3\ns = (x + y + z) / 3\n# عرض النتيجة النهائية للمتوسط الحسابي\nprint("Avg =", s)',
        algorithmAr:
          "1. إظهار رسالة للمستخدم تطلب الرقم الأول، استقبال النص وتحويله فورا לרقم وتخزينه في x.\n2. فعل نفس الشيء لطلب وتخزين الرقم الثاني في y.\n3. إعادة الأمر للمرة الثالثة للرقم z.\n4. حساب المجموع الكلي عن طريق جمع المتغيرات الثلاثة بين أقواس رياضية.\n5. قسمة المجموع على عدد الأرقام (3) للحصول على المتوسط وتخزينه في s.\n6. طباعة المخرجات وعرض المتوسط s.\n7. نهاية مسار المعالجة.",
        flowchartData:
          "Start -> Input X, Y, Z -> (X+Y+Z)/3 -> Print Result -> End",
        lineByLineAr: [
          {
            line: "x = int(input(...))",
            explanation:
              "نقرأ المدخل ونحوله لرقم صحيح (int) لأن الـ input بطبعها نصية.",
          },
          {
            line: "s = (x + y + z) / 3",
            explanation:
              "جمع الثلاث أرقام أولاً داخل الأقواس ثم القسمة على عددهم 3.",
          },
          {
            line: 'print("Avg =", s)',
            explanation: "إظهار قيمة المتوسط الحسابي.",
          },
        ],
      },
    ],
  },
  {
    id: "sec2",
    title: "Section 2: Control Flow & Loops",
    lessons: [
      {
        id: "conditionals",
        titleAr: "الجمل الشرطية (Conditional Statements)",
        titleEn: "Conditional Statements",
        content:
          "تُستخدم الجمل الشرطية لاتخاذ القرارات في البرنامج بناءً على تحقق شرط معين.\n\n1. **if statement:** للتنفيذ في حالة تحقق الشرط فقط.\n2. **if-else:** للتنفيذ في الحالتين (صح أو خطأ).\n3. **if-elif-else:** لفحص عدة شروط متتالية واختيار واحد فقط.",
        code: '# إعطاء قيم للبدء في المقارنة\na = 5\nb = 3\n\n# شرط أول: هل a أكبر من b؟\nif a > b:\n    print("true")\n# لو فشل الأول، هل b أكبر من a؟\nelif b > a:\n    print("false")\n# لو فشلت كل الشروط السابقة ننفذ هذا السطر حتما\nelse:\n    print("equal")',
        algorithmAr:
          "1. تخزين القيمة 5 في المتغير a والقيمة 3 في المتغير b.\n2. فحص الشرط الأول (هل 5 أكبر من 3؟). إذا كان صحيحاً تتم طباعة true ويتخطى البرنامج باقي الشروط.\n3. إذا كان الشرط الأول خاطئاً، ينتقل للشرط الثاني (elif) ليرى إن كانت b هي الأكبر.\n4. إذا لم يتحقق أي شرط من الشروط السابقة، يتم تلقائياً تنفيذ قسم else وطباعة equal.",
        lineByLineAr: [
          {
            line: "if a > b:",
            explanation: "يفحص البرنامج هل قيمة a أكبر من b؟",
          },
          {
            line: 'print("true")',
            explanation: "إذا كان الشرط الأول صحيحاً، يطبع كلمة true.",
          },
          {
            line: "elif b > a:",
            explanation: "إذا لم يتحقق الأول، يفحص هل b هي الأكبر؟",
          },
          {
            line: "else:",
            explanation:
              "إذا فشلت كل الشروط السابقة (أي أنهما متساويان)، ينفذ هذا السطر.",
          },
        ],
      },
      {
        id: "loops",
        titleAr: "حلقات التكرار (Loop Statements)",
        titleEn: "Loops",
        content:
          "تُستخدم الحلقات لتكرار تنفيذ كود معين لعدد من المرات.\n\n1. **for loop:** تُستخدم للتكرار عبر تسلسل (مثل range) وتعتمد على التكرار (Iteration).\n2. **while loop:** تُستخدم للتكرار طالما أن الشرط صحيح وتعتمد على الحالة (Condition).",
        code: "# For Loop - حلقة من 1 إلى 5 (الرقم 6 لا يدخل في التسلسل)\nfor i in range(1, 6):\n    print(i)\n\n# While Loop - حلقة طالما الشرط متحقق\ni = 1 # قيمة مبدئية للعداد قبل بدء الحلقة\nwhile i <= 5:\n    print(i)\n    i += 1 # تحديث العداد لمنع حلقة لا نهائية",
        algorithmAr:
          "1. بالنسبة لـ for: يتم إعداد نطاق تكراري من الرقم 1 حتى الرقم 5.\n2. في كل خطوة، يتم نسخ الرقم الحالي وتخزينه في i، ثم طباعته على الشاشة.\n3. بالنسبة لـ while: يتم تهيئة المتغير i بقيمة 1.\n4. يتم التحقق من الشرط (هل i أقل من أو يساوي 5؟).\n5. إذا كان الشرط صحيحاً يتم طباعة الرقم ثم زيادته بواحد، وتتكرر الخطوات حتى يصبح 6 فيفشل الشرط وتتوقف الحلقة.",
        lineByLineAr: [
          {
            line: "for i in range(1, 6):",
            explanation: "حلقة تبدأ من 1 وتنتهي عند 5 (الرقم 6 لا يدخل).",
          },
          {
            line: "while i <= 5:",
            explanation: "استمر في التكرار طالما أن قيمة i أصغر من أو تساوي 5.",
          },
          {
            line: "i += 1",
            explanation:
              "زيادة قيمة العداد i بواحد في كل دورة لتجنب الحلقة اللانهائية.",
          },
        ],
      },
      {
        id: "jump",
        titleAr: "جمل القفز (Jump Statements)",
        titleEn: "Jump Statements",
        content:
          "تستخدم للتحكم في مسار الحلقة:\n- **Continue:** تقوم بعمل (Skip) للدورة الحالية فقط وتنتقل للدورة التالية.\n- **Break:** تقوم بعمل (Stop) للحلقة تماماً وتخرج منها.",
        code: "# حلقة تطبع الأرقام من 1 لـ 5 مع استثناء رقم 3\nfor i in range(1, 6):\n    if i == 3: # هل وصلنا للرقم 3؟\n        continue # تجاهل باقي الأوامر في هذه الدورة وانتقل للرقم 4 مباشرة\n    print(i)",
        algorithmAr:
          "1. بدء حلقة تكرار for من الأرقام 1 إلى 5.\n2. يتم اختبار الرقم الحالي في الدورة (i)، هل هو يساوي 3؟\n3. في حالة توافق الرقم مع 3، سيتم تفعيل الأمر continue الذي يتخطى كل ما تحته في نفس الدورة (لذلك لن يُطبع).\n4. في حالة عدم التوافق سيتم متابعة الدورة وطباعة الرقم كالمعتاد.\n5. النتيجة: 1، 2، ثم 4، ثم 5.",
        lineByLineAr: [
          {
            line: "if i == 3:",
            explanation: "يفحص البرنامج هل وصلنا للدورة التي قيمتها 3؟",
          },
          {
            line: "continue",
            explanation:
              "إذا كانت i تساوي 3، 'اقفز' فوقها ولا تنفذ سطر الطباعة التالي لها.",
          },
          {
            line: "print(i)",
            explanation: "طباعة الأرقام (سيطبع 1، 2، 4، 5 وسيتخطى 3).",
          },
        ],
      },
    ],
    problems: [
      {
        id: "p4",
        titleAr: "فحص الرقم (موجب/سالب/صفر)",
        titleEn: "Check Number Status",
        descriptionAr:
          "اطلب رقماً من المستخدم وحدد حالته (Positive, Negative, Zero).",
        descriptionEn:
          "Check if a number is positive, negative, or zero based on user input.",
        explanation: "نستخدم if-elif لمقارنة المدخل بالصفر.",
        code: '# طلب رقم وتخزينه كـ رقم صحيح (int)\nnum = int(input("Enter number: "))\n# هل الرقم أكبر من الصفر؟\nif num > 0:\n    print("Positive") # طباعة أنه موجب\nelif num < 0:\n    print("Negative") # طباعة أنه سالب\nelse:\n    print("Zero") # خلاف ذلك فهو الصفر نفسه',
        algorithmAr:
          "1. إيقاف البرنامج لطلب إدخال رقم من المستخدم، وتحويل المدخل لرقم صحيح.\n2. يفحص الشرط الأول ما إذا كان الرقم أكبر تماماً من الصفر.\n3. إذا تحقق فإنه يعرض رسالة تفيد بأنه عدد موجب، وينتهي التنفيذ.\n4. وإلا، يتم الانتقال لشرط آخر لفحص هل الرقم أقل من الصفر.\n5. إذا تحقق فإنه يعرض رسالة تفيد بأنه عدد سالب.\n6. إذا فشلت كل هذه المحاولات فإن الرقم المدخل بكل تأكيد هو صفر، ونعرض رسالة تفيد بذلك.",
        flowchartData:
          "Start -> Input num -> Is num > 0? -> Yes: Positive -> No: Is num < 0? -> Yes: Negative -> No: Zero -> End",
        lineByLineAr: [
          {
            line: "num = int(input(...))",
            explanation: "استقبال رقم وتحويله لنوع صحيح (Integer).",
          },
          {
            line: "if num > 0:",
            explanation: "فحص إذا كان الرقم أكبر من صفر.",
          },
          {
            line: 'print("Positive")',
            explanation: "طباعة 'موجب' إذا تحقق الشرط.",
          },
        ],
      },
      {
        id: "p5",
        titleAr: "زوجي أم فردي",
        titleEn: "Even or Odd",
        descriptionAr:
          "برنامج يحدد إذا كان الرقم زوجياً أم فردياً باستخدام باقي القسمة %.",
        descriptionEn:
          "A program to determine if a number is even or odd using modulo.",
        explanation: "الرقم الزوجي هو الذي يكون باقي قسمته على 2 يساوي صفراً.",
        code: '# قراءة الرقم المراد فحصه من المستخدم\nnum = int(input("Enter num: "))\n# استخدام معامل باقي القسمة (%)\n# لو كان باقي قسمته على 2 لا يساوي صفرا\nif num % 2 != 0:\n    print("Odd") # فردي\nelse:\n    print("Even") # زوجي',
        algorithmAr:
          "1. أخذ الرقم من شاشة الأوامر وتخزينه كعدد صحيح في num.\n2. تطبيق عملية باقي القسمة (Modulo) على الرقم المدخل بالقسمة على 2.\n3. مقارنة نتيجة باقي القسمة ليرى ما إذا كانت لا تساوي الصفر.\n4. إن كانت لا تساوي الصفر فهو رقم فردي (Odd).\n5. عدا ذلك (إذا كان الباقي صفراً) يتم الحكم عليه كرقم زوجي (Even) وطباعة النتيجة.",
        flowchartData:
          "Start -> Input num -> num % 2 != 0? -> Yes: Odd -> No: Even -> End",
        lineByLineAr: [
          {
            line: "if num % 2 != 0:",
            explanation:
              "هل باقي قسمة الرقم على 2 لا يساوي صفراً؟ (علامة != تعني لا يساوي).",
          },
          {
            line: 'print("Odd")',
            explanation: "إذا كان هناك باقي، فالرقم فردي.",
          },
        ],
      },
      {
        id: "p6",
        titleAr: "الآلة الحاسبة (Calculator)",
        titleEn: "Simple Calculator",
        descriptionAr: "حاسبة تطلب رقمين وعملية وتطبع الناتج.",
        descriptionEn: "Calculator taking two numbers and an operator choice.",
        explanation: "نربط كل خيار (1, 2, 3, 4) بعملية حسابية معينة.",
        code: '# طلب نوع العملية الحسابية كمدخل نصي\nop = input("1-Add, 2-Sub, 3-Mul, 4-Div: ")\n# طلب الأرقام المطلوبة لإجراء العملية عليها\nn1 = int(input("N1: "))\nn2 = int(input("N2: "))\n\n# تحديد العملية المطلوبة وتنفيذها\nif op == \'1\':\n    print("Sum =", n1 + n2) # الجمع\nelif op == \'2\':\n    print("Sub =", n1 - n2) # الطرح\n# يمكن إضافة القسمة والضرب بنفس المبدأ هنا\nelse:\n    print("Other ops...") # عملية غير مخصصة حاليا',
        algorithmAr:
          "1. يعرض البرنامج قائمة خيارات للمستخدم للاختيار من بين أنواع العمليات المتاحة.\n2. يقرأ الرقم الأول ويحوله لصحيح، ثم الرقم الثاني.\n3. يتحقق من الخيار المدخل: إن كان '1' يقوم بجمع الرقمين وإظهار المجموع.\n4. إن لم يكن، يتحقق ما إذا كان الخيار '2' ويطرح الرقمين لحساب الفرق.\n5. يطبع رسالة للعمليات الأخرى حال إدخال المستخدم لخيار لم يتم برمجته.",
        flowchartData:
          "Start -> Input Data -> If-Elif chain -> Print Result -> End",
        lineByLineAr: [
          {
            line: "if op == '1':",
            explanation: "إذا اختار المستخدم الخيار الأول (الجمع).",
          },
          {
            line: 'print("Sum =", n1 + n2)',
            explanation: "عرض نواتج جمع الرقمين الأول والثاني.",
          },
        ],
      },
      {
        id: "p7",
        titleAr: "برنامج الصراف الآلي (ATM)",
        titleEn: "ATM Program",
        descriptionAr: "محاكاة لعمليات الاستعلام، الإيداع، والسحب.",
        descriptionEn: "ATM simulation for balance, deposit, and withdraw.",
        explanation: "نعدل متغير الرصيد balance بناءً على العملية المطلوبة.",
        code: '# تحديد رصيد ابتدائي وهمي للحساب\nbalance = 1000\nchoice = input("1-Balance, 2-Deposit, 3-Withdraw: ")\n\n# الاستعلام عن الرصيد الحالي بدون أي تعديل\nif choice == \'1\':\n    print("Your Balance =", balance)\n# إضافة أموال للحساب (Deposit)\nelif choice == \'2\':\n    dep = int(input("Amount: "))\n    balance += dep # اختصار لـ balance = balance + dep\n    print("New Balance =", balance)\nelse:\n    print("Invalid")',
        algorithmAr:
          "1. إعطاء رصيد مبدئي قدره 1000 في متغير الرصيد balance.\n2. يقرأ البرنامج العملية المطلوبة من قبل المستخدم (مثل اختيار 1 للاستعلام، و 2 للإيداع).\n3. وفقا للرقم المختار، إن اختار 1 يعرض رسالة برصيده.\n4. إذا اختار 2 يطالبه بإدخال مبلغ الإيداع.\n5. يضيف هذا المبلغ على المتغير balance ثم يطبعه ليكون الرصيد المحدث.\n6. إذا اختار أي رقم غريب يطبع رسالة بأن الاختيار باطل.",
        flowchartData: "Start -> Choice -> Update Balance -> Print -> End",
        lineByLineAr: [
          {
            line: "balance = 1000",
            explanation: "تحديد رصيد افتراضي يبدأ من 1000.",
          },
          {
            line: "balance += dep",
            explanation: "إضافة مبلغ الإيداع للرصيد الحالي وتحديثه (علامة +=).",
          },
        ],
      },
      {
        id: "p8",
        titleAr: "جدول الضرب (Table)",
        titleEn: "Multiplication Table",
        descriptionAr: "طباعة جدول ضرب لرقم معين باستخدام حلقة for.",
        descriptionEn:
          "Print the multiplication table for any number using for loop.",
        explanation: "نكرر عملية الضرب من 1 إلى 10.",
        code: '# طلب الرقم المراد عرض جدول الضرب الخاص به\nnum = int(input("Number: "))\n# التكرار من 1 وحتى قبل 11 (أي 10)\nfor i in range(1, 11):\n    res = num * i\n    # طباعة كل شيء بالتصرف لتكون الجملة شبيهة بمشهد جدول الضرب التقليدي: 5 x 1 = 5\n    print(num, "x", i, "=", res)',
        algorithmAr:
          "1. يقرأ الرقم المدخل من قِبَل المستخدم وهو الرقم الأساسي لجدول الضرب.\n2. يتم الدخول في حلقة تكرارية for من الرقم 1 وحتى الرقم 10.\n3. في كل مرحلة يتم ضرب الرقم الأساسي في العداد i وحفظ النتائج بـ res.\n4. يقوم المترجم بطباعة عملية رياضية مصاغة في شكل نص يعرض كلاً من المعاملات والنتيجة في سطر جديد.\n5. تنتهي الحلقة بانتهاء العدد 10.",
        flowchartData:
          "Start -> Input num -> For loop (1-10) -> Print result -> End",
        lineByLineAr: [
          {
            line: "for i in range(1, 11):",
            explanation:
              "بداية حلقة تكرارية تبدأ من 1 وتستمر حتى وصول العداد إلى 10.",
          },
          {
            line: "res = num * i",
            explanation:
              "ضرب الرقم المدخل في قيمة العداد الحالية وتخزينها في res.",
          },
          {
            line: "print(...)",
            explanation: "طباعة جملة الضرب كاملة (مثلاً 5 x 1 = 5).",
          },
        ],
      },
      {
        id: "p9",
        titleAr: "فحص كلمة السر (Break)",
        titleEn: "Password Check",
        descriptionAr: "استمر في طلب الباسورد حتى يدخل المستخدم '1234'.",
        descriptionEn:
          "Loop until the correct password is provided, then use break.",
        explanation: "نستخدم break لإيقاف المحاولات فور الإجابة الصحيحة.",
        code: '# تحديد الرقم السري مسبقاً في النظام\ncorrect = "1234"\n# While True تجعل التكرار يعمل بلا نهاية حتى نصطدم بـ break\nwhile True:\n    pwd = input("Password: ")\n    if pwd == correct:\n        print("Welcome!")\n        break # خروج فوري من الحلقة\n    print("Try again...")',
        algorithmAr:
          "1. إعداد متغير 'correct' يحفظ بداخله الرقم السري الصحيح.\n2. تشغيل حلقة (while True) تدور بلا توقف.\n3. تطلب الحلقة في كل دورة من المستخدم إدخال كلمة سر.\n4. تطابق المدخل مع الرقم السري (correct).\n5. إن تطابقا، يطبع البرنامج ترحيباً ويستدعي الكلمة break لتكسر الحلقة.\n6. إن لم يتطابقا سيطبع 'Try again' ويعيد السؤال.",
        flowchartData:
          "Start -> correct='1234' -> Loop: Input pwd -> pwd==correct? -> Yes: Welcome, Break -> No: Try again -> End",
        lineByLineAr: [
          {
            line: "while True:",
            explanation: "حلقة لا نهائية ستستمر في التكرار حتى نوقفها يدوياً.",
          },
          {
            line: "break",
            explanation: "أمر إيقاف فوري يخرج البرنامج من حلقة while بأكملها.",
          },
        ],
      },
    ],
  },
  {
    id: "sec3",
    title: "Section 3: Strings & Formats",
    lessons: [
      {
        id: "str-ops",
        titleAr: "عمليات النصوص (String Operations)",
        titleEn: "String Operations",
        content:
          "النصوص (Strings) في بايثون يمكن إجراء عمليات مختلفة عليها:\n- `+`: لدمج النصوص.\n- `*`: لتكرار النصوص.\n- `[]`: لجلب أحرف معينة أو تقطيع النص بـ `[:]`.\n- `in`, `not in`: للتحقق من وجود حرف أو نص بداخل نص.\n- `%`: لتنسيق النص (Format).",
        code: "str1 = \"Hello Paython\"\nstr2 = \"Paython\"\n\n# التكرار والدمج\nprint(str1 * 3) # تكرار الكلمة ٣ مرات\nprint(str1 + str2) # ادمجهم\n\n# الفهرس (Index) والتقطيع (Slice)\nprint(str1[2]) # L\nprint(str1[2:4]) # llo\n\n# التحقق من الوجود (in و not in)\n# هل الحرف w موجود في Hello\nprint('w' in str1) # False\nprint('e' in str1) # True",
        algorithmAr:
          "1. الدمج (+): جمع نصين معاً.\n2. التكرار (*): تكرار النص لعدد من المرات.\n3. الفهرس (Index): الوصول لأحرف معينة عن طريق الرقم.\n4. التحقق (in): اختبار ما إذا كان الحرف موجود أم لا في النص.",
        lineByLineAr: [
          { line: "str1 * 3", explanation: "تكرار الكلمة 3 مرات." },
          { line: "str1 + str2", explanation: "ادمجهم (دمج النصوص مع بعضها)." },
          { line: "str1[2]", explanation: "الوصول للحرف الموجود بالفهرس 2." },
          {
            line: "print('w' in str1)",
            explanation: "هل الحرف w موجود في Hello؟ النتيجة False.",
          },
        ],
      },
      {
        id: "str-funcs",
        titleAr: "دوال النصوص (Functions)",
        titleEn: "String Functions",
        content:
          "بايثون توفر دوال للمساعدة في التعامل مع النصوص:\n- `len()`: Lenght لمعرفة عدد الحروف.\n- `upper()` / `lower()`: تحويل حالة الأحرف.\n- `split()`: تقسيم النص.\n- `replace(old, new)`: للتبديل بتمرير النص القديم والجديد.\n- `find()` / `index()`: البحث وإرجاع عدد الـ index بتوعها.\n- `isalnum()`: بتتاكد حروف + ارقام و رموز لا.\n- `islower()` / `isupper()`: فحص حالة الأحرف.",
        code: 'str1 = "HEllo"\nstr2 = "Paython"\n\n# len() - Lenght عدد الحروف\nprint(len(str1)) # 5\n\n# upper() / lower()\nprint(str1.upper()) # HEllo (او HELLO)\nprint(str2.lower()) # paython\n\n# split() \nprint(str1.split())\n\n# replace(old, new) - للتبديل\nprint(str1.replace(\'HEllo\', "Hi"))\n\n# find() / index() \nprint(str1.find("Paython"))\nprint(str1.index("Paython")) # بترجع عدد ال index بتوعها\n\n# isalnum() - بتتاكد حروف + ارقام و رموز لا\n\n# islower() / isupper()\nprint(str1.islower())\nprint(str1.isupper())',
        algorithmAr:
          "1. len: Lenght لمعرفة عدد الحروف.\n2. upper / lower: تغيير حالة أحرف النص إما لكبيرة أو صغيرة.\n3. split: تقسيم السلسلة النصية.\n4. replace: للتبديل (old, new).\n5. find و index: أخذ كلمة والبحث عن أول موضع يبدأ منه وإرجاع index.\n6. isalnum : بتتاكد حروف + ارقام و رموز لا.",
        lineByLineAr: [
          { line: "len(str1)", explanation: "عدد الحروف (Lenght)." },
          {
            line: "print(str1.upper())",
            explanation: "تحويل حروف النص لتكون كبيرة.",
          },
          {
            line: "str1.replace('HEllo', \"Hi\")",
            explanation: "(old, new) للتبديل وتغيير الكلمة.",
          },
          {
            line: 'str1.index("Paython")',
            explanation: "بترجع عدد ال index بتوعها.",
          },
        ],
      },
    ],
    problems: [
      {
        id: "p10",
        titleAr: "تنسيق مخرجات النصوص",
        titleEn: "String Formatting",
        descriptionAr:
          "احسب المتوسط الحسابي واطبعه باستخدام طريقة التنسيق % لمخرجات النصوص.",
        descriptionEn:
          "Calculate average and format the output using % method.",
        explanation: "استخدام % لعمل Format.",
        flowchartData: "Start -> s1=10, s2=12 -> Avg=(s1+s2)/2 -> print(Avg) -> End",
        code: 's1 = 10\ns2 = 12\nAvg = (10+12) / 2\nprint("Average = %i" % Avg) # -> 10',
        algorithmAr:
          "1. تسجيل القيمة المبدئيه للمتغيرات s1 و s2.\n2. حساب المتوسط (Avg) عن طريق جمع الرقمين والقسمة على 2.\n3. طباعة النص باستخدام Format %i لتمثيل الرقم الصحيح.",
        lineByLineAr: [
          { line: "Avg = (10+12) / 2", explanation: "حساب المتوسط" },
          {
            line: 'print("Average = %i" % Avg)',
            explanation: "طريقة التنسيق لعرض القيمة كتمثيل %i داخل الجملة.",
          },
        ],
      },
    ],
  },
  {
    id: "sec4",
    title: "Section 4: Lists (القوائم)",
    lessons: [
      {
        id: "list-basics",
        titleAr: "أساسيات القوائم (List Basics)",
        titleEn: "List Basics",
        content:
          "القائمة (List) هي عبارة عن مخزن يحتوي على مجموعة من العناصر (Items) والقيم (Values). تُكتب العناصر داخل أقواس مربعة [] وتُفصل بفاصلة.",
        code: "# إنشاء قائمة من الأرقام الصحيحة\nL = [1, 2, 3]\nprint(L)        # طباعة القائمة بالكامل في نفس السطر\nprint(L[1])     # استدعاء وطباعة العنصر الموجود بالفهرس رقم 1 (وهو الرقم 2)",
        algorithmAr:
          "1. إعداد قائمة (List) في المتغير L وتخزين القيم 1، 2، 3 بداخلها.\n2. استخدام دالة print لعرض المكونات الكاملة للمتغير L بأقواسها المعقوفة.\n3. البحث بداخل القائمة L عن القيمة الموجودة في الخانة رقم 1 (الخانة الثانية فعلياً لأن العد يبدأ من الصفر).\n4. عرض القيمة المُخرجة (2).",
        lineByLineAr: [
          {
            line: "L = [1, 2, 3]",
            explanation: "إنشاء قائمة تحتوي على الأرقام 1 و 2 و 3.",
          },
          {
            line: "print(L[1])",
            explanation: "الوصول للعنصر الثاني (رقم الفهرس 1) وطباعته.",
          },
        ],
      },
      {
        id: "list-ops",
        titleAr: "عمليات القوائم (List Operations)",
        titleEn: "List Operations",
        content:
          "1. الدمج (+): دمج قائمتين معاً.\n2. التكرار (*): تكرار العناصر.\n3. البحث (in): التأكد من وجود عنصر.\n4. الاقتطاع ([:]): جلب جزء محدد من القائمة.",
        code: "# تعريف قائمتين للعمل عليهما\nl1 = [1, 2, 3]\nl2 = [4, 5, 6]\n# دمج القائمتين لتكوين قائمة أطول وأشمل\nprint(l1 + l2)\n# تكرار القائمة الأولى مرتين\nprint(l1 * 2)\n# فحص وجود الرقم 2 داخل القائمة l1 (يُرجع صح أو خطأ)\nprint(2 in l1)\n# استخراج جزء من l2 من البداية وحتى قبل الفهرس 2\nprint(l2[0:2])",
        algorithmAr:
          "1. تعريف قائمة أولى l1 بها 1, 2, 3.\n2. تعريف قائمة ثانية l2 بها 4, 5, 6.\n3. دمج لـ l1 و l2 لينتج قائمة موحدة يتم طباعتها مباشرة.\n4. استخدام التكرار لعرض l1 مرتين متتاليتين.\n5. سؤال النظام عما إذا كان الرقم 2 موجوداً في القائمة l1 وطباعة النتيجة (True).\n6. طلب جزء مقتطع من l2 يمتد من المؤشر 0 وينتهي عند 1 (أي رقم 4 و 5) وطباعتها.",
        lineByLineAr: [
          {
            line: "print(l1 + l2)",
            explanation:
              "دمج القائمتين في قائمة واحدة جديدة تحتوي على كل العناصر.",
          },
          {
            line: "print(l1 * 2)",
            explanation: "تكرار عناصر القائمة l1 مرتين متتاليتين.",
          },
          {
            line: "print(2 in l1)",
            explanation: "سؤال بايثون: هل الرقم 2 موجود في l1؟ ترجع True.",
          },
          {
            line: "print(l2[0:2])",
            explanation:
              "جلب العناصر من البداية حتى ما قبل الفهرس 2 (يعني 0 و 1).",
          },
        ],
      },
      {
        id: "list-update",
        titleAr: "تحديث وحذف العناصر (Update & Delete)",
        titleEn: "Update & Delete",
        content:
          "يمكنك تغيير قيمة أي عنصر عبر الفهرس، أو حذف عنصر باستخدام del. كما يمكنك استبدال نطاق كامل من العناصر.",
        code: 'L = ["A", "B", "C", "D"]\n# تعديل وتحديث عنصر معين\nL[2] = "Z"\n# حذف عنصر باستخدام دالة del المدمجة\ndel L[1]\n# استبدال مقطع كامل (العنصر الأول فقط هنا) بقيم متعددة\nL[0:1] = ["R", 2]\n# عرض القائمة في صورتها النهائية بعد כל التعديلات\nprint(L)',
        algorithmAr:
          "1. إنشاء قائمة L بحروف إنجليزية (A, B, C, D).\n2. الوصول للعنصر الثالث (C) واستبدال قيمته بالحرف (Z).\n3. حذف العنصر الثاني (B) كلياً من القائمة.\n4. تحديد مجال (من الفهرس صفر إلى الفهرس صفر) لتبديل مدخل واحد بمدخلين جديدين وهما 'R' ورقم 2.\n5. طباعة القائمة لظهور شكلها المستهدف والمحدث كلياً.",
        lineByLineAr: [
          {
            line: 'L[2] = "Z"',
            explanation: "تغيير العنصر الثالث (C) ليصبح (Z).",
          },
          {
            line: "del L[1]",
            explanation: "حذف العنصر الثاني من القائمة تماماً.",
          },
          {
            line: 'L[0:1] = ["R", 2]',
            explanation: "استبدال العنصر الأول بقيمتين جديدتين (R و 2).",
          },
        ],
      },
      {
        id: "list-functions",
        titleAr: "دوال القوائم (List Functions)",
        titleEn: "List Functions",
        content:
          "- len(): عدد العناصر.\n- max() / min(): أكبر وأصغر قيمة.\n- sum(): مجموع الأرقام.\n- list(s): تحويل تسلسل (مثل نص) إلى قائمة.",
        code: 'nums = [10, 5, 20]\nprint(len(nums)) # حساب طول القائمة\nprint(max(nums)) # أكبر رقم بالقائمة\nprint(sum(nums)) # جمع قيم عناصر القائمة\n# تحويل اسم لشكل قائمة مفككة من الحروف\nprint(list("Ahmed"))',
        algorithmAr:
          "1. تجهيز قائمة أرقام (nums) تحتوي على 10, 5, 20.\n2. تطبيق الوظيفة len لمعرفة وتأكيد عدد محتوياتها الرقمية.\n3. البحث عن الرقم الكبر من خلال الدالة الهندسية max وطباعته.\n4. جمع كافة العناصر بداخله ليخرج ناتج الجمع (35).\n5. استلام حزمة نصية 'Ahmed' وإجبار البرنامج على تقطيعها لتحويلها لمكونات قائمة عبر دالة (list).",
        lineByLineAr: [
          {
            line: "print(len(nums))",
            explanation: "إظهار عدد العناصر الموجودة في القائمة (3 عناصر).",
          },
          {
            line: "print(sum(nums))",
            explanation: "جمع كل الأرقام داخل القائمة (10+5+20 = 35).",
          },
          {
            line: 'print(list("Ahmed"))',
            explanation:
              "تحويل حروف الاسم إلى قائمة منفصلة ['A', 'h', 'm', 'e', 'd'].",
          },
        ],
      },
      {
        id: "list-methods",
        titleAr: "طرق إدارة القوائم (Methods)",
        titleEn: "Common Methods",
        content:
          "توفر بايثون طرقاً قوية لإدارة البيانات:\n- append(): إضافة للنهاية.\n- insert(): إضافة في مكان محدد.\n- remove(): حذف قيمة معينة.\n- sort() / sorted(): ترتيب العناصر.\n- reverse() / deuse: عكس الترتيب.\n- pop(): حذف عنصر عبر مكانه.\n- clear(): تفريغ القائمة تماماً.",
        code: 'L = [1, 2, 2, 3]\nL.append(4) # يضيف 4 لآخر القائمة\nL.insert(1, "A") # يضيف الحرف A في الفهرس 1 \nL.remove(2) # يحذف أول رقم 2 يصادفه (من اليسار لليمين)\nL.pop(0) # يحذف العنصر الموجود بالفهرس 0\nprint(L.count(2)) # يحسب كم مرة تواجد الرقم 2 فى القائمة\nL.clear() # يمسح القائمة تماما ولا يترك بها شيئا',
        algorithmAr:
          "1. بناء قائمة بأرقام (1, 2, 2, 3).\n2. إدراج رقم جديد في نهايتها باستخدام الوظيفة append (رقم 4).\n3. حشر القيمة 'A' بين العناصر لتقع في الفهرس رقم 1 باستخدام insert.\n4. البحث التلقائي عن أول تواجد لرقم 2 باستخدام remove وإلغاؤه.\n5. نزع العنصر الموضوع بأول القائمة نهائياً (مؤشر صفر) باستخدام pop.\n6. حساب عدد مرات التكرار للقيمة 2 باستخدام وظيفة count وطباعتها.\n7. تدمير كل محتويات القائمة وتفريغها بواسطة clear.",
        lineByLineAr: [
          { line: "L.append(4)", explanation: "إضافة الرقم 4 في آخر القائمة." },
          {
            line: 'L.insert(1, "A")',
            explanation: "إدخال حرف 'A' في الفهرس رقم 1 (المكان الثاني).",
          },
          {
            line: "L.remove(2)",
            explanation: "البحث عن أول رقم 2 في القائمة وحذفه.",
          },
          {
            line: "L.pop(0)",
            explanation: "حذف العنصر الأول من القائمة تماماً.",
          },
          {
            line: "L.count(2)",
            explanation: "عد كم مرة تكرر الرقم 2 داخل القائمة.",
          },
        ],
      },
    ],
    problems: [
      {
        id: "p11",
        titleAr: "إدارة درجات الطلاب",
        titleEn: "Manage Grades List",
        descriptionAr:
          "اطلب 3 درجات من المستخدم، خزنهم في قائمة، ثم اطبع المجموع، أعلى درجة، وأرتبهم تصاعدياً.",
        descriptionEn:
          "Input 3 grades, store in a list, print sum, max, and sorted list.",
        explanation:
          "نستخدم حلقة أو مدخلات منفصلة مع append، ثم نطبق الدوال الإحصائية.",
        code: '# إنشاء قائمة فارغة لتلقي التسجيلات\ngrades = []\n# طلب الدرجات من المستخدم وتحويلها لأرقام صحيحة مباشرة\ng1 = int(input("G1: "))\ng2 = int(input("G2: "))\ng3 = int(input("G3: "))\n\n# إضافة الدرجات واحدة تلو الأخرى للقائمة الجاهزة\ngrades.append(g1)\ngrades.append(g2)\ngrades.append(g3)\n\n# عرض النتائج الإحصائية باستخدام دوال مدمجة\nprint("Sum =", sum(grades)) # المجموع\nprint("Max =", max(grades)) # القيمة العظمى\nprint("Sorted =", sorted(grades)) # الفرز التصاعدي',
        algorithmAr:
          "1. إقرار متغير باسم grades من نوع قائمة فارغة.\n2. تحفيز النظام لسؤال المستخدم عن ثلاث أرقام بشكل تسلسلي وتخزينها في متغيرات.\n3. إدراج هذه المتغيرات (g1 و g2 و g3) تباعاً داخل القائمة عن طريق append.\n4. استخدام أمر طباعة لدمج وعرض مجموع الدرجات (sum).\n5. استخدام أمر طباعة آخر للبحث وتحديد رقم الدرجة الكبيرة وعرضه (max).\n6. تشكيل القائمة بشكل مرتب تصاعدياً بشكل صوري مؤقت (sorted) وعرضه للمستخدم.",
        flowchartData:
          "Start -> Input Grades -> Add to List -> Calc Sum/Max -> Sort List -> Print -> End",
        lineByLineAr: [
          {
            line: "grades = []",
            explanation: "بداية بإنشاء قائمة فارغة لتخزين الدرجات لاحقاً.",
          },
          {
            line: "grades.append(g1)",
            explanation: "إضافة الدرجة الأولى المدخلة إلى القائمة.",
          },
          {
            line: "print(sorted(grades))",
            explanation:
              "عرض الدرجات مرتبة من الأصغير للأكبر دون تعديل القائمة الأصلية.",
          },
        ],
      },
    ],
  },
  {
    id: "sec5",
    title: "Section 5: Tuple in Python",
    lessons: [
      {
        id: "tuple-basics",
        titleAr: "أساسيات التوبل (Tuple)",
        titleEn: "Tuple Basics",
        content:
          "Tuple in Python\nTuple is: Sequence of immutable elements or items\nVar = (Value 1, Value 2, Value 3)\n\nTuple indexing:\n|banna | apple | Mango | Tomato | berry|\nMyTuple = ('banna', 'apple', 'Mango', 'Tomato', 'berry')\n0 1 2 3 4\nMyTuple[0] = banna",
        code: 't1 = ()\nt2 = (123, "Python", 3, 7)\nt3 = (1, 2, 3, 4, 5, 6)\n\nPrint(t1) ~~> ()\nPrint(t2) ~~> (123, "Python", 3, 7)\nPrint(t3) ~~> (1, 2, 3, 4, 5, 6)',
        algorithmAr: "Tuple is Sequence of immutable elements or items.",
        lineByLineAr: [],
      },
      {
        id: "tuple-operators",
        titleAr: "معاملات التوبل (Tuple Operators)",
        titleEn: "Tuple Operators",
        content:
          "* Tuple operators *\nExample 1:\nnum = (1, 2, 3, 4, 5)\nLang = ('Python', 'c', 'Java', 'php')",
        code: "num = (1, 2, 3, 4, 5)\nLang = ('Python', 'c', 'Java', 'php')\n\n1- Print(num + Lang) ~~> (1, 2, 3, 4, 5, 'Python', 'c', 'Java', 'php')\n2- Print(Lang[2]) ~~> Java\n3- Print(num * 2) ~~> (1, 2, 3, 4, 5, 1, 2, 3, 4, 5)",
        algorithmAr:
          "استخدام معاملات الجمع للدمج، الضرب للتكرار، والأقواس المربعة للوصول (Indexing).",
        lineByLineAr: [],
      },
      {
        id: "tuple-functions",
        titleAr: "دوال التوبل (Tuple Functions / Methods)",
        titleEn: "Tuple Functions",
        content:
          "* Tuple Functions / Methods in python *\n1. Len(): Length of Tuple\n2. Max(): Max(Tuple)\n3. Min(): Min(Tuple)\n4. Sum(): Sum(tuple)\n5. Tuple(): Tuple(Sequence)",
        code: "# Len():\nnum = (1, 2, 3, 4, 5, 6)\nPrint(\"Length of Tuple = len(num)\") ~~> 6\n\n# Max(): ~~> Max(Tuple)\nt1 = (1, 2, 3, 4, 5, 6)\nt2 = ('Java', 'c', 'Python', 'ccp')\nPrint Max of Tuple t1, Max(t1) ~~> 6\nPrint Max of Tuple t2, Max(t2) ~~> Python\n\n# Min() ~~> Min(Tuple)\nt1 = (1, 2, 3, 4, 5, 6)\nt2 = ('Java', 'c', 'Python', 'cpp')\nPrint Min(t1) ~~> 1\nPrint Min(t2) ~~> c\n\n# Sum() ~~> Sum(tuple)\nt1 = (1, 2, 3, 4, 5, 6)\nPrint Sum(t1) ~~> 21\n\n# Tuple() ~~> Tuple(Sequence)\nStr = \"Python\"\nt1 = Tuple(str)\nPrint(t1) ~~> ('P', 'y', 't', 'h', 'o', 'n')",
        algorithmAr:
          "دوال عامة تطبق على التوبل للحصول على الطول (Len)، القيمة الأكبر (Max)، الأصغر (Min)، والمجموع (Sum)، أو تحويل تسلسل إلى توبل (Tuple).",
        lineByLineAr: [],
      },
      {
        id: "tuple-methods",
        titleAr: "استكمال دوال التوبل (Count, Sorted, Index)",
        titleEn: "Tuple Methods",
        content:
          "* Count() ~~> Tuple.count(item)\n* Sorted() ~~> Sorted(tuple)\n* index() ~~> Tuple.index(item, Start, end)",
        code: "# Count() ~~> Tuple.count(item)\nnum = (1, 2, 3, 4, 5, 2, 2, 1, 4, 5, 8) # (بيطبع عدد تكرار رقم 2)\nCount = num.count(2)\nPrint(\"Count of 2 is\", Count) ~~> 3\n\n# Sorted() -> Sorted(tuple)\nnum = (1, 2, 3, 4, 6, 5)\nLang = ('Java', 'c', 'Python', 'cpp')\nPrint(Sorted(num)) ~~> (1, 2, 3, 4, 5, 6)\nPrint(Sorted(Lang)) ~~> ('c', 'cpp', 'Java', 'Python')\n\n# index() ~~> Tuple.index(item, Start, end)\nt1 = ('P', 'y', 't', 'o', 'n', 'P') # بيطبع الـ index بتاع الحرف\n# 0 1 2 3 4 5\nPrint(t1.index('t')) ~~> 2\nPrint(t1.index('P')) ~~> 0\nPrint(t1.index('P', 3, 10)) ~~> 5\nPrint(t1.index('Z')) ~~> Value Error",
        algorithmAr:
          "استخدام Count للعد، Sorted للترتيب، و index لمعرفة مكان تطابق العنصر.",
        lineByLineAr: [],
      },
    ],
    problems: [],
  },
  {
    id: "sec6",
    title: "Section 6: Object Oriented Programming (OOP)",
    lessons: [
      {
        id: "oop-intro",
        titleAr: "مقدمة (OOP)",
        titleEn: "OOP Intro",
        content:
          "Section 6: object oriented programming [OOP]\n\nWe structure code using objective objects.\n\nEach object Contains:\n-> Data [Attributes]\n-> Behavior [Methods]\n\nwhy oop:\n1. Reusability\n2. organization\n3. Maintainability\n4. Data security.\n\n* Main idea: بدل ما نكتب كود عشوائى بنعمل class اللى بيمثل Templete وبنعمل object وهو نسخة من class.\n\n* Core Concepts:\nClass ~~> Blue Print or templete for creating objects\nobject ~~> An instance of class",
        code: "# Class example\nclass student:\n    Pass\n\n# Object example\nS1 = student()",
        algorithmAr:
          "1. هيكلة الكود باستخدام Objects تحتوي على Data و Behavior.\n2. إنشاء صنف Class واستنساخ Object منه.",
        lineByLineAr: [],
      },
      {
        id: "attributes-methods",
        titleAr: "السمات والوظائف (Attributes & Methods)",
        titleEn: "Attributes & Methods",
        content:
          "Attributes ~~> Variables belong to object\nMethods ~~> Functions defined in class.",
        code: '# Attributes مثال\nclass student:\n    def __init__(self, N, A):\n        self.N = Name\n        self.A = Age\n\nS1 = student("Esraa", 30)\nPrint(S1.N)\nPrint(S1.A)\n\n# Methods مثال\nclass student:\n    def __init__(self, N):\n        self.N = Name\n    def say_hello(self):\n        Print("Hello", self.N)\n\nS1 = student("Esraa")\nS1.say_hello()',
        algorithmAr:
          "1. المتغيرات بداخل الأوبجكت تسمى Attributes.\n2. الوظائف وتسمى Methods تعرّف بداخل الـ Class.",
        lineByLineAr: [],
      },
      {
        id: "oop-principles-inheritance-encapsulation",
        titleAr: "مبادئ ( Inheritance & Encapsulation )",
        titleEn: "OOP Principles",
        content:
          'OOP Principles:\n1. Inheritance: class inheritance from another class.\n2. Encapsulation: Hiding internal data & restricting direct acess.\n\n1) Inheritance:\nclass Animal:\n    def Speak(self):\n        Print("Animal Speaks")\nclass Dog:\n    Pass\n\n2) Encapsulation:\nclass Bank:\n    def __init__(self):\n        self._balance = 1000\n    def get_balance(self):\n        return self._balance\nNote: ممنوع الوصول إليه بطريقة مباشره لكن من خلال Function (Private variable)',
        code: '# 1) Inheritance:\nclass Animal:\n    def Speak(self):\n        Print("Animal Speaks")\n\nclass Dog:\n    Pass\n\nd = Dog()\nd.Speak()\n\n# 2) Encapsulation:\nclass Bank:\n    def __init__(self):\n        self._balance = 1000\n    def get_balance(self):\n        return self._balance\n\nb = Bank()\nPrint(b.get_balance())',
        algorithmAr:
          "الوراثة (Inheritance) لاستخدام وظائف من فئات أخرى.\nالتغليف (Encapsulation) لإخفاء وتغطية الرصيد.",
        lineByLineAr: [],
      },
      {
        id: "oop-principles-polymorphism-abstraction",
        titleAr: "مبادئ ( Polymorphism & Abstraction )",
        titleEn: "OOP Principles",
        content:
          "OOP Principles:\n3. Polymorphism: Same Method name with different behavior.\n4. Abstraction: Showing only essential features & hiding complexity.\n\nNote -> abc = Abstract Basic classes مكتبة برمجة فى Python.",
        code: '# 3) Polymorphism:\nclass Cat:\n    def Sound(self):\n        Print("Meow")\nclass dog:\n    def Sound(self):\n        Print("Haw")\n\nc = Cat()\nd = dog()\nc.Sound(); d.Sound()\n\n# 4) Abstraction:\nfrom abc import ABC, abstract method.\nclass Shape(ABC):\n    @abstracte Method\n    def draw(self):\n        Pass\n\nclass cricle(Shape):\n    def draw(self):\n        Print("Draw circle")\n\nc1 = cricle()\nc1.draw()',
        algorithmAr: "تعددية الأشكال (Polymorphism) والتجريد (Abstraction).",
        lineByLineAr: [],
      },
    ],
    problems: [],
  },
  {
    id: "sec7",
    title: "Section 7: GUI (Graphical User Interfaces)",
    lessons: [
      {
        id: "gui-intro",
        titleAr: "مقدمة واجهات المستخدم (GUI)",
        titleEn: "GUI Introduction",
        content:
          "الـ GUI (Graphical User Interfaces) توفر العديد من الأدوات الأخرى التي يمكن للمستخدم استخدامها للتفاعل مع تطبيقك.\n\nApplication has button, windows.\nمثال جيد (Good example): متصفح الويب (web browser) يحتوي على أزرار (button)، علامات تبويب (tabs)، ونافذة رئيسية (Main window) بتم فيها تحميل جميع المحتويات.\n\nمكونات الواجهة تُعرف باسم (GUI Component are Know: widgest) وهي 'أدوات للتفاعل'.\n\nبايثون (Python) بتوفر خيارات متعددة لتطوير الـ GUI.\nالطريقة الأكثر شيوعاً هي Tkinter لأنها سهلة ومش محتاج تحميل (بتيجي مع بايثون).\n- تطوير تطبيقات الـ Desktop ليس مهمة معقدة.\n\nخطوات عمل تطبيق Tkinter الأساسية:\nعشان نعمل أي تطبيق بنمشى على أربع خطوات بالترتيب:\n1. Import Tkinter module: الاستيراد، يستدعى مكتبة فى الكود بتاعك.\n2. Create Main application window: ننشئ النافذه الاساسيه اللى بيظهر فيها كل حاجة.\n3. add Widget like, labels Frame: إضافة الأدوات.\n4. Call Main event loop: التشغيل، يستدعى مكتبة اسمها (Main loop).",
        code: "",
        algorithmAr:
          "1. استيراد المكتبة (Import Tkinter module).\n2. إنشاء النافذة الأساسية (Create Main application window).\n3. إضافة الأدوات (add Widget).\n4. التشغيل (Call Main event loop).",
        lineByLineAr: [],
      },
      {
        id: "tkinter-steps-code",
        titleAr: "إنشاء نافذة Tkinter الأساسية",
        titleEn: "Create Main Tkinter Window",
        content:
          "لتطبيق الخطوات الأربعة لإنشاء نافذة باستخدام Tkinter:\n1. import TKinter\n2. Top = TK() (دي اسم المتغيير)\n3. add Component or widget (هنحط البيانات دي هنا الادوات)\n4. Top.Main loop()",
        code: 'import tkinter\n\n# إنشاء متغيير\nTop = tkinter.Tk()\n# تغيير عنوان النافذه\nTop.title("WelCom")\n# حجم الـ x, y\nTop.geometry("400x300")\n# بشغل البرنامج\nTop.mainloop()',
        algorithmAr:
          "1. استدعى مكتبه (import Tkinter)\n2. تشييد النافذة (Top = Tk())\n3. تغيير عنوان النافذة (title)\n4. تحديد الحجم (geometry)\n5. تشغيل البرنامج (mainloop)",
        lineByLineAr: [
          { line: "import tkinter", explanation: "استدعى مكتبه" },
          {
            line: "Top = tkinter.Tk()",
            explanation: "انشاء متغيير (النافذة الأساسية)",
          },
          { line: 'Top.title("WelCom")', explanation: "تغيير عنوان النافذه" },
          {
            line: 'Top.geometry("400x300")',
            explanation: "حجم الـ x, y (مساحة 300 في 400)",
          },
          { line: "Top.mainloop()", explanation: "بشغل البرنامج" },
        ],
      },
      {
        id: "pack-method",
        titleAr: "طريقة Pack لتنظيم المكونات",
        titleEn: "Pack Method",
        content:
          "(Tkinter Method) دي طريقه بتنظم المكونات والادوات:\n\n1- Pack Method:\nwidget.pack(option)\nتمثل الجانب اللي سيتم وضع الاداه فيه قد يكون: Side\n- left\n- Right\n- top\n- bottom",
        code: 'from tkinter import *\n\n# إنشاء نافذة\nTop = Tk()\n# تحديد الحجم\nTop.geometry("300x400")\n# بيعمل زرار جوه النافذه\nbtn1 = Button(Top, text="login")\n# احط العنصر شمال\nbtn1.pack(side=LEFT)\n\n# تشغيل البرنامج\nTop.mainloop()',
        algorithmAr:
          "1. استيراد المكتبة.\n2. إنشاء النافذة Top.\n3. تعيين الحجم 300 في 400.\n4. إنشاء الزر btn1 وربطه بالنافذة Top واسمه login.\n5. وضع الزر في جهة اليسار باستخدام pack و side=LEFT.\n6. تشغيل الحدث باستخدام mainloop.",
        lineByLineAr: [
          {
            line: 'btn1 = Button(Top, text="login")',
            explanation: "بيعمل زرار جوه النافذه",
          },
          { line: "btn1.pack(side=LEFT)", explanation: "احط العنصر شمال" },
        ],
      },
      {
        id: "grid-method",
        titleAr: "طريقة Grid لتنظيم المكونات",
        titleEn: "Grid Method",
        content:
          "2- grid() Method:\nتستخدم لتنظيم الادوات في شكل جدول منظمه بشكل اكثر.\nwidget.grid(option)\n- Column: رقم العمود (الايسر يكون رقمه 0).\n- Padx, Pady: عدد المسافات او البيكسلات.\n- row: رقم الصف (العلوى يكون رقمه 0).",
        code: 'from tkinter import *\n\n# انشاء نافذه\nParent = Tk()\n# يحدد عنوان للنافذه\nParent.title("Student")\n# ليحدد حجمها\nParent.geometry("300x400")\n\n# بيعمل lable مكتوب فيه name\nname = Label(Parent, text="name")\n# يحدد مكانه\nname.grid(row=0, column=0, pady=10, padx=5)\n\n# بيعمل مربع text box للمستخدم يكتب فيه اسمه\ne1 = Entry(Parent)\n# يحدد مكانه\ne1.grid(row=0, column=1)\n\n# بيعمل lable مكتوب فيه رقم التسجيل\nregno = Label(Parent, text="Regd No:")\n# يحدد مكانه\nregno.grid(row=1, column=0, pady=10, padx=5)\n\n# بيعمل textbox\ne2 = Entry(Parent)\n# يحدد مكانه\ne2.grid(row=1, column=1)\n\n# زرار\nbtn = Button(Parent, text="Submit")\n# يحدد مكانه بصف الثالث العمود الثانى\nbtn.grid(row=3, column=1)\n\n# يشغل البرنامج\nParent.mainloop()',
        algorithmAr:
          "1. استدعاء مكتبة tkinter وإنشاء نافذة Parent.\n2. تحديد العنوان Student وتحديد الأبعاد 300 في 400.\n3. إنشاء نص Label للكلمة name وتحديد مكانه عبر grid بإعطائه مسافات حوله (pady=10, padx=5).\n4. عمل صندوق إدخال Entry تحت اسم e1 بجوار النص.\n5. عمل نص Label للكلمة Regd No وتحديد مكانه تحتهما باستخدام row=1.\n6. إضافة مربع إدخال e2 ليكون بجانب Regd No.\n7. إنشاء الزر Submit وتحديد مكانه في الصف 3 (العمود الثاني).\n8. تشغيل الحدث عبر mainloop().",
        lineByLineAr: [
          { line: "Parent = Tk()", explanation: "انشاء نافذه" },
          {
            line: 'Parent.title("Student")',
            explanation: "يحدد عنوان للنافذه",
          },
          { line: 'Parent.geometry("300x400")', explanation: "ليحدد حجمها" },
          {
            line: 'name = Label(Parent, text="name")',
            explanation: "بيعمل lable مكتوب فيه name",
          },
          {
            line: "name.grid(row=0, column=0, pady=10, padx=5)",
            explanation: "يحدد مكانه",
          },
          {
            line: "e1 = Entry(Parent)",
            explanation: "text box بيعمل مربع للمستخدم يكتب فيه اسمه",
          },
          {
            line: 'regno = Label(Parent, text="Regd No:")',
            explanation: "بيعمل lable مكتوب فيه رقم التسجيل",
          },
          { line: 'btn = Button(Parent, text="Submit")', explanation: "زرار" },
          {
            line: "btn.grid(row=3, column=1)",
            explanation: "يحدد مكانه بصف الثالث العمود الثانى",
          },
          { line: "Parent.mainloop()", explanation: "يشغل البرنامج" },
        ],
      },
      {
        id: "place-method-widgets",
        titleAr: "طريقة Place والأدوات المتعددة",
        titleEn: "Place Method & Widgets",
        content:
          "3- Place (Method):\nطريقه بتنظيم الـ Widget علي x, y بالاحداثيات.\nwidget.place(x,y)\nبتميز للمساحة الافقية والرأسية.\n\nالأدوات الإضافية الشائعة (Widgets) كما ذكرت في الملخص:\n- Check button: يحدد اختيار من الاختيارات المتعدده.\n- Entry: يسمح للـ User بادخال سطر واحد.\n- List Box: يعرض عناصر للقائمه ويمكن لـ user اختيار عنصر واحد او اكثر.\n- Radio button: يحدد اختيار واحد من بين الاختيارات متعدده.\n- Text: يسمح للـ user ادخال سطر واحد او اكثر.",
        code: 'from tkinter import *\n\nParent = Tk()\nParent.title("Student")\nParent.geometry("300x200")\n\n# اسم الزر name\nname = Label(Parent, text="name")\n# مكانه\nname.place(x=50, y=50)\n\n# text box\ne1 = Entry(Parent)\n# مكانه يبعد 50\ne1.place(x=100, y=50)\n\n# نص باسم\nregno = Label(Parent, text="Regd No:")\n# مكانة\nregno.place(x=50, y=100)\n\n# text box\ne2 = Entry(Parent)\n# مكانه\ne2.place(x=120, y=100)\n\n# يشغل البرنامج معاك\nParent.mainloop()',
        algorithmAr:
          "1. إنشاء نافذة وتحديد الحجم (300*200) والعنوان (Student).\n2. إنشاء عنوان Label وتحديد الإحداثيات باستخدام دالة place في النقطة 50 أفقية و50 رأسية (x=50, y=50).\n3. وضع مربع إدخال النص Entry بإحداثي (x=100, y=50) ليبعد 50 عن الاسم ويكون بجواره.\n4. رسم نص Regd No: عند إحداثيات (x=50, y=100) ليقع تحتهما.\n5. والمربع المخصص لها يتم إزاحته قليلاً لليمين (x=120) لتوفير المساحة المطلوبة وإبعاده عن النص.\n6. تشغيل دورة الإبقاء (mainloop).",
        lineByLineAr: [
          {
            line: "name.place(x=50, y=50)",
            explanation: "مكانه باستخدام تحديد الاحداثيات (x, y)",
          },
          {
            line: "e1.place(x=100, y=50)",
            explanation: "مكانه يبعد 50 علي محور x لتجنب التداخل",
          },
        ],
      },
    ],
    problems: [],
  },
];
