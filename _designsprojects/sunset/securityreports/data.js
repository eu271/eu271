var MyDate = function (d) {
  var date = new Date(d)

  this.humanize = function () {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return date.getFullYear() + ' ' + months[date.getMonth()] + ' ' + date.getDay();
  }

  this.toISOString = function () {
    return date.toISOString()
  }
}
var stateSymbol = {
  'exclamation': 'fa-exclamation-circle fa-red',
  'check': 'fa-check fa-green'
}

var data = {
  'reports': [
    {
      'id': '942',
      'title': 'Security Threat #924',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'content': 'Una cosa mu mala'
    },
    {
      'id': '444',
      'title': 'Security Threat #444',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.exclamation,
      'content': 'Una cosa mu mala'

    }
  ]
}

data
