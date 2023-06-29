import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="circle circle-1">
          <div className="image image-1"></div>
          <div className="image image-2"></div>
          <div className="image image-3"></div>
        </div>
        <div className="circle circle-2">
          <div className="image image-4"></div>
          <div className="image image-5"></div>
        </div>
        <div className="circle circle-3"></div>
      </div>
      <div className="colorAnimation"></div>
      <div className="contentContainer">
        <div className="headingContainer">
          <h1>
            Driffle is a <span>one-stop shop</span> for all your gaming needs
          </h1>
          <p>
            Not only do we sell games, but also offer gift cards, DLC's, and
            more. Driffle is a marketplace, so you can find a wide variety of
            items from different sellers in one place. We are committed to the
            future of gaming and strive to make our platform safe, affordable,
            and sustainable for all users. Whether you're looking for the latest
            releases or hard-to-find classics, you're sure to find what you're
            looking for on Driffle.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
