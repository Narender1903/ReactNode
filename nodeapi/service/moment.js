'use strict';
var moment = require('moment'); // require
/**
 *
 * purpose array join
 **/
exports.moment = function() {
  moment().format('MMMM Do YYYY, h:mm:ss a'); // June 20th 2022, 2:14:51 pm
moment().format('dddd');                    // Monday
moment().format("MMM Do YY");               // Jun 20th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                          // 2022-06-20T14:14:51+05:30
//Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // 14 hours ago
moment().endOf('day').fromNow();          // in 10 hours
moment().startOf('hour').fromNow();       // 15 minutes ago
//Calendar Time
moment().subtract(10, 'days').calendar(); // 06/10/2022
moment().subtract(6, 'days').calendar();  // Last Tuesday at 2:14 PM
moment().subtract(3, 'days').calendar();  // Last Friday at 2:14 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 2:14 PM
moment().calendar();                      // Today at 2:14 PM
moment().add(1, 'days').calendar();       // Tomorrow at 2:14 PM
moment().add(3, 'days').calendar();       // Thursday at 2:14 PM
moment().add(10, 'days').calendar();      // 06/30/2022
//Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 2:14 PM
moment().format('LTS');  // 2:14:51 PM
moment().format('L');    // 06/20/2022
moment().format('l');    // 6/20/2022
moment().format('LL');   // June 20, 2022
moment().format('ll');   // Jun 20, 2022
moment().format('LLL');  // June 20, 2022 2:14 PM
moment().format('lll');  // Jun 20, 2022 2:14 PM
moment().format('LLLL'); // Monday, June 20, 2022 2:14 PM
moment().format('llll'); // Mon, Jun 20, 2022 2:15 PM
}