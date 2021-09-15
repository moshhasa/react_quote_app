import React from 'react'
import MainNavigation from './MainNavigation'
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.main}>
                {children}
            </main>    
        </>
    )
}

Layout.propTypes = {

}

export default Layout
