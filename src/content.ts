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
        content: "بايثون هي لغة برمجة عالية المستوى (High-level)، تتميز بأنها سهلة التعلم (Easy) ومفتوحة المصدر (Free). تعتمد بايثون على نظام 'Interpreted' مما يعني أن الكود يُنفذ سطراً بسطر.\n\nمن مميزاتها:\n- سهولة الكتابة والقراءة مقارنة بـ C++ و Java.\n- لغة مفسرة (Interpreted) تجعل التطوير أسرع.\n- سهولة التحويل من لغات أخرى مثل Java و C++ إليها.",
        code: "print('Hello World')",
        lineByLineAr: [
          { line: "print('Hello World')", explanation: "دالة الطباعة تقوم بإظهار النص 'Hello World' على الشاشة." }
        ]
      },
      {
        id: "comments",
        titleAr: "التعليقات (Comments)",
        titleEn: "Comments",
        content: "تُستخدم التعليقات لشرح الكود ولا يتم تنفيذها من قبل المترجم.\n\n1. **تعليق سطر واحد (Single line):** يبدأ بعلامة الهاشتاج (#).\n2. **تعليق متعدد الأسطر (Multi-line):** يُوضع بين ثلاث علامات تنصيص (\"\"\" كود هنا \"\"\").",
        code: "# Single line: We print Hello\nprint(\"Hello\")\n\n\"\"\"\nMulti-line comment:\nWe print Hello\n\"\"\"\nprint(\"Hello\")",
        lineByLineAr: [
          { line: "# Single line...", explanation: "تعليق يتم تجاهله من قبل بايثون، يُستخدم لتوضيح الغرض من السطر التالي." },
          { line: "print(\"Hello\")", explanation: "طباعة كلمة 'Hello' البسيطة." },
          { line: '""" ... """', explanation: "تعليق متعدد الأسطر يُستخدم لكتابة فقرات شرح طويلة داخل الكود." }
        ]
      },
      {
        id: "variables",
        titleAr: "المتغيرات (Variables)",
        titleEn: "Variables",
        content: "المتغير هو مكان في الذاكرة لتخزين القيمة (Variable = Value). بايثون هي لغة 'Loosely Typed' مما يعني أنك لا تحتاج لتحديد نوع المتغير يدوياً، بايثون تفهم النوع تلقائياً من القيمة المسندة.",
        code: "x = 10      # int (صحيح)\ny = \"Python\" # str (نصي)\nz = 10.2    # float (عشري)",
        lineByLineAr: [
          { line: "x = 10", explanation: "تخزين الرقم الصحيح 10 في متغير اسمه x." },
          { line: "y = \"Python\"", explanation: "تخزين النص 'Python' في متغير اسمه y." },
          { line: "z = 10.2", explanation: "تخزين رقم عشري (Float) 10.2 في متغير اسمه z." }
        ]
      },
      {
        id: "casting",
        titleAr: "تحويل الأنواع (Casting)",
        titleEn: "Type Casting",
        content: "يمكننا تحويل قيمة من نوع لآخر يدوياً باستخدام دوال التحويل مثل int(), float(), str().\nمثلاً تحويل رقم عشري لرقم صحيح يتجاهل الكسر.",
        code: "x = int(10)\ny = int(10.2)\nprint(y) # Output: 10",
        lineByLineAr: [
          { line: "x = int(10)", explanation: "بما أن القيمة 10 هي صحيح فسيظل المتغير x من النوع int." },
          { line: "y = int(10.2)", explanation: "تحويل الرقم 10.2 لعنصر صحيح، مما يعني حذف الرقم العشري ليصبح 10." },
          { line: "print(y)", explanation: "عرض النتيجة المحولة (10)." }
        ]
      },
      {
        id: "advanced-assignment",
        titleAr: "إسناد القيم المتعددة",
        titleEn: "Multi-Variable Assignment",
        content: "بايثون تسمح بإسناد قيم لعدة متغيرات في سطر واحد بطريقتين:\n\n1. **Multi-Multi:** إسناد عدة قيم لعدة متغيرات بالترتيب.\n2. **Multi-Single:** إسناد نفس القيمة لكل المتغيرات.",
        code: "x, y, z = 10, 20, 30\na = b = c = 50",
        lineByLineAr: [
          { line: "x, y, z = 10, 20, 30", explanation: "إسناد 10 لـ x، و 20 لـ y، و 30 لـ z في سطر واحد." },
          { line: "a = b = c = 50", explanation: "إسناد القيمة 50 دفعة واحدة لجميع المتغيرات a و b و c." }
        ]
      },
      {
        id: "functions",
        titleAr: "الدوال والعمليات (Functions & Ops)",
        titleEn: "Functions & Operations",
        content: "أهم الدوال الأساسية للتعامل مع البيانات والمدخلات:\n- `print()`: لعرض المخرجات.\n- `input()`: لاستلام بيانات نصية من المستخدم.\n- `type()`: للتحقق من نوع البيانات المخزنة.",
        code: "x = 10\ny = 20\nprint(\"the Sum =\", x + y)\n\nz = input(\"Enter: \")\nprint(type(x))",
        lineByLineAr: [
          { line: "print(\"the Sum =\", x + y)", explanation: "طباعة نص ثابت بجانبه ناتج عملية الجمع (10+20 = 30)." },
          { line: "input(\"Enter: \")", explanation: "تنتظر هذه الدالة من المستخدم كتابة شيء وتخزنه كنص." },
          { line: "type(x)", explanation: "تُرجع نوع بيانات المتغير x (مثلاً <class 'int'>)." }
        ]
      }
    ],
    problems: [
      {
        id: "p1",
        titleAr: "طباعة الاسم والعمر",
        titleEn: "Print Name & Age",
        descriptionAr: "اكتب برنامجاً يقوم بطباعة اسمك وعمرك بطريقتين: مباشرة أو بالمدخلات.",
        descriptionEn: "Print your name and age directly or via user input.",
        explanation: "نستخدم print للثوابت و input للحصول على بيانات ديناميكية من المستخدم.",
        code: "print(\"Doha Elsharkawy\")\nprint(\"22\")\n\nname = input(\"the name: \")\nage = input(\"the age: \")\nprint(name, age)",
        flowchartData: "Start -> Input Name -> Input Age -> Print Both -> End",
        lineByLineAr: [
          { line: "print(\"Doha Elsharkawy\")", explanation: "طباعة الاسم مباشرة كنص ثابت." },
          { line: "name = input(\"the name: \")", explanation: "يطلب البرنامج من المستخدم ادخال الاسم ويخزنه في name." },
          { line: "print(name, age)", explanation: "طباعة المتغيرين name و age معاً." }
        ]
      },
      {
        id: "p2",
        titleAr: "مساحة المستطيل",
        titleEn: "Area of Rectangle",
        descriptionAr: "احسب مساحة المستطيل بمعلومية الطول (L=30) والعرض (W=40).",
        descriptionEn: "Calculate rectangle area using L=30 and W=40.",
        explanation: "القانون: المساحة = الطول × العرض.",
        code: "l = 30\nw = 40\nArea = l * w\nprint(\"the Area =\", Area)",
        flowchartData: "Start -> Set L=30, W=40 -> Area = L * W -> Print Area -> End",
        lineByLineAr: [
          { line: "l = 30", explanation: "تحديد قيمة الطول بـ 30." },
          { line: "w = 40", explanation: "تحديد قيمة العرض بـ 40." },
          { line: "Area = l * w", explanation: "حساب المساحة بضرب الطول في العرض." },
          { line: "print(\"the Area =\", Area)", explanation: "طباعة الرقم النهائي للمساحة." }
        ]
      },
      {
        id: "p3",
        titleAr: "متوسط 3 أرقام",
        titleEn: "Average of 3 Numbers",
        descriptionAr: "احسب المتوسط الحسابي لثلاثة أرقام مدخلة من المستخدم.",
        descriptionEn: "Calculate the average of 3 numbers from input.",
        explanation: "المتوسط = (مجموع الأرقام) / 3.",
        code: "x = int(input(\"first number: \"))\ny = int(input(\"sec. number: \"))\nz = int(input(\"third number: \"))\ns = (x + y + z) / 3\nprint(\"Avg =\", s)",
        flowchartData: "Start -> Input X, Y, Z -> (X+Y+Z)/3 -> Print Result -> End",
        lineByLineAr: [
          { line: "x = int(input(...))", explanation: "نقرأ المدخل ونحوله لرقم صحيح (int) لأن الـ input بطبعها نصية." },
          { line: "s = (x + y + z) / 3", explanation: "جمع الثلاث أرقام أولاً داخل الأقواس ثم القسمة على عددهم 3." },
          { line: "print(\"Avg =\", s)", explanation: "إظهار قيمة المتوسط الحسابي." }
        ]
      }
    ]
  },
  {
    id: "sec2",
    title: "Section 2: Control Flow & Loops",
    lessons: [
      {
        id: "conditionals",
        titleAr: "الجمل الشرطية (Conditional Statements)",
        titleEn: "Conditional Statements",
        content: "تُستخدم الجمل الشرطية لاتخاذ القرارات في البرنامج بناءً على تحقق شرط معين.\n\n1. **if statement:** للتنفيذ في حالة تحقق الشرط فقط.\n2. **if-else:** للتنفيذ في الحالتين (صح أو خطأ).\n3. **if-elif-else:** لفحص عدة شروط متتالية واختيار واحد فقط.",
        code: "a = 5\nb = 3\n\nif a > b:\n    print(\"true\")\nelif b > a:\n    print(\"false\")\nelse:\n    print(\"equal\")",
        lineByLineAr: [
          { line: "if a > b:", explanation: "يفحص البرنامج هل قيمة a أكبر من b؟" },
          { line: "print(\"true\")", explanation: "إذا كان الشرط الأول صحيحاً، يطبع كلمة true." },
          { line: "elif b > a:", explanation: "إذا لم يتحقق الأول، يفحص هل b هي الأكبر؟" },
          { line: "else:", explanation: "إذا فشلت كل الشروط السابقة (أي أنهما متساويان)، ينفذ هذا السطر." }
        ]
      },
      {
        id: "loops",
        titleAr: "حلقات التكرار (Loop Statements)",
        titleEn: "Loops",
        content: "تُستخدم الحلقات لتكرار تنفيذ كود معين لعدد من المرات.\n\n1. **for loop:** تُستخدم للتكرار عبر تسلسل (مثل range) وتعتمد على التكرار (Iteration).\n2. **while loop:** تُستخدم للتكرار طالما أن الشرط صحيح وتعتمد على الحالة (Condition).",
        code: "# For Loop\nfor i in range(1, 6):\n    print(i)\n\n# While Loop\ni = 1\nwhile i <= 5:\n    print(i)\n    i += 1",
        lineByLineAr: [
          { line: "for i in range(1, 6):", explanation: "حلقة تبدأ من 1 وتنتهي عند 5 (الرقم 6 لا يدخل)." },
          { line: "while i <= 5:", explanation: "استمر في التكرار طالما أن قيمة i أصغر من أو تساوي 5." },
          { line: "i += 1", explanation: "زيادة قيمة العداد i بواحد في كل دورة لتجنب الحلقة اللانهائية." }
        ]
      },
      {
        id: "jump",
        titleAr: "جمل القفز (Jump Statements)",
        titleEn: "Jump Statements",
        content: "تستخدم للتحكم في مسار الحلقة:\n- **Continue:** تقوم بعمل (Skip) للدورة الحالية فقط وتنتقل للدورة التالية.\n- **Break:** تقوم بعمل (Stop) للحلقة تماماً وتخرج منها.",
        code: "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
        lineByLineAr: [
          { line: "if i == 3:", explanation: "يفحص البرنامج هل وصلنا للدورة التي قيمتها 3؟" },
          { line: "continue", explanation: "إذا كانت i تساوي 3، 'اقفز' فوقها ولا تنفذ سطر الطباعة التالي لها." },
          { line: "print(i)", explanation: "طباعة الأرقام (سيطبع 1، 2، 4، 5 وسيتخطى 3)." }
        ]
      }
    ],
    problems: [
      {
        id: "p4",
        titleAr: "فحص الرقم (موجب/سالب/صفر)",
        titleEn: "Check Number Status",
        descriptionAr: "اطلب رقماً من المستخدم وحدد حالته (Positive, Negative, Zero).",
        descriptionEn: "Check if a number is positive, negative, or zero based on user input.",
        explanation: "نستخدم if-elif لمقارنة المدخل بالصفر.",
        code: "num = int(input(\"Enter number: \"))\nif num > 0:\n    print(\"Positive\")\nelif num < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")",
        flowchartData: "Start -> Input num -> Is num > 0? -> Yes: Positive -> No: Is num < 0? -> Yes: Negative -> No: Zero -> End",
        lineByLineAr: [
          { line: "num = int(input(...))", explanation: "استقبال رقم وتحويله لنوع صحيح (Integer)." },
          { line: "if num > 0:", explanation: "فحص إذا كان الرقم أكبر من صفر." },
          { line: "print(\"Positive\")", explanation: "طباعة 'موجب' إذا تحقق الشرط." }
        ]
      },
      {
        id: "p5",
        titleAr: "زوجي أم فردي",
        titleEn: "Even or Odd",
        descriptionAr: "برنامج يحدد إذا كان الرقم زوجياً أم فردياً باستخدام باقي القسمة %.",
        descriptionEn: "A program to determine if a number is even or odd using modulo.",
        explanation: "الرقم الزوجي هو الذي يكون باقي قسمته على 2 يساوي صفراً.",
        code: "num = int(input(\"Enter num: \"))\nif num % 2 != 0:\n    print(\"Odd\")\nelse:\n    print(\"Even\")",
        flowchartData: "Start -> Input num -> num % 2 != 0? -> Yes: Odd -> No: Even -> End",
        lineByLineAr: [
          { line: "if num % 2 != 0:", explanation: "هل باقي قسمة الرقم على 2 لا يساوي صفراً؟ (علامة != تعني لا يساوي)." },
          { line: "print(\"Odd\")", explanation: "إذا كان هناك باقي، فالرقم فردي." }
        ]
      },
      {
        id: "p6",
        titleAr: "الآلة الحاسبة (Calculator)",
        titleEn: "Simple Calculator",
        descriptionAr: "حاسبة تطلب رقمين وعملية وتطبع الناتج.",
        descriptionEn: "Calculator taking two numbers and an operator choice.",
        explanation: "نربط كل خيار (1, 2, 3, 4) بعملية حسابية معينة.",
        code: "op = input(\"1-Add, 2-Sub, 3-Mul, 4-Div: \")\nn1 = int(input(\"N1: \"))\nn2 = int(input(\"N2: \"))\n\nif op == '1':\n    print(\"Sum =\", n1 + n2)\nelif op == '2':\n    print(\"Sub =\", n1 - n2)\nelse:\n    print(\"Other ops...\")",
        flowchartData: "Start -> Input Data -> If-Elif chain -> Print Result -> End",
        lineByLineAr: [
          { line: "if op == '1':", explanation: "إذا اختار المستخدم الخيار الأول (الجمع)." },
          { line: "print(\"Sum =\", n1 + n2)", explanation: "عرض نواتج جمع الرقمين الأول والثاني." }
        ]
      },
      {
        id: "p7",
        titleAr: "برنامج الصراف الآلي (ATM)",
        titleEn: "ATM Program",
        descriptionAr: "محاكاة لعمليات الاستعلام، الإيداع، والسحب.",
        descriptionEn: "ATM simulation for balance, deposit, and withdraw.",
        explanation: "نعدل متغير الرصيد balance بناءً على العملية المطلوبة.",
        code: "balance = 1000\nchoice = input(\"1-Balance, 2-Deposit, 3-Withdraw: \")\n\nif choice == '1':\n    print(\"Your Balance =\", balance)\nelif choice == '2':\n    dep = int(input(\"Amount: \"))\n    balance += dep\n    print(\"New Balance =\", balance)\nelse:\n    print(\"Invalid\")",
        flowchartData: "Start -> Choice -> Update Balance -> Print -> End",
        lineByLineAr: [
          { line: "balance = 1000", explanation: "تحديد رصيد افتراضي يبدأ من 1000." },
          { line: "balance += dep", explanation: "إضافة مبلغ الإيداع للرصيد الحالي وتحديثه (علامة +=)." }
        ]
      },
      {
        id: "p8",
        titleAr: "جدول الضرب (Table)",
        titleEn: "Multiplication Table",
        descriptionAr: "طباعة جدول ضرب لرقم معين باستخدام حلقة for.",
        descriptionEn: "Print the multiplication table for any number using for loop.",
        explanation: "نكرر عملية الضرب من 1 إلى 10.",
        code: "num = int(input(\"Number: \"))\nfor i in range(1, 11):\n    res = num * i\n    print(num, \"x\", i, \"=\", res)",
        flowchartData: "Start -> Input num -> For loop (1-10) -> Print result -> End",
        lineByLineAr: [
          { line: "for i in range(1, 11):", explanation: "بداية حلقة تكرارية تبدأ من 1 وتستمر حتى وصول العداد إلى 10." },
          { line: "res = num * i", explanation: "ضرب الرقم المدخل في قيمة العداد الحالية وتخزينها في res." },
          { line: "print(...)", explanation: "طباعة جملة الضرب كاملة (مثلاً 5 x 1 = 5)." }
        ]
      },
      {
        id: "p9",
        titleAr: "فحص كلمة السر (Break)",
        titleEn: "Password Check",
        descriptionAr: "استمر في طلب الباسورد حتى يدخل المستخدم '1234'.",
        descriptionEn: "Loop until the correct password is provided, then use break.",
        explanation: "نستخدم break لإيقاف المحاولات فور الإجابة الصحيحة.",
        code: "correct = \"1234\"\nwhile True:\n    user_p = input(\"Enter Pass: \")\n    if user_p == correct:\n        print(\"Correct!\")\n        break\n    else:\n        print(\"Try again\")",
        flowchartData: "Start -> Loop -> Correct? -> Yes: Break -> No: Retry -> End",
        lineByLineAr: [
          { line: "while True:", explanation: "حلقة تكرار لانهائية تستمر حتى نقوم بإيقافها يدوياً." },
          { line: "if user_p == correct:", explanation: "فحص هل ما أدخله المستخدم يطابق الرقم السري '1234'؟" },
          { line: "break", explanation: "الخروج فوراً من الحلقة فور تحقق الشرط الصحيح." }
        ]
      },
      {
        id: "p10_fact",
        titleAr: "حساب المضروب (Factorial)",
        titleEn: "Factorial Calculation",
        descriptionAr: "حساب مضروب رقم (مثل 5! = 120) باستخدام حلقة while.",
        descriptionEn: "Calculate the factorial of a number using a while loop.",
        explanation: "مضروب الرقم هو ناتج ضرب كل الأرقام من 1 إلى الرقم نفسه.",
        code: "n = int(input(\"Enter n: \"))\ni = 1\nf = 1\nwhile i <= n:\n    f = f * i\n    i = i + 1\nprint(\"Factorial =\", f)",
        flowchartData: "Start -> Input n -> i=1, f=1 -> i <= n? -> Yes: f=f*i, i++ -> No: Print f -> End",
        lineByLineAr: [
          { line: "f = 1", explanation: "تعريف متغير f لتخزين ناتج الضرب، يبدأ بـ 1 (لأنه المحايد الضربي)." },
          { line: "while i <= n:", explanation: "استمر في الضرب طالما لم نصل للرقم المطلوب n." },
          { line: "f = f * i", explanation: "ضرب القيمة المتراكمة في العداد الحالي i." }
        ]
      }
    ]
  },
  {
    id: "sec3",
    title: "Section 3: Strings & Methods",
    lessons: [
      {
        id: "string-basics",
        titleAr: "أساسيات النصوص (String Basics)",
        titleEn: "String Basics",
        content: "النصوص (Strings) هي سلاسل من الحروف. يمكننا الوصول لأي حرف عبر الفهرس (Index) الذي يبدأ من 0.\n\n- **Indexing:** الوصول لحرف محدد باستخدام رقمه، مثلاً `str[0]` هو الحرف الأول.\n- **Slicing:** جلب جزء من النص، مثلاً `str[2:4]` يجلب الحروف من الفهرس 2 إلى 3.",
        code: "text = \"Hello\"\nprint(text[0])   # H\nprint(text[1])   # e\nprint(text[2:4]) # ll",
        lineByLineAr: [
          { line: "text = \"Hello\"", explanation: "تعريف متغير نصي يحتوي على كلمة Hello." },
          { line: "print(text[0])", explanation: "طباعة الحرف الموجود عند الفهرس 0 (أول حرف)." },
          { line: "print(text[2:4])", explanation: "اقتطاع وطباعة الحروف من الفهرس 2 حتى ما قبل 4 (يعني 2 و 3)." }
        ]
      },
      {
        id: "string-ops",
        titleAr: "عمليات النصوص (String Operations)",
        titleEn: "String Operations",
        content: "يمكننا إجراء عمليات حسابية ومنطقية على النصوص:\n- `+` : دمج النصوص (Concatenation).\n- `*` : تكرار النص لعدد من المرات.\n- `in` / `not in` : التأكد من وجود (أو عدم وجود) جزء داخل النص.",
        code: "s1 = \"Hello\"\ns2 = \"Python\"\nprint(s1 + \" \" + s2)\nprint(s1 * 3)\nprint('w' in s1)     # False\nprint('e' in s1)     # True",
        lineByLineAr: [
          { line: "s1 + \" \" + s2", explanation: "دمج النصين s1 و s2 مع مسافة بينهما." },
          { line: "s1 * 3", explanation: "تكرار كلمة Hello ثلاث مرات متتالية." },
          { line: "'w' in s1", explanation: "هل الحرف 'w' موجود داخل كلمة 'Hello'؟ (النتيجة False)." }
        ]
      },
      {
        id: "string-methods",
        titleAr: "دوال النصوص (String Methods)",
        titleEn: "String Methods",
        content: "توفر بايثون مجموعة واسعة من الدوال الجاهزة:\n- `len()`: معرفة عدد الحروف.\n- `upper()` / `lower()`: تحويل حالة الأحرف.\n- `split()`: تقسيم النص إلى كلمات.\n- `replace()`: استبدال جزء بآخر.\n- `find()` / `index()`: البحث عن مكان جزء معين.\n- `isalnum()` / `islower()` / `isupper()`: دوال فحص الحالة.",
        code: "text = \"Hello Python\"\nprint(len(text))\nprint(text.lower())\nprint(text.split())\nprint(text.replace(\"Python\", \"AI\"))\nprint(text.find(\"Python\"))",
        lineByLineAr: [
          { line: "len(text)", explanation: "حساب إجمالي عدد الحروف والمسافات في النص." },
          { line: "text.lower()", explanation: "تحويل جميع حروف النص إلى حروف صغيرة." },
          { line: "text.split()", explanation: "تقسيم النص عند المسافات وتحويله لقائمة كلمات." },
          { line: "text.replace(...)", explanation: "البحث عن كلمة Python وتبديلها بكلمة AI." }
        ]
      }
    ],
    problems: [
      {
        id: "p10",
        titleAr: "تنسيق مخرجات المتوسط",
        titleEn: "Formatting Average Out",
        descriptionAr: "احسب المتوسط الحسابي واطبعه باستخدام طريقة التنسيق % لمخرجات النصوص.",
        descriptionEn: "Calculate average and format the output string using % method.",
        explanation: "نستخدم %i لتمثيل الأرقام الصحيحة داخل القوالب النصية.",
        code: "s1 = 10\ns2 = 12\naug = (s1 + s2) / 2\nprint(\"Average = %i\" % aug)",
        flowchartData: "Start -> s1=10, s2=12 -> avg=(s1+s2)/2 -> Print Format -> End",
        lineByLineAr: [
          { line: "aug = (s1 + s2) / 2", explanation: "حساب المتوسط الحسابي لدرجتين." },
          { line: "print(\"Average = %i\" % aug)", explanation: "طباعة نص وبداخله مكان محجوز (%i) سيتم تعويضه بقيمة المتغير aug." }
        ]
      }
    ]
  },
  {
    id: "sec4",
    title: "Section 4: Lists (القوائم)",
    lessons: [
      {
        id: "list-basics",
        titleAr: "أساسيات القوائم (List Basics)",
        titleEn: "List Basics",
        content: "القائمة (List) هي عبارة عن مخزن يحتوي على مجموعة من العناصر (Items) والقيم (Values). تُكتب العناصر داخل أقواس مربعة [] وتُفصل بفاصلة.",
        code: "L = [1, 2, 3]\nprint(L)        # [1, 2, 3]\nprint(L[1])     # 2",
        lineByLineAr: [
          { line: "L = [1, 2, 3]", explanation: "إنشاء قائمة تحتوي على الأرقام 1 و 2 و 3." },
          { line: "print(L[1])", explanation: "الوصول للعنصر الثاني (رقم الفهرس 1) وطباعته." }
        ]
      },
      {
        id: "list-ops",
        titleAr: "عمليات القوائم (List Operations)",
        titleEn: "List Operations",
        content: "1. الدمج (+): دمج قائمتين معاً.\n2. التكرار (*): تكرار العناصر.\n3. البحث (in): التأكد من وجود عنصر.\n4. الاقتطاع ([:]): جلب جزء محدد من القائمة.",
        code: "l1 = [1, 2, 3]\nl2 = [4, 5, 6]\nprint(l1 + l2)\nprint(l1 * 2)\nprint(2 in l1)\nprint(l2[0:2])",
        lineByLineAr: [
          { line: "print(l1 + l2)", explanation: "دمج القائمتين في قائمة واحدة جديدة تحتوي على كل العناصر." },
          { line: "print(l1 * 2)", explanation: "تكرار عناصر القائمة l1 مرتين متتاليتين." },
          { line: "print(2 in l1)", explanation: "سؤال بايثون: هل الرقم 2 موجود في l1؟ ترجع True." },
          { line: "print(l2[0:2])", explanation: "جلب العناصر من البداية حتى ما قبل الفهرس 2 (يعني 0 و 1)." }
        ]
      },
      {
        id: "list-update",
        titleAr: "تحديث وحذف العناصر (Update & Delete)",
        titleEn: "Update & Delete",
        content: "يمكنك تغيير قيمة أي عنصر عبر الفهرس، أو حذف عنصر باستخدام del. كما يمكنك استبدال نطاق كامل من العناصر.",
        code: "L = [\"A\", \"B\", \"C\", \"D\"]\nL[2] = \"Z\"\ndel L[1]\nL[0:1] = [\"R\", 2]\nprint(L)",
        lineByLineAr: [
          { line: "L[2] = \"Z\"", explanation: "تغيير العنصر الثالث (C) ليصبح (Z)." },
          { line: "del L[1]", explanation: "حذف العنصر الثاني من القائمة تماماً." },
          { line: "L[0:1] = [\"R\", 2]", explanation: "استبدال العنصر الأول بقيمتين جديدتين (R و 2)." }
        ]
      },
      {
        id: "list-functions",
        titleAr: "دوال القوائم (List Functions)",
        titleEn: "List Functions",
        content: "- len(): عدد العناصر.\n- max() / min(): أكبر وأصغر قيمة.\n- sum(): مجموع الأرقام.\n- list(s): تحويل تسلسل (مثل نص) إلى قائمة.",
        code: "nums = [10, 5, 20]\nprint(len(nums))\nprint(max(nums))\nprint(sum(nums))\nprint(list(\"Ahmed\"))",
        lineByLineAr: [
          { line: "print(len(nums))", explanation: "إظهار عدد العناصر الموجودة في القائمة (3 عناصر)." },
          { line: "print(sum(nums))", explanation: "جمع كل الأرقام داخل القائمة (10+5+20 = 35)." },
          { line: "print(list(\"Ahmed\"))", explanation: "تحويل حروف الاسم إلى قائمة منفصلة ['A', 'h', 'm', 'e', 'd']." }
        ]
      },
      {
        id: "list-methods",
        titleAr: "طرق إدارة القوائم (Methods)",
        titleEn: "Common Methods",
        content: "توفر بايثون طرقاً قوية لإدارة البيانات:\n- append(): إضافة للنهاية.\n- insert(): إضافة في مكان محدد.\n- remove(): حذف قيمة معينة.\n- sort() / sorted(): ترتيب العناصر.\n- reverse() / deuse: عكس الترتيب.\n- pop(): حذف عنصر عبر مكانه.\n- clear(): تفريغ القائمة تماماً.",
        code: "L = [1, 2, 2, 3]\nL.append(4)\nL.insert(1, \"A\")\nL.remove(2)\nL.pop(0)\nprint(L.count(2))\nL.clear()",
        lineByLineAr: [
          { line: "L.append(4)", explanation: "إضافة الرقم 4 في آخر القائمة." },
          { line: "L.insert(1, \"A\")", explanation: "إدخال حرف 'A' في الفهرس رقم 1 (المكان الثاني)." },
          { line: "L.remove(2)", explanation: "البحث عن أول رقم 2 في القائمة وحذفه." },
          { line: "L.pop(0)", explanation: "حذف العنصر الأول من القائمة تماماً." },
          { line: "L.count(2)", explanation: "عد كم مرة تكرر الرقم 2 داخل القائمة." }
        ]
      }
    ],
    problems: [
      {
        id: "p11",
        titleAr: "إدارة درجات الطلاب",
        titleEn: "Manage Grades List",
        descriptionAr: "اطلب 3 درجات من المستخدم، خزنهم في قائمة، ثم اطبع المجموع، أعلى درجة، وأرتبهم تصاعدياً.",
        descriptionEn: "Input 3 grades, store in a list, print sum, max, and sorted list.",
        explanation: "نستخدم حلقة أو مدخلات منفصلة مع append، ثم نطبق الدوال الإحصائية.",
        code: "grades = []\ng1 = int(input(\"G1: \"))\ng2 = int(input(\"G2: \"))\ng3 = int(input(\"G3: \"))\n\ngrades.append(g1)\ngrades.append(g2)\ngrades.append(g3)\n\nprint(\"Sum =\", sum(grades))\nprint(\"Max =\", max(grades))\nprint(\"Sorted =\", sorted(grades))",
        flowchartData: "Start -> Input Grades -> Add to List -> Calc Sum/Max -> Sort List -> Print -> End",
        lineByLineAr: [
          { line: "grades = []", explanation: "بداية بإنشاء قائمة فارغة لتخزين الدرجات لاحقاً." },
          { line: "grades.append(g1)", explanation: "إضافة الدرجة الأولى المدخلة إلى القائمة." },
          { line: "print(sorted(grades))", explanation: "عرض الدرجات مرتبة من الأصغير للأكبر دون تعديل القائمة الأصلية." }
        ]
      }
    ]
  },
  {
    id: "sec5",
    title: "Section 5: Tuples (التوبل)",
    lessons: [
      {
        id: "tuple-basics",
        titleAr: "أساسيات التوبل (Tuple Basics)",
        titleEn: "Tuple Basics",
        content: "التوبل (Tuple) هو تسلسل من العناصر غير القابلة للتعديل (Immutable). بمجرد إنشائه، لا يمكنك تغيير قيم العناصر أو حذفها. يتم استخدامه لحماية البيانات من التغيير.\n\n- يتم تعريفه باستخدام الأقواس العادية ().",
        code: "t1 = ()\nt2 = (123, \"Python\", 3, 7)\nprint(t2[1]) # Python",
        lineByLineAr: [
          { line: "t1 = ()", explanation: "إنشاء توبل فارغ." },
          { line: "t2 = (123, \"Python\", 3, 7)", explanation: "إنشاء توبل يحتوي على أرقام ونصوص." },
          { line: "print(t2[1])", explanation: "الوصول للعنصر الثاني (رقم الفهرس 1) وطباعته." }
        ]
      },
      {
        id: "tuple-ops",
        titleAr: "عمليات التوبل (Tuple Operations)",
        titleEn: "Tuple Operations",
        content: "1. الدمج (+): دمج تسلسلين.\n2. التكرار (*): تكرار العناصر.\n3. الفهرسة []: الوصول لعنصر محدد.",
        code: "num = (1, 2, 3, 4, 5)\nlang = ('Python', 'C', 'Java', 'Php')\n\nprint(num + lang)\nprint(lang[2])\nprint(num * 2)",
        lineByLineAr: [
          { line: "print(num + lang)", explanation: "دمج توبل الأرقام مع توبل اللغات في تسلسل واحد." },
          { line: "print(lang[2])", explanation: "طباعة العنصر الثالث (Java) من توبل اللغات." },
          { line: "print(num * 2)", explanation: "تكرار عناصر توبل الأرقام مرتين." }
        ]
      },
      {
        id: "tuple-functions",
        titleAr: "دوال التوبل (Tuple Functions)",
        titleEn: "Tuple Functions",
        content: "توفر بايثون دوال إحصائية وتحويلية للتوبل:\n- len(): طول التوبل.\n- max() / min(): أكبر وأصغر قيمة.\n- sum(): مجموع العناصر الرقمية.\n- tuple(): تحويل أي تسلسل (مثل نص) إلى توبل.",
        code: "t1 = (1, 2, 3, 4, 5, 6)\ns = \"Python\"\n\nprint(len(t1))\nprint(max(t1))\nprint(sum(t1))\nprint(tuple(s))",
        lineByLineAr: [
          { line: "print(len(t1))", explanation: "حساب عدد العناصر (6 عناصر)." },
          { line: "print(max(t1))", explanation: "إيجاد أكبر قيمة في التوبل (6)." },
          { line: "print(sum(t1))", explanation: "جمع كل الأرقام (1+2+3+4+5+6 = 21)." },
          { line: "print(tuple(s))", explanation: "تحويل نص 'Python' إلى توبل حروف منفصلة." }
        ]
      },
      {
        id: "tuple-methods",
        titleAr: "طرق التوبل (Methods)",
        titleEn: "Tuple Methods",
        content: "لأن التوبل غير قابل للتعديل، لديه طرق محدودة جداً مقارنة بالقوائم:\n- count(): عد تكرار عنصر معين.\n- index(): معرفة مكان عنصر (ويمكن تحديد بداية ونهاية للبحث).\n- sorted(): ترتيب العناصر (ترجع قائمة مرتبة).",
        code: "num = (1, 2, 2, 2, 3)\nt = ('P', 'y', 't', 'h', 'o', 'n', 'P')\n\nprint(num.count(2))\nprint(t.index('t'))\nprint(t.index('P', 3, 10))\nprint(sorted(num))",
        lineByLineAr: [
          { line: "num.count(2)", explanation: "عد كم مرة تكرر الرقم 2 (النتيجة 3 مرات)." },
          { line: "t.index('t')", explanation: "البحث عن أول ظهور لحرف 't' وإرجاع مكانه (2)." },
          { line: "t.index('P', 3, 10)", explanation: "البحث عن 'P' ولكن ابدأ البحث من الفهرس 3، فيجد الـ P الثانية عند الفهرس 6." },
          { line: "sorted(num)", explanation: "ترتيب العناصر وإرجاع النتيجة كقائمة (List)، التوبل الأصلي لايتغير." }
        ]
      }
    ],
    problems: [
      {
        id: "p12",
        titleAr: "البحث المتقدم في الفواكه",
        titleEn: "Advanced Fruit Search",
        descriptionAr: "انشئ توبل فواكه، واطلب من المستخدم إدخال اسم، وابحث عنه باستخدام index وإذا لم يوجد تعامل مع الخطأ.",
        descriptionEn: "Create fruit tuple, take input, and use index method with membership check.",
        explanation: "نتأكد أولاً من وجود العنصر باستخدام in لتجنب حدوث خطأ (Value Error) عند استخدام index.",
        code: "fruits = ('banana', 'apple', 'Mango', 'Tomato', 'berry')\nitem = input(\"Search: \")\n\nif item in fruits:\n    print(item, \"Found at index\", fruits.index(item))\nelse:\n    print(\"Not Found\")",
        flowchartData: "Start -> Define Fruits -> Input Item -> Item in Fruits? -> Yes: Print Index -> No: Print Not Found -> End",
        lineByLineAr: [
          { line: "fruits = ('banana', ...)", explanation: "تعريف توبل ثابت يحتوي على مسميات الفواكه." },
          { line: "if item in fruits:", explanation: "اختبار منطقي للتأكد من وجود الكلمة المدخلة داخل التوبل." },
          { line: "fruits.index(item)", explanation: "جلب الرقم التسلسلي (الفهرس) الخاص بالكلمة التي وجدناها." }
        ]
      }
    ]
  },
  {
    id: "sec6",
    title: "Section 6: OOP (البرمجة كائنية التوجه)",
    lessons: [
      {
        id: "oop-intro",
        titleAr: "مقدمة في البرمجة الكائنية",
        titleEn: "Introduction to OOP",
        content: "البرمجة كائنية التوجه (OOP) هي نمط برمجي يعتمد على تنظيم الكود حول 'الكائنات' (Objects) بدلاً من الوظائف فقط.\n\nكل كائن يتكون من:\n1. **Data (Attributes):** البيانات أو الخصائص التي تميز الكائن.\n2. **Behavior (Methods):** السلوك أو الوظائف التي يمكن للكائن القيام بها.\n\n**لماذا نستخدم OOP؟**\n- **Reusability:** إعادة استخدام الكود بسهولة.\n- **Organization:** تنظيم الكود بشكل منطقي.\n- **Maintainability:** سهولة صيانة وتعديل الكود.\n- **Data Security:** حماية البيانات من الوصول غير المصرح به.",
        code: "# OOP organises code into Objects\n# Object = Data + Behavior",
        lineByLineAr: [
          { line: "# Object = Data + Behavior", explanation: "كل كائن في البرمجة الكائنية هو عبارة عن مجموعة من البيانات والوظائف المرتبطة بها." }
        ]
      },
      {
        id: "class-object",
        titleAr: "الفئات والكائنات (Class & Object)",
        titleEn: "Class & Object",
        content: "- **الفئة (Class):** هي مخطط (Blueprint) أو قالب (Template) يوصف الخصائص والسلوك العام، ولا تأخذ مساحة في الذاكرة عند تعريفها.\n- **الكائن (Object):** هو نسخة فعلية (Instance) من الفئة، يتم إنشاؤه بناءً على القالب.\n\nمثال: فئة 'طالب' هي القالب، و'أحمد' هو الكائن الفعلي.",
        code: "class Student:\n    pass\n\ns1 = Student() # Instance of Student",
        lineByLineAr: [
          { line: "class Student:", explanation: "تعريف فئة (Class) جديدة تسمى Student لتكون قالباً للطلاب." },
          { line: "pass", explanation: "كلمة محجوزة تعني 'تجاوز'، نستخدمها لتعريف فئة فارغة دون حدوث خطأ." },
          { line: "s1 = Student()", explanation: "إنشاء كائن (Object) يسمى s1 وبناؤه بناءً على مواصفات فئة Student." }
        ]
      },
      {
        id: "attributes-methods",
        titleAr: "السمات والدوال (Attributes & Methods)",
        titleEn: "Attributes & Methods",
        content: "- **Attributes:** هي متغيرات داخل الفئة تخزن بيانات الكائن.\n- **Methods:** هي دوال داخل الفئة تصف سلوك الكائن.\n- **__init__:** هي دالة البناء (Constructor) التي تُنفذ تلقائياً عند إنشاء الكائن.\n- **self:** كلمة تشير إلى الكائن الحالي للوصول إلى سماته ووظائفه.",
        code: "class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def say_hello(self):\n        print(\"Hello\", self.name)\n\ns1 = Student(\"Ahmed\", 20)\ns1.say_hello()",
        lineByLineAr: [
          { line: "def __init__(self, name, age):", explanation: "دالة البناء التي تأخذ القيم الابتدائية (الاسم والعمر) وتخصصها للكائن." },
          { line: "self.name = name", explanation: "حفظ قيمة الاسم المرسلة في متغير خاص بالكائن (Attribute)." },
          { line: "def say_hello(self):", explanation: "تعريف دالة (Method) يستطيع الكائن تنفيذها للترحيب." },
          { line: "s1 = Student(\"Ahmed\", 20)", explanation: "إنشاء كائن جديد وإرسال البيانات 'Ahmed' و 20 كمعاملات للـ __init__." },
          { line: "s1.say_hello()", explanation: "استدعاء الوظيفة say_hello من خلال الكائن s1." }
        ]
      },
      {
        id: "oop-principles",
        titleAr: "مبادئ البرمجة الكائنية الأربعة",
        titleEn: "The 4 OOP Principles",
        content: "تعتمد البرمجة الكائنية على أربعة مبادئ أساسية:\n1. **الوراثة (Inheritance)**\n2. **التغليف (Encapsulation)**\n3. **تعدد الأشكال (Polymorphism)**\n4. **التجريد (Abstraction)**",
        code: "# 1. Inheritance\n# 2. Encapsulation\n# 3. Polymorphism\n# 4. Abstraction"
      },
      {
        id: "inheritance",
        titleAr: "الوراثة (Inheritance)",
        titleEn: "Inheritance",
        content: "تعني أن فئة (Child Class) ترث خصائص ووظائف فئة أخرى (Parent Class). تساعدنا الوراثة في تجنب تكرار الكود وتسهيل التعديل.",
        code: "class Animal:\n    def speak(self):\n        print(\"Animal Speaks\")\n\nclass Dog(Animal):\n    def bark(self):\n        print(\"Woof!\")\n\nd = Dog()\nd.speak() # Inherited from Animal\nd.bark()",
        lineByLineAr: [
          { line: "class Dog(Animal):", explanation: "فئة Dog ترث فئة Animal، مما يجعلها تمتلك كل وظائفها تلقائياً." },
          { line: "d = Dog()", explanation: "إنشاء كائن من الفئة الوارثة." },
          { line: "d.speak()", explanation: "استدعاء دالة speak التي تم وراثتها من الفئة الأب Animal." }
        ]
      },
      {
        id: "encapsulation",
        titleAr: "التغليف (Encapsulation)",
        titleEn: "Encapsulation",
        content: "هو إخفاء التفاصيل الداخلية للبيانات (Hiding internal data) وحمايتها من التعديل الخارجي المباشر. نستخدم شرطتين سفليتين (__) لجعل المتغير خاصاً (Private).",
        code: "class BankAccount:\n    def __init__(self):\n        self.__balance = 1000 # Private Attribute\n\n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount()\nprint(acc.get_balance())",
        lineByLineAr: [
          { line: "self.__balance = 1000", explanation: "تعريف متغير 'خاص' لا يمكن الوصول إليه من خارج الفئة مباشرة." },
          { line: "def get_balance(self):", explanation: "دالة عامة تسمح برؤية الرصيد دون السماح بتعديله مباشرة." }
        ]
      },
      {
        id: "polymorphism",
        titleAr: "تعدد الأشكال (Polymorphism)",
        titleEn: "Polymorphism",
        content: "يعني 'تعدد الأشكال'، وهو القدرة على استخدام نفس اسم الدالة في فئات مختلفة ولكن بسلوك مختلف يناسب كل فئة.",
        code: "class Cat:\n    def sound(self):\n        return \"Meow\"\n\nclass Dog:\n    def sound(self):\n        return \"Woof\"\n\nanimals = [Cat(), Dog()]\nfor a in animals:\n    print(a.sound())",
        lineByLineAr: [
          { line: "print(a.sound())", explanation: "بناءً على نوع الحيوان (قطة أو كلب)، سيتم تنفيذ الدالة sound الخاصة به." }
        ]
      },
      {
        id: "abstraction",
        titleAr: "التجريد (Abstraction)",
        titleEn: "Abstraction",
        content: "هو إظهار الوظائف الهامة فقط للمستخدم وإخفاء التعقيدات الداخلية. نستخدم مكتبة 'abc' لإنشاء فئات مجردة (Abstract Classes) لا يمكن إنشاء كائنات منها مباشرة.",
        code: "from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start(self):\n        pass\n\nclass Car(Vehicle):\n    def start(self):\n        print(\"Car started!\")",
        lineByLineAr: [
          { line: "class Vehicle(ABC):", explanation: "تعريف فئة مجردة (Abstract Class) لتكون نموذجاً لغيرها." },
          { line: "@abstractmethod", explanation: "تحديد أن دالة start يجب أن يتم تعريفها وإجبار أي فئة وارثة على كتابة كودها الخاص." },
          { line: "class Car(Vehicle):", explanation: "الفئة Car ترث النموذج وتطبق 'التفاصيل' البرمجية المطلوبة." }
        ]
      }
    ],
    problems: [
      {
        id: "p13",
        titleAr: "نظام إدارة مكتبة",
        titleEn: "Library Management System",
        descriptionAr: "صمم فئة (Book) تحتوي على العنوان والمؤلف، وقم بإنشاء كائنين منها وطباعة بياناتهما.",
        descriptionEn: "Design a Book class with title and author, create two objects and print their info.",
        explanation: "نستخدم دالة البناء لتحديد بيانات الكتاب عند الإنشاء، ودالة خاصة لعرض البيانات.",
        code: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def info(self):\n        print(f\"Book: {self.title}, By: {self.author}\")\n\nb1 = Book(\"Python Basics\", \"Doha\")\nb2 = Book(\"AI Era\", \"Doha\")\nb1.info()\nb2.info()",
        flowchartData: "Start -> Class Book -> Init Title/Author -> Create b1, b2 -> Call info() -> End",
        lineByLineAr: [
          { line: "self.title = title", explanation: "تخزين عنوان الكتاب المسند عند الإنشاء." },
          { line: "b1 = Book(...)", explanation: "إنشاء الكائن الأول وإعطاؤه قيم الاسم والمؤلف." },
          { line: "b1.info()", explanation: "استدعاء دالة عرض المعلومات للكتاب الأول." }
        ]
      },
      {
        id: "p13_2",
        titleAr: "حماية رصيد البنك",
        titleEn: "Bank Balance Protection",
        descriptionAr: "اكتب برنامجاً يستخدم التغليف (Encapsulation) لمنع الوصول المباشر للرصيد، مع السماح بالإيداع.",
        descriptionEn: "Create a program using Encapsulation to protect balance while allowing deposits.",
        explanation: "نستخدم المتغيرات الخاصة (__) للحماية، ودوال الإيداع للتحديث الآمن.",
        code: "class Bank:\n    def __init__(self):\n        self.__balance = 500\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            print(\"Deposit Successful\")\n\n    def show(self):\n        print(\"Balance:\", self.__balance)\n\nmy_acc = Bank()\nmy_acc.deposit(200)\nmy_acc.show()",
        flowchartData: "Start -> Private Balance=500 -> Deposit 200 -> Update Balance -> Show Result -> End",
        lineByLineAr: [
          { line: "self.__balance = 500", explanation: "تعيين رصيد ابتدائي 'سري' لا يُرى من الخارج مباشرة." },
          { line: "self.__balance += amount", explanation: "تحديث الرصيد داخلياً بعد التأكد من صحة المبلغ." }
        ]
      }
    ]
  },
  {
    id: "sec7",
    title: "Section 7: GUI (واجهات المستخدم)",
    lessons: [
      {
        id: "gui-intro",
        titleAr: "مقدمة في واجهات المستخدم (GUI)",
        titleEn: "Graphical User Interfaces",
        content: "واجهة المستخدم الرسومية (GUI) هي تطبيق يحتوي على نوافذ، أزرار، وقوائم تسمح للمستخدم بالتفاعل مع البرنامج.\n\nتعتبر مكتبة Tkinter هي الطريقة الأكثر شيوعاً لتطوير تطبيقات المكتب في بايثون لأنها سهلة مدمجة مع بايثون وتعتبر خياراً ممتازاً للمبتدئين.\n\nتُعرف مكونات الواجهة بـ Widgets (مثل الأزرار، النصوص، الحقول).",
        code: "# GUI components are known as Widgets"
      },
      {
        id: "tkinter-steps",
        titleAr: "خطوات عمل تطبيق Tkinter",
        titleEn: "Basic Tkinter Steps",
        content: "لبناء أي تطبيق رسومي، نتبع 4 خطوات أساسية بالترتيب:\n1. استيراد المكتبة (Import Tkinter module).\n2. إنشاء النافذة الأساسية (Create Main application window).\n3. إضافة الأدوات (add Widgets like labels, buttons, frames).\n4. تشغيل حلقة الأحداث (Call Main event loop) ليظل التطبيق مفتوحاً.",
        code: "import tkinter\n\ntop = tkinter.Tk()\ntop.title(\"welCom\")\ntop.geometry(\"400x300\")\ntop.mainloop()",
        lineByLineAr: [
          { line: "top = tkinter.Tk()", explanation: "إنشاء النافذة الرئيسية للتطبيق وتخزينها في متغير top." },
          { line: "top.title(\"welCom\")", explanation: "تحديد النص الذي يظهر في شريط العنوان أعلى النافذة." },
          { line: "top.geometry(\"400x300\")", explanation: "تحديد أبعاد النافذة عند الفتح (العرض 400 × الطول 300)." }
        ]
      },
      {
        id: "layout-pack",
        titleAr: "نظام التعبئة (Pack Method)",
        titleEn: "Pack Method",
        content: "أبسط نظام لتنظيم الأدوات، حيث يقوم بترتيبها في كتل. نستخدم خاصية side لتحديد مكان الأداة (left, right, top, bottom).",
        code: "from tkinter import *\ntop = Tk()\nbtn = Button(top, text=\"login\")\nbtn.pack(side=LEFT)\ntop.mainloop()",
        lineByLineAr: [
          { line: "btn = Button(...)", explanation: "إنشاء زر جديد داخل النافذة top ونكتب عليه كلمة login." },
          { line: "btn.pack(side=LEFT)", explanation: "توجيه البرنامج لوضع الزر في جهة اليسار (LEFT) داخل النافذة." }
        ]
      },
      {
        id: "layout-grid",
        titleAr: "نظام الشبكة (Grid Method)",
        titleEn: "Grid Method",
        content: "ينظم الأدوات في شكل جدول (صفوف وأعمدة) وهو الأكثر دقة وتنظيماً.\n- row: رقم الصف (يبدأ من 0).\n- column: رقم العمود (يبدأ من 0).\n- padx / pady: المسافات الجانبية والرأسية (هوامش).",
        code: "from tkinter import *\nparent = Tk()\nname = Label(parent, text=\"name\")\nname.grid(row=0, column=0, pady=10, padx=5)\ne1 = Entry(parent)\ne1.grid(row=0, column=1)",
        lineByLineAr: [
          { line: "name.grid(row=0, column=0)", explanation: "وضع عنوان 'name' في الصف الأول والعمود الأول." },
          { line: "pady=10, padx=5", explanation: "إضافة مسافة 10 بكسل فوق وتحت العنصر، و 5 بكسل يمين ويسار العنصر." },
          { line: "e1 = Entry(parent)", explanation: "إنشاء مربع نص (Text Box) ليقوم المستخدم بالكتابة بداخله." }
        ]
      },
      {
        id: "layout-place",
        titleAr: "نظام الإحداثيات (Place Method)",
        titleEn: "Place Method",
        content: "يسمح بوضع الأداة في إحداثيات (x, y) محددة بالبكسل، وهو يعطي تحكماً كاملاً ولكن قد يكون صعباً في التصميمات المتجاوبة.",
        code: "from tkinter import *\nroot = Tk()\nname = Label(root, text=\"name\")\nname.place(x=50, y=50)\ne1 = Entry(root)\ne1.place(x=100, y=50)",
        lineByLineAr: [
          { line: "name.place(x=50, y=50)", explanation: "وضع النص عند الإحداثي الأفقي 50 والإحداثي الرأسي 50." }
        ]
      },
      {
        id: "common-widgets",
        titleAr: "أدوات Tkinter الشائعة",
        titleEn: "Common Widgets",
        content: "- Button: زر للضغط.\n- Label: لعرض نصوص توضيحية.\n- Entry: خانة إدخال سطر واحد.\n- Text: خانة إدخال نصوص متعددة الأسطر.\n- Checkbutton: مربعات الاختيار المتعدد.\n- Radiobutton: اختيار واحد من مجموعة.\n- Listbox: قائمة عناصر يختار المستخدم منها.",
        code: "from tkinter import *\ntop = Tk()\n\nb = Button(top, text=\"Click Me\", activeforeground=\"red\", bg=\"pink\")\nb.pack()\n\ntop.mainloop()",
        lineByLineAr: [
          { line: "b = Button(top, ...)", explanation: "إنشاء زر وتحديد النص الظاهر، ولون الخط عند الضغط (activeforeground) ولون الخلفية (bg)." },
          { line: "b.pack()", explanation: "إضافة الزر للنافذة باستخدام نظام التعبئة التلقائي." }
        ]
      },
      {
        id: "event-handling",
        titleAr: "التعامل مع الأحداث (Events)",
        titleEn: "Event Handling",
        content: "لجعل الأزرار تقوم بوظيفة معينة، نقوم بتعريف دالة (Function) ثم نربطها بالزر باستخدام خاصية `command`.",
        code: "from tkinter import *\nroot = Tk()\n\ndef say_hi():\n    print(\"Hello User!\")\n\nbtn = Button(root, text=\"Greet\", command=say_hi)\nbtn.pack()\n\nroot.mainloop()",
        lineByLineAr: [
          { line: "def say_hi():", explanation: "تعريف دالة برمجية تحتوي على الكود الذي نريد تنفيذه عند الضغط." },
          { line: "command=say_hi", explanation: "ربط الزر بالدالة، بحيث يتم استدعاء 'say_hi' فور النقر عليه." }
        ]
      },
      {
        id: "messagebox",
        titleAr: "صناديق الرسائل (MessageBox)",
        titleEn: "MessageBox",
        content: "تُستخدم لإظهار نوافذ منبثقة للتنبيه أو التأكيد. يجب استيرادها بشكل منفصل من `tkinter.messagebox`.\n- showinfo(): إظهار معلومة.\n- showwarning(): تحذير.\n- showerror(): خطأ.\n- askquestion(): سؤال نعم/لا.",
        code: "from tkinter import *\nfrom tkinter import messagebox\n\ntop = Tk()\n\ndef hello():\n    messagebox.showinfo(\"Say Hello\", \"Hello World\")\n\nB = Button(top, text=\"Say Hello\", command=hello)\nB.pack()\n\ntop.mainloop()",
        lineByLineAr: [
          { line: "from tkinter import messagebox", explanation: "استيراد مكتبة صناديق الرسائل المنبثقة بشكل خاص." },
          { line: "messagebox.showinfo(\"Say Hello\", ...)", explanation: "إظهار نافذة منبثقة بعنوان 'Say Hello' ونص 'Hello World'." }
        ]
      },
      {
        id: "frames",
        titleAr: "الإطارات (Frames)",
        titleEn: "Frames",
        content: "تُستخدم الإطارات (Frames) لتجميع الأدوات معاً وتنظيمها بشكل منطقي داخل النافذة. تعمل كحاوية (Container) غير مرئية.",
        code: "from tkinter import *\nroot = Tk()\n\nframe = Frame(root)\nframe.pack()\n\nbottom_frame = Frame(root)\nbottom_frame.pack(side=BOTTOM)\n\nred_btn = Button(frame, text=\"Red\", fg=\"red\")\red_btn.pack(side=LEFT)\n\nblue_btn = Button(bottom_frame, text=\"Blue\", fg=\"blue\")\nblue_btn.pack(side=LEFT)\n\nroot.mainloop()",
        lineByLineAr: [
          { line: "frame = Frame(root)", explanation: "إنشاء إطار (حاوية) جديد داخل النافذة الرئيسية." },
          { line: "red_btn = Button(frame, ...)", explanation: "وضع الزر الأحمر داخل 'frame' العلوي وليس النافذة مباشرة." },
          { line: "bottom_frame.pack(side=BOTTOM)", explanation: "توجيه الإطار السفلي ليأخذ مكاناً في أسفل النافذة." }
        ]
      },
      {
        id: "menus",
        titleAr: "القوائم (Menus)",
        titleEn: "Menus",
        content: "تُستخدم لإضافة شريط قوائم في أعلى النافذة (مثل File, Edit).",
        code: "from tkinter import *\nroot = Tk()\n\ndef donothing():\n   print(\"Action clicked\")\n\nmenubar = Menu(root)\nfilemenu = Menu(menubar, tearoff=0)\nfilemenu.add_command(label=\"New\", command=donothing)\nfilemenu.add_separator()\nfilemenu.add_command(label=\"Exit\", command=root.quit)\nmenubar.add_cascade(label=\"File\", menu=filemenu)\n\nroot.config(menu=menubar)\nroot.mainloop()",
        lineByLineAr: [
          { line: "menubar = Menu(root)", explanation: "إنشاء شريط القوائم الأساسي." },
          { line: "filemenu.add_command(...)", explanation: "إضافة خيار (New) داخل القائمة المنسدلة." },
          { line: "menubar.add_cascade(...)", explanation: "ربط القائمة المنسدلة (File) بالشريط الأساسي العلوي." }
        ]
      }
    ],
    problems: [
      {
        id: "p14",
        titleAr: "نموذج تسجيل بيانات الطلاب",
        titleEn: "Student Registration UI",
        descriptionAr: "اكتب برنامجاً يرسم نافذة منظمة بجدول (Grid) تحتوي على خانات للاسم ورقم القيد وزر للإرسال.",
        descriptionEn: "Create a window with input fields for Name and Reg No using the Grid system.",
        explanation: "نستخدم نظام الـ Grid لأنه الأمثل لتنسيق النماذج والبيانات المطلوبة في صفوف وأعمدة متساوية.",
        code: "from tkinter import *\nroot = Tk()\nroot.title(\"Student Form\")\n\nLabel(root, text=\"Name\").grid(row=0, column=0)\nEntry(root).grid(row=0, column=1)\n\nLabel(root, text=\"Reg No\").grid(row=1, column=0)\nEntry(root).grid(row=1, column=1)\n\nButton(root, text=\"Submit\").grid(row=2, column=1)\n\nroot.mainloop()",
        flowchartData: "Start -> Create Window -> Grid Layout -> Add Label/Entry -> Add Submit Button -> Mainloop -> End",
        lineByLineAr: [
          { line: "Label(root, text=\"Name\")", explanation: "تعريف نص ثابت كعنوان لخانة الاسم." },
          { line: "Entry(root).grid(...)", explanation: "إنشاء خانة الإدخال ووضعها مباشرة في مكانها بالجدول." },
          { line: "Button(root, text=\"Submit\")", explanation: "إضافة زر ليقوم المستخدم بالضغط عليه بعد الانتهاء." }
        ]
      },
      {
        id: "p15",
        titleAr: "حاسبة بسيطة تفاعلية",
        titleEn: "Interactive Simple Calculator",
        descriptionAr: "صمم نافذة تطلب من المستخدم رقمين، وعند الضغط على زر الجمع، تظهر رسالة منبثقة بناتج الجمع.",
        descriptionEn: "Design a window that takes two numbers and shows their sum in a messagebox when clicking a button.",
        explanation: "نحتاج لاستخدام Entry لاستقبال الأرقام، و get() لقراءتها، ثم messagebox لعرض النتيجة.",
        code: "from tkinter import *\nfrom tkinter import messagebox\n\nroot = Tk()\nroot.title(\"Adder\")\n\nLabel(root, text=\"Num 1:\").pack()\ne1 = Entry(root)\ne1.pack()\n\nLabel(root, text=\"Num 2:\").pack()\ne2 = Entry(root)\ne2.pack()\n\ndef add():\n    n1 = int(e1.get())\n    n2 = int(e2.get())\n    res = n1 + n2\n    messagebox.showinfo(\"Result\", f\"Sum is {res}\")\n\nButton(root, text=\"Add\", command=add).pack()\nroot.mainloop()",
        flowchartData: "Start -> Input E1, E2 -> Click Add -> n1=E1.get(), n2=E2.get() -> Show Sum -> End",
        lineByLineAr: [
          { line: "e1 = Entry(root)", explanation: "إنشاء مربع إدخال للرقم الأول." },
          { line: "n1 = int(e1.get())", explanation: "جلب القيمة المكتوبة داخل مربع الإدخال e1 وتحويلها لرقم صحيح." },
          { line: "messagebox.showinfo(...)", explanation: "عرض ناتح الجمع داخل نافذة منبثقة لإخبار المستخدم بالنتيجة." }
        ]
      },
      {
        id: "p16",
        titleAr: "نموذج تسجيل دخول (Login UI)",
        titleEn: "Login Interface",
        descriptionAr: "صمم نافذة تطلب اسم المستخدم وكلمة المرور، وإذا كانت البيانات 'admin' و '123' أظهر رسالة نجاح، وإلا أظهر رسالة خطأ.",
        descriptionEn: "Login window requiring 'admin' and '123'. Show success or error messagebox.",
        explanation: "نستخدم خاصية show='*' في الـ Entry لإخفاء كلمة المرور.",
        code: "from tkinter import *\nfrom tkinter import messagebox\n\nroot = Tk()\nroot.title(\"Login\")\n\nLabel(root, text=\"User:\").grid(row=0, column=0)\nu = Entry(root)\nu.grid(row=0, column=1)\n\nLabel(root, text=\"Pass:\").grid(row=1, column=0)\np = Entry(root, show=\"*\")\np.grid(row=1, column=1)\n\ndef check():\n    if u.get()==\"admin\" and p.get()==\"123\":\n        messagebox.showinfo(\"Login\", \"Welcome!\")\n    else:\n        messagebox.showerror(\"Error\", \"Wrong Data\")\n\nButton(root, text=\"Login\", command=check).grid(row=2, column=1)\nroot.mainloop()",
        flowchartData: "Start -> Input User/Pass -> Click Login -> Check Values -> Success / Error -> End",
        lineByLineAr: [
          { line: "p = Entry(root, show=\"*\")", explanation: "إنشاء مربع نص لكلمة المرور يظهر حرف * بدلاً من الحروف الحقيقية." },
          { line: "if u.get()==\"admin\" ...", explanation: "مقارنة النصوص المدخلة بالقيم الصحيحة المحددة برمجياً." },
          { line: "messagebox.showerror(...)", explanation: "إطلاق نافذة تنبيه حمراء (خطأ) في حال كانت البيانات غير مطابقة." }
        ]
      }
    ]
  }
];
