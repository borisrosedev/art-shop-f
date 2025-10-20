

window.addEventListener('DOMContentLoaded', () => {

    const boutiqueButton = document.getElementById('boutique-id')
    boutiqueButton.addEventListener('click', () => {
        const child = window.open('https://art-shop-boutique.onrender.com', '_blank');
        setTimeout(() => {

            if (child) {
                child.postMessage({
                    from: 'parent', msg: 'do it now'
                },
                'https://art-shop-boutique.onrender.com')
            }
        }, 5000)
    })

    window.addEventListener('message', (ev) => {
        if (ev.origin !== 'https://art-shop-boutique.onrender.com') return;
        console.log('Parent receiving: ', ev.data)
        if (ev.data && ev.data.msg) {
            window.location = ev.data.msg
        }
    })



})


