import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";
import SelectAndShow from "../../components/selectAndShow/SelectAndShow";
function Home(props) {

  return (
    <div className="Home">
        
        <Header isAuthenticated={isAuthenticated()} />
        <SelectAndShow />
    </div>
  );
}

export default Home;
