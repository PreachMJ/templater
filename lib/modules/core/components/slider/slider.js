ui.slideEditor = ui.switcherCombo.extendOptions({
    inline: true, width: "100%", height: 320,
    types: ["image","html"]
});

ui.slideEditor.image = ui.panel.extend({
    init: function (o) {
        this._super($.extend({label:"Image"},o));
        this.push(
            ui.imageCombo({
                width:"100%",height:"100%",inline:true,margin:0,name:"image",presetName:"presets.sliderImage",
                uploadDir: "slides", relativePath: true
            })
        );
    }
})
    
ui.slideEditor.html = ui.panel.extend({
    init: function (o) {
        this._super($.extend({label:"HTML"},o));
        this.push(
            ui.wysiwyg({width:"100%",height:"100%",margin:0,name:"html"})
        );
    }
})

ui.sliderEditor = ui.composite.extendOptions({
    items: [
    "Title",
    { 
        type: 'text', name: 'title'
    },{ 
        type: 'repeater', name: 'slides', addLabel: 'New Slide', repeaterClass: 'ui-gallery',
        items: [
            {type: 'slideEditor', name: 'slide'}
        ]
    }]
})