
import Hero from '../components/Hero';
import WhyXPCard from '../components/WhyXPCard';
import CardPreview from '../components/CardPreview';
import CommunityHook from '../components/CommunityHook';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Hero />
      <WhyXPCard />
      <CardPreview />
      <CommunityHook />
      <Footer />
    </div>
  );
};

export default Index;
