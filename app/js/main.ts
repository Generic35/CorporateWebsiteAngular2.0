import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './appComponent/app.component.ts';

bootstrap(AppComponent)
	.then(success => console.log('bootstrap success'))
	.catch(error => console.log(error));
