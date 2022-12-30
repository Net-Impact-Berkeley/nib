import CallToAction from '../components/callToAction';
import './faq.scss'

const FAQ = () => {
    document.title = 'NIB | FAQ';
    return (
        <section className="faqPage">
            <section className="questions container">
            <h2> Questions </h2>
            <h4 className="wip">NOTE: This is still a work in progress!</h4>
            <h4>What is consulting?</h4>
            <p>To NIB, consulting is the opportunity to work with professional clients around the world on problems we 
            mutually find meaningful. We work with a range of social-oriented companies, from small nonprofits to larger corporations, on 
            semester-long projects.</p>
            <h4>What differentiates NIB from other consulting clubs on campus?</h4>
            <p>In the end, everything comes down to finding the right community for you. But aside from our tight-knit community, 
            here are some other differentiators that our members found useful as well:</p>
            <ul>
                <li>Experience: We are one of the oldest clubs on campus, with 11 years of experience and 150+ clients under our belt.</li>
                <li>Global network: We are one of hundreds of Net Impact chapters across the globe.</li>
            </ul>
            <h4>How does NIB train its members?</h4>
            <p>In your first semester, you go through a series of trainings on different skills that will be useful for you in
            your consulting endeavors and beyond. This includes research, decking, data analysis, design & prototyping, and pitching.
            We also have several mentorship programs running within NIB where older members take the initiative to mentor
            younger members for a variety of topics.</p>
            <h4>What are the info sessions?</h4>
            <p>The info sessions are a great chance for you to get to know NIB better, learn about the application process, 
            and meet current NIB members. We have 3 info sessions:</p>
            <ul>
                <li>Infosession #1: You'll have the opportunity to learn more about our upcoming projects, socials, trainings and external events 
                and to connect with all of our members. We will break out into breakout rooms to get to know you better!</li>
                <li>Case workshop: Come learn about Net Impact's interview process and how to crush a case interview. 
                You'll have the chance to work in small groups to solve a real world case and learn how to 
                approach and solve case interview questions.</li>
                <li>Infosession #2: Info Session #2 is the same as Info Session #1 and will take place from 8-9pm. 
                Feel free to take this opportunity to continue to meet more members of our organization, ask questions, and 
                learn about what NIB can offer you. From 9-10pm we host a case workshop to help walk you through the 
                case portion of our interview and what to expect from the overall interview process. This includes best 
                practices, a sample case, and time to ask questions.</li>
            </ul>
            <h4>Does NIB take all majors?</h4>
            <p>Yes! We welcome all majors. Consulting is often looped into business, but a wide range of skills, interests, and experiences are needed to tackle 
            multidisciplinary problems.</p>
            <h4>Does NIB take all years?</h4>
            <p>Yes! We welcome all years, including single-year exchange students.</p>
            <h4>What if I’m not a business major and have never done a case interview before?</h4>
            <p>Don’t worry - most of us didn’t know about case interviews when we applied! Our
                cases DON’T test business jargon, but instead evaluate your ability to solve problems and think on your feet. Just
                think of a case interview as a question/challenge being faced by a company, where you
                work collaboratively with your interviewer and with any available information to help
                solve the given problem! Common case examples include: factors to consider when
                entering a new market, increasing profitability and sales, growing customers and market
                share, creating a new product/service etc.</p>
            <h4>What are the interviews like?</h4>
            <p>There are two rounds of interviews:</p>
            <ul>
                <li>Our first round interviews are about 30 minutes long, with 5-10 minute behavioral/fit
                    questions followed by 10-15 minutes of a short consulting style case. For the
                    behavioral/fit component, expect to get specific questions about experiences on your
                    resume. The case itself will be relatively short and straightforward with qualitative
                    components as well as a quantitative/math question, but no market sizing.</li>
                <li>Our second round interviews are around an hour long, consisting of a 25-30 minute
                    case interview followed by 20-25 minute behavioral interview. The case will consist of
                    multiple parts to test different aspects of your qualitative and quantitative
                    problem-solving ability. Second round cases may include basic market sizing, pulling
                    insights from charts, calculations and quantitative/math questions, risks and next steps.
                    The behavioral component for the second round will focus on how you connect with our
                    values and community, and will also be your chance to ask us questions about NIB.</li>
            </ul>
            <h4>How can I succeed in Net Impact’s interview process?</h4>
            <p>Here are some tips to help you stand out in our interview process:</p>
            <ul>
                <li>Be <strong>structured</strong>. Take a second to pause, organize your ideas and thoughts, and explain them clearly.</li>
                <li><strong>Contextualize</strong> your answers to the key question/objective. In other words,
                DON’T memorize and reproduce standard frameworks (e.g. 4Ps, 3Cs); instead,
                really think about the question at hand and give specific answers and examples.</li>
                <li>Take <strong>clear notes</strong>. Circle, box or highlight important information, especially the
                key objectives and any numbers.</li>
                <li>Be <strong>comfortable with numbers</strong>. You don’t have to be a mathematical genius,
                you just need to be able to perform some simple arithmetic and show that you
                can think logically about how different quantities or units might be related. Don’t
                rush, take your time, and the calculations will be easy!</li>
                <li><strong>Communicate clearly.</strong> Whether you’re reading through a chart or working
                through a calculation, walk the interviewer through your thoughts as you go and
                make the case a conversation with the interviewer. If you get stuck, don’t panic;
                take some time to gather your thoughts, ask the interviewer for help on specific
                areas where you’re struggling, and do your best to give a reasonable answer.</li>
                <li>Be <strong>enthusiastic</strong>! Seriously – your interview doesn’t have to be perfect, and don’t
                worry about small mistakes. Try to have some fun thinking about the problem in
                front of you and it’ll show.</li>
            </ul>
            </section>
            <section>
            
            </section>
            <CallToAction />
        </section>
    );
}

export default FAQ;
