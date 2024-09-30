'use client'

function Error({ error }) {
  return (
    <main>
      <h1 className='entry-title' >An error occured!</h1>
      <p>{error}</p>
    </main>
  )
}

export default Error