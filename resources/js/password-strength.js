

( () => {
    /**
     * Parse a password string into a numeric value.
     *
     * @param {string} password
     * @return {number}
     */
    let evaluatePassword = ( password ) => {
        let score = 0;

        score = password.length;
        score = ( password.match( /[!]/gmi ) ) ? score + ( password.match( /[!]/gmi ).length * 10 ) : score;
        score = ( password.match( /[A-Z]/gm ) ) ? score + 3 : score;
        score = ( password.match( /[0-9]/gmi ) ) ? score + 3 : score;

        return score;
    };

    /**
     * Convert a numeric score into an object of 'DOM update' data.
     *
     * @param {number} score
     * @return {Object}
     */
    let scoreToData = ( score ) => {
        if ( score >= 20 ) {
            return {
                width: '120px',
                color: 'green',
                label: 'Strong',
                check: '3',
            };
        } else if ( score >= 10 ) {
            return {
                width: '100px',
                color: '#fd9644',
                label: 'Medium',
                check: '2',
            };
        } else {
            return {
                width: '85px',
                color: '#D84315',
                label: 'Weak',
                check: '1',
            };
        }
    };

    window.addEventListener( 'DOMContentLoaded', () => {
        // Get element refs.
        let p = document.querySelector( '.password-reset' );
        let b = document.querySelector( '.password__strength--bar' );
        let t = document.querySelector( '.password__strength--label' );

        // Listen for updates to password field.

        if (!p){
            return;
        }

        p.addEventListener( 'input', () => {
            // Convert current value to data.
            let data = scoreToData( evaluatePassword( p.value ) );

            // Update DOM.
            b.style.width = data.width;
            b.style.background = data.color;
            t.innerText = data.label;
        } );
    } );

/*
    window.addEventListener( 'keypress', () => {
        // Get element refs.
        let p = document.querySelector( '.account__new--password' );
        let b = document.querySelectorAll( '.account__password--bar' );
        let t = document.querySelector( '.account__password--label' );

        // Listen for updates to password field.
        p.addEventListener( 'input', () => {
            // Convert current value to data.
            let data = scoreToData( evaluatePassword( p.value ) );

            // Update DOM.
            b.forEach(function (el){
                // el.style.width = data.width;
                el.style.background = data.color;
            })
            t.innerText = data.label;
        } );
    } );*/
} )();



$(document).ready(function (){
    function passwordCheck(password) {
        if (password.length >= 8)
            strength += 1;
        if (password.match(/(?=.*[0-9])/))
            strength += 1;
        if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
            strength += 1;
        if (password.match(/(?=.*[a-z])/))
            strength += 1;

        displayBar(strength);
    }

    function displayBar(strength) {
        $(".password-strength-group").attr('data-strength', strength);
    }

    $("#newPass").keyup(function () {
        strength = 0;
        var password = $(this).val();
        passwordCheck(password);
    });
})
