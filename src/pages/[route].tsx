import { Navbar } from '../components/Navbar';

export async function getStaticPaths(){
    return {
        paths: [{
            params: {
                route: 'Home'
            }
        },{
            params: {
                route: 'Photos'
            }
        },{
            params: {
                route: 'Movies'
            }
        }],
        fallback: false
    }
}

export async function getStaticProps(context){
    const route = context.params.route
    return { 
        props: {
            route
        }
    }
}

export default function Routes(props){
    
    return (
        <>
            <Navbar/>
            {/* {
                props.route == 'Home' && Home
            }
            {
                props.route == 'Photos' && Photos
            }
            {
                props.route == 'Photos' && Movies
            } */}
        </>
    )
}
