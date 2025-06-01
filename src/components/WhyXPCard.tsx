
import { CreditCard, Trophy, Gift, Users } from 'lucide-react';

const benefits = [
  {
    icon: CreditCard,
    title: '캐시백',
    description: '게임 구매 시 최대 10% 현금 환급',
    highlight: '매월 자동 적립'
  },
  {
    icon: Trophy,
    title: 'e스포츠 이벤트 우선권',
    description: '인기 대회 티켓 우선 예매권',
    highlight: 'VIP 좌석 할인'
  },
  {
    icon: Gift,
    title: '게임 제휴 할인',
    description: '파트너 게임사 독점 할인 혜택',
    highlight: '신작 게임 선구매'
  },
  {
    icon: Users,
    title: '커뮤니티 포인트',
    description: '게임 플레이로 포인트 적립',
    highlight: '굿즈 교환 가능'
  }
];

const WhyXPCard = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            왜 <span className="gradient-text">XP카드</span>인가요?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            게이머를 위해 특별히 설계된 리워드 시스템으로 게임을 더 즐겁게
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-6 hover:neon-border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gaming-purple to-gaming-cyan rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-gaming-cyan font-semibold text-sm">
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">10%</div>
            <div className="text-gray-300">최대 캐시백률</div>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-300">제휴 게임사</div>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300">게이머 전용 고객지원</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXPCard;
