
const CardPreview = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">프리미엄</span> 디자인
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            게이머의 정체성을 담은 특별한 카드 디자인
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Card Design 1 - Dark Theme */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">다크 에디션</h3>
            <div className="relative inline-block">
              <div className="w-80 h-50 md:w-96 md:h-60 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-gaming-purple font-bold text-xl">XP카드</div>
                      <div className="text-xs text-gray-400 mt-1">DARK EDITION</div>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-gaming-purple to-black rounded"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-mono text-gaming-purple-light">
                      •••• •••• •••• 1337
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-gray-400">GAMER NAME</div>
                        <div className="text-white font-semibold">PLAYER ONE</div>
                      </div>
                      <div className="text-gaming-purple font-bold">LEVEL ∞</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/20 to-black/20 blur-xl rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Card Design 2 - Neon Theme */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">네온 에디션</h3>
            <div className="relative inline-block">
              <div className="w-80 h-50 md:w-96 md:h-60 bg-gradient-to-r from-gaming-dark to-gaming-dark-card rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 neon-border">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-gaming-cyan font-bold text-xl">XP카드</div>
                      <div className="text-xs text-gaming-purple mt-1">NEON EDITION</div>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-gaming-cyan to-gaming-purple rounded animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-mono text-gaming-cyan">
                      •••• •••• •••• 2024
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-gaming-purple">GAMER NAME</div>
                        <div className="text-white font-semibold">PRO GAMER</div>
                      </div>
                      <div className="text-gaming-cyan font-bold">LEVEL MAX</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-cyan/30 to-gaming-purple/30 blur-xl rounded-2xl animate-glow -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            출시 시 원하는 디자인을 선택할 수 있습니다
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-4 h-4 bg-gaming-purple rounded-full"></div>
            <div className="w-4 h-4 bg-gaming-cyan rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
