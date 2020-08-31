import Link from 'next/link'

const Jumbotron = () =>
    <div className="jumbotron jumbotron-fluid bg-dark mb-0" alt="Photo by Benjamin Child on Unsplash - https://unsplash.com/photos/GWe0dlVD9e0">
        <div className="container text-white">
            <h1 className="display-2 text-white d-none d-lg-block">
                Elevate your work style
            </h1>
            <h1 className="display-4 text-white text-center d-lg-none">
                Elevate your work style
            </h1>
            <p className="lead text-center">
                Transform the way you work, meet clients and collaborate with an inspiring and unique office experience.
            </p>
            <hr className="my-4" />
            <Link href="/locations">
                <a className="btn btn-primary btn-lg" role="button">Explore our locations</a>                
            </Link>
        </div>
    </div>;

export default Jumbotron