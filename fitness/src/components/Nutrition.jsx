const Nutrition = () => {
  const chicken = () => {
    alert("Name: Chicken Breast, Calories: 130, Protein:25G Per 4oz");
  };
  const oats = () => {
    alert("Name:OatMeal, Calories: 120, Protein:1G Per 2 tbs of Oats");
  };
  const proteinshake = () => {
    alert(" Name:Whey Protein, Calories: 120, Protein:25G Per 1 Scoop");
  };
  return (
    <div id="headers">
      <h1>The Andri Nutrition Plan:</h1>
      <h3>Follow this on your own risk of being moody due to low carbs...</h3>
      <div>
        <li>
          <button onClick={chicken}>
            <img
              id="chicken"
              src="https://www.thespruceeats.com/thmb/-iGnYRRT7v8DGQMovxQU8RkjxxM=/4680x2632/smart/filters:no_upscale()/simple-oven-fried-garlic-chicken-breasts-3058637-hero-01-5c510dd6c9e77c00014afdec.jpg"
            />
          </button>
        </li>
        <li>
          {" "}
          <button onClick={oats}>
            <img
              id="chicken"
              src="https://images-na.ssl-images-amazon.com/images/I/911XLyCu1RL._SL1500_.jpg"
            />
          </button>
        </li>
        <li>
          {" "}
          <button onClick={proteinshake}>
            <img
              id="chicken"
              src="https://barbend.com/wp-content/uploads/2017/04/IMG_0920-1.jpg"
            />
          </button>
        </li>
      </div>
    </div>
  );
};

export default Nutrition;
