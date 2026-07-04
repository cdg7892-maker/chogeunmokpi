export type SkinCondition = {
  slug: string;
  title: string;
  group: string;
  summary: string;
};

export const skinConditions: SkinCondition[] = [
  {
    slug: "atopic-dermatitis",
    title: "아토피 피부염",
    group: "피부질환 클리닉",
    summary: "반복되는 가려움, 건조, 진물과 피부 장벽 약화를 함께 살핍니다.",
  },
  {
    slug: "eczema",
    title: "습진",
    group: "피부질환 클리닉",
    summary: "붉은 발진, 진물, 가려움이 반복되는 피부 염증 흐름을 다룹니다.",
  },
  {
    slug: "psoriasis",
    title: "건선",
    group: "피부질환 클리닉",
    summary: "하얀 각질과 두꺼워진 피부가 반복될 때 면역 균형을 함께 봅니다.",
  },
  {
    slug: "seborrheic-dermatitis",
    title: "지루성 피부염",
    group: "피부질환 클리닉",
    summary: "얼굴 붉음, 피지, 각질, 열감이 반복되는 상태를 안내합니다.",
  },
  {
    slug: "itching",
    title: "가려움증",
    group: "피부질환 클리닉",
    summary: "밤마다 심해지는 가려움과 긁은 뒤 악화되는 피부 반응을 살핍니다.",
  },
  {
    slug: "urticaria",
    title: "두드러기",
    group: "피부질환 클리닉",
    summary: "갑자기 올라오는 팽진과 가려움, 면역 과민 반응을 다룹니다.",
  },
  {
    slug: "pompholyx",
    title: "한포진",
    group: "피부질환 클리닉",
    summary: "손발의 작은 수포와 가려움, 재발 흐름을 함께 정리합니다.",
  },
  {
    slug: "facial-flushing",
    title: "안면홍조",
    group: "피부질환 클리닉",
    summary: "상열감, 붉어짐, 온도와 감정 변화에 예민한 얼굴 열감을 봅니다.",
  },
  {
    slug: "vitiligo",
    title: "백반증",
    group: "피부질환 클리닉",
    summary: "색소 변화와 면역 균형, 체질적 회복 기반을 함께 살핍니다.",
  },
  {
    slug: "keratosis-pilaris",
    title: "모공각화증",
    group: "피부질환 클리닉",
    summary: "오돌토돌한 피부 결, 건조함, 각질 대사 문제를 안내합니다.",
  },
  {
    slug: "warts",
    title: "사마귀",
    group: "피부질환 클리닉",
    summary: "반복되는 사마귀와 피부 면역 저하의 관계를 다룹니다.",
  },
  {
    slug: "skin-clinic",
    title: "피부 클리닉",
    group: "피부질환 클리닉",
    summary: "난치성 피부질환을 속부터 보는 초근목피 피부 진료 안내입니다.",
  },
];
