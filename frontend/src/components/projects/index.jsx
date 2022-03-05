/* eslint-disable jsx-a11y/alt-text */
import './index.scss';
import {useSelector} from 'react-redux';

const Projects = ()=> {
    const myProjects = useSelector((state)=>state.projects.project);
    let idx1=0, idx2=1;
    const createCard = (idx)=> {
        return (
            <div className="project">
                <div className="name">{myProjects[idx].name}</div>
                <div className="img"><img src={process.env.PUBLIC_URL+'/img/'+myProjects[idx].img}/></div>
                <div className="subMenu">
                    <div className="duration">{myProjects[idx].duration}</div>
                    <div className="icons">
                        <div className="git"><a href={myProjects[idx].git} target="_blank" rel="noopner noreferrer"><img src={process.env.PUBLIC_URL+'/icon/github.png'}/></a></div>
                        {myProjects[idx].demo!=='' ? <div className="demo"><a href={myProjects[idx].demo} target="_blank" rel="noopner noreferrer"><img src={process.env.PUBLIC_URL+'/icon/demo.png'}/></a></div>:null}
                    </div>
                </div>
                <div className="env">{myProjects[idx].env.split(", ").map((e)=>{return <span className="env-item" key={e}>{e}</span>})}</div>
                <div className="explanation">{myProjects[idx].explanation}</div>
            </div>
        )
    }
    return (
        <div className="projects">
            <div className="moveButton left"><img src={process.env.PUBLIC_URL+'/icon/left.png'}/></div>
            {createCard(idx1)}
            {createCard(idx2)}
            <div className="moveButton right"><img src={process.env.PUBLIC_URL+'/icon/right.png'}/></div>
        </div>
    )
}

export default Projects;