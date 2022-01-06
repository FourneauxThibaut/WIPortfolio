document.documentElement.classList.add('dark')

function turnThemeLight() {
      document.getElementById('toggleTheme').classList.remove('toggleOn')
      document.documentElement.classList.remove('dark')
      document.getElementById('toggleTheme').classList.add('toggleOff')
      document.documentElement.classList.add('light')
      document.getElementById("sun").style.visibility = "visible"; 
      document.getElementById("moon").style.visibility = "hidden"; 
      Cookies.set('theme', 'light', { sameSite: 'strict', expires: 365, secure: true })
}

function turnThemeDark() {
      document.getElementById('toggleTheme').classList.remove('toggleOff')
      document.documentElement.classList.remove('light')
      document.getElementById('toggleTheme').classList.add('toggleOn')
      document.documentElement.classList.add('dark')
      document.getElementById("moon").style.visibility = "visible"; 
      document.getElementById("sun").style.visibility = "hidden"; 
      Cookies.set('theme', 'dark', { sameSite: 'strict', expires: 365, secure: true })
}

function toggleThemeButton() {
      let buttonClassList = document.documentElement.classList
      let tempArrClassList = [...buttonClassList]

      tempArrClassList.forEach(element => {
            if (element == 'dark' || element == 'light'){
                  if (element != 'dark'){ turnThemeDark() } 
                  else{ turnThemeLight() }
            }
      })   
}

function setThemewithCookiesMemory() {
      return Cookies.get('theme') === 'light' ? turnThemeLight() : turnThemeDark()
}

setThemewithCookiesMemory()