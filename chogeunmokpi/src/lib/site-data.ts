export type Program = {
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
};

export const programs: Program[] = [
  {
    slug: "digestive",
    title: "소화기질환",
    summary: "역류성식도염·과민성대장증후군·만성 위염, 뿌리부터 다스리는 소화기 치료",
    keywords: ["역류성식도염", "과민성대장증후군", "만성 위염·담적"],
  },
  {
    slug: "diet",
    title: "다이어트",
    summary: "체질에 맞춘 근본적인 체형 관리, 요요 없는 다이어트 한약",
    keywords: ["체질 다이어트", "요요 없는 감량", "식욕·대사 관리"],
  },
  {
    slug: "mind",
    title: "마음건강",
    summary: "불면·화병·만성피로, 몸과 마음의 균형을 함께 봅니다",
    keywords: ["불면증", "화병", "만성피로·번아웃"],
  },
  {
    slug: "skin",
    title: "피부질환",
    summary: "아토피·여드름·두드러기·건선, 안에서부터 다스리는 피부 치료",
    keywords: ["아토피", "여드름·두드러기", "건선"],
  },
  {
    slug: "tonic",
    title: "보약·웰니스",
    summary: "공진단·경옥고 등 체질 맞춤 보약으로 몸의 균형을 지킵니다",
    keywords: ["공진단", "경옥고", "체질 보약"],
  },
  {
    slug: "pediatric",
    title: "소아·수험생",
    summary: "성장·면역·집중력, 우리 아이 맞춤 한방 관리",
    keywords: ["소아 허약", "성장 관리", "수험생 보약"],
  },
  {
    slug: "head-face",
    title: "두면부 클리닉",
    summary: "두통·안면부 질환, 두면부 순환과 균형을 바로잡습니다",
    keywords: ["만성 두통", "안면부 순환", "이명·어지럼증"],
  },
  {
    slug: "women",
    title: "여성질환",
    summary: "산전산후·생리불순 등 여성 건강 전 주기를 함께합니다",
    keywords: ["산후보약", "생리불순", "갱년기 관리"],
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
    photo: "/images/doctors/lee-ho-geun.png",
    detailPhoto: "/images/doctors/lee-ho-geun-detail.png",
    story: [
      "진료실에서 가장 많이 듣는 말은 \"검사는 정상이라는데 왜 이렇게 아플까요?\"였습니다. 수치로는 설명되지 않는 고통 속에 있는 환자분들을 보며 한의사로서 깊이 고민했습니다.",
      "기계가 읽어내는 데이터도 중요하지만, 그 너머에 있는 몸의 흐름과 균형을 읽어내는 것이 진정한 치유의 시작임을 깨달았습니다.",
      "저의 아버지 역시 평생 한의업에 몸담으셨던 분이었습니다. 어릴 적부터 곁에서 보고 배운 것은 단순한 처방 기술이 아니라, 환자 한 분 한 분을 몸 전체로 이해하려는 태도였습니다.",
      "그 마음을 이어받아 30여 년간 진료를 이어오며, 검사로는 설명되지 않는 증상들, 여러 병원을 거쳐도 낫지 않던 만성 질환들을 수없이 마주해왔습니다.",
      "초근목피(草根木皮) — 풀뿌리와 나무껍질. 가장 오래되고 가장 근본적인 방법으로, 뿌리부터 다스리는 치료를 이어가겠습니다.",
    ],
    credentials: [
      "現 초근목피한의원 대표원장",
      "한의사 임상 경력 30년 이상",
      "3대째 이어온 한의업 가업 계승",
      "00학회 정회원 (추후 업데이트)",
      "00 관련 연구·강의 활동 (추후 업데이트)",
    ],
  },
];

export const clinicInfo = {
  name: "초근목피한의원",
  ceo: "이호근",
  phone: "00-0000-0000",
  address: "대전 00구 00동 00 (00빌딩 0층)",
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
