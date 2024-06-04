import React from "react";
import ImageFrame from "../ImageFrame/ImageFrame";
import './Skills.css';
import icons from "../ImageFrame/icons";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

export default function Skills() {
    return (
        <>
        <h1>My Skills</h1>
        <p>I understand the importance of having the rights skills is just as important, if not more, than having the education that says you are professionally prepared to complete a project.</p>
        <p>Here are my top skills:</p>
        <h2>Soft Skills</h2>
        <div className="frame-section">
            {icons.map(item => <ImageFrame
                key={item.id}
                skill={item.skillIcon}
                skillName={item.skillName}
            />)}
        </div>
        <h3>Creativity</h3>
        <p>At my most recent role, I was given the opportunity to provide my input and ideas and to my benefit, my supervisors regularly had positive feedback about them. So much so, that on a few occasions my ideas turned into full scale projects and processes.</p>
        <ReadMoreButton/>
        <p>For example, the company was looking for new way to track student progress. The company had created new goals. The goals were printed on Posterboards for everyone to see, but they didn't really have a way to track if students were meeting them over a long period of time. I suggested to make a diploma-like poster that students were able to paste Achievement gold/silvers badge stickers on for achieving the goals for each month. It was a way for students and parents to track achievement and it was a way to get them excited for performing their best in order to be awarded the gold badge sticker.</p>
        <p>I really appreciated that the leadership appreciated my idea, and that gave me confidence to start sharing my ideas on a regular basis and it eventually got to the point that leadership was asking for my ideas about what to do.</p>
        <h3>Adaptability/Flexibility</h3>
        <p>Every place I have ever been, I have been more successful than not. A major part of that is that I adapt to new situations with a positive approach and I accept new situations as new challenges that will help me grow professionally. Whenever I am put in a new, uncomfortable situation I get excited because I have the possibility of adding a new skill that I didn't have before.</p>
        <p>Along the same lines, I know that things don't always go according to plan and I recognize that adjustments need to be made as well as updated timelines. I believe it is this skill that my supervisors, both current and previous, would agree that it is one of my strongest than help me standout from colleagues.</p>
        <h3>Communicatation</h3>
        <p>My ability to communicate with other professionally and personally has helped me create meaningful relationship in all aspects of my life. I enjoy getting to know people and asking questions that hlep me understand more about them. This allows me to be able to converse with people from all walks of life and be able to find some commonalities in our lifes that can make for a meaninful connection.</p>
        <ReadMoreButton/>
        <p>More professionally, I know being clear and respectful is always the approach that should be taken to have the most efficient and effective conversations. </p>
        <h3>Attentiveness</h3>
        <ReadMoreButton/>
        <p>My experiences as a content developer has made me dedicated to putting the highest attention to detail. I take pride in the work I created and participate in and therefore, I make it my mission to come up with results that are perfect or as close to perfect as possible. In other words, I approach my work as if I am the owner of company. It is this mindset that allows me to produce high quality work.</p>
        <h2>Hard Skills</h2>
        <div className="frame-section">
            {icons.map(item => <ImageFrame
                skill={item.skillIcon}
                skillName={item.skillName}
            />)}
        </div>
        <h3>Coding</h3>
        <p>Coding is a skill that I never expected to learn only a few years ago. I always assumed that coding and programming were for people that were computer science experts. However, after doing some simple research online, I realized that all it took was dedication and consistency. Therefore over the span of 18 months, I dropped any other hobbies, that includes exersciing, video games, and movies and I dedicated 100 percent of my free time to learning to code.</p>
        <ReadMoreButton/>
        <p>Over that I time I acquired my Front-End Engineer Career Path from CodeCademy and I learned:</p>
        <ul>
            <li>Web Development fundamentals (HTML, CSS, JavaScript)</li>
            <li>Front-End Frameworks (React, Vue)</li>
            <li>CSS Frameworks (BootStrap, Tailwind, Emotion)</li>
            <li>TypeScript (Completed a TypeScript)</li>
        </ul>
        <h3>Content Development</h3>
        <p>For the last 4 years, one of my main duties has been a digital content creator for English education for young learners in Korea and abroad. The company has focused on digitizing their physical books into online materials and also creating brand new resources for teachers and students.</p>
        <ReadMoreButton/>
        <p>Specifically, I have a high level of expertise in:</p>
        <ul>
            <li>Project planning for creating and launching new product</li>
            <li>Leading the redevelopment of legacy content</li>
            <li>Utilizing programs such as: Google Workshop Programs, Adobe programs, Canva, Microsoft Suite, Slack, AI generating programs</li>
            <li>Leading and mentoring younger colleagues</li>
        </ul>
        <h3>Training</h3>
        <p>One of my passions is helping other people grow and navigate through the mess that can be our career paths and development. I truly find enjoyment in listening to others about their goals and being able to provide my knowledge from my own experiences.</p>
        <p>My Masters degree in Workforce Education has helped me further deep dive into the world of career development by helping me understand what it takes to be sucessful in the workplace, with a specific focus on 21st century skills.</p>
        <ReadMoreButton/>
        <p>Specifically, as a Trainer I have:</p>
        <ul>
            <li>Planned, Created, and Led Teacher Trainings</li>
            <li>Led Teacher Trainings from 3 teachers to 50 teachers</li>
            <li>Led more than 10 in-person trainings</li>
            <li>Led more than 5 online trainings</li>
            <li>Introduce Products and company strategies to potential partners</li>
        </ul>
        <h3>Teaching</h3>
        <p>After receiving my bachleors in Education, I spent 8 years teaching abroad. I can honestly say that I was constantly developing and adopting my teaching style for span of those 8 years, mostly because I kept finding new useful resources and I found that changes made for a more enjoyable working experience.</p>
        <ReadMoreButton/>
        <p>As a teacher, I was:</p>
        <ul>
            <li>Certified teacher of History in Georgia</li>
            <li>was a Senior/Mentor teacher of my department</li>
            <li>taught students English from 5-18 years old in Korea</li>
            <li>Tutored students on a 1 on 1 level</li>

        </ul>

        </>
    )
}