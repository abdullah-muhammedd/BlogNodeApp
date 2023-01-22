let trash = document.getElementById( 'trash' );
trash.addEventListener( 'click', () =>
{ 
    let endpoint = `/${ trash.dataset.doc }`;
    fetch( endpoint, { method: 'DELETE' } ).then( res => res.json() ).then( data => window.location.href = data.redirect );
} )