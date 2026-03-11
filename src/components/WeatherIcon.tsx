interface IWwatherIcon {
  iconId: string;
}

const WeatherIcon = ({ iconId }: IWwatherIcon) => {
  return (
    <img
      src={`https://openweathermap.org/payload/api/media/file/${iconId}.png`}
      className="w-50 h-50 center"
    ></img>
  );
};

export default WeatherIcon;
