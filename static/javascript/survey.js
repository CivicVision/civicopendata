var Airtable = require('airtable');

var getFormValue = function(id) {
  return document.getElementById(id).value
}
var getFormValues = function(name) {
  var values = [];
  document.querySelectorAll('input[name='+name+']').forEach((function(currentValue, currentIndex, listObj) { 
    if(listObj[currentIndex].checked) {
      values.push(currentValue.value);
    }
  }));
  return values;
}

window.sendSurveyResponse = function(id) {
  var base = new Airtable({apiKey: 'key500bQxvE9YGdYt'}).base('appAAzAmC8X8gav73');

  var form = document.getElementById(id);
  var topics = getFormValues('topic')
  var use_dataviz = getFormValues('use_dataviz')[0]
  console.log(use_dataviz)
  /**

  base('Responses').create({
    "CK Name": "other name",
    "One": "Very logn answer",
    "CK ID": "rhfh224re",
    "RM ID": "fvbgjw345f",
    "Topic": [
      "Civic Tech",
      "Data Visualization"
    ],
    "Professional": true,
    "Area": "kjkjkjk\n",
    "use_dataviz": "Every day",
    "create_dataviz": "Time to time"
  }, function(err, record) {
      if (err) { console.error(err); return; }
      document.getElementById(id).style('display: none;');
      document.getElementById(id+'-reponse').style('display: block;');
  });
  **/
};
