import {Component, OnInit} from '@angular/core';
import {SearchParams, WeatherService} from '../../api/generated/controllers/Weather';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [WeatherService]
})
export class ViewComponent implements OnInit {

  constructor(private ws: WeatherService) {
  }

  ngOnInit() {
    const param: SearchParams = {
      start_date: '',
      end_date: '',
      iata: '',
      type: 'temperature',
      moyenne: true
    };
    this.ws.search(param).subscribe((res) => {
      console.log(res);
    });
  }

}
