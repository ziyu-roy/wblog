// base dependency library, it should be only shared by `admin.js` and `application.js`.
//
import './libs/add_jquery'
import 'bootstrap/dist/js/bootstrap'

import RailsUjs from '@rails/ujs'
import "@hotwired/turbo-rails"
import * as ActiveStorage from '@rails/activestorage'

// Turbo.session.drive = false
RailsUjs.start()
ActiveStorage.start()

import './channels'
import "./controllers"

$(document).on('turbo:load', function(){
  $('[data-toggle="tooltip"]').tooltip()
  
  // Initialize theme immediately on page load
  const savedTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
