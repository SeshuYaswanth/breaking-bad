import React, { useState } from 'react'

export const Search = ( { getQuery } ) => {
    const [text, setText] = useState('');


    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

  return (
    <section  className='search'>
        <form>
            <input type="text" placeholder='Search the characters' className='flow-control' onChange={(e) => onChange(e.target.value)} value={text} autoFocus />
        </form>
    </section>
  )
}
