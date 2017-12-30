import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <ul className="Projects">
        <strong>{this.props.project.title}</strong> {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </ul>
    );
  }
}

export default ProjectItem;
