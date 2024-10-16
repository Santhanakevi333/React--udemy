import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c7.jpeg"
import c6 from "../assets/images/c6.jpeg"
import c7 from "../assets/images/c8.jpeg"
import c8 from "../assets/images/c9.jpeg"

function Popular()
{
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">pic the best fit</p>
        <div class="popular__container">
            
            <div class="course-card">
                <img src={c1} alt="none"></img>
                <h3>2023 Python data visualization masterclass</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p> 449 <del>1999</del> </p>
            </div>

            <div class="course-card">
                <img src={c2} alt="none"></img>
                <h3>Web Development Bootcamp 2023|Advance</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐</p>
                <p> 449 <del>1999</del> </p>
            </div>

            <div class="course-card">
                <img src={c3}alt="none"></img>
                <h3>Master UI/UX Desinging with Figma</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>1999</del> </p>
            </div>

            <div class="course-card">
                <img src={c4} alt="none"></img>
                <h3>Basic to Advance Java core Training</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={c5} alt="none"></img>
                <h3>Basic to Advance Java core Training</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={c6} alt="none"></img>
                <h3>Master UI/UX Desinging with Figma</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={c7} alt="none"></img>
                <h3>Web Development Bootcamp 2023|Advance</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐</p>
                <p> 449 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={c8} alt="none"></img>
                <h3>Full Stack Web Development</h3>
                <p>Col Steel</p>
                <p>4.8⭐⭐⭐</p>
                <p> 449 <del>1999</del> </p>
            </div>

        </div>
    </div>
    )
}
export default Popular