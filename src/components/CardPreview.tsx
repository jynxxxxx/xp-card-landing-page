
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
