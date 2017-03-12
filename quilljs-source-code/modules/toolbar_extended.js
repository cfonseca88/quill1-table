import Toolbar from './toolbar';


function defaultToolbarOptions() {
  return [
    // Extended toolbar buttons
    ['contain'],
    ['td'], // new table (cursor needs to be out of table)
    [{ 'table': 'append-row' }], // cursor needs to be in the table
    [{ 'table': 'append-col' }], // cursor needs to be in the table

    // Default toolbar buttons
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],

    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],

    ['link', 'image', 'code-block'],

    ['clean']
  ];
}


Toolbar.DEFAULTS = Object.assign(Toolbar.DEFAULTS, {
  container: defaultToolbarOptions(),
  handlers: {
    table: function(value) {
      if(value == 'append-row') {
        this.quill.getModule('table_handler').appendRow();
      } else if(value == 'append-col') {
        this.quill.getModule('table_handler').appendCol();
      } else {
        this.quill.format('table', value);
      }
    }
  }
});


export default Toolbar;
