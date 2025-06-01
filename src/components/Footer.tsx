
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800 relative">
      {/* Game references in footer */}
      <div className="absolute top-2 left-10 opacity-5">
        <span className="text-2xl">🎪</span>
      </div>
      <div className="absolute top-2 right-10 opacity-5">
        <span className="text-2xl">🎭</span>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold gradient-text mb-2">XP카드</div>
            <p className="text-gray-400">게임 유저를 위한 리워드 카드</p>
            <p className="text-xs text-gaming-purple mt-1">
              🏆 From Noob to Pro, 모든 게이머와 함께
            </p>
          </div>

          {/* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-gray-400 text-center md:text-left">
              <div className="mb-2">문의: support@xpcard.kr</div>
              <div className="mb-1">사업자등록번호: 123-45-67890</div>
              <div className="text-xs text-gaming-cyan">⚡ 24시간 게이머 서포트</div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gaming-purple transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gaming-purple transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gaming-purple transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@xpcard.kr" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gaming-purple transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 XP카드. All rights reserved. 게이머를 위한, 게이머에 의한 카드.</p>
          {/* <p className="text-xs text-gaming-purple-light mt-2">
            🎮 마비노기, 리그 오브 레전드, 포트나이트 그리고 모든 게임과 함께
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
