import { useCallback, useState } from "react";
import StateContext from "./StateContext";

const StateProvider = ({ children }) => {
  const [list] = useState([
    {
      id: 0,
      title: "먹다 남은 피자를 촉촉하게!",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png",
      desc: "먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.",
      date: "2022.05.01",
      checked: false,
    },
    {
      id: 1,
      title: "바나나를 싱싱하게 보관하기",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/banana.png",
      desc: "바나나에 날파리가 꼬이거나 금방 익어버리는 것을 예방하기 위한 방법인데요. 바나나 양쪽 끝을 자른 후, 보관용 케이스나 비닐봉지에 묶어 밀봉합니다. 그리고 냉장고에 넣어주면 되는데요. 하루에 1~2개씩 꺼내서 싱싱하게 먹을 수 있습니다.",
      date: "2022.05.02",
      checked: false,
    },
    {
      id: 2,
      title: "셔츠에 묻은 볼펜 자국 없애기",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/shirt.png",
      desc: "셔츠를 자주 입는 사람의 경우, 종종 볼펜 자국이 묻기 마련인데요. 이럴 경우에는 집에 있는 물파스로 가볍게 지울 수 있습니다. 옷 뒷부분을 키친타올로 받쳐 번지는 것을 방지한 후, 볼펜 자국 있는 부분을 물파스로 눌러주고, 키친타올로 닦아냅니다.",
      date: "2022.04.01",
      checked: false,
    },
    {
      id: 3,
      title: "잠자는 내 돈을 찾아라",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
      desc: "‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
      date: "2022.04.10",
      checked: false,
    },
    {
      id: 4,
      title: "할인행사, 한정할인판매 문구의 함정 탈출!",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money2.png",
      desc: "‘안 사면 100% 할인’이라는 말 들어보셨나요? 견물생심, 좋은 물건을 보면 사고 싶기 마련입니다. 특히 대대적인 ‘할인 행사’ 중인 대형 마트에 갔을 때는 말할 것도 없겠죠. 따라서 생필품을 살 때, 한꺼번에 사서 사용하는 것보다 필요할 때 조금씩 구매하는 편이 좋습니다. 장을 보면서 대형마트에 자주 가다 보면 지금 필요한 것뿐 아니라 앞으로 필요할 것까지 사게 되어 지출이 커지기 때문입니다. 특히 할인 품목을 보면 뜻하지 않은 소비를 하는 경우도 많아진다. 홈쇼핑, 대형마트 등의 ‘할인행사’, ‘한정할인판매’ 등의 문구를 조심하세요. ",
      date: "2022.04.15",
      checked: false,
    },
    {
      id: 5,
      title: "방전된 건전지 살리기",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/battery.png",
      desc: "건전지를 다 사용하지 않아도 방전되면, 버리는 경우가 종종 있는데요. 건전지의 무게감이 느껴진다면, 드라이기를 활용해 방전된 건전지를 깨울 수 있습니다. 드라이기 열기를 10초~30초 정도 골고루 가해주면 되는데요. 건전지가 불필요하게 낭비되는 것을 막을 수 있습니다.",
      date: "2022.04.20",
      checked: false,
    },
    {
      id: 6,
      title: "반려견에게 배변 교육 시킬 때",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/puppy.png",
      desc: "우선, 배변패드를 순서대로 돌며 간식을 조금씩 떨어뜨려 놓는다. 2단계는 배변패드 앞에서 기다렸다 반려견이 스스로 올라오면 간식을 주어서 보상하고, 3단계는 “화장실 가자”나 “매트” 같은 명령어를 붙여 말한 뒤 배변패드에 올라오면 간식을 주는 것이다. 마지막 단계는 배변패드에 올라간 반려견이 대소변을 본 다음 간식을 줌으로써 이 장소가 즐거운 곳이라는 인식을 심어주는 것이다. 그리고 무엇보다 1, 2회 사용한 배변패드는 바로 갈아줘야 한다.",
      date: "2022.04.25",
      checked: false,
    },
    {
      id: 7,
      title: "반려견이 주인과 떨어지는 것을 무서워 할 때",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/puppy2.png",
      desc: "분리불안교육은 반려견에게 혼자 남는 법을 알려주기 위한 것이 아니라, 보호자가 ‘언제나 너에게 돌아올 거야’라고 알려주는 교육이다. 반려견과 5초 동안 떨어져 있다가 다시 문을 열고 들어가 손 냄새를 맡게 해주는 훈련을 하루 10번씩 7일 동안 반복하는 ‘5,10,7 법칙’을 통해 반려견의 마음을 편안하게 해줄 수 있다.",
      date: "2022.04.30",
      checked: false,
    },
    {
      id: 8,
      title: "반려견을 아이와 함께 키울 때",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/puppy3.png",
      desc: "‘인간의 행복’을 위해 반려동물을 키우는 것에 대해 꾸준히 비판과 우려를 제기해온 그는 특히 ‘아이들의 정서’를 위해 반려견을 키우려 한다는 부모들에게 당부한다. “반려동물을 통해 아이들의 정서가 좋아진다면, 그것은 부모가 나와 생김새와 느낌, 말과 행동이 다른 동물을 아끼는 모습을 보기 때문입니다.” 인간의 뜻에 의해 인간과 함께 살게 된 생명을 좀 더 이해하고 행복하게 살 수 있도록 하는 것은 역시 인간의 노력에 달려 있다.",
      date: "2022.03.01",
      checked: false,
    },
    {
      id: 9,
      title: "렌탈 서비스 금액 비교해보기",
      image:
        "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money2.png",
      desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
      date: "2022.03.15",
      checked: false,
    },
  ]);

  const [mytip, setMytip] = useState([]);

  const addToMyTip = useCallback((id) => {}, []);

  const remove = useCallback((id) => {}, []);

  return (
    <StateContext.Provider
      value={{
        list,
        mytip,
        addToMyTip,
        remove,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;