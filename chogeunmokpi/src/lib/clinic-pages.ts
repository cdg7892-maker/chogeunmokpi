export type ClinicCondition = {
  slug: string;
  title: string;
  group: string;
  summary: string;
};

export type ClinicPageData = {
  slug: "pediatric" | "head-face" | "women";
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  badges: string[];
  concernsTitle: string;
  concernsLead: string;
  concerns: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  diagnosisLabel: string;
  diagnosisTitle: string;
  diagnosisParagraphs: string[];
  principles: Array<{
    title: string;
    desc: string;
  }>;
  quizTitle: string;
  quizQuestion: string;
  quizOptions: string[];
  solutionTitle: string;
  solutionLead: string;
  solutions: Array<{
    title: string;
    symptoms: string[];
    pattern: string;
    treatment: string;
    desc: string;
  }>;
  programTitle: string;
  programs: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  doctorMessage: string;
  processTitle: string;
  process: Array<{
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  conditionsTitle: string;
  conditions: ClinicCondition[];
};

export const pediatricConditions: ClinicCondition[] = [
  { slug: "growth", title: "성장 부진", group: "소아·수험생", summary: "키 성장, 체중, 식욕, 수면 리듬을 함께 살피는 성장 안내입니다." },
  { slug: "exam-fatigue", title: "수험생 피로", group: "소아·수험생", summary: "집중력 저하와 오후 방전감을 체력과 뇌 피로 관점에서 봅니다." },
  { slug: "weak-child", title: "허약아", group: "소아·수험생", summary: "감기, 식욕부진, 잦은 피로가 반복되는 아이의 회복력을 다룹니다." },
  { slug: "rhinitis", title: "소아 비염", group: "소아·수험생", summary: "코막힘과 구강호흡, 수면 질 저하를 함께 보는 안내입니다." },
  { slug: "digestive", title: "소아 소화불량", group: "소아·수험생", summary: "밥을 잘 먹지 않거나 배앓이가 잦은 아이의 비위 기능을 살핍니다." },
  { slug: "sleep", title: "수면·야제", group: "소아·수험생", summary: "잠투정, 얕은 수면, 성장 리듬을 함께 정리합니다." },
  { slug: "attention", title: "집중력 저하", group: "소아·수험생", summary: "산만함과 학습 피로를 뇌 에너지와 생활 리듬에서 봅니다." },
  { slug: "puberty", title: "성조숙·사춘기 관리", group: "소아·수험생", summary: "성장판과 체중, 호르몬 변화 흐름을 조심스럽게 살핍니다." },
];

export const headFaceConditions: ClinicCondition[] = [
  { slug: "headache", title: "두통", group: "두면부", summary: "반복되는 머리 통증을 긴장, 혈류, 소화와 함께 살핍니다." },
  { slug: "dizziness", title: "어지럼증", group: "두면부", summary: "핑 도는 느낌과 불안정감을 자율신경과 순환 관점에서 정리합니다." },
  { slug: "migraine", title: "편두통", group: "두면부", summary: "한쪽 머리 통증과 빛·소리 예민함을 함께 보는 안내입니다." },
  { slug: "brain-fog", title: "브레인포그", group: "두면부", summary: "머리가 멍하고 집중이 흐려지는 상태를 회복 관점에서 다룹니다." },
  { slug: "neck-shoulder", title: "목·어깨 긴장", group: "두면부", summary: "두통으로 이어지는 목과 어깨의 긴장, 순환 저하를 살핍니다." },
  { slug: "tinnitus", title: "이명", group: "두면부", summary: "귀울림과 두면부 순환 저하, 피로 흐름을 함께 봅니다." },
  { slug: "facial-flushing", title: "안면홍조", group: "두면부", summary: "위로 뜨는 열감과 얼굴 붉어짐을 체열 균형에서 정리합니다." },
  { slug: "eye-fatigue", title: "눈 피로", group: "두면부", summary: "눈의 피로와 머리 무거움, 집중 저하를 함께 보는 안내입니다." },
];

export const womenConditions: ClinicCondition[] = [
  { slug: "menstrual-pain", title: "생리통", group: "여성질환", summary: "반복되는 통증을 자궁 냉증, 어혈, 순환 관점에서 살핍니다." },
  { slug: "irregular-period", title: "생리불순", group: "여성질환", summary: "주기 변화와 컨디션 저하를 호르몬 리듬과 체력에서 봅니다." },
  { slug: "pms", title: "월경전증후군", group: "여성질환", summary: "예민함, 붓기, 두통, 피로가 반복되는 흐름을 정리합니다." },
  { slug: "infertility", title: "난임 관리", group: "여성질환", summary: "몸의 온도와 순환, 기혈 회복을 중심으로 임신 준비를 돕습니다." },
  { slug: "postpartum", title: "산후 회복", group: "여성질환", summary: "출산 후 기혈 손상과 관절 시림, 피로 회복을 다룹니다." },
  { slug: "menopause", title: "갱년기", group: "여성질환", summary: "상열감, 불면, 감정 변화, 진액 부족을 함께 보는 안내입니다." },
  { slug: "cold-uterus", title: "자궁 냉증", group: "여성질환", summary: "아랫배 냉감과 순환 저하, 통증을 온열 회복 관점에서 살핍니다." },
  { slug: "vaginitis", title: "반복 질염", group: "여성질환", summary: "면역 저하와 습담, 생활 리듬을 함께 정리합니다." },
];

export const clinicPages: Record<ClinicPageData["slug"], ClinicPageData> = {
  pediatric: {
    slug: "pediatric",
    eyebrow: "성장과 학습의 균형",
    title: "소아·수험생 클리닉",
    subtitle: "아이의 성장과 집중력, 체력의 바탕을 함께 세웁니다.",
    description: "잘 먹고, 잘 자고, 잘 회복하는 힘이 성장과 학습의 시작입니다.",
    heroImage: "/images/programs/pediatric-hero.png",
    heroAlt: "소아 성장 상담을 받는 아이와 보호자",
    badges: ["성장·허약 체질 관리", "수험생 집중력 회복"],
    concernsTitle: "키와 성적만 보다가, 아이의 체력을 놓치고 있나요?",
    concernsLead: "성장과 학습은 몸의 에너지가 안정되어야 이어집니다.",
    concerns: [
      { icon: "🌱", title: "성장 부진", desc: "또래보다 작거나 체중이 늘지 않고 식욕이 약합니다." },
      { icon: "📚", title: "수험생 피로", desc: "졸음과 두통, 집중력 저하가 반복됩니다." },
      { icon: "🛡️", title: "잦은 감기", desc: "면역력이 약해 환절기마다 컨디션이 무너집니다." },
      { icon: "🌙", title: "수면 리듬 저하", desc: "깊이 자지 못하고 아침에 개운하지 않습니다." },
    ],
    diagnosisLabel: "특별 진단 시스템",
    diagnosisTitle: "성장은 비위, 수면, 순환이 함께 움직여야 합니다",
    diagnosisParagraphs: [
      "아이의 성장은 단순히 키만의 문제가 아닙니다. 소화 흡수, 수면의 질, 호흡기 면역, 스트레스 회복력이 함께 맞물려야 성장 에너지가 만들어집니다.",
      "수험생의 집중력도 마찬가지입니다. 뇌가 오래 버티려면 몸의 기혈이 충분하고, 목과 어깨의 긴장, 소화 부담, 수면 리듬이 안정되어야 합니다.",
      "초근목피 한의원에서는 성장과 학습을 따로 보지 않고 아이의 체질, 생활 리듬, 비위 기능, 피로 누적을 함께 살펴 맞춤 처방을 설계합니다.",
    ],
    principles: [
      { title: "성장 재료 흡수", desc: "키 성장의 출발점은 많이 먹이는 것이 아니라 먹은 것을 소화하고 흡수해 뼈와 근육의 재료로 바꾸는 힘입니다." },
      { title: "수면·성장 리듬", desc: "깊은 잠, 규칙적인 식사, 낮 활동량을 함께 조절해 성장 호르몬이 편하게 작동하는 몸의 리듬을 만듭니다." },
      { title: "뇌 피로와 집중력", desc: "수험생의 멍함과 졸림은 의지 문제가 아니라 기혈 부족, 목·어깨 긴장, 수면 부채가 겹친 신호일 수 있습니다." },
      { title: "호흡기·면역 기반", desc: "비염과 잦은 감기로 잠이 얕아지면 성장과 학습이 모두 흔들리므로 폐기와 비위의 면역 기반을 함께 다집니다." },
    ],
    quizTitle: "소아·수험생 성장 미니 진단",
    quizQuestion: "현재 아이에게 가장 필요한 관리는 무엇인가요?",
    quizOptions: ["성장과 식욕 관리", "수험생 피로 회복", "잦은 감기·비염 관리", "수면과 생활 리듬 안정"],
    solutionTitle: "상황별 맞춤 성장·학습 처방",
    solutionLead: "아이의 나이와 생활 리듬에 따라 처방의 방향도 달라져야 합니다.",
    solutions: [
      { title: "잘 먹지 않고 작은 아이", symptoms: ["식욕이 약함", "체중 증가가 더딤", "배앓이가 잦음"], pattern: "비위 허약, 기혈 부족", treatment: "성장 보강 한약", desc: "소화 흡수와 기혈 생성을 도와 성장 기반을 세웁니다." },
      { title: "오래 앉아 있기 힘든 수험생", symptoms: ["졸음과 집중 저하", "두통과 눈 피로", "시험 전 체력 저하"], pattern: "심비 양허, 뇌 피로", treatment: "수험생 총명 처방", desc: "피로 회복과 집중 유지력을 함께 돕습니다." },
      { title: "감기와 비염이 잦은 아이", symptoms: ["코막힘과 구강호흡", "환절기 감기", "수면 질 저하"], pattern: "폐기 허약, 면역 저하", treatment: "면역 보강 처방", desc: "호흡기와 면역 기반을 다져 컨디션 변동을 줄입니다." },
    ],
    programTitle: "초근목피 성장·수험생 프로그램",
    programs: [
      { icon: "🌿", title: "체질 맞춤 한약", desc: "성장, 식욕, 피로, 면역 흐름에 맞춰 처방합니다." },
      { icon: "📍", title: "성장 순환 치료", desc: "긴장과 순환 저하를 풀어 성장 환경을 돕습니다." },
      { icon: "📝", title: "생활 리듬 코칭", desc: "수면, 식사, 운동, 학습 리듬을 현실적으로 조정합니다." },
    ],
    doctorMessage: "아이의 성장은 숫자보다 리듬입니다. 몸이 편안해야 키도, 집중력도 따라옵니다.",
    processTitle: "성장·학습 관리 절차",
    process: [
      { title: "성장·생활 상담", desc: "키, 체중, 식사, 수면, 학습 리듬을 확인합니다." },
      { title: "체질 평가", desc: "비위와 호흡기, 피로 누적 상태를 함께 살핍니다." },
      { title: "맞춤 처방", desc: "성장 보강과 집중력 회복 방향을 정합니다." },
      { title: "리듬 관리", desc: "가정에서 이어갈 식사와 수면 습관을 안내합니다." },
    ],
    faqs: [
      { q: "성장 한약은 언제 시작하면 좋나요?", a: "성장 속도가 떨어지거나 식욕, 수면, 체력이 함께 흔들릴 때 상담을 권합니다." },
      { q: "수험생 보약은 졸리지 않나요?", a: "무작정 진정시키는 방향이 아니라 피로를 회복하고 집중 유지력을 돕는 방향으로 처방합니다." },
      { q: "비염이 성장에 영향을 주나요?", a: "코막힘으로 수면 질이 떨어지면 성장과 집중력 모두 영향을 받을 수 있어 함께 관리합니다." },
    ],
    conditionsTitle: "소아·수험생 질환별 치료 안내",
    conditions: pediatricConditions,
  },
  "head-face": {
    slug: "head-face",
    eyebrow: "맑은 머리와 순환 회복",
    title: "두면부 클리닉",
    subtitle: "두통과 어지럼증, 뇌 혈류와 목·어깨 긴장을 함께 봅니다.",
    description: "머리만의 문제가 아니라 몸 전체의 순환과 긴장 흐름을 살펴야 합니다.",
    heroImage: "/images/programs/head-face-hero.png",
    heroAlt: "두통과 어지럼 상담을 받는 환자",
    badges: ["두통·어지럼 집중 진료", "목·어깨 순환 관리"],
    concernsTitle: "머리가 무겁고, 눈앞이 흔들리는 날이 반복되나요?",
    concernsLead: "위로 뜬 열과 막힌 순환, 긴장된 근육을 함께 풀어야 합니다.",
    concerns: [
      { icon: "🌀", title: "어지럼증", desc: "핑 돌거나 중심이 흔들리는 느낌이 반복됩니다." },
      { icon: "⚡", title: "두통·편두통", desc: "머리가 조이고 욱신거리며 빛과 소리에 예민합니다." },
      { icon: "🌫️", title: "브레인포그", desc: "머리가 멍하고 생각이 선명하게 이어지지 않습니다." },
      { icon: "🧊", title: "목·어깨 긴장", desc: "뒷목이 뻣뻣하고 통증이 머리까지 이어집니다." },
    ],
    diagnosisLabel: "특별 진단 시스템",
    diagnosisTitle: "두면부 증상은 열, 담, 어혈의 흐름을 함께 봐야 합니다",
    diagnosisParagraphs: [
      "두통과 어지럼증은 머리에서 느껴지지만 원인은 목·어깨 긴장, 위장 부담, 수면 저하, 스트레스와 자율신경 불균형에 걸쳐 있을 수 있습니다.",
      "위로 뜬 열이 내려가지 못하거나, 담과 어혈이 순환을 막으면 머리가 무겁고 눈이 피로하며 어지럼이 반복됩니다.",
      "초근목피 한의원에서는 두면부 증상을 국소 통증으로만 보지 않고 몸의 열 분포, 기혈 순환, 소화와 수면 상태를 함께 평가합니다.",
    ],
    principles: [
      { title: "상열 조절", desc: "위로 몰린 열을 내리고 머리의 답답함을 줄입니다." },
      { title: "어혈·담 제거", desc: "막힌 순환과 노폐물 정체를 풀어 뇌 혈류를 돕습니다." },
      { title: "목·어깨 이완", desc: "긴장성 두통으로 이어지는 근막 긴장을 완화합니다." },
      { title: "자율신경 안정", desc: "어지럼과 불안정감을 악화시키는 긴장 반응을 낮춥니다." },
    ],
    quizTitle: "두면부 미니 진단",
    quizQuestion: "현재 가장 불편한 두면부 증상은 무엇인가요?",
    quizOptions: ["반복되는 두통", "핑 도는 어지럼", "머리가 멍한 브레인포그", "목·어깨 긴장과 눈 피로"],
    solutionTitle: "증상별 맞춤 두면부 솔루션",
    solutionLead: "통증의 위치보다 반복되는 패턴과 동반 증상을 함께 봅니다.",
    solutions: [
      { title: "조이고 욱신거리는 두통", symptoms: ["뒷목이 뻣뻣함", "스트레스 후 악화", "눈 피로 동반"], pattern: "간기 울결, 근긴장", treatment: "긴장 완화 한약·침", desc: "목과 어깨의 긴장, 위로 몰린 열을 함께 조절합니다." },
      { title: "핑 도는 어지럼증", symptoms: ["일어날 때 어지러움", "속 울렁거림", "불안정감"], pattern: "담음, 기혈 허약", treatment: "담음 제거·기혈 보강", desc: "담과 순환 저하를 풀어 머리의 안정감을 돕습니다." },
      { title: "멍하고 무거운 머리", symptoms: ["집중력 저하", "수면 후에도 무거움", "소화 불편"], pattern: "비위 담습, 뇌 피로", treatment: "소화·순환 회복 처방", desc: "몸의 노폐물 정체와 피로를 줄여 선명한 컨디션을 회복합니다." },
    ],
    programTitle: "초근목피 두면부 치료 프로그램",
    programs: [
      { icon: "🌿", title: "순환 회복 한약", desc: "열, 담, 어혈의 패턴에 맞춰 두면부 순환을 돕습니다." },
      { icon: "📍", title: "두면부·경항부 침 치료", desc: "목과 어깨, 머리 주변 긴장을 세밀하게 풀어냅니다." },
      { icon: "🫖", title: "수면·소화 관리", desc: "두통과 어지럼을 악화시키는 생활 리듬을 조정합니다." },
    ],
    doctorMessage: "반복되는 두통은 참는 문제가 아닙니다. 머리로 몰린 부담을 몸 전체의 흐름에서 풀어야 합니다.",
    processTitle: "두면부 진료 절차",
    process: [
      { title: "증상 패턴 확인", desc: "통증 위치, 시간대, 어지럼 양상, 동반 증상을 봅니다." },
      { title: "순환·긴장 평가", desc: "목·어깨 긴장과 소화, 수면, 스트레스 흐름을 살핍니다." },
      { title: "맞춤 치료", desc: "한약과 침 치료로 열과 담, 어혈을 조절합니다." },
      { title: "재발 관리", desc: "자세, 수면, 식사 리듬까지 이어서 관리합니다." },
    ],
    faqs: [
      { q: "두통이 오래됐는데 한방 치료가 도움이 되나요?", a: "반복 패턴과 동반 증상을 살펴 긴장, 열, 순환 저하를 함께 조절하면 재발 관리에 도움이 됩니다." },
      { q: "어지럼증도 치료 대상인가요?", a: "검사상 큰 이상이 없지만 반복되는 어지럼은 담음, 기혈 부족, 자율신경 긴장과 함께 살펴볼 수 있습니다." },
      { q: "목·어깨 치료도 같이 하나요?", a: "두면부 증상은 경항부 긴장과 연결되는 경우가 많아 필요 시 함께 치료합니다." },
    ],
    conditionsTitle: "두면부 질환별 치료 안내",
    conditions: headFaceConditions,
  },
  women: {
    slug: "women",
    eyebrow: "여성의 온도와 리듬 회복",
    title: "여성질환 클리닉",
    subtitle: "자궁은 전신의 거울입니다. 냉해진 몸을 따뜻하게, 막힌 순환을 부드럽게.",
    description: "생리통, 생리불순, 산후 회복, 갱년기까지 여성의 생애 리듬을 함께 봅니다.",
    heroImage: "/images/programs/women-hero.png",
    heroAlt: "여성질환 상담을 받는 환자",
    badges: ["생리통·생리불순 집중 진료", "산후·갱년기 회복 관리"],
    concernsTitle: "매달 반복되는 통증과 불편함, 당연하게 참고 있나요?",
    concernsLead: "여성질환은 몸의 온도, 혈류, 호르몬 리듬을 함께 회복해야 합니다.",
    concerns: [
      { icon: "🌙", title: "생리통·PMS", desc: "통증, 붓기, 예민함이 주기적으로 반복됩니다." },
      { icon: "🔥", title: "자궁 냉증", desc: "아랫배가 차고 손발이 시리며 순환이 약합니다." },
      { icon: "🌸", title: "난임·임신 준비", desc: "몸의 리듬과 기혈을 안정적으로 준비합니다." },
      { icon: "🍃", title: "산후·갱년기", desc: "출산 후 회복과 갱년기 상열감, 불면을 살핍니다." },
    ],
    diagnosisLabel: "특별 진단 시스템",
    diagnosisTitle: "여성질환은 자궁만이 아니라 전신의 균형 문제입니다",
    diagnosisParagraphs: [
      "생리통과 생리불순은 자궁의 문제로만 보이지만 실제로는 냉증, 어혈, 스트레스, 소화 기능, 수면과 체력의 영향을 함께 받습니다.",
      "아랫배가 차고 순환이 막히면 통증이 심해지고, 위로 열이 뜨면 갱년기 상열감과 불면, 감정 변화가 반복될 수 있습니다.",
      "초근목피 한의원에서는 여성의 생애 주기와 체질을 함께 보며, 자궁과 전신의 온도·순환·기혈 균형을 회복하는 방향으로 치료합니다.",
    ],
    principles: [
      { title: "온궁산한", desc: "차가워진 하복부를 따뜻하게 해 자궁 순환을 돕습니다." },
      { title: "활혈화어", desc: "어혈과 정체를 풀어 통증과 덩어리진 불편감을 줄입니다." },
      { title: "기혈 보강", desc: "피로와 허약을 회복해 주기 리듬의 바탕을 세웁니다." },
      { title: "상열 안정", desc: "갱년기와 스트레스로 위로 뜨는 열을 부드럽게 조절합니다." },
    ],
    quizTitle: "여성질환 미니 진단",
    quizQuestion: "현재 가장 신경 쓰이는 여성 건강 문제는 무엇인가요?",
    quizOptions: ["생리통·PMS", "생리불순·난임 준비", "산후 회복", "갱년기 상열감·불면"],
    solutionTitle: "생애 주기별 맞춤 여성 처방",
    solutionLead: "통증을 줄이는 데서 그치지 않고 몸의 리듬을 다시 세웁니다.",
    solutions: [
      { title: "매달 진통제가 필요한 생리통", symptoms: ["아랫배 냉감", "덩어리진 혈", "허리와 골반 통증"], pattern: "자궁 냉증, 어혈", treatment: "온궁 활혈 처방", desc: "차가운 하복부를 따뜻하게 하고 막힌 혈류를 풀어 통증을 줄입니다." },
      { title: "주기가 흔들리는 생리불순", symptoms: ["주기 지연", "피로와 스트레스", "여드름·붓기"], pattern: "간기 울결, 기혈 허약", treatment: "주기 회복 한약", desc: "스트레스와 체력 저하를 함께 조절해 주기 리듬을 안정시킵니다." },
      { title: "산후와 갱년기 회복", symptoms: ["관절 시림", "불면과 상열감", "기력 저하"], pattern: "기혈 손상, 음허 상열", treatment: "회복 보강 처방", desc: "소모된 기혈과 진액을 보강하고 위로 뜨는 열을 안정시킵니다." },
    ],
    programTitle: "초근목피 여성질환 치료 프로그램",
    programs: [
      { icon: "🌿", title: "체질 맞춤 한약", desc: "냉증, 어혈, 허약, 상열 패턴에 맞춰 처방합니다." },
      { icon: "📍", title: "순환 침·뜸 치료", desc: "하복부와 골반 순환을 돕고 긴장을 완화합니다." },
      { icon: "🫖", title: "생활 온도 관리", desc: "식사, 수면, 보온 습관을 체질에 맞게 조정합니다." },
    ],
    doctorMessage: "여성의 몸은 주기와 온도에 민감합니다. 반복되는 불편함을 당연하게 넘기지 않겠습니다.",
    processTitle: "여성질환 진료 절차",
    process: [
      { title: "주기 상담", desc: "생리 주기, 통증, 분비물, 수면과 스트레스를 확인합니다." },
      { title: "체질 평가", desc: "냉증, 어혈, 상열, 기혈 부족의 패턴을 살핍니다." },
      { title: "맞춤 치료", desc: "한약, 침, 뜸 치료로 순환과 온도를 회복합니다." },
      { title: "생활 관리", desc: "재발을 줄이는 보온, 식사, 수면 습관을 안내합니다." },
    ],
    faqs: [
      { q: "생리통은 참아도 되는 건가요?", a: "매달 진통제가 필요하거나 일상에 지장이 있다면 원인 패턴을 확인해 관리하는 것이 좋습니다." },
      { q: "난임 준비도 한방 치료가 가능한가요?", a: "몸의 온도와 순환, 체력, 주기 리듬을 안정시키는 방향으로 임신 준비를 도울 수 있습니다." },
      { q: "갱년기 상열감도 함께 볼 수 있나요?", a: "네. 진액 부족과 위로 뜨는 열, 수면 저하를 함께 조절하는 방향으로 접근합니다." },
    ],
    conditionsTitle: "여성질환 질환별 치료 안내",
    conditions: womenConditions,
  },
};

export function getClinicPage(slug: ClinicPageData["slug"]) {
  return clinicPages[slug];
}

export function getClinicCondition(programSlug: ClinicPageData["slug"], conditionSlug: string) {
  return clinicPages[programSlug].conditions.find((condition) => condition.slug === conditionSlug);
}
