window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classlist.toggle('rolagem', window.scrollY > 0)
})