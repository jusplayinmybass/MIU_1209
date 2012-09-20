// Author: Myron Carroll
// Title: Assignment 3 JavaScript
// Class: Mobile Interfaces and Usability

// Wait until the DOM is Ready

var storeData  = function(data){
    //Form Data Goes Here
}
$(document).ready(function(){
  var siForm = $('#studentInfo'),
      siErrors = $('#adderrors')
  siForm.validate({
        invalidhandler: function(form, validator){
            siErrors.click();
            var html= '';
           for (key in validator.submitted){
                var label = $('label[for^="'+key+'"]').not('[generated]');
                var legend = label.closest('fieldset').find('ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html +='<li>'+ fieldname +'</li>';
            };
            $('#siErrors ul').html(html);
        };
        submithandler: function(){
            var data = siForm.serializeArray()
            storeData(data)
        }
    });
})