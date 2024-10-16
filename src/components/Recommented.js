import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
function Recommented ()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended For you</h1>
        <p>Pick the best fit</p>

        <div class="recommended__container">
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
                <img src={c3} alt="none"></img>
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
        </div>
    </div>


    )
}
export default Recommented