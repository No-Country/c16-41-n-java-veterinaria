import HeroSection from '../components/Home/HeroSection';
import ItemsSection from '../components/Home/ItemsSection';

export default function Home() {
    return (
        <div className='pt-20 md:mb-24 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/10'>
            <HeroSection />
            <ItemsSection />
        </div>
    )
}