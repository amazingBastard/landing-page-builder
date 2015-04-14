Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== 'undefined' || typeof console.log !== 'undefined') {
    console.log('Current Context');
    console.log('====================');
    console.log(this);
    if (optionalValue) {
      console.log('Value');
      console.log('====================');
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('notAdmin', function() {
  return Session.get('notAdmin');
});

Template.registerHelper('showSettings', function() {
  return Session.get('showSettings');
});

Template.registerHelper('newsletter', function() {
  return Session.get('newsletter');
});

Template.registerHelper('overlay', function() {
  return Session.get('overlay');
});
