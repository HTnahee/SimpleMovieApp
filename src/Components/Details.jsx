import React from 'react'

export default function Details({ title , overview, showDetail }) {
    if(showDetail === 1) {
        return (
            <div className='detail-box'>
              <h4>{ title }</h4>
              <div className='details'>
                  { overview } 
              </div>
            </div>
          )
    }
  }
  