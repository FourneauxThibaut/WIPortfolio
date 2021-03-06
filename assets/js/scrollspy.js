const ratio = .6
const spies = document.querySelectorAll('[data-spy]')
let observer = null

/**
* @param {HTMLElement} element 
* @returns 
*/
const activate = function (element){
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)

    // return anchor === null ? null : turnThemeDark()
    if (anchor === null){
          return null
    }

    anchor.parentElement.parentElement
          .querySelectorAll('.active')
          .forEach(node => node.classList.remove('active'))

    anchor.classList.add('active')
}

/**
* @param {IntersectionObserverEntry[]} entries 
* @param {IntersectionObserver} observer 
*/
const callback = function (entries, observer){
    entries.forEach(function(entry) {
          if (entry.intersectionRatio > 0){
                activate(entry.target)
          }
    })
}

/**
* @param {NodeListOf.<Element>} elems 
*/
const observe = function (elems){
    if (observer !== null){
        elems.forEach(element => {
            observer.unobserve(element)
        })
    }
    const y = Math.round(window.innerHeight * ratio)
    observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })

    spies.forEach(elem => observer.observe(elem))
}

/**
* @param {Function} callback 
* @param {number} delay 
* @returns {Function}
*/
const debounce = function (callback, delay){
    let timer;
    return function() {
        let args = arguments
        let context = this
        clearTimeout(timer)
        timer = setTimeout(function() {
            callback.apply(context, args)
        }, delay)
    }
}

if (spies.length > 0){
    observe(spies)
    let windowH = window.innerHeight
    window.addEventListener('resize', debounce(function () {
        if (window.innerHeight !== windowH){
            observe(spies)
            windowH = window.innerHeight
        }
    }, 500))
}