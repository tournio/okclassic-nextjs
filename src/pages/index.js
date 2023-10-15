import RootLayout from "../components/Layout/Layout";
// import Hero from "../_components/Hero/Hero";
// import Location from "../_components/Location/Location";
// import Schedule from '../_components/Schedule/Schedule';
// import SanFrancisco from "../_components/SanFrancisco/SanFrancisco";
// import Beneficiary from "../_components/Beneficiary/Beneficiary";

const MainPage = () => {
  return (
    <div>

      <p className={'lead'}>
        Content for tournament goes here.
      </p>

      {/*<Hero/>*/}
      {/*<Location/>*/}
      {/*<Schedule/>*/}
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
