import RootLayout from "../components/Layout/Layout";
import Rules from "../components/Rules/Rules";

const RulesPage = () => {
  return (
    <div>

      <Rules/>

    </div>
  )
}

RulesPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default RulesPage;
