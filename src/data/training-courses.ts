/**
 * Training Courses Data - Khatwa Platform
 * Complete course catalog with modules and files
 * By Amr AI Team - February 2026
 */

import type { Course, InternalAuditProgram } from '@/types/training';

export const coursesData: Course[] = [
  {
    id: 'restaurant-management',
    title: 'إدارة وتشغيل المطاعم',
    titleEn: 'Restaurant Management & Operations',
    description:
      'كورس إدارة وتشغيل المطاعم هو برنامج تدريبى احترافى يهدف إلى تأهيل المشاركين لفهم وتشغيل المطاعم باحترافية عالية عبر دراسة دورة العمل الكاملة داخل المطعم. يغطّي البرنامج أهم المهارات العملية فى التخطيط، التشغيل، إدارة الجودة، مراقبة التكاليف، إدارة المخاطر، بناء فرق العمل، وتصميم تجربة عميل متكاملة.',
    category: 'management',
    level: 'intermediate',
    duration: '40 ساعة',
    hours: 40,
    featured: true,
    certificateOffered: true,
    rating: 4.8,
    studentsCount: 250,
    objectives: [
      'فهم مفهوم إدارة وتشغيل المطاعم',
      'التخطيط الاستراتيجي للمطاعم',
      'إدارة العمليات التشغيلية اليومية',
      'إدارة الموارد البشرية في المطاعم',
      'التسويق وإدارة المبيعات',
      'الرقابة المالية والإدارية',
    ],
    targetAudience: [
      'أصحاب المطاعم والمشروعات الناشئة',
      'مديري المطاعم والمشرفين',
      'الراغبين في دخول مجال صناعة المطاعم',
      'المحاسبين وموظفي الرقابة المالية',
    ],
    modules: [
      {
        id: 'rm-module-1',
        title: 'مفهوم إدارة وتشغيل المطاعم',
        description:
          'المفاهيم الأساسية والفرق بين الإدارة التشغيلية والاستراتيجية',
        order: 1,
        subModules: [
          {
            id: 'rm-1-1',
            title: 'مفهوم إدارة المطاعم',
            order: 1,
          },
          {
            id: 'rm-1-2',
            title: 'الفرق بين الإدارة التشغيلية والإدارة الاستراتيجية',
            order: 2,
          },
          {
            id: 'rm-1-3',
            title: 'عوامل نجاح وفشل المطاعم',
            order: 3,
          },
        ],
      },
      {
        id: 'rm-module-2',
        title: 'التخطيط الاستراتيجي للمطاعم',
        description:
          'اختيار الموقع، تصميم القائمة، وتحليل السوق والجدوى المالية',
        order: 2,
        subModules: [
          {
            id: 'rm-2-1',
            title: 'اختيار الموقع المناسب',
            order: 1,
          },
          {
            id: 'rm-2-2',
            title: 'تصميم قائمة الطعام (Menu Engineering)',
            order: 2,
          },
          {
            id: 'rm-2-3',
            title: 'تحليل السوق وتحديد الفئة المستهدفة',
            order: 3,
          },
          {
            id: 'rm-2-4',
            title: 'دراسة الجدوى المالية والتشغيلية',
            order: 4,
          },
        ],
      },
      {
        id: 'rm-module-3',
        title: 'إدارة العمليات التشغيلية',
        description:
          'دورة العمل اليومي، معايير الجودة، إدارة المخزون والتكاليف',
        order: 3,
        subModules: [
          {
            id: 'rm-3-1',
            title: 'دورة العمل اليومي في المطاعم',
            order: 1,
          },
          {
            id: 'rm-3-2',
            title: 'معايير جودة الخدمة (Service Standards)',
            order: 2,
          },
          {
            id: 'rm-3-3',
            title: 'إدارة المخزون والمواد الخام',
            order: 3,
          },
          {
            id: 'rm-3-4',
            title: 'إجراءات استلام المواد وفحصها',
            order: 4,
          },
          {
            id: 'rm-3-5',
            title: 'إدارة التكلفة (Cost Control)',
            order: 5,
          },
          {
            id: 'rm-3-6',
            title: 'الصحة والسلامة الغذائية (HACCP – ISO)',
            order: 6,
          },
        ],
      },
      {
        id: 'rm-module-4',
        title: 'إدارة الموارد البشرية',
        description: 'الهيكل الإداري، التوظيف، التدريب، وإدارة الضغوط',
        order: 4,
        subModules: [
          {
            id: 'rm-4-1',
            title: 'هيكل إداري للمطعم',
            description: 'مدير – شيف – ويتر – مشرف',
            order: 1,
          },
          {
            id: 'rm-4-2',
            title: 'استقطاب وتوظيف العمالة',
            order: 2,
          },
          {
            id: 'rm-4-3',
            title: 'تدريب الموظفين على الخدمة والضيافة',
            order: 3,
          },
          {
            id: 'rm-4-4',
            title: 'التعامل مع ضغط العمل والشكاوى',
            order: 4,
          },
        ],
      },
      {
        id: 'rm-module-5',
        title: 'إدارة خدمة العملاء والضيافة',
        description: 'فن التعامل مع الزبائن وخلق تجربة متميزة',
        order: 5,
        subModules: [
          {
            id: 'rm-5-1',
            title: 'فن التعامل مع الزبائن',
            order: 1,
          },
          {
            id: 'rm-5-2',
            title: 'إدارة شكاوى العملاء',
            order: 2,
          },
          {
            id: 'rm-5-3',
            title: 'خلق تجربة عميل مميزة',
            order: 3,
          },
          {
            id: 'rm-5-4',
            title: 'دور خدمة العملاء في زيادة المبيعات',
            order: 4,
          },
        ],
      },
      {
        id: 'rm-module-6',
        title: 'التسويق وإدارة المبيعات',
        description:
          'استراتيجيات التسويق، السوشيال ميديا، والعروض الترويجية',
        order: 6,
        subModules: [
          {
            id: 'rm-6-1',
            title: 'استراتيجيات التسويق للمطاعم',
            order: 1,
          },
          {
            id: 'rm-6-2',
            title: 'دور السوشيال ميديا وتقييمات العملاء',
            order: 2,
          },
          {
            id: 'rm-6-3',
            title: 'العروض الترويجية',
            order: 3,
          },
          {
            id: 'rm-6-4',
            title: 'إدارة الولاء',
            order: 4,
          },
          {
            id: 'rm-6-5',
            title: 'تحليل المبيعات لتطوير القائمة والخدمة',
            order: 5,
          },
        ],
      },
      {
        id: 'rm-module-7',
        title: 'الرقابة المالية والإدارية',
        description: 'إعداد الموازنات، مؤشرات الأداء، والرقابة الداخلية',
        order: 7,
        subModules: [
          {
            id: 'rm-7-1',
            title: 'إعداد الموازنات التشغيلية',
            order: 1,
          },
          {
            id: 'rm-7-2',
            title: 'متابعة الإيرادات والمصروفات',
            order: 2,
          },
          {
            id: 'rm-7-3',
            title: 'مؤشرات الأداء الرئيسية في المطاعم',
            order: 3,
          },
          {
            id: 'rm-7-4',
            title: 'الرقابة الداخلية ومنع الهدر والسرقة',
            order: 4,
          },
          {
            id: 'rm-7-5',
            title: 'إعداد تقارير تشغيلية يومية/أسبوعية',
            order: 5,
          },
          {
            id: 'rm-7-6',
            title: 'تقارير لحظية للأداء والمبيعات',
            order: 6,
          },
        ],
      },
    ],
  },

  {
    id: 'financial-analysis',
    title: 'التحليل المالي وإعداد القوائم المالية',
    titleEn: 'Financial Analysis & Financial Statement Preparation',
    description:
      'برنامج تدريبي متخصص يهدف إلى تمكين المشاركين من فهم الأرقام المالية وتحليلها بدقة لاتخاذ قرارات استراتيجية سليمة. يوفّر الكورس مهارات عملية في قراءة القوائم المالية، تقييم الأداء، وإعداد الموازنات.',
    category: 'financial',
    level: 'intermediate',
    duration: '35 ساعة',
    hours: 35,
    featured: true,
    certificateOffered: true,
    rating: 4.9,
    studentsCount: 320,
    modules: [
      {
        id: 'fa-module-1',
        title: 'المقدمة والأهداف',
        order: 1,
        subModules: [
          {
            id: 'fa-1-1',
            title: 'أهمية التحليل المالي وإعداد الميزانيات',
            order: 1,
          },
          {
            id: 'fa-1-2',
            title: 'العلاقة بين التحليل المالي والتخطيط الاستراتيجي',
            order: 2,
          },
          {
            id: 'fa-1-3',
            title: 'دور التحليل المالي في اتخاذ القرار',
            order: 3,
          },
        ],
      },
      {
        id: 'fa-module-2',
        title: 'مدخل إلى القوائم المالية',
        order: 2,
        subModules: [
          {
            id: 'fa-2-1',
            title: 'أنواع القوائم المالية',
            description:
              'الميزانية العمومية – قائمة الدخل – التدفقات النقدية',
            order: 1,
          },
          {
            id: 'fa-2-2',
            title: 'كيفية قراءة القوائم المالية',
            order: 2,
          },
          {
            id: 'fa-2-3',
            title: 'العلاقة التكاملية بين القوائم المالية',
            order: 3,
          },
        ],
      },
      {
        id: 'fa-module-3',
        title: 'أسس التحليل المالي',
        order: 3,
        subModules: [
          {
            id: 'fa-3-1',
            title: 'تعريف التحليل المالي وأهدافه',
            order: 1,
          },
          {
            id: 'fa-3-2',
            title: 'مستخدمو التحليل المالي',
            description: 'الإدارة – المستثمرون – البنوك – الجهات الرقابية',
            order: 2,
          },
          {
            id: 'fa-3-3',
            title: 'أدوات التحليل المالي',
            description: 'التحليل الأفقي والرأسي والنسب المالية',
            order: 3,
          },
        ],
      },
      {
        id: 'fa-module-4',
        title: 'أدوات وتقنيات التحليل المالي',
        order: 4,
        subModules: [
          {
            id: 'fa-4-1',
            title: 'التحليل الأفقي',
            order: 1,
          },
          {
            id: 'fa-4-2',
            title: 'التحليل الرأسي',
            order: 2,
          },
          {
            id: 'fa-4-3',
            title: 'النسب المالية',
            order: 3,
          },
          {
            id: 'fa-4-4',
            title: 'تحليل التدفقات النقدية',
            order: 4,
          },
        ],
      },
      {
        id: 'fa-module-5',
        title: 'إعداد الميزانيات',
        order: 5,
        subModules: [
          {
            id: 'fa-5-1',
            title: 'مفهوم الموازنة التقديرية وأهدافها',
            order: 1,
          },
          {
            id: 'fa-5-2',
            title: 'أنواع الموازنات',
            order: 2,
          },
          {
            id: 'fa-5-3',
            title: 'الرقابة على تنفيذ الموازنة',
            order: 3,
          },
        ],
      },
      {
        id: 'fa-module-6',
        title: 'الجانب التطبيقي والعملي',
        order: 6,
        subModules: [
          {
            id: 'fa-6-1',
            title: 'تطبيق عملي على تحليل القوائم المالية',
            order: 1,
          },
          {
            id: 'fa-6-2',
            title: 'إعداد تقرير تحليلي للإدارة',
            order: 2,
          },
          {
            id: 'fa-6-3',
            title: 'إعداد موازنة تشغيلية ونقدية',
            order: 3,
          },
        ],
      },
    ],
  },

  {
    id: 'bank-reconciliations',
    title: 'إعداد التسويات البنكية والإجراءات المحاسبية',
    titleEn: 'Bank Reconciliations & Accounting Procedures',
    description:
      'برنامج تدريبي عملي يهدف إلى إكساب المشاركين المهارات الأساسية لإدارة العمليات المحاسبية اليومية بدقة، مع التركيز على إعداد وتنفيذ التسويات البنكية وفقًا للمعايير المهنية.',
    category: 'financial',
    level: 'beginner',
    duration: '25 ساعة',
    hours: 25,
    certificateOffered: true,
    rating: 4.7,
    studentsCount: 180,
    modules: [
      {
        id: 'br-module-1',
        title: 'تعريف التسويات البنكية وأهميتها',
        order: 1,
        subModules: [
          {
            id: 'br-1-1',
            title: 'مفهوم التسويات البنكية',
            order: 1,
          },
          {
            id: 'br-1-2',
            title: 'العلاقة بين الدفاتر المحاسبية وكشف الحساب البنكي',
            order: 2,
          },
          {
            id: 'br-1-3',
            title: 'دور التسويات في كشف الأخطاء والاحتيال',
            order: 3,
          },
        ],
      },
      {
        id: 'br-module-2',
        title: 'الأساسيات المحاسبية',
        order: 2,
        subModules: [
          {
            id: 'br-2-1',
            title: 'الإطار النظري للمحاسبة المالية',
            order: 1,
          },
          {
            id: 'br-2-2',
            title: 'أنواع الحسابات البنكية',
            order: 2,
          },
          {
            id: 'br-2-3',
            title: 'إجراءات الرقابة الداخلية على النقدية',
            order: 3,
          },
        ],
      },
      {
        id: 'br-module-3',
        title: 'خطوات إعداد التسويات البنكية',
        order: 3,
        subModules: [
          {
            id: 'br-3-1',
            title: 'استلام كشوف الحساب البنكي',
            order: 1,
          },
          {
            id: 'br-3-2',
            title: 'مطابقة حركات البنك مع قيود اليومية',
            order: 2,
          },
          {
            id: 'br-3-3',
            title: 'تحديد الفروق وتحليل أسبابها',
            order: 3,
          },
          {
            id: 'br-3-4',
            title: 'إعداد بيان التسوية البنكية',
            order: 4,
          },
        ],
      },
      {
        id: 'br-module-4',
        title: 'الإجراءات المحاسبية المرتبطة',
        order: 4,
        subModules: [
          {
            id: 'br-4-1',
            title: 'المعالجات المحاسبية للفوائد والمصاريف',
            order: 1,
          },
          {
            id: 'br-4-2',
            title: 'تسجيل قيود تصحيح الأخطاء',
            order: 2,
          },
          {
            id: 'br-4-3',
            title: 'معالجة الشيكات المرتجعة',
            order: 3,
          },
        ],
      },
      {
        id: 'br-module-5',
        title: 'الرقابة الداخلية والضبط',
        order: 5,
        subModules: [
          {
            id: 'br-5-1',
            title: 'المراجعة الدورية للتسويات',
            order: 1,
          },
          {
            id: 'br-5-2',
            title: 'مسؤوليات قسم الحسابات والمراجعة',
            order: 2,
          },
          {
            id: 'br-5-3',
            title: 'دور التسويات في منع الاحتيال',
            order: 3,
          },
        ],
      },
    ],
  },

  {
    id: 'inventory-audit',
    title: 'التسويات الجردية والرقابة',
    titleEn: 'Inventory Audit & Control',
    description:
      'برنامج تدريبي عملي يهدف إلى تمكين المشاركين من فهم وتنفيذ إجراءات الجرد بأنواعه، ومعالجة الفروقات الجردية بطريقة احترافية تضمن دقة السجلات المالية.',
    category: 'financial',
    level: 'beginner',
    duration: '20 ساعة',
    hours: 20,
    certificateOffered: true,
    rating: 4.6,
    studentsCount: 150,
    modules: [
      {
        id: 'ia-module-1',
        title: 'مفهوم التسويات الجردية',
        order: 1,
      },
      {
        id: 'ia-module-2',
        title: 'إجراءات الجرد',
        order: 2,
      },
      {
        id: 'ia-module-3',
        title: 'معالجة الفروقات الجردية',
        order: 3,
      },
      {
        id: 'ia-module-4',
        title: 'الرقابة على المخزون',
        order: 4,
      },
    ],
  },

  {
    id: 'financial-reports',
    title: 'التقارير المالية والمحاسبية',
    titleEn: 'Financial & Accounting Reports',
    description:
      'برنامج تدريبي متخصص يهدف إلى تطوير مهارات إعداد وقراءة وتحليل التقارير المالية والمحاسبية وفق المعايير المهنية المعتمدة.',
    category: 'financial',
    level: 'intermediate',
    duration: '30 ساعة',
    hours: 30,
    certificateOffered: true,
    rating: 4.8,
    studentsCount: 200,
    modules: [
      {
        id: 'fr-module-1',
        title: 'أنواع التقارير المالية',
        order: 1,
      },
      {
        id: 'fr-module-2',
        title: 'إعداد التقارير المحاسبية',
        order: 2,
      },
      {
        id: 'fr-module-3',
        title: 'تحليل التقارير المالية',
        order: 3,
      },
    ],
  },

  {
    id: 'warehouse-management',
    title: 'إدارة المخازن والمستودعات',
    titleEn: 'Warehouse & Inventory Management',
    description:
      'برنامج تدريبي عملي يهدف إلى تمكين المشاركين من فهم وإدارة دورة المخزون باحترافية عالية، من الاستلام والفحص وحتى الصرف والجرد.',
    category: 'management',
    level: 'beginner',
    duration: '28 ساعة',
    hours: 28,
    certificateOffered: true,
    rating: 4.7,
    studentsCount: 190,
    modules: [
      {
        id: 'wm-module-1',
        title: 'أساسيات إدارة المخازن',
        order: 1,
      },
      {
        id: 'wm-module-2',
        title: 'دورة المخزون',
        order: 2,
      },
      {
        id: 'wm-module-3',
        title: 'الضوابط الرقابية',
        order: 3,
      },
      {
        id: 'wm-module-4',
        title: 'تقليل الهدر والفواقد',
        order: 4,
      },
    ],
  },

  {
    id: 'procurement-management',
    title: 'إدارة المشتريات والتوريدات',
    titleEn: 'Procurement & Supply Chain Management',
    description:
      'برنامج تدريبي متخصص يهدف إلى تمكين المشاركين من إدارة عمليات الشراء والتوريد بكفاءة عالية لضمان توفير المواد والخدمات بالجودة المناسبة والتكلفة المثلى.',
    category: 'management',
    level: 'intermediate',
    duration: '32 ساعة',
    hours: 32,
    certificateOffered: true,
    rating: 4.8,
    studentsCount: 220,
    modules: [
      {
        id: 'pm-module-1',
        title: 'أساسيات إدارة المشتريات',
        order: 1,
      },
      {
        id: 'pm-module-2',
        title: 'التفاوض مع الموردين',
        order: 2,
      },
      {
        id: 'pm-module-3',
        title: 'تقييم واختيار الموردين',
        order: 3,
      },
      {
        id: 'pm-module-4',
        title: 'إدارة العقود',
        order: 4,
      },
      {
        id: 'pm-module-5',
        title: 'سلسلة الإمداد',
        order: 5,
      },
    ],
  },

  {
    id: 'financial-empowerment',
    title: 'التمكين المالي من التأسيس إلى الاحتراف',
    titleEn: 'Financial Empowerment: Foundation to Professional',
    description:
      'برنامج تدريبي شامل يهدف إلى تأهيل المشاركين بالمعرفة والمهارات الأساسية في المالية والمحاسبة، مرورًا بإنشاء دليل الحسابات وتسجيل القيود اليومية، وصولًا إلى إعداد التقارير المالية.',
    category: 'financial',
    level: 'beginner',
    duration: '50 ساعة',
    hours: 50,
    featured: true,
    certificateOffered: true,
    rating: 4.9,
    studentsCount: 350,
    modules: [
      {
        id: 'fe-module-1',
        title: 'أساسيات المحاسبة المالية',
        order: 1,
      },
      {
        id: 'fe-module-2',
        title: 'إنشاء دليل الحسابات',
        order: 2,
      },
      {
        id: 'fe-module-3',
        title: 'تسجيل القيود اليومية',
        order: 3,
      },
      {
        id: 'fe-module-4',
        title: 'إعداد القوائم المالية',
        order: 4,
      },
      {
        id: 'fe-module-5',
        title: 'تحليل الأداء المالي',
        order: 5,
      },
    ],
  },

  {
    id: 'entrepreneurship',
    title: 'ريادة الأعمال',
    titleEn: 'Entrepreneurship',
    description:
      'برنامج تدريبي عملي يهدف إلى تمكين المشاركين من تأسيس وإدارة مشاريع ناجحة وتحويل الأفكار إلى فرص واقعية. يغطي الكورس تخطيط الأعمال، تطوير الأفكار الابتكارية، إعداد دراسات الجدوى.',
    category: 'business',
    level: 'beginner',
    duration: '38 ساعة',
    hours: 38,
    featured: true,
    certificateOffered: true,
    rating: 4.9,
    studentsCount: 280,
    modules: [
      {
        id: 'ent-module-1',
        title: 'أساسيات ريادة الأعمال',
        order: 1,
      },
      {
        id: 'ent-module-2',
        title: 'تطوير الأفكار وتحويلها إلى فرص',
        order: 2,
      },
      {
        id: 'ent-module-3',
        title: 'إعداد دراسات الجدوى',
        order: 3,
      },
      {
        id: 'ent-module-4',
        title: 'التمويل وإدارة المخاطر',
        order: 4,
      },
      {
        id: 'ent-module-5',
        title: 'استراتيجيات التوسع والفرنشيز',
        order: 5,
      },
    ],
  },
];

