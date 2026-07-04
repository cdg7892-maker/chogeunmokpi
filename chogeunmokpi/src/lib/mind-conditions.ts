export type MindCondition = {
  slug: string;
  title: string;
  group: string;
  summary: string;
};

export const mindConditions: MindCondition[] = [
  {
    slug: "insomnia",
    title: "불면증",
    group: "수면·정서·인지",
    summary: "잠들기 어렵거나 자주 깨고, 자고 나도 회복감이 낮은 상태를 다룹니다.",
  },
  {
    slug: "sleep-disorder",
    title: "수면장애",
    group: "수면·정서·인지",
    summary: "수면 리듬이 무너져 낮의 기력과 감정 조절까지 흔들리는 흐름을 봅니다.",
  },
  {
    slug: "depression",
    title: "우울증",
    group: "수면·정서·인지",
    summary: "의욕 저하, 무기력, 흥미 감소가 오래 이어질 때 몸의 회복 기반을 함께 살핍니다.",
  },
  {
    slug: "anxiety",
    title: "불안장애",
    group: "수면·정서·인지",
    summary: "이유 없는 불안, 예민함, 가슴 답답함이 반복되는 상태를 안내합니다.",
  },
  {
    slug: "panic",
    title: "공황장애",
    group: "수면·정서·인지",
    summary: "두근거림, 숨막힘, 식은땀처럼 갑자기 몰려오는 몸의 경보 반응을 다룹니다.",
  },
  {
    slug: "postpartum-depression",
    title: "산후우울증",
    group: "수면·정서·인지",
    summary: "출산 이후 기혈 저하와 수면 부족이 겹치며 나타나는 우울감을 살핍니다.",
  },
  {
    slug: "hwabyung",
    title: "화병",
    group: "수면·정서·인지",
    summary: "오래 눌린 감정, 명치 답답함, 치밀어 오름이 함께 나타나는 흐름을 설명합니다.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    group: "수면·정서·인지",
    summary: "집중 저하, 충동성, 미루기와 피로가 일상에 미치는 영향을 다룹니다.",
  },
  {
    slug: "ocd",
    title: "강박장애",
    group: "수면·정서·인지",
    summary: "반복되는 생각과 확인 행동으로 마음의 에너지가 소모되는 상태를 안내합니다.",
  },
  {
    slug: "tic",
    title: "틱장애",
    group: "수면·정서·인지",
    summary: "긴장과 피로에 따라 심해지는 반복 움직임과 소리 증상을 살핍니다.",
  },
  {
    slug: "social-anxiety",
    title: "대인기피증",
    group: "수면·정서·인지",
    summary: "사람을 만나는 상황에서 긴장, 회피, 두려움이 커지는 흐름을 다룹니다.",
  },
  {
    slug: "anger-control",
    title: "분노조절장애",
    group: "수면·정서·인지",
    summary: "감정이 빠르게 치밀고 오래 가라앉지 않는 상태를 몸의 긴장과 함께 봅니다.",
  },
  {
    slug: "bipolar",
    title: "조울증",
    group: "수면·정서·인지",
    summary: "기분과 에너지의 큰 변동이 수면과 생활 리듬에 미치는 영향을 정리합니다.",
  },
  {
    slug: "restless-legs",
    title: "하지불안증후군",
    group: "수면·정서·인지",
    summary: "밤에 다리 불편감이 심해져 수면을 방해하는 상태를 안내합니다.",
  },
];
