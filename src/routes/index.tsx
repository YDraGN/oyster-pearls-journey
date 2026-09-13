import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { HeroSlider } from "@/components/site/HeroSlider";
import { BulletRail } from "@/components/site/BulletRail";
import { AuthDialog } from "@/components/site/AuthDialog";
import { Footer } from "@/components/site/Footer";
import { PartnersLocked } from "@/components/site/PartnersLocked";
import { AppIconShowcase } from "@/components/site/AppIconShowcase";
import {
  ListeningSection,
  ReadingSection,
  RoadmapSection,
  CollectionSection,
  AiSection,
} from "@/components/site/sections";

const title = "ToeicSpace — Luyện thi TOEIC cùng Oysteic";
const description =
  "Nền tảng luyện thi TOEIC với phòng luyện Listening & Reading theo từng Part, lộ trình cá nhân hoá, bộ sưu tập từ vựng tự động và flashcard AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="page-gradient min-h-screen">
      <Header onAuth={openAuth} />
      <BulletRail />
      <main>
        <HeroSlider onAuth={openAuth} />
        <ListeningSection />
        <ReadingSection />
        <RoadmapSection />
        <CollectionSection />
        <AiSection />
        <PartnersLocked />
        <AppIconShowcase />
      </main>
      <Footer />
      <AuthDialog
        open={authOpen}
        mode={authMode}
        onOpenChange={setAuthOpen}
        onModeChange={setAuthMode}
      />
    </div>
  );
}
