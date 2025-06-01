
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

const CommunityHook = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "이메일을 입력해주세요",
        description: "커뮤니티 가입을 위해 이메일 주소가 필요합니다.",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Community signup:', email);
    toast({
      title: "커뮤니티 가입 신청 완료!",
      description: "XP카드 커뮤니티에서 만나요. 곧 연락드릴게요!",
    });
    setEmail('');
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/10 to-gaming-cyan/10"></div>
      
      {/* Game character decorations */}
      <div className="absolute top-5 left-5 opacity-10">
        <div className="text-4xl animate-bounce">🎯</div>
        <div className="text-xs text-center text-gaming-cyan mt-1">Target</div>
      </div>
      <div className="absolute top-10 right-10 opacity-10">
        <div className="text-5xl animate-float">🏹</div>
        <div className="text-xs text-center text-gaming-purple mt-1">Bow</div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-8">
        <div className="text-3xl animate-pulse">⚡</div>
        <div className="text-xs text-center text-yellow-400 mt-1">Flash</div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            함께 만들어가요
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-6">
            게이머들이 직접 참여하는 XP카드 커뮤니티
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            베타 테스터 모집부터 신기능 제안까지, 
            <br />진짜 게이머들의 목소리로 만들어가는 카드입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">베타 테스터</h3>
              <p className="text-gray-300 mb-1">출시 전 우선 체험 기회</p>
              <p className="text-xs text-gaming-purple">랭크 게임처럼 먼저 플레이!</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">아이디어 제안</h3>
              <p className="text-gray-300 mb-1">새로운 기능과 혜택 제안</p>
              <p className="text-xs text-gaming-cyan">패치 노트에 당신의 아이디어가!</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">독점 이벤트</h3>
              <p className="text-gray-300 mb-1">커뮤니티 회원 전용 혜택</p>
              <p className="text-xs text-gaming-purple-light">히든 보상까지 모두 획득!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="커뮤니티 가입하기"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 glass-effect border-gaming-cyan/50 text-white placeholder:text-gray-400 focus:border-gaming-cyan"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-gaming-cyan to-gaming-purple hover:from-gaming-cyan-dark hover:to-gaming-purple-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                참여하기
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            🎪 길드원 모집! 함께 최고의 카드를 만들어요
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityHook;
