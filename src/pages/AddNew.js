import React from 'react'

export default function AddNew({addClick}) {
    return (
        <div onClick={addClick}  class="add-new"><img src="https://jpelaa.github.io/agileboard/static/media/plus.d026f1dc.svg" 
        class="icon-sm" alt="plus icon" />
            <span>Add another list</span>
            </div>
    )
}
