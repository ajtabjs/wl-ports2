

//=============================================================================
// preventf12.js v1.0
//=============================================================================

/*:
 * @plugindesc prevent console open when pressing f12.
 * @author no need to credit anyone.
 */

document.body.addEventListener('keydown', (e)=>{
    if(e.keyCode == 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

