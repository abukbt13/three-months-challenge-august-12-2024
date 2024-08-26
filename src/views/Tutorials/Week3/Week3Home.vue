<script setup>

</script>

<template>
  <div class="lesson border ">

    <router-link class="link active" style="text-decoration: none;" to="/portfolio">
       Portfolio
     </router-link>
    <router-link class="link" style="text-decoration: none;" to="/portfolio">
       Portfolio
     </router-link>
    <router-link class="link" style="text-decoration: none;" to="/portfolio">
       Portfolio
     </router-link>

  </div>
<!--portfolio starts here-->
  <div class="container">
    <nav id="header">
        <div class="nav-logo">
          <p class="nav-name">Logo</p>
        </div>
        <div class="nav-menu" id="myNavMenu">
          <ul class="nav-menu_list">
            <li class="nav_list">
              <a href="#home" class="nav-link active-link">Home</a>
              <div class="cirle"></div>
            </li>
            <li class="nav_list">
              <a href="#about" class="nav-link ">About</a>
              <div class="cirle"></div>
            </li>
            <li class="nav_list">
              <a href="#projects" class="nav-link ">Projects</a>
              <div class="cirle"></div>
            </li>
            <li class="nav_list">
              <a href="#contact" class="nav-link ">Contact</a>
              <div class="cirle"></div>
            </li>
          </ul>
        </div>

        <div class="mode">
          <div class="moon-sun" id="toggle-switch">
              <i class="bi bi-sun"></i>
              <i class="bi bi-moon"></i>
          </div>
        </div>

        <div class="nav-menu-button">
          <i class="bi bi-list" @click="myMenuFunction"></i>
        </div>
    </nav>

<!--    main-->
    <main class="wrapper">
      <section class="featured-box" id="home">
          <div class="featured-text">
              <div class="hello">
                <p>Hello I,m</p>
              </div>
            <div class="featured-name">
              <span class="typedText"></span>
            </div>
            <div class="text-info">
              <p>
                My Name Abraham! I am a web developer with 5 years of experience
              </p>
            </div>
            <div class="text-btn">
              <button class="btn hire-btn">Hire Me</button>
              <button class="btn">Download Cv <i class="bi bi-file"></i></button>
            </div>
            <div class="social-icons">
              <div class="icon_circle"></div>
              <div class="icon"><i class="bi bi-facebook"></i></div>
              <div class="icon"><i class="bi bi-twitter"></i></div>
              <div class="icon"><i class="bi bi-instagram"></i></div>
              <div class="icon"><i class="bi bi-linkedin"></i></div>
            </div>
          </div>

        <div class="featured-image">
            <div class="image">
              <img src="" alt="">
            </div>
        </div>
      </section>

<!--      about box    -->
      <section class="section" id="about">
        <div class="top-header">
          <h1>About me</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="about-info">
                  <figure class="about-me">
                    <figcaption>
                      <h2>Web developer</h2>
                      <p>
                        My Name Abraham! I am a web developer with 5 years of experience
                      </p>
                    </figcaption>
                  </figure>
                  <button class="about-me-btn">Hire me</button>
                </div>
            </div>

          <div class="skill">
              <div class="skill-box">
                <span class="title">HTML</span>
                <div class="skill-bar html">
                  <span class="skill-per">
                    <span class="tooltip">80%</span>
                  </span>
                </div>
              </div>


              <div class="skill-box">
                <span class="title">PHP</span>
                <div class="skill-bar php">
                  <span class="skill-per">
                    <span class="tooltip">80%</span>
                  </span>
                </div>
              </div>


              <div class="skill-box">
                <span class="title">Javascript</span>
                <div class="skill-bar javascript">
                  <span class="skill-per">
                    <span class="tooltip">60%</span>
                  </span>
                </div>
              </div>


              <div class="skill-box">
                <span class="title">Python</span>
                <div class="skill-bar python">
                  <span class="skill-per">
                    <span class="tooltip">40%</span>
                  </span>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section class="section" id="projects">
          <div class="top-header">
              <h1>Projects</h1>
          </div>
          <div class="project-container">
              <div class="project-box">
                <i class="bi bi-briefcase"></i>
                <h3>Completed</h3>
                <label>20 + finished projects</label>
              </div>
              <div class="project-box">
                <i class="bi bi-briefcase"></i>
                <h3>Clients</h3>
                <label> 5+ Happy clients</label>
              </div>
              <div class="project-box">
                <i class="bi bi-briefcase"></i>
                <h3>Experience</h3>
                <label> 3+ years in Web development</label>
              </div>
          </div>
      </section>

<!--      contact box -->
      <section class="section">
        <div class="top-header">
          <h1>Lets work Together</h1>
          <span>Do you have a project in your mind contact me here</span>
        </div>
        <div class="row">
          <div class="col">
            <div class="contact-info">
              <h2>Find me <i class="bi bi-corner-right-down"></i></h2>
              <p><i class="bi bi-dmail">abukbt13@gmail.com</i></p>
              <p><i class="bi bi-telephone">0728548760</i></p>
            </div>
            <div class="col">
              <div class="form-control">
                  <div class="form-inputs">
                    <input type="text" class="input-field" placeholder="Your name">
                    <input type="text" class="input-field" placeholder="Your email">
                  </div>
                <div class="text-area">
                  <input type="text" class="input-field" placeholder="subject">
                  <textarea placeholder="message"></textarea>
                </div>
                 <div class="form-button">
                     <button class="btn">Send <i class="bi bi-send"> </i></button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="middle-footer">
        <ul class="footer-menu">
          <li class="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li class="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li class="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li class="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="footer-social-icons">
        <div class="icon"><i class="bi bi-facebook"></i></div>
        <div class="icon"><i class="bi bi-twitter"></i></div>
        <div class="icon"><i class="bi bi-instagram"></i></div>
        <div class="icon"><i class="bi bi-linkedin"></i></div>
      </div>
      <div class="botton-footer">
        <p>copyrights &copy; <a href="">Freemano</a>-All rights reserved 2023</p>
      </div>
    </footer>
  </div>
</template>

<style>
.lesson{
  display: flex;
  justify-content: space-evenly;
}
.link{
  font-size: 23px;
  width: 100%;
  padding: 4px;
  border: 1px solid #ddd;
}
.active{
  background-color: blue;
  color: white;
}
</style>