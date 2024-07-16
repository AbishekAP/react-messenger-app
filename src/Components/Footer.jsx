import React from 'react'

function Footer() {
    const date = new Date();
    const year=date.getFullYear();
  return (
    <footer>
    <p>&copy; {year} Abishek. All Rights Reseverd</p>
  </footer>
  )
}

export default Footer