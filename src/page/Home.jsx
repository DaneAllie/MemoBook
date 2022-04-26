import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />

				<div className='container'>
					<div className='about'>
						<h2>About Me</h2>

						<p>
							I am an IT graduate majoring in Software Development. I am a creative thinker and enjoy problem solving to produce the best quality of work possible. During my years at Varsity
							College and as a Self-Defence Instructor in Krav Maga, I have learned to be a team player and had experience in leadership roles in order to lead/work in team efficiently and
							productively.{" "}
						</p>

						<p>
							After completing my course, I have been equipped with versatile skills and knowledge to take steps into an environment of Programme and Solution Development where my main
							work-related skills are Database Design and Development, Programming, Project Management, Systems Analysis, and Web Development. Interesting fact about life, my family embarked
							on an overland Journey through 5 continents and 72 Countries lasting 3years, during this time I was home-schooled by my parents from 2007 to Mid-2010.
						</p>
						<p>
							This experience gave me a wealth of information regarding different cultures, religions and life views. I am now currently studying at NMU completing my 4th year in software
							development, as of next year I will be fully available for market however I am still interested in working part time or possibly full time.
						</p>
					</div>
					<br></br>
					<div className='main-area'>
						<h2 classNameName='Heading'>Work Experience</h2>
						<ol classNameName='OrderedList'>
							<li>
								<b>Intern Software Developer</b>
								<br></br>
								DSK Technologies · Contract<br></br>
								Feb 2022 - Present · Current<br></br>
								East London, Eastern Cape, South Africa
								<p>
									<i>Responsibilities:</i>
								</p>
								Using various technologies such as React and Docker coupled with HTML, CSS and JavaScript, to develop projects using the tools learned through scenario-based learning.
								<br></br>
								<br></br>
							</li>
							<li>
								<b>Krav Maga Instructor</b>
								<br></br>
								KMG Global · Part-Time<br></br>
								Jan 2020 - Current · 2 yrs<br></br>
								Port Elizabeth, Eastern Cape, South Africa
								<p>
									<i>Responsibilities:</i>
								</p>
								Taught both core principles and fighting techniques to students of all levels while maintaining energy and enthusiasm in fast-paced environment.<br></br>
								Participated in team-building activities to enhance working relationships and helped students meet course goals by establishing clear objectives for lessons.<br></br>
								Observed students to assess abilities, interests and learning objectives for personalized lesson planning and evaluated student performance to determine promotion in rank.
								<br></br> <br></br>
							</li>

							<li>
								<b>Data Capturer</b>
								<br></br>
								DR GM ALLIE Surgery · Part-time<br></br>
								Mar 2019 - Aug 2019 · 6 mos<br></br>
								Port Elizabeth, Eastern Cape, South Africa<br></br>
								<p>
									<i>Responsibilities:</i>
								</p>
								Entered client information into databases quickly and with minimal errors. - Managed documents by organizing forms, making photocopies, filing records, preparing
								correspondence and creating reports. - Kept optimal quality levels to prevent critical errors and support team performance targets.
							</li>
							<br></br>

							<li>
								<b>Waiter</b>
								<br></br>
								The Plantation · Part-time<br></br>
								Apr 2018 - Sep 2018 · 6 mos<br></br>
								Port Elizabeth, Eastern Cape, South Africa<br></br>
								<p>
									<i>Responsibilities:</i>
								</p>
								Kept server areas clean and stocked to increase efficiency while working tables. Maintained customer satisfaction with timely table check-ins to assess food and beverage
								needs. Maintained customer satisfaction by clarifying questions about orders and specialty items.
								<br></br>
							</li>
						</ol>

						<h2 className='Heading'>Education</h2>
						<ol className='OrderedList'>
							<li>
								<b>Advanced NDip: Information Technology, Software Development (NQF Level 7)</b>
								<br></br>
								Duration: 2021 - 2022 <br></br>
								Grade: 72<br></br>
								Activities and societies: Krav Maga Instructor<br></br>
								Achievements: 3 Distinctions Final Year<br></br> <br></br>
							</li>

							<li>
								<b>NDip: Information Technology, Software Development(NQF Level 6) </b>
								<br></br>
								Duration: 2018 - 2020<br></br>
								Grade: 74<br></br>
								Activities and societies: Krav Maga Practitioner<br></br>
								Achievements: 8 Distinctions.
							</li>
							<br></br>
							<li>
								<b>Matric Certificate Bachelors Pass - 2017</b>
							</li>
							<li>
								<b>Krav Maga Intructor - Rank G1</b>
							</li>
						</ol>
						<div className='info-box hidesmall'>
							<strong>Resize page for me to dissapear</strong>
							<p>
								An example of Responsive web design pratices, where there is content made available if the page is a certain size and when resized smaller, the content is then hidden from
								the user as its not important enough due to the limited space avaliable so more important information can be displayed.
							</p>
						</div>
						<br></br>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
