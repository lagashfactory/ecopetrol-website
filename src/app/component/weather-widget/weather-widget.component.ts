import { Component, OnInit, ModuleWithComponentFactories } from "@angular/core";
import { WeatherServices } from "./weather-widget.services";
import * as moment from 'moment';

@Component({
    selector: 'weather-component',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss']
})
export class WeatherComponent implements OnInit{

    public weather: any = {
        name: '',
        sys: {country: ''},
        main: {
            pressure: 0,
            humidity: 0,
            temp: 0,
        },
        weather: [{
            description: '',
        }]
    };
    public date = moment().locale('es').format('LL');

    constructor(private weatherServices: WeatherServices){}
    private getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } 
    }
    private showPosition = async (position) => {
        this.weather = await this.weatherServices.getWeather({lat: position.coords.latitude, lon: position.coords.longitude});
        this.weather.main.temp = Math.ceil(this.weather.main.temp - 273.15);
    }

    ngOnInit(): void {
        this.getLocation();
        
    }
}