document.addEventListener("DOMContentLoaded", function() {

    summonKitties = document.querySelector('.summon-cats');

    summonKitties.addEventListener('click', () => {
        axios.get('https://eric-deploy-test.herokuapp.com/cats').then(function(response) {
            response.data.cats.forEach((cat, index) => {
                const img = document.createElement('img')
                img.setAttribute('src', cat.photo)
                img.setAttribute('alt', `Photo of ${cat.name}`)
                const container = document.querySelector('#cat'+ (index +1))
                container.innerHTML = ''
                container.appendChild(img)
            });
        })
    })    
});
