import { useRef, useEffect } from 'react';
import profile from "../../../assets/profile.svg";
import stars from "../../../assets/stars.svg";
import chevron from "../../../assets/chevron.svg";
import styles from './Recommendations.module.scss';

const Recommendations = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const recommendations = [
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
        {
            name: "Jeniffer John",
            image: profile,
            role: 'Trader',
            comment: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima laudantium!
             Impedit minima asperiores temporibus aspernatur quasi, modi ducimus velit iure delectus aperiam quos neque, veritatis quod, tenetur officiis ex!
             `
        },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            const newPosition = scrollLeft + scrollAmount;

            if (newPosition >= scrollWidth - clientWidth) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (newPosition < 0) {
                scrollContainerRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
            } else {
                scrollContainerRef.current.scrollTo({
                    left: newPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            scroll('right');
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>WHAT OUR CLIENTS ARE SAYING</h3>

            <div className="w-full overflow-hidden relative">
                <div
                    className={styles.scrollContainer}
                    ref={scrollContainerRef}
                >
                    {recommendations.map((recommendation: any, index: number) => (
                        <div
                            className={styles.recommendationCard}
                            key={index}
                        >
                            <div className="flex justify-between items-start w-full">
                                <div className={styles.nameRoleContainer}>
                                    <img src={recommendation.image} alt="" />
                                    <span className={styles.nameRoleText}>
                                        <h3>{recommendation.name}</h3>
                                        <p className={styles.role}>{recommendation.role}</p>
                                    </span>
                                </div>
                                <img src={stars} alt="" />
                            </div>
                            <p className={styles.comment}>{recommendation.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.chevronContainer}>
                <div
                    className={styles.chevronButton}
                    onClick={() => scroll('left')}
                >
                    <img src={chevron} className="rounded-full" alt="Scroll Left" />
                </div>
                <div
                    className={`${styles.chevronButton} ${styles.rotateChevron}`}
                    onClick={() => scroll('right')}
                >
                    <img src={chevron} className="rounded-full" alt="Scroll Right" />
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
