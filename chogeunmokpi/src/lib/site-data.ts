export type Program = {
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
  image: string;
  icon: string;
};

export const programs: Program[] = [
  {
    slug: "digestive",
    title: "소화기질환",
    summary:
      "위장병, 움직임을 되살려야 낫습니다. 굳어진 담적을 풀고 위장 운동성을 회복시켜 편안한 속을 되찾아 드립니다.",
    keywords: ["역류성식도염", "과민성대장증후군", "만성 위염·담적"],
    image: "/images/programs/digestive.jpg",
    icon: "🌾",
  },
  {
    slug: "diet",
    title: "다이어트",
    summary:
      "굶지 않고, 힘들지 않게. 체질에 맞춘 처방으로 요요 없이 건강하게 체중 관리를 도와드립니다.",
    keywords: ["체질 다이어트", "요요 없는 감량", "식욕·대사 관리"],
    image: "/images/programs/diet.jpg",
    icon: "⚖️",
  },
  {
    slug: "mind",
    title: "마음건강",
    summary:
      "마음의 병, 몸만 치료해서는 낫지 않습니다. 심·간·비 장부의 균형을 되찾아 불면, 우울, 불안의 뿌리를 다스립니다.",
    keywords: ["불면증", "화병", "만성피로·번아웃"],
    image: "/images/programs/mind.jpg",
    icon: "🌙",
  },
  {
    slug: "skin",
    title: "피부질환",
    summary:
      "피부는 몸의 거울입니다. 스테로이드 없이 속부터 맑아지게, 면역을 되살려 재발 없는 피부를 만듭니다.",
    keywords: ["아토피", "여드름·두드러기", "건선"],
    image: "/images/programs/skin.jpg",
    icon: "🌿",
  },
  {
    slug: "tonic",
    title: "보약·웰니스",
    summary:
      "피로는 몸의 SOS 신호입니다. 오장육부의 기운을 채우고 면역력을 높여 활력 넘치는 일상을 되찾아 드립니다.",
    keywords: ["공진단", "경옥고", "체질 보약"],
    image: "/images/programs/tonic.jpg",
    icon: "🍵",
  },
  {
    slug: "pediatric",
    title: "소아·수험생",
    summary:
      "성장을 방해하는 요인을 없애는 것이 먼저입니다. 비염, 소화불량을 해결하고 아이가 스스로 자랄 힘을 길러줍니다.",
    keywords: ["소아 허약", "성장 관리", "수험생 보약"],
    image: "/images/programs/pediatric.jpg",
    icon: "🌱",
  },
  {
    slug: "head-face",
    title: "두면부 클리닉",
    summary:
      "두통, 어지럼증, 참지 마세요. 두면부의 순환과 균형을 바로잡아 맑은 정신을 되찾아 드립니다.",
    keywords: ["만성 두통", "안면부 순환", "이명·어지럼증"],
    image: "/images/programs/head-face.jpg",
    icon: "🧠",
  },
  {
    slug: "women",
    title: "여성질환",
    summary:
      "여성의 몸은 주기마다 달라집니다. 산전산후, 생리불순까지 여성 건강 전 주기를 함께 살핍니다.",
    keywords: ["산후보약", "생리불순", "갱년기 관리"],
    image: "/images/programs/women.jpg",
    icon: "🌸",
  },
];

export type Doctor = {
  slug: string;
  role: string;
  name: string;
  tags: string[];
  shortIntro: string;
  photo: string;
  detailPhoto: string;
  story: string[];
  credentials: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "lee-ho-geun",
    role: "대표원장",
    name: "이호근",
    tags: ["#소화기질환", "#피부질환", "#알러지"],
    shortIntro:
      "진료를 하다 보면, 여러 곳을 다녀도 좀처럼 낫지 않아 마음까지 지친 분들을 자주 만납니다. 그런 분들을 곁에서 오래 지켜보면서, 자연스럽게…",
    photo: "/images/doctors/lee-ho-geun-main.png",
    detailPhoto: "/images/doctors/lee-ho-geun-main.png",
    story: [
      "진료실에서 가장 많이 듣는 말은 \"검사는 정상이라는데 왜 이렇게 아플까요?\"였습니다. 수치로는 설명되지 않는 고통 속에 있는 환자분들을 보며 한의사로서 깊이 고민했습니다.",
      "기계가 읽어내는 데이터도 중요하지만, 그 너머에 있는 몸의 흐름과 균형을 읽어내는 것이 진정한 치유의 시작임을 깨달았습니다.",
      "저의 아버지 역시 평생 한의업에 몸담으셨던 분이었습니다. 어릴 적부터 곁에서 보고 배운 것은 단순한 처방 기술이 아니라, 환자 한 분 한 분을 몸 전체로 이해하려는 태도였습니다.",
      "그 마음을 이어받아 30여 년간 진료를 이어오며, 검사로는 설명되지 않는 증상들, 여러 병원을 거쳐도 낫지 않던 만성 질환들을 수없이 마주해왔습니다.",
      "초근목피(草根木皮) — 풀뿌리와 나무껍질. 가장 오래되고 가장 근본적인 방법으로, 뿌리부터 다스리는 치료를 이어가겠습니다.",
    ],
    credentials: [
      "現 초근목피한의원 대표원장",
      "1994년 개원, 30년 이상 한자리에서 진료",
      "3대째 이어온 한의업 가업 계승",
      "00학회 정회원 (추후 업데이트)",
      "00 관련 연구·강의 활동 (추후 업데이트)",
    ],
  },
];

