import heroStyles from "../styles/herosection.module.css";
import styles from "../styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const HeroSection = ({title, content, Imgurl}) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
          <h1>{title}</h1> 
         
            <p>
             {content}
            </p>
            <Link href={"/movie"}>
            <button>
                Explore Movies
            </button>
            </Link>
          </div>

          <div className={heroStyles.hero_image}>
            <Image src={Imgurl} alt="hero image" width={500} height={500}
            />
          </div>
        </div>
      </div>
    
   
    </main>
  );
};

export default HeroSection;
