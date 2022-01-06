const threshold = .6

const activate = function (element){
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)

    // return anchor === null ? null : turnThemeDark()
    if (anchor === null){
          return null
    }

    console.log(anchor);

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
          if (entry.intersectionRatio > threshold){
                activate(entry.target)
          }
    });
}

const spies = document.querySelectorAll('[data-spy]')

if (spies.length > 0) {
    const observer = new IntersectionObserver(callback, {
        threshold: threshold
    })

    spies.forEach(function (spy){
          observer.observe(spy)
    });
}