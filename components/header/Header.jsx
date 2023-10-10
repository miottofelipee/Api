import React from 'react'

function Header({nome, email, cor}) {
  return (
    <div className={styles.container} style={{backgroundColor: cor}}>
        <div className={styles.profile}>
          <p className={styles.welcome}>{nome}</p>
          <p className={styles.useremail}>{email}</p>
        </div>
      </div>
  )
}

export default Header