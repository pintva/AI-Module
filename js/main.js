window.onload = function(){
    let items = document.getElementsByClassName('item')
    let overlay = document.getElementById('overlay')
    
    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            const item = items[key]
            item.addEventListener('touchstart', (e) => {
                e.preventDefault()
                e.stopPropagation()
                const tempDetail = document.getElementById(item.className.slice(5) + '-detail');
                
                // console.log(item.className.slice(5))
                overlay.style.display = 'block'
                tempDetail.style.display = 'block'
            },false)
            item.addEventListener('touchend', (e) => {
                e.preventDefault()
                e.stopPropagation()
                const tempDetail = document.getElementById(item.className.slice(5) + '-detail');

                // console.log(item.className.slice(5))
                overlay.style.display = 'none'
                tempDetail.style.display = 'none'
            },false)
        }
    }
}