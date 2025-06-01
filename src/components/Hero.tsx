
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "이메일을 입력해주세요",
        description: "출시 소식을 받으려면 이메일 주소가 필요합니다.",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally save to Supabase
    console.log('Email signup:', email);
    toast({
      title: "알림 신청 완료!",
      description: "XP카드 출시 소식을 가장 먼저 알려드릴게요.",
    });
    setEmail('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gaming-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gaming-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gaming-purple/10 rounded-full blur-2xl animate-float"></div>
        
        {/* Game character silhouettes */}
        <div className="absolute top-10 right-20 opacity-20">
          <div className="w-32 h-40 bg-gradient-to-b from-gaming-purple to-transparent rounded-lg transform rotate-12 animate-float">
            <div className="text-xs text-center pt-2 text-white/60">아리</div>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-15">
          <div className="w-28 h-36 bg-gradient-to-b from-gaming-cyan to-transparent rounded-lg transform -rotate-6 animate-float delay-500">
            <div className="text-xs text-center pt-2 text-white/60">Jinx</div>
          </div>
        </div>
        <div className="absolute top-1/3 left-10 opacity-10">
          <div className="w-24 h-32 bg-gradient-to-b from-yellow-400/50 to-transparent rounded-lg transform rotate-3 animate-float delay-1000">
            <div className="text-xs text-center pt-2 text-white/60">피오나</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
              XP카드
            </h1>
            <p className="text-xl md:text-2xl text-gaming-purple-light font-medium">
              게임 유저를 위한 리워드 카드
            </p>
            <p className="text-sm text-gray-400 mt-2">
              🎮 소환사부터 수호자까지, 모든 게이머를 위한 카드
            </p>
          </div>

          {/* Card Mockup */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-80 h-48 md:w-96 md:h-60 glass-effect rounded-2xl p-6 animate-float neon-border">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-gaming-cyan font-bold text-lg">XP카드</div>
                      <div className="text-xs text-gray-400 mt-1">GAMER REWARDS</div>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-gaming-purple to-gaming-cyan rounded flex items-center justify-center">
                      <span className="text-xs text-white font-bold">🏆</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex space-x-1">
                          {[...Array(4)].map((_, j) => (
                            <div key={j} className="w-3 h-3 bg-white/30 rounded-sm"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="text-left flex justify-between items-end">
                      <div>
                        <div className="text-sm text-gray-400">VALID THRU</div>
                        <div className="text-white font-mono">12/28</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gaming-purple">LEVEL</div>
                        <div className="text-gaming-cyan font-bold">MAX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/30 to-gaming-cyan/30 blur-xl rounded-2xl animate-glow -z-10"></div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Steam, PlayStation, 네이버 게임, 구글플레이에서
            </h2>
            <p className="text-3xl md:text-5xl font-bold gradient-text">
              최대 10% 캐시백
            </p>
            <p className="text-lg text-gray-300 mt-2">
              RP 충전도, V-Buck 구매도, 모든 게임 결제에서 리워드! 💰
            </p>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 glass-effect border-gaming-purple/50 text-white placeholder:text-gray-400 focus:border-gaming-purple"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-gaming-purple to-gaming-cyan hover:from-gaming-purple-dark hover:to-gaming-cyan-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                출시 소식 받기
              </Button>
            </div>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            출시 전 독점 혜택과 얼리 액세스 기회를 놓치지 마세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