export const internalAuditProgram: InternalAuditProgram = {
  id: 'internal-audit-program',
  title: 'برنامج المراجعة الداخلية المتكامل',
  titleEn: 'Comprehensive Internal Audit Program',
  description:
    'برنامج تدريبي متكامل يغطي ثلاثة مستويات: التأسيس، الريادة، وتطوير الكفاءات. يهدف إلى بناء مراجعين داخليين محترفين قادرين على إدارة وظيفة المراجعة الداخلية بكفاءة عالية.',
  totalDuration: '120+ ساعة تدريبية',
  certification: 'شهادة معتمدة في المراجعة الداخلية',
  levels: [
    {
      id: 'level-1-foundation',
      title: 'المستوى الأول: التأسيس',
      titleEn: 'Level 1: Foundation',
      description:
        'بناء الأسس الصحيحة لإدارة المراجعة الداخلية من الصفر حتى الاحتراف',
      order: 1,
      duration: '45 ساعة',
      objectives: [
        'تأسيس إدارة مراجعة داخلية احترافية',
        'إعداد خطة المراجعة السنوية المبنية على المخاطر',
        'تنفيذ برامج المراجعة وفق المعايير الدولية',
        'إعداد تقارير مراجعة احترافية',
        'متابعة تنفيذ التوصيات بفعالية',
      ],
      modules: [
        {
          id: 'ia-l1-m1',
          title: 'تأسيس إدارة المراجعة الداخلية',
          description: 'المفاهيم الأساسية والدور الاستراتيجي',
          order: 1,
          subModules: [
            {
              id: 'ia-l1-m1-1',
              title: 'المفهوم والدور الاستراتيجي للمراجعة الداخلية',
              order: 1,
            },
            {
              id: 'ia-l1-m1-2',
              title: 'المعايير والكفاءات ومنهجية التدقيق',
              order: 2,
            },
            {
              id: 'ia-l1-m1-3',
              title: 'أخلاقيات المهنة',
              order: 3,
            },
            {
              id: 'ia-l1-m1-4',
              title: 'ميثاق المراجعة الداخلية',
              order: 4,
            },
            {
              id: 'ia-l1-m1-5',
              title: 'هيكل الإدارة – الصلاحيات – المسؤوليات',
              order: 5,
            },
          ],
        },
        {
          id: 'ia-l1-m2',
          title: 'إعداد خطة المراجعة السنوية',
          description: 'المنهجية المبنية على المخاطر',
          order: 2,
          subModules: [
            {
              id: 'ia-l1-m2-1',
              title: 'مفهوم المراجعة المبنية على المخاطر',
              order: 1,
            },
            {
              id: 'ia-l1-m2-2',
              title: 'خطوات إعداد الخطة السنوية خطوة بخطوة',
              order: 2,
            },
            {
              id: 'ia-l1-m2-3',
              title: 'مصفوفة المخاطر',
              order: 3,
            },
            {
              id: 'ia-l1-m2-4',
              title: 'تحديث الخطة ومراجعتها خلال العام',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l1-m3',
          title: 'إعداد برنامج المراجعة',
          description: 'تحويل الخطة إلى برامج تنفيذية',
          order: 3,
          subModules: [
            {
              id: 'ia-l1-m3-1',
              title: 'خطوات برنامج المهمة',
              order: 1,
            },
            {
              id: 'ia-l1-m3-2',
              title: 'ملف أوراق العمل',
              order: 2,
            },
            {
              id: 'ia-l1-m3-3',
              title: 'تحديد نطاق العمل',
              order: 3,
            },
            {
              id: 'ia-l1-m3-4',
              title: 'توثيق البرنامج واعتماده',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l1-m4',
          title: 'تنفيذ إجراءات المراجعة',
          description: 'جمع الأدلة والتحقق من الضوابط',
          order: 4,
          subModules: [
            {
              id: 'ia-l1-m4-1',
              title: 'خطوات جمع الأدلة',
              order: 1,
            },
            {
              id: 'ia-l1-m4-2',
              title: 'أدوات وأساليب المراجعة',
              order: 2,
            },
            {
              id: 'ia-l1-m4-3',
              title: 'التحقق من الضوابط الداخلية',
              order: 3,
            },
            {
              id: 'ia-l1-m4-4',
              title: 'توثيق النتائج في أوراق العمل',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l1-m5',
          title: 'تحليل النتائج وتقييم المخاطر',
          description: 'الربط بين النتائج والأهداف الاستراتيجية',
          order: 5,
          subModules: [
            {
              id: 'ia-l1-m5-1',
              title: 'التمييز بين الملاحظة والنتيجة والاستنتاج',
              order: 1,
            },
            {
              id: 'ia-l1-m5-2',
              title: 'تقييم فعالية الرقابة الداخلية',
              order: 2,
            },
            {
              id: 'ia-l1-m5-3',
              title: 'الربط بين النتائج والأهداف الاستراتيجية',
              order: 3,
            },
          ],
        },
        {
          id: 'ia-l1-m6',
          title: 'إعداد التقارير',
          description: 'كتابة تقارير احترافية وموضوعية',
          order: 6,
          subModules: [
            {
              id: 'ia-l1-m6-1',
              title: 'مكونات تقرير المراجعة',
              order: 1,
            },
            {
              id: 'ia-l1-m6-2',
              title: 'أسلوب صياغة الملاحظات باحترافية',
              order: 2,
            },
            {
              id: 'ia-l1-m6-3',
              title: 'تقارير تفصيلية مقابل تقارير مختصرة',
              order: 3,
            },
            {
              id: 'ia-l1-m6-4',
              title: 'ضمان الموضوعية والحيادية',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l1-m7',
          title: 'متابعة تنفيذ التوصيات',
          description: 'آليات المتابعة والتقارير الدورية',
          order: 7,
          subModules: [
            {
              id: 'ia-l1-m7-1',
              title: 'آلية وضع خطة عمل لتنفيذ التوصيات',
              order: 1,
            },
            {
              id: 'ia-l1-m7-2',
              title: 'تحديد المسؤوليات والجدول الزمني',
              order: 2,
            },
            {
              id: 'ia-l1-m7-3',
              title: 'المتابعة الدورية',
              order: 3,
            },
            {
              id: 'ia-l1-m7-4',
              title: 'رفع تقارير متابعة للإدارة العليا',
              order: 4,
            },
          ],
        },
      ],
    },
    {
      id: 'level-2-leadership',
      title: 'المستوى الثاني: الريادة في المراجعة الداخلية',
      titleEn: 'Level 2: Internal Audit Leadership',
      description: 'تطوير المهارات المتقدمة وقيادة وظيفة المراجعة الداخلية',
      order: 2,
      duration: '45 ساعة',
      objectives: [
        'إتقان إطار COSO لتقييم الرقابة الداخلية',
        'تقييم وتحسين أداء المراجعة الداخلية',
        'مراجعة نظم وأمن المعلومات (IT Audit)',
        'تطبيق منهجية COBIT في حوكمة تكنولوجيا المعلومات',
        'كشف ومنع الاحتيال بأنواعه',
      ],
      modules: [
        {
          id: 'ia-l2-m1',
          title: 'إطار COSO لتقييم الرقابة الداخلية',
          description: 'المرجع العالمي لتصميم وتقييم أنظمة الرقابة',
          order: 1,
          subModules: [
            {
              id: 'ia-l2-m1-1',
              title: 'المبادئ الخمسة لإطار COSO',
              order: 1,
            },
            {
              id: 'ia-l2-m1-2',
              title: 'تقييم الرقابة الداخلية وفق COSO',
              order: 2,
            },
            {
              id: 'ia-l2-m1-3',
              title: 'حماية الأصول ودقة التقارير',
              order: 3,
            },
          ],
        },
        {
          id: 'ia-l2-m2',
          title: 'التقييم المستمر وتحسين الأداء',
          description: 'مراقبة جودة المراجعة الداخلية',
          order: 2,
          subModules: [
            {
              id: 'ia-l2-m2-1',
              title: 'أدوات التقييم الذاتي',
              order: 1,
            },
            {
              id: 'ia-l2-m2-2',
              title: 'المراجعة الخارجية للجودة',
              order: 2,
            },
            {
              id: 'ia-l2-m2-3',
              title: 'تحديد فجوات الأداء',
              order: 3,
            },
            {
              id: 'ia-l2-m2-4',
              title: 'وضع خطة تطوير الكفاءات',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l2-m3',
          title: 'مراجعة نظم وأمن المعلومات (IT Audit)',
          description: 'التحول الرقمي والرقابة على أنظمة تكنولوجيا المعلومات',
          order: 3,
          subModules: [
            {
              id: 'ia-l2-m3-1',
              title: 'تقييم ضوابط الوصول والصلاحيات',
              order: 1,
            },
            {
              id: 'ia-l2-m3-2',
              title: 'مراجعة التطبيقات والأنظمة',
              order: 2,
            },
            {
              id: 'ia-l2-m3-3',
              title: 'تحليل البيانات باستخدام ACL, IDEA, Power BI',
              order: 3,
            },
            {
              id: 'ia-l2-m3-4',
              title: 'ضوابط الحوكمة الرقمية',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l2-m4',
          title: 'منهجية COBIT',
          description: 'حوكمة تكنولوجيا المعلومات',
          order: 4,
          subModules: [
            {
              id: 'ia-l2-m4-1',
              title: 'أهمية COBIT في حوكمة تكنولوجيا المعلومات',
              order: 1,
            },
            {
              id: 'ia-l2-m4-2',
              title: 'العلاقة بين COBIT وإطار COSO',
              order: 2,
            },
          ],
        },
        {
          id: 'ia-l2-m5',
          title: 'الاحتيال',
          description: 'كشف ومنع الاحتيال في المؤسسات',
          order: 5,
          subModules: [
            {
              id: 'ia-l2-m5-1',
              title: 'أنواع الاحتيال (المالي، التشغيلي، الإلكتروني)',
              order: 1,
            },
            {
              id: 'ia-l2-m5-2',
              title: 'تحليل المخاطر الاحتيالية',
              order: 2,
            },
            {
              id: 'ia-l2-m5-3',
              title: 'ضوابط الوقاية والمكافحة',
              order: 3,
            },
            {
              id: 'ia-l2-m5-4',
              title: 'الإبلاغ والتحقيق في الاحتيال',
              order: 4,
            },
          ],
        },
        {
          id: 'ia-l2-m6',
          title: 'الحوكمة - المخاطر - الامتثال',
          description: 'إطار متكامل للحوكمة والرقابة',
          order: 6,
          subModules: [
            {
              id: 'ia-l2-m6-1',
              title: 'تصميم برامج حوكمة متكاملة',
              order: 1,
            },
            {
              id: 'ia-l2-m6-2',
              title: 'دمج الحوكمة مع إدارة المخاطر',
              order: 2,
            },
            {
              id: 'ia-l2-m6-3',
              title: 'الامتثال للقوانين الدولية والمحلية',
              order: 3,
            },
          ],
        },
        {
          id: 'ia-l2-m7',
          title: 'حالات عملية متقدمة',
          description: 'تطبيقات عملية من بيئات مختلفة',
          order: 7,
          subModules: [
            {
              id: 'ia-l2-m7-1',
              title: 'حالات من بيئات صناعية ومالية',
              order: 1,
            },
            {
              id: 'ia-l2-m7-2',
              title: 'محاكاة جلسات مراجعة أمام لجنة تدقيق',
              order: 2,
            },
          ],
        },
      ],
    },
    {
      id: 'level-3-competency',
      title: 'المستوى الثالث: تطوير الكفاءات المتكاملة',
      titleEn: 'Level 3: Integrated Competency Development',
      description: 'تطوير المهارات الشاملة للمراجع الداخلي المحترف',
      order: 3,
      duration: '30+ ساعة',
      objectives: [
        'إتقان المهارات المالية لغير الماليين',
        'تطوير مهارات الحاسب الآلي واللغة الإنجليزية',
        'إتقان مهارات الإقناع والتفاوض',
        'إتقان كتابة التقارير الاحترافية',
        'تطوير مهارات التواصل مع القيادات',
      ],
      modules: [
        {
          id: 'ia-l3-m1',
          title: 'المهارات المالية لغير الماليين',
          description: 'فهم القوائم المالية والتحليل المالي المبسط',
          order: 1,
          subModules: [
            {
              id: 'ia-l3-m1-1',
              title: 'فهم القوائم المالية الأساسية',
              order: 1,
            },
            {
              id: 'ia-l3-m1-2',
              title: 'مؤشرات الأداء المالي الرئيسية',
              order: 2,
            },
            {
              id: 'ia-l3-m1-3',
              title: 'التحليل المالي المبسط',
              order: 3,
            },
          ],
        },
        {
          id: 'ia-l3-m2',
          title: 'مهارات الحاسب الآلي واللغة الإنجليزية',
          description: 'الأدوات التقنية واللغة المهنية',
          order: 2,
          subModules: [
            {
              id: 'ia-l3-m2-1',
              title: 'المصطلحات المالية والمحاسبية بالإنجليزية',
              order: 1,
            },
            {
              id: 'ia-l3-m2-2',
              title: 'PowerPoint: عروض احترافية',
              order: 2,
            },
            {
              id: 'ia-l3-m2-3',
              title: 'Excel و Power BI لتحليل البيانات',
              order: 3,
            },
          ],
        },
        {
          id: 'ia-l3-m3',
          title: 'مهارات الإقناع والتفاوض وكتابة التقارير',
          description: 'التواصل الفعال والتأثير',
          order: 3,
          subModules: [
            {
              id: 'ia-l3-m3-1',
              title: 'إتقان فن إقناع الإدارة العليا',
              order: 1,
            },
            {
              id: 'ia-l3-m3-2',
              title: 'توظيف البيانات في صياغة الآراء',
              order: 2,
            },
            {
              id: 'ia-l3-m3-3',
              title: 'مهارات التواصل مع أنماط القيادات',
              order: 3,
            },
          ],
        },
      ],
    },
  ],
};
