import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Layout = (props) =>
    <main>
        <Header />
        <Navigation />
        {props.children}
        <Footer />
    </main>;
  
export default Layout