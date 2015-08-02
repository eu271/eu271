/* global $, data, Mustache */

var navTemplate;
var reportTemplate;

var setup = function () {
  navTemplate = $('#navTemplate').html()
  Mustache.parse(navTemplate)

  reportTemplate = $('#reportTemplate').html()
  Mustache.parse(reportTemplate)

  // Delete html templates.
  $('#templates').html('')

}

var renderNav = function (o) {
  return Mustache.render(navTemplate, o)
}
var renderReports = function (o) {
  return Mustache.render(reportTemplate, o)
}

var displayReport = function (id) {
  if (this.id !== '') {
    $(this.id).css('display', 'none')
  }
  this.id = '#' + id
  $(this.id).css('display', 'block')
}


$(document).ready(function () {
  setup()
  $('body').append(renderNav(data))
  $('body').append(renderReports(data))

  displayReport(data.reports[0].id)
})
