
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

const Header = () => {
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
    <div className="flex items-center overflow-hidden">
      <h1 className="text-xl md:text-3xl font-bold gradient-text px-8 py-4">
        XP카드
      </h1>
    </div>
  );
};

export default Header;