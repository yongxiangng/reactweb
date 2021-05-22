const projects = require("../database/projects.json")

export default function Project(props) {

    function toID(name) {
        return name.toLowerCase().replace(/\s/g, '-')
    }

    const {match} = props;
    const id = match.params.id;
    let project = undefined;

    for (let i = 0; i < projects.length; i++) {
        if (toID(projects[i].title) === id) {
            project = projects[i];
            break;
        }
    }

    return (
        <div>
            {project.title}
        </div>
    );
}
