namespace backend
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => (int)Math.Round(TemperatureC * 9.0 / 5 + 32);

        public string? Summary { get; set; }
    }
}
