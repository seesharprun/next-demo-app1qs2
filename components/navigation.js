import Link from 'next/link'

const Navigation = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link href="/">
            <a className="navbar-brand">
                <i className="fa-stack">
                    <i className="fa fa-circle-o-notch fa-stack-2x"></i>
                    <i className="fa fa-building-o fa-stack-1x"></i>
                </i>
                <span class="ml-2">
                    Contoso Spaces
                </span>
            </a>
        </Link>
    </nav>;

export default Navigation