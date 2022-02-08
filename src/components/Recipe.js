import React from 'react';
import Card from '../ui/Card';
import styles from './Recipe.module.css'

const Recipe = (props) => {
  const { title, image, description } = props;
  return (
    <Card className={styles.card}>
      <img src={image} alt={title} />
      <div>
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      <button className={styles.btn}>add to favorites</button>
    </Card>
  );
};

export default Recipe;
