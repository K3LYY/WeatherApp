import LocalizationButton from './LocalizationButton';

const CityUserInput = () => {
  return (
    <div>
      <input type="text" placeholder="Wpisz nazwę miasta..."></input>
      <button type="button" className="inputBtn">
        🔍
      </button>
      <LocalizationButton />
    </div>
  );
};

export default CityUserInput;