export type Review = {
  id: string;
  programSlug: string;
  patient: string;
  title: string;
  summary: string;
  doctor: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    programSlug: "digestive",
    patient: "강**",
    title: "[52세, 여성, 만성소화불량] 물만 마셔도 붓는 것 같아요",
    summary: "위장 운동성 회복 치료 후 속이 한결 편해졌다는 후기",
    doctor: "이호근",
  },
  {
    id: "r2",
    programSlug: "digestive",
    patient: "김**",
    title: "[45세, 여성, 역류성식도염] 눕기만 하면 신물이 올라와요",
    summary: "담적 관리와 함께 식도 증상이 개선된 사례",
    doctor: "이호근",
  },
  {
    id: "r3",
    programSlug: "digestive",
    patient: "박**",
    title: "[55세, 여성, 기능성 소화불량] 20년 넘게 지속된 만성 속더부룩함",
    summary: "장기간 지속된 소화불량이 호전된 치료 경과",
    doctor: "이호근",
  },
  {
    id: "skin-atopic-1",
    programSlug: "atopic-dermatitis",
    patient: "김**",
    title: "[반석동 아토피 치료] 10년 스테로이드 의존 없이 태선화 피부가 부드러워진 30대 여성",
    summary: "반복되는 목과 팔오금 태선화, 야간 가려움이 장벽 회복과 면역 안정 치료 후 완화된 사례",
    doctor: "이호근",
  },
  {
    id: "skin-atopic-2",
    programSlug: "atopic-dermatitis",
    patient: "박**",
    title: "[노은동 아토피] 사회생활 중 얼굴 아토피로 고생하던 20대 여성의 4개월 회복기",
    summary: "얼굴 홍반과 건조, 스트레스성 상열을 함께 조절하며 외출 불안을 줄인 치료 경과",
    doctor: "이호근",
  },
  {
    id: "skin-atopic-3",
    programSlug: "atopic-dermatitis",
    patient: "이**",
    title: "[전민동 소아 아토피] 비염 동반 8세 남아, 알레르기 행진 멈추고 체질 개선",
    summary: "비염과 야간 가려움이 함께 있던 소아 아토피를 호흡기 면역과 비위 기능 중심으로 관리한 사례",
    doctor: "이호근",
  },
  {
    id: "skin-eczema-1",
    programSlug: "eczema",
    patient: "박**",
    title: "[반석동 손습진] 3년 반복되던 손가락 갈라짐과 진물이 줄어든 40대 주부",
    summary: "물 닿을 때마다 따갑고 갈라지던 만성 손습진을 습열과 혈허 패턴 중심으로 관리한 사례",
    doctor: "이호근",
  },
  {
    id: "skin-eczema-2",
    programSlug: "eczema",
    patient: "김**",
    title: "[노은동 습진] 얼굴 붉은기와 각질로 대인기피를 겪던 30대 직장인의 회복기",
    summary: "스트레스성 간울과 피부 장벽 약화를 함께 조절하며 붉은기와 각질 반복을 줄인 치료 경과",
    doctor: "이호근",
  },
  {
    id: "skin-eczema-3",
    programSlug: "eczema",
    patient: "최**",
    title: "[전민동 만성 습진] 연고 반동이 두려웠던 50대 여성의 피부 장벽 재건",
    summary: "장기간 연고 사용 후 반복 재발하던 습진을 단계적으로 조절하며 피부 회복력을 높인 사례",
    doctor: "이호근",
  },
];

export const clinicInfo = {
  name: "초근목피한의원",
  ceo: "이호근",
  phone: "00-0000-0000",
  address: "대전 유성구 반석동 00 (00빌딩 0층)",
  bizNumber: "000-00-00000",
  hours: {
    weekday: "09:00 - 18:00",
    weekdayLabel: "월·화·수·금",
    weekend: "09:00 - 15:00",
    weekendLabel: "토·일",
    closed: "목요일 휴무",
    note: "점심시간 없이 진료",
  },
};
