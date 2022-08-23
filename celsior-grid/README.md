
# Celsior Grid

Celsior Grid is a fully-featured and highly customizable JavaScript data grid.

## Features 

In addition to the standard set of features you'd expect from any grid:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection

Here are some of the features that make Celsior Grid stand out:

* paging *


## Getting started

### Install dependencies

```sh
$ npm install --save celsior-grid
```

### Add a placeholder to HTML

```html
<div id="myGrid" style="height: 150px; width: 600px" class="celsior-theme-default"></div>
```

### Import the grid and styles

```js
import { CelsiorGrid } from 'celsior-grid';

import 'celsior-grid/styles/celsior-grid.css';
import 'celsior-grid/styles/celsior-theme-default.css';
```

### Set configuration

```js
var gridOptions = {
	columns: [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	],
	rows: [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	]
};
```

### Initialise the grid

```js
var eGridDiv = document.querySelector('#myGrid');
new Grid(eGridDiv, this.gridOptions);
```

## License

This project is licensed under the MIT license. See the [LICENSE file](./LICENSE.txt) for more info.