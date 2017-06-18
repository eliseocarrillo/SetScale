define(['dojo/_base/declare', 
  'jimu/BaseWidget', 
  'dojo/_base/lang'],
  function(declare, 
    BaseWidget, 
    lang) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      name: 'SetScale',

      //methods to communication with app container:

       postCreate: function() {
         this.inherited(arguments);
         console.log('postCreate');
       },

       //Function which get html value and set it as map's scale
       _scaleTo: function(event){
         var scale = document.getElementById('scale').value;
         this.map.setScale(scale);
       },

       startup: function() {
         this.inherited(arguments);
         console.log('startup');
         this._scaleTo();
       }
    });
  });