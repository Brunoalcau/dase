import About from "@/components/about";
import Contact from "@/components/contact";
import Depositions from "@/components/depositions";
import Product from "@/components/product";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About />
      <Product />
      <Depositions />
      <Video />
      <Contact/>
    </main>
  );
}
