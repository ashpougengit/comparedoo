// import classes from './loading.module.css'

// function LoadingPage() {
//     return (
//         <p className={classes.loading}>Loading data...</p>
//     )
// }

// export default LoadingPage

import classes from './loading.module.css';

function LoadingPage() {
    return (
        <div className={classes.loadingCircle}></div>
    );
}

export default LoadingPage;
