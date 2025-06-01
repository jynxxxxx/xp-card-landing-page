
import { CreditCard, Trophy, Gift, Users } from 'lucide-react';

const benefits = [
  {
    icon: CreditCard,
    title: '캐시백',
    description: '게임 구매 시 최대 10% 현금 환급',
    highlight: '매월 자동 적립',
    gameRef: '🎮 RP, V-Buck, 루블 모두!'
  },
  {
    icon: Trophy,
    title: 'e스포츠 이벤트 우선권',
    description: '인기 대회 티켓 우선 예매권',
    highlight: 'VIP 좌석 할인',
    gameRef: '🏆 LOL 월드컵, LCK 현장'
  },
  {
    icon: Gift,
    title: '게임 제휴 할인',
    description: '파트너 게임사 독점 할인 혜택',
    highlight: '신작 게임 선구매',
    gameRef: '🎁 넥슨, 라이엇, 에픽게임즈'
  },
  {
    icon: Users,
    title: '커뮤니티 포인트',
    description: '게임 플레이로 포인트 적립',
    highlight: '굿즈 교환 가능',
    gameRef: '🎪 한정판 스킨, 피규어'
  }
];

const WhyXPCard = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Character decorations */}
      <div className="z-[1] absolute bottom-[32rem] left-4 opacity-40 md:top-10 md:left-[-1rem] md:opacity-50 lg:opacity-80">
        <div className="w-auto h-60">
          <img
            src="/mabi.png"
            alt="마비노기기"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="z-[1] absolute top-[-8rem] left-4 opacity-40 md:top-[-3.5rem] md:right-4 md:left-auto md:opacity-80">
        <div className="w-[25rem] h-80">
          <img
            src="/lol.png" 
            alt="league characters"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto pt-[3rem] md:pt-0">
        <div className="z-[10] relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            왜 <span className="gradient-text">XP카드</span>인가요?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            마비노기 유저부터 리그 오브 레전드 소환사까지, 
            <br />모든 게이머를 위해 특별히 설계된 리워드 시스템
          </p>
        </div>

        <div className="z-[10] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="text-gaming-cyan font-semibold text-sm mb-2">
                  {benefit.highlight}
                </div>
                <div className="text-xs text-gaming-purple-light">
                  {benefit.gameRef}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section with game references */}
        <div className="z-[10] relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-16 md:pt-0">
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">10%</div>
            <div className="text-gray-300">최대 캐시백률</div>
            <div className="text-xs text-gaming-purple mt-1">💎 전설급 리워드</div>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-300">제휴 게임사</div>
            <div className="text-xs text-gaming-cyan mt-1">🎮 글로벌 파트너십</div>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300">게이머 전용 고객지원</div>
            <div className="text-xs text-gaming-purple-light mt-1">🛡️ 탱커급 서포트</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXPCard;
