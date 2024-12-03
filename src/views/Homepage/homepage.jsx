import About from "../../components/about/about"
import Banner from "../../components/banner/banner"
import Contact from "../../components/contact/contact"
import Header from "../../components/header/header"
import Portfolio from "../../components/portfolio/portfolio"
import Skills from "../../components/skills/skills"

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