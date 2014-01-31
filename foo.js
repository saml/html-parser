var parser = require('./src/parser');

var html = '<p>h<font size="3">e<span>l</span>l</font>o</p>';
parser.parse(html, {
    openElement: function(name) { console.log('o : %s', name); },
    closeOpenedElement: function(name, token, unary) { console.log('to: %s, unary: %s', token, unary); },
    closeElement: function(name) { console.log('c : %s', name); },
    comment: function(value) { console.log('co: %s', value); },
    cdata: function(value) { console.log('cd: %s', value); },
    attribute: function(name, value) { console.log('a : %s=%s', name, value); },
    docType: function(value) { console.log('d : %s', value); },
    text: function(value) { console.log('te: %s', value); }
});

var REMOVE_TAG_ONLY = 1;
var REMOVE_ELEMENT = 2;
var REMOVE_ATTRIBUTE = 3;

function sanitize(html) {
    var buffer = [];
    
    var toRemove = {
        'font': REMOVE_TAG_ONLY,
        'style': REMOVE_ATTRIBUTE
    };   
    
    function openElement(name) {
            
    }

    parser.parse(html, {
        openElement: function(name) { console.log('o : %s', name); },
        closeOpenedElement: function(name, token, unary) { console.log('to: %s, unary: %s', token, unary); },
        closeElement: function(name) { console.log('c : %s', name); },
        comment: function(value) { console.log('co: %s', value); },
        cdata: function(value) { console.log('cd: %s', value); },
        attribute: function(name, value) { console.log('a : %s=%s', name, value); },
        docType: function(value) { console.log('d : %s', value); },
        text: function(value) { console.log('te: %s', value); }
    });
}



