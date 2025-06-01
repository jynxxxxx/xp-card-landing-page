
const CardPreview = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Game character references in background */}
      <div className="absolute top-10 left-5 opacity-5">
        <div className="text-8xl">🦄</div>
        <div className="text-xs text-center text-white mt-1">유니콘</div>
      </div>
      <div className="absolute bottom-10 right-5 opacity-5">
        <div className="text-7xl">🐺</div>
        <div className="text-xs text-center text-white mt-1">늑대</div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">프리미엄</span> 디자인
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            당신의 게이머 정체성을 담은 특별한 카드 디자인
          </p>
          <p className="text-sm text-gaming-purple mt-2">
            ⚡ 포트나이트 승리부터 칼바람까지, 당신의 스타일을 선택하세요
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Card Design 1 - Mabinogi Theme */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">마비노기 에디션</h3>
            <div className="relative inline-block">
              <div className="w-80 h-50 md:w-96 md:h-60 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-yellow-300 font-bold text-xl">XP카드</div>
                      <div className="text-xs text-purple-300 mt-1">MABINOGI EDITION</div>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-xs">🗡️</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-mono text-yellow-300">
                      •••• •••• •••• 1337
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-purple-300">MILLETIAN</div>
                        <div className="text-white font-semibold">HERO</div>
                      </div>
                      <div className="text-yellow-300 font-bold flex items-center">
                        <span className="mr-1">🌟</span>
                        <span>LEGEND</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-yellow-400/20 blur-xl rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Card Design 2 - League of Legends Theme */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">리그 오브 레전드 에디션</h3>
            <div className="relative inline-block">
              <div className="w-80 h-50 md:w-96 md:h-60 bg-gradient-to-r from-blue-900 to-cyan-900 rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 neon-border">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-cyan-300 font-bold text-xl">XP카드</div>
                      <div className="text-xs text-blue-300 mt-1">SUMMONER EDITION</div>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded animate-pulse flex items-center justify-center">
                      <span className="text-xs">⚡</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-mono text-cyan-300">
                      •••• •••• •••• 2024
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-blue-300">SUMMONER</div>
                        <div className="text-white font-semibold">CHALLENGER</div>
                      </div>
                      <div className="text-cyan-300 font-bold flex items-center">
                        <span className="mr-1">💎</span>
                        <span>MASTER</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-xl rounded-2xl animate-glow -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            출시 시 원하는 게임 테마를 선택할 수 있습니다
          </p>
          <div className="flex justify-center space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-300">마비노기</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
              <span className="text-sm text-gray-300">LOL</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-300">포트나이트</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-300">더 많은 테마</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
