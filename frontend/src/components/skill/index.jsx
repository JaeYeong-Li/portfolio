/* eslint-disable array-callback-return */
import './index.scss';

const myData = {
    'language': [{key:'JS', state:'red'}, {key:'C/C++', state:'red'}, {key:'TS', state:'blue'}, {key:'JAVA(Android)', state:'blue'}],
    'frontend': [{key:'React', state:'red'}, {key:'Webpack', state:'red'}, {key:'SCSS/Styled-component', state:'red'}],
    'backend': [{key:'Node.js', state:'red'}, {key:'mySQL', state:'blue'}, {key:'Sequelize', state:'blue'}],
    'cooperation': [{key:'Git', state:'black'}, {key:'Figma', state:'black'}]
};

const Skill = () => {
    return (
        <div className="skill">
            <div className="skillButton">
                <button className="black">●</button>
                <button className="blue">●</button>
                <button className="red">●</button>
            </div>
            <div className="mySkills">
                <div className="mySkill">
                    <p>language</p>
                    {myData.language.map((e,i)=><p key={e.key} className={e.state}>{e.key}</p>)}
                </div>
                <div className="mySkill">
                    <p>frontend</p>
                    {myData.frontend.map((e,i)=><p key={e.key} className={e.state}>{e.key}</p>)}
                </div>
                <div className="mySkill">
                    <p>backend</p>
                    {myData.backend.map((e,i)=><p key={e.key} className={e.state}>{e.key}</p>)}
                </div>
                <div className="mySkill">
                    <p>cooperation</p>
                    {myData.cooperation.map((e,i)=><p key={e.key} className={e.state}>{e.key}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Skill;