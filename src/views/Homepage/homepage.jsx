import About from "../../components/about/about"
import Banner from "../../components/banner/banner"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import MyServices from "../../components/my-services/myservices"
import Portfolio from "../../components/portfolio/portfolio"
import Skills from "../../components/skills/skills"

function HomePage () {
    return (
        <>
            <Header/>
            <Banner/>
            <About/>
            <MyServices/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </>
    )
}

export default HomePage