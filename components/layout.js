import Header from "../components/header";
import Navigation from "../components/navigation";

const Layout = (props) =>
    <main>
        <Header />
        <Navigation />
        <article className="container py-2">
           {props.children}
        </article>
    </main>;
  
export default Layout