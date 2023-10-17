import RootLayout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Hotel from "../components/Hotel/Hotel";
// import Location from "../_components/Location/Location";
// import Schedule from '../_components/Schedule/Schedule';
// import SanFrancisco from "../_components/SanFrancisco/SanFrancisco";
// import Beneficiary from "../_components/Beneficiary/Beneficiary";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      {/*<Location/>*/}
      {/*<Schedule/>*/}
      <Hotel/>
      {/*<SanFrancisco full={false}/>*/}
      {/*<Beneficiary/>*/}

      {/*<RegisterCTA/>*/}

    </div>
  )
}

MainPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default MainPage;
