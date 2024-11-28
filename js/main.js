// get all links
let links = document.querySelectorAll( '.nav-link' );

// loop on links
links.forEach( function ( link ) {
    
// add click to links
    link.addEventListener( 'click', function () {

        links.forEach( e => {

            //remove active class from all links
            e.classList.remove( 'active' );

            //add active class to the currunt link
            this.classList.add( 'active' )
            
        })
    })
} );


// get all li from our work section
let allLi = document.querySelectorAll( '.our-work ul li' );
// get imgs
let allImgs = document.querySelectorAll( '.our-work .box' );

// add click event to lies
allLi.forEach( li => {    
    li.addEventListener( 'click', removeActive );
    li.addEventListener( 'click', manageImgs );
} );

// remove and add active class
function removeActive() {

    allLi.forEach( li => {
        li.classList.remove( 'active' );
        
        this.classList.add( 'active', 'rounded-pill' );
    })

}

// hide all imgs and show currunt img
function manageImgs () {
    allImgs.forEach( img => {
        img.style.display = 'none';
    } );

    document.querySelectorAll( this.dataset.cat ).forEach( cat => {
        cat.style.display = 'block';
    })
}