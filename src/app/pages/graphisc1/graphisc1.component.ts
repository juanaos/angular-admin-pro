import { Component } from '@angular/core';


@Component({
  selector: 'app-graphisc1',
  templateUrl: './graphisc1.component.html',
  styles: [
  ]
})
export class Graphisc1Component {

	labels1: string[] = [ 'Nueces', 'Pipas', 'Palotes' ];
	labels2: string[] = [ 'Huevos', 'Zapatos', 'Piruletas' ];

	data1 = [
		[ 50, 50, 10 ],
	  ]
}
