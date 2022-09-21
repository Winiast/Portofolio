import Global from "./styles/Global";
import Header from "./components/Header";
import head from "./core/locale/pt/header.json";

const App = () => {
  return (
    <>
      <Header
        Logo={head.Logo}
        navList1={head.navList1}
        navList2={head.navList2}
        navList3={head.navList3}
        navList4={head.navList4}
      ></Header>

      <Global />
    </>
  );
};

export default App;
