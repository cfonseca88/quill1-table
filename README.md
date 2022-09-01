# QuillJS Table (quill1-table)

`TABLE` functionality in QuillJS (v1) using Containers.

Code of quill is included in project so we can easily play with it in our tests.

## What the previous developers fixed

* Denied Backspace inside an empty cell
* Added ability to delete a table
* ctrl+z/ctrl+shift+z (undo/redo)
* select a cell or multiple cells
* split/merge cell feature
* remove cell/selection feature
* copy/paste a table and managed merged cells
* add col/row before/after

## What would be nice to add/fix

## Usage

see example [demo.js](../master/src/demo.js)

```
// import module
import TableModule from 'quill1-table';

// register module
Quill.register('modules/table', TableModule);

// add toolbar controls in Toolbar module options
[
  {
    table: TableModule.tableOptions()
  },
  {
    table: [
      'insert',
      'append-row-above',
      'append-row-below',
      'append-col-before',
      'append-col-after',
      'remove-col',
      'remove-row',
      'remove-table',
      'split-cell',
      'merge-selection',
      'remove-cell',
      'remove-selection',
      'undo',
      'redo'
    ]
  }
]

// add module in Quill options
modules: {
  table: {
    // table module options
    cellSelectionOnClick: true // true: cell selection on click, false: cell selection with CTRL key
  },
  // add keyboard bindings in Keyboard options
  keyboard: {
    // Since Quill’s default handlers are added at initialization, the only way to prevent them is to add yours in the configuration.
    bindings: {
      backspace: {
        key: 'backspace',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'backspace', range, keycontext);
        }
      },
      delete: {
        key: 'delete',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'delete', range, keycontext);
        }
      },
      undo: {
        ctrlKey: true,
        key: 'z',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'undo', range, keycontext);
        }
      },
      redo: {
        ctrlKey: true,
        shiftKey: true,
        key: 'z',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'redo', range, keycontext);
        }
      }
    }
  }
}
```

### For development
```shell script
npm install

npm run build
```

### Progress so far
* `TABLE`, `TR` and `TD` are containers - it is possible to have multiple block blots in `TD`.
* all tables, rows and cells are identified by random strings and optimize merge only those with the same id.
* It is possible to add tables by defining rows and cols count in grid.
* It is possible to add rows and columns to existing tables (accessible by buttons in toolbar).
* it is possible to copy & paste table from Word. Works ok. Needs to test edge cases.
* undo/redo. Needs to test edge cases.
* select a cell or multiple cells
* split/merge cell feature
* remove cell/selection feature
* copy/paste a table and managed merged cells
* add col/row before/after
* Tabbing between cells
* select all cell content
* cell selection on click or with CTRL key