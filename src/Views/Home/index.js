import './index.css'
export const Home=()=> {
    return (  
        <div className="about">
            <div className="content">
                <div className="resume">
                <h1>HEMANG</h1>
                <p><b>Mobile: </b>+91-9729955758</p>
                <div className="contact">
                <b>Email:</b> <a href="mailto:hemang.popli7@gmail.com">hemang.popli7@gmail.com</a>
                <br />
                <b>Github:</b><a href="https://github.com/hemang1717" >github.com/hemang1717</a>
                </div>
                {/* <hr /> */}
                <section className='sections'>
                    <h2>Education</h2>
                    <hr className='hr'/>
                    <ul>
                        <div className="education">
                        <li><b>Thapar Institute of Engineering and Technology</b></li>
                        <p className='location'>Patiala, India</p>
                        </div>
                        <div className="degree">
                        <p><i>Bachelor of Engineering and Technology - Computer Science ; CGPA:8.30</i></p>
                        <p><i>July 2019-Present</i></p>
                        </div>
                        
                        <div className="education">
                        <li><b>Mata Rukmani Rai Arya Senior Secondary School</b></li>
                        <p className='location'>Shahabad, India</p>
                        </div>
                        <div className="degree">
                        <p><i>CLASS XII CBSE ; Percentage: 92.8</i></p>
                        <p><i>2017-2018</i></p>
                        </div>

                        <div className="education">
                        <li><b>Mata Rukmani Rai Arya Senior Secondary School</b></li>
                        <p className='location'>Shahabad, India</p>
                        </div>
                        <div className="degree">
                        <p><i>CLASS X CBSE ; CGPA:10</i></p>
                        <p><i>2015-2016</i></p>
                        </div>

                    </ul>
                </section>

                <section className='sections'>
                        <h2>Profile Links</h2>
                        <hr className='hr'/>
                        <div className="profiles">
                            <ul className='profileSites'>
                                <li><b>Codechef: </b><a href="https://www.codechef.com/users/hemang_____">Link</a></li>
                                <li><b>Codeforces: </b><a href='https://codeforces.com/profile/hemang1717'>Link</a></li>
                            </ul>
                       
                            <ul className='profileSites'>
                                <li><b>Leetcode: </b><a href="https://leetcode.com/HEMANG17/">Link</a></li>
                                <li><b>HackerRank: </b><a href='https://www.hackerrank.com/hemang_popli7'>Link</a></li>
                            </ul>
                       
                            <ul className='profileSites'>
                                <li><b>Github: </b><a href="https://github.com/hemang1717?tab=repositories">Link</a></li>
                                <li ><b>LinkedIn: </b><a href='https://www.linkedin.com/in/hemang-2561241b0/'>Link</a></li>
                            </ul>
                        </div>
                </section>
                <section className='sections'>
                    <h2>Projects</h2>
                    <hr className='hr'/>
                    <div className="projectDescription">
                        <b>Travel Easy</b>
                        <a href="https://github.com/hemang1717/TravelEzz">Link</a>
                        <ul>
                            <li>A <b>SINGLE PAGE WEB APP</b> which shows the hotels,restaurants and attractions at your location.</li>
                            <li>Used <b>REACTJS</b> for coding and <b>GOOGLE MAPS API, WEATHER API</b> for displaying weather on google maps.</li>
                            <li>Used <b>TRAVELADVISOR API</b>to provide a link to the user of he wants to read mpre about a place. </li>
                        </ul>
                    </div>

                    <div className="projectDescription">
                        <b>MINGO-URL SHORTENER</b>
                        <a href="https://github.com/hemang1717/MINGO--URL_SHORTNER">Link</a>
                        <ul>
                            <li>A <b>CHROME Extension </b>which shortens the URL using <b>t.ly API</b>.</li>
                            <li>Used <b>HTML ,CSS ,JavaScript </b> for coding</li>
                            <li>Used <b>Google Chrome Storage API</b> for storing the api key fetched for URL shortening.</li>
                        </ul>
                    </div>

                    <div className="projectDescription">
                        <b>Hospital Management System</b>
                        <a href="https://github.com/hemang1717/Hospital-Management-System">Link</a>
                        <ul>
                            <li>A Hospital Management System using <b>C++ and OOPS </b>concepts which shows all the information of a hospital.</li>
                        </ul>
                    </div>
                    </section>
                <section className='sections'>
                    <h2>CourseWork</h2>
                    <hr className='hr'/>
                    <div className="coursework">
                            <ul className='profileSites'>
                                <li><b>Data Structures and Algorithms </b></li>
                                <li ><b>Operating System </b></li>
                            </ul>
                            <ul className='profileSites'>
                                <li><b>Database Management System </b></li>
                                <li ><b>Computer Networks</b></li>
                            </ul>
                            <ul className='profileSites'>
                                <li><b>Object Oriented Programming</b></li>
                                <li ><b>Discrete Mathematics</b></li>
                            </ul>
                        </div>
                </section>

                <section className='sections'>
                    <h2>Achievements</h2>
                    <hr className='hr'/>
                    <ul>
                        <li>Rank 105 in <b>CodeKaze</b> among 40000 participants organized by Coding Ninjas.</li>
                        <li>Solved 600+ Problems on <b>LEETCODE</b></li>
                        <li>Global Rank 192 in <b>April Lunchtime 2022</b> among 8000 participants oraganized by Codechef.</li>
                        <li>Glbal Rank 201 in <b>Codechef Starters 35</b>among 6000 participants organized by Codechef.</li>
                        <li>Solved 1000+ DSA questions on various programming platforms.</li>
                    </ul>
                </section>
                </div>
            </div>
        </div>
    );
}

// export const Home;