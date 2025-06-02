
import Hero from '../components/Hero';
import WhyXPCard from '../components/WhyXPCard';
import CardPreview from '../components/CardPreview';
import CommunityHook from '../components/CommunityHook';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import { Analytics } from "@vercel/analytics/react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <Hero />
      <WhyXPCard />
      {/* <CardPreview /> */}
      {/* <CommunityHook /> */}
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
