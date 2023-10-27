import RootLayout from "../components/Layout/Layout";
import Committee from "../components/Committee/Committee";

const MainPage = () => {
  return (
    <div>
      <Committee/>
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
