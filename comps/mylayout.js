import Header from './header'

const myStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid black'

}

const Layout = (props) => {
    return (
        <div style={myStyle}>
            <Header />
            {props.children}
        </div>
    )
}


export default Layout