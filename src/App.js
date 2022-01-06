import Header from "./components/Header";
import Conversations from "./components/Conversations";
import Banner from "./components/Banner";
import SecondSection from "./components/SecondSection";
import PhoneScreens from "./components/PhoneScreens";
import SeeConversations from "./components/SeeConversations";
import Payments from "./components/Payments";

function App() {
  return (
    <div className="!bg-[#F2F5FA]">
      <Header />
      <Banner />
      <Conversations />
      <SecondSection />
      <PhoneScreens />
      <SeeConversations />
      <Payments />
    </div>
  );
}

export default App;
