// import / export

// if you can get all export file then import * from exported file

import external, {pi as PI, a} from './external.js'; // named import

external();
console.log(PI, a);