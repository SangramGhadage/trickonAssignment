import Image from "next/image";
import { Montserrat  } from "next/font/google";
import { Home as HomeComponent } from "../component/SectionOne/Home";
import SectionTwo from "@/component/SectionTwo/SectionTwo";
import GameDeatails from "@/component/SectionThree/GameDeatails";
const montserrat  = Montserrat ({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col w-full items-center justify-between ${montserrat.className}`}>
      <HomeComponent/>
      <SectionTwo/>
      <GameDeatails/>
    </main>
  );
}
