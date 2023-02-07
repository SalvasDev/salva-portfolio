import React from 'react'
import { dbProjects } from '../utilities/dbProjects';

import Thumbnail from './thumbnail'

export default function Gallery({ typeGallery }) {

  const foundGallery = dbProjects.filter(projects => projects.area == typeGallery);
  
  return (
    <div className="gallery">
      { console.log(foundGallery)}
      { 
        foundGallery.map(project => (
          <Thumbnail 
            key={project.id}
            img= {project.thumbnail}
            area= {project.area}
            name = {project.name}
          />
        ))            
      }
    </div>
  )
}
