import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

// Create Nav bar that will stick to each route.

function Layout(props){
    return (<div>
        {<MainNavigation />}
        {/* nest all routes*/}
        <main className={classes.main}>
            {props.children}
        </main>
    </div>)
}

export default Layout;