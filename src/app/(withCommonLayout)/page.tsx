
import Blog from "@/components/Ui/HomePage/Blog/Blog";
import Category from "@/components/Ui/HomePage/Category/Category";
import Contact from "@/components/Ui/HomePage/Contact/Contact";
import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import Mission from "@/components/Ui/HomePage/Mission/Mission";
import State from "@/components/Ui/HomePage/State/State";



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <State></State>
      <Mission></Mission>
      <Category></Category>
      <Contact></Contact>
      <Blog></Blog>
    </>
  );
};

export default HomePage;