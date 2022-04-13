import "./PageHeader.scss";

function PageHeader() {
  return (
    <div className="header">
      <h2 className="header__title">FinBit</h2>
      <ul className="header__list">
        <li className="header__link">Learning</li>
        <li className="header__link">Crypto</li>
        <li className="header__link">Coming Soon</li>
      </ul>
    </div>
  );
}

export default PageHeader;
