export type TonicCondition = {
  slug: string;
  title: string;
  group: string;
  summary: string;
};

export const tonicConditions: TonicCondition[] = [
  {
    slug: "tonic",
    title: "보약",
    group: "보약·웰니스",
    summary: "기혈과 음양의 부족을 살펴 내 몸에 맞는 회복 처방을 안내합니다.",
  },
  {
    slug: "growth",
    title: "성장 한방 치료",
    group: "보약·웰니스",
    summary: "성장기 아이의 체력, 소화, 수면, 면역 기반을 함께 살핍니다.",
  },
  {
    slug: "chronic-fatigue",
    title: "만성피로증후군",
    group: "보약·웰니스",
    summary: "쉬어도 풀리지 않는 피로와 오후 방전감을 몸의 에너지 흐름에서 봅니다.",
  },
  {
    slug: "fibromyalgia",
    title: "섬유근육통",
    group: "보약·웰니스",
    summary: "전신 통증과 피로, 수면 저하가 겹친 상태를 회복 관점에서 정리합니다.",
  },
  {
    slug: "hyperhidrosis",
    title: "다한증",
    group: "보약·웰니스",
    summary: "땀 조절이 흔들리는 원인을 기력, 자율신경, 체질에서 함께 살핍니다.",
  },
  {
    slug: "shingles",
    title: "대상포진",
    group: "보약·웰니스",
    summary: "면역 저하와 회복력 저하가 겹칠 때 나타나는 통증과 후유증을 다룹니다.",
  },
  {
    slug: "sjogren",
    title: "쇼그렌증후군",
    group: "보약·웰니스",
    summary: "입과 눈의 건조, 진액 부족, 면역 흐름을 함께 보는 안내입니다.",
  },
  {
    slug: "gout",
    title: "통풍",
    group: "보약·웰니스",
    summary: "염증과 대사 노폐물, 순환 저하가 겹친 통풍 관리 방향을 정리합니다.",
  },
];
