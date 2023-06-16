import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css';
const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const Movie = async() => {

  await delay(2000);
    const url = process.env.RAPID_URL;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc6be911f1msh21748cd65485799p19a6c5jsn968c3c54d986',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	const result = await response.json();
    const main_data=result.titles;

	// console.log(result.titles.jawSummary);



  return (
    <>
    <section className={styles.movieSection}>
    <div className={styles.container}>
    <h1>Series & Movie</h1>
    <div className={styles.card_section}>
         
    
   {
    main_data.map((Item)=>{
        return <MovieCard key={Item.id} {...Item}/>
   })
   }
   </div>
   </div>
   </section>
    </>
  )
}

export default Movie