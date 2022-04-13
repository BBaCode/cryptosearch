import "./HomePage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageFooter from "../../components/PageFooter/PageFooter";

function HomePage() {
  return (
    <div className="home">
      <div className="home__header-box">
        <button className="home__header">Click Here</button>
      </div>
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
