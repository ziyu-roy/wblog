import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon"]
  
  connect() {
    // Initialize theme on controller connection
    this.initializeTheme()
  }

  initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light'
    this.applyTheme(savedTheme)
  }

  toggle() {
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    
    // Apply new theme
    this.applyTheme(newTheme)
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme)
  }

  applyTheme(theme) {
    // Set data attribute on html element for CSS targeting
    document.documentElement.setAttribute('data-theme', theme)
    
    // Update icon based on theme
    this.updateIcon(theme)
    
    // Add transition class for smooth theme switching
    document.documentElement.classList.add('theme-transition')
    
    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 200)
  }

  updateIcon(theme) {
    if (this.hasIconTarget) {
      const icon = this.iconTarget
      
      // Remove existing classes
      icon.classList.remove('fa-moon', 'fa-sun')
      
      // Add appropriate icon class based on theme
      if (theme === 'light') {
        // Show moon icon in light mode (to switch to dark)
        icon.classList.add('fa-moon')
        icon.setAttribute('title', '切换到暗色模式')
      } else {
        // Show sun icon in dark mode (to switch to light)
        icon.classList.add('fa-sun')
        icon.setAttribute('title', '切换到亮色模式')
      }
    }
  }
}