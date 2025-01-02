const cl = console.log;

const tabHeading = [...document.querySelectorAll('.tabHeading li')];
const tabPanel = [...document.querySelectorAll('.tabPanel')]

const onTabHeadClick = (eve) => {
    cl(eve.target)
    cl(eve.target.getAttribute('data-id'))
    let getId = eve.target.getAttribute('data-id')

    tabPanel.forEach(tabpan => {
        tabpan.classList.remove('active')
    })

    document.getElementById(getId).classList.add('active')
}


tabHeading.forEach(li =>{
    li.addEventListener("click", onTabHeadClick)
})

