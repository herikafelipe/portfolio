import Header from "../../components/header/header"
import Banner from "../../components/banner/banner"
import About from "../../components/about/about"
import Skills from "../../components/skills/skills"
import Portfolio from "../../components/portfolio/portfolio"
import Contact from "../../components/contact/contact"

function HomePage () {
    return (
        <>
            <Header/>
            <Banner/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </>
    )
}

export default HomePage