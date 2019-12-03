import Link from 'next/link';
const marginRight = {
    marginRight:'25px'
}
const Nav  = () => {
    return (
        <div>
            <Link href="/">
                <a  style={marginRight}> home</a>
            </Link>
            <Link href="/about">
                <a  style={marginRight}> about</a>
            </Link>
        </div>
    )
}

export default Nav