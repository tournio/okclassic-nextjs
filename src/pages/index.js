import RootLayout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Hotel from "../components/Hotel/Hotel";
import Schedule from "../components/Schedule/Schedule";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      <Location/>
      <Schedule/>
      <Hotel/>
      {/*<OklahomaCity full={false}/>*/}
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
