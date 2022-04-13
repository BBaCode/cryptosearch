import "./HomePage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageFooter from "../../components/PageFooter/PageFooter";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <Link to="/crypto">
        <div className="home__header-box">
          <button className="home__header">Enter</button>
        </div>
      </Link>
      <div class="home__background">
        <PageHeader />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <PageFooter />
      </div>
    </div>
  );
}

export default HomePage;
