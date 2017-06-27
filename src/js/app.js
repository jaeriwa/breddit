import controller from './controllers/form.js';
import thread from './controllers/thread.js';
angular
	.module('app', [
		controller,
		thread
		]);
