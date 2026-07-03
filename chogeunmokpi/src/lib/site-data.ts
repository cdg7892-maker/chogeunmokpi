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

export const clinicInfo = {
  name: "초근목피한의원",
  ceo: "이호근",
  phone: "00-0000-0000",
  address: "대전 00구 00동 00 (00빌딩 0층)",
  bizNumber: "000-00-00000",
  hours: {
    weekday: "00:00 - 00:00",
    saturday: "00:00 - 00:00",
    lunch: "00:00 - 00:00",
    note: "일요일·공휴일 휴진",
  },
};
