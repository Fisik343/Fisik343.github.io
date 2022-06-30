$(document).ready(function() {
  var skill_options = ['Performer A is far more skilled', 
                      'Performer A is slightly more skilled',
                      'Both performers are similarly skilled',
                      'Performer B is slightly more skilled', 
                      'Performer B is far more skilled'];
  var stability_options = ['Performer A is far more stable', 
                           'Performer A is slightly more stable',
                           'Both performers are similarly stable',
                           'Performer B is slightly more stable', 
                           'Performer B is far more stable'];
  for (var i=0;i<5;i++)
  {
      $('#skill-group')
      .append(`<crowd-radio-button class='radio-btn' type="radio"  name="skill${i+1}" value="${i+1}">${skill_options[i]} </crowd-radio-button> <br>`);
      $('#stability-group')
      .append(`<crowd-radio-button class='radio-btn' type="radio"  name="stability${i+1}" value="${i+1}">${stability_options[i]} </crowd-radio-button> <br>`);
  }
});