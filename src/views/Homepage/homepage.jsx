import About from "../../components/about/about"
import Banner from "../../components/banner/banner"
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

        </>
    )
}

export default HomePage