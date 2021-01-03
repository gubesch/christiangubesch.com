import React from 'react'


const aboutStyle = {
  'text-align': 'justify',
};

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }} style={aboutStyle}></p>
    </div>
  )
}
