import RootLayout from "../components/Layout/Layout";
import Results from "../components/Results/Results";

const MainPage = () => {
  return (
    <div>
      <Results/>
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
