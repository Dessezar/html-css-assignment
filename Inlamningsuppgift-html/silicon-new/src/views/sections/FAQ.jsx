import React from 'react'

const FAQ = () => {

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    



  return (
<main>
    <div className="container">

        <div className="card">
            <div className="card-title">
                <h6>Is any of my personal information stored in the App?</h6>
                <button id='accordion-button' className='fa-regular fa-chevron-down'></button>
            </div>
            <div className="card-body">
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
            </div>
        </div>



        <div className="panel">
        <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
        <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
        <p>Lorem ipsum...</p>
        </div>
    </div>
</main> 
)
}

export default FAQ