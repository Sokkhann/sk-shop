import CategoryCardSection from "@/components/sections/CategoryCardSection";
import HomeCardSection from "@/components/sections/HomeCardSection";
import NewCardSection from "@/components/sections/NewCardSection";
import PopularCardSection from "@/components/sections/PopularCardSection";

export default function Home() {
  return (
    <div>
      <HomeCardSection/>
      <PopularCardSection/>
      <CategoryCardSection/>
      <NewCardSection/>
    </div>
  );
}
