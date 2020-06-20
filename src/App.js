import React,{Fragment} from 'react';
import './App.css';
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
function App() {
  return (
     <Fragment>
        <Layout>
          <BurgerBuilder/>
        </Layout>
     </Fragment>
  );
}

export default App;
