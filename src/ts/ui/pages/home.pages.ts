import cardWithImageOptionalLinkOrButtonComponent from '../components/card/card-with-image.components';
import cardWithImageComponent from '../components/card/card-with-image.components';
import carouselComponent from '../components/carousel/carousel.components';
import buttonComponent from '../components/shared/button.components';
import titleComponent from '../components/shared/title.components';

function homePage() {
    const data = [
        {
            isActive: false,
            asset: 'products/layers-1.jpg',
            alt: 'a city of France',
            itemClassNames: 'custom-carousel__item',
            classNames: 'carousel-item__image',
            caption: false,
            title: 'Wildest Horse in Texas',
            summary: 'A city of France',
        },
        {
            isActive: false,
            asset: 'products/layers-2.jpg',
            alt: 'body to body',
            itemClassNames: 'custom-carousel__item',
            classNames: 'carousel-item__image',
            caption: false,
            title: 'Body to Body',
            summary:
                'Duis est cillum deserunt fugiat.Sunt cillum ea aliqua sit.',
        },
        {
            isActive: false,
            asset: 'products/layers-3.jpg',
            alt: 'a woman of Africa',
            itemClassNames: 'custom-carousel__item',
            classNames: 'carousel-item__image',
            caption: false,
            title: 'Africa is in us all',
            summary:
                'Duis est cillum deserunt fugiat.Sunt cillum ea aliqua sit.Laboris adipisicing sint est proident exercitation minim irure aliquip eu.',
        },
        {
            isActive: true,
            asset: 'products/layers-4.jpg',
            alt: 'an astronaut',
            itemClassNames: 'custom-carousel__item',
            classNames: 'carousel-item__image',
            caption: false,
            title: 'Astronaut of the air',
            summary:
                'Duis est cillum deserunt fugiat.Sunt cillum ea aliqua sit.Laboris adipisicing sint est proident exercitation minim irure aliquip eu.',
        },
    ];

    return `
            <main class="app__main home__main">
                <section class="home__hero-section">
                <section class="home__last-updates-section">
                ${cardWithImageOptionalLinkOrButtonComponent({
                    asset: 'products/girl.jpg',
                    title: 'Von Rostorv defines a new candid',
                    buttonId: 'last-updates-button-id',
                    buttonClassNames: 'btn-secondary',
                    socialProof: [
                        {
                            iconName: 'filled-heart',
                            count: 200,
                            ariaLabel:
                                'number of people who have loved it so far',
                        },
                        {
                            iconName: 'eye-open',
                            count: 300,
                            ariaLabel:
                                'number of people who have seen it so far',
                        },
                    ],
                    content: 'Discover',
                    ariaLabel: 'last updates',
                    classNames: 'home__last-news-card',
                    text: 'Aliqua tempor Lorem incididunt dolore sunt sunt dolore laboris sunt deserunt ut ...',
                })}
                </section>
                <section class="home__carousel-section">
                    ${titleComponent({
                        hType: 'h2',
                        content: 'Layers in the limelight',
                        classNames: 'text-center',
                    })}
                    ${carouselComponent({ id: 'hero-carousel-id', classNames: 'custom-carousel', data: data })}
                    <section class="home__cta-section">
                        ${buttonComponent({
                            content: 'Explore her galery',
                            classNames: 'btn-warning btn-lg',
                        })}
                    </section>
                </section>
                <section class="home__authors-section">

                    ${cardWithImageOptionalLinkOrButtonComponent({
                        asset: 'artists/layers.jpg',
                        title: 'Layers teaches us how to draw',
                        buttonId: 'last-updates-button-id',
                        buttonClassNames: 'btn-secondary',
                        socialProof: [
                            {
                                iconName: 'filled-heart',
                                count: 100,
                                ariaLabel:
                                    'number of people who have loved it so far',
                            },
                            {
                                iconName: 'eye-open',
                                count: 500,
                                ariaLabel:
                                    'number of people who have seen it so far',
                            },
                        ],
                        content: 'Read',
                        ariaLabel: 'author interview',
                        classNames: 'home__author-card',
                        text: 'Aliqua tempor Lorem incididunt dolore sunt sunt dolore laboris sunt deserunt ut ...',
                    })}
                </section>
                
                
                </section>
            </main>
        
        
        `;
}

export default homePage;
