import React from 'react';
import IdeaCard from '../Card/IdeaCard';
import './Ideas.scss';

export default function Ideas({ideas, deleteIdea}) {
  const ideaCards = ideas.map(idea =>
    <IdeaCard 
      title={idea.title}
      description={idea.description}
      key={idea.id}
      id={idea.id}
      deleteIdea={deleteIdea}
    />
  )
  return (
    <section className="ideas-wrapper">
      {ideaCards}
    </section>
  )
}