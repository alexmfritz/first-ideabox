import React from 'react';
import './IdeaCard.scss';

export default function IdeaCard({title, description, id, deleteIdea}) {
  return (
    <section className="idea-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </section>
  )
}